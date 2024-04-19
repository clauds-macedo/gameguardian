import { AxiosResponse } from "axios";
import { GameResponse } from "../../utils/types";
import { ResponseFormatter } from "./ResponseFormatter";
import { getEpicGenresAndPlatforms } from "../../utils/helpers";

export class EpicDiscountResponseFormatter implements ResponseFormatter {
  format = async (response: AxiosResponse | AxiosResponse[]) => {
    let games: GameResponse[] = [];

    if (!Array.isArray(response)) {
      const { elements } = response.data.data.Catalog.searchStore;

      const extraInfo = await Promise.all(
        elements.map((game: any) => getEpicGenresAndPlatforms(game.id, game.namespace))
      );

      games = elements.map((game: any, idx: number): GameResponse => {
        return {
          title: game.title,
          description: game.description,
          developers: [game.developerDisplayName],
          publishers: [game.publisherDisplayName],
          originalPrice: game.price.totalPrice.fmtPrice.originalPrice,
          discountedPrice: game.price.totalPrice.fmtPrice.discountPrice,
          discountPercent: String(this.getDiscountPercentage(game.price.totalPrice)),
          link: `https://store.epicgames.com/pt-BR/browse?q=${game.title}&sortBy=relevancy&sortDir=DESC&count=40`,
          thumbnail: game.keyImages.find(
            (img: any) => img.type === "OfferImageWide" || img.type === "OfferImageTall"
          ).url,
          genres: extraInfo[idx].genres,
          platforms: {
            windows: extraInfo[idx].platforms.includes("Windows"),
            linux: extraInfo[idx].platforms.includes("Linux"),
            macOs: extraInfo[idx].platforms.includes("Mac OS"),
          }
        }
      });
    }

    return games;
  };

  private getDiscountPercentage = (price: any): number => {
    const discount = price.discount;
    return Math.floor((discount / price.originalPrice) * 100);
  }
}
