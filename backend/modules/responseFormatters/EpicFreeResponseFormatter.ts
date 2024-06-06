import { AxiosResponse } from "axios";
import { ResponseFormatter } from "./ResponseFormatter";
import { GameResponse } from "../../utils/types";
import { getEpicGenresAndPlatforms } from "../../utils/helpers";

export class EpicFreeResponseFormatter implements ResponseFormatter {
  format = async (response: AxiosResponse | AxiosResponse[]) => {
    let games: GameResponse[] = [];
    if (!Array.isArray(response)) {
      const { elements } = response.data.data.Catalog.searchStore;
      games = elements
        .filter((game: any) => game.price.totalPrice.discountPrice === 0);

      const extraInfo = await Promise.all(
        games.map((game: any) => getEpicGenresAndPlatforms(game.id, game.namespace))
      );

      games = games.map((game: any, idx: number) => ({
        title: game.title,
        description: game.description,
        developers: [game.developerDisplayName],
        publishers: [game.publisherDisplayName],
        originalPrice: game.price.totalPrice.fmtPrice.originalPrice,
        discountedPrice: game.price.totalPrice.fmtPrice.discountPrice,
        discountPercent: "100",
        link: `https://store.epicgames.com/pt-BR/${game.productSlug}`,
        thumbnail: game.keyImages.find(
          (img: any) => img.type === "Thumbnail" ||
            img.type === "OfferImageWide" ||
            img.type === "OfferImageTall").url,
        genres: extraInfo[idx].genres,
        platforms: {
          windows: extraInfo[idx].platforms.includes("Windows"),
          linux: extraInfo[idx].platforms.includes("Linux"),
          macOs: extraInfo[idx].platforms.includes("Mac OS"),
        },
        releaseDate: game.releaseDate,
        screenshots: game.keyImages
          .filter((img: any) => img.type === "featuredMedia")
          .map((img: any) => img.url),
      }));
    }
    return games;
  }
}
