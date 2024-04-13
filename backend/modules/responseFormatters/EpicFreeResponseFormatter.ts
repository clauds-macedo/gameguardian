import { AxiosResponse } from "axios";
import { ResponseFormatter } from "./ResponseFormatter";
import { GameResponse } from "../../utils/types";

export class EpicFreeResponseFormatter implements ResponseFormatter {
  format = (response: AxiosResponse | AxiosResponse[]) => {
    let games: GameResponse[] = [];
    if (!Array.isArray(response)) {
      const { elements } = response.data.data.Catalog.searchStore;
      games = elements
        .filter((game: any) => game.price.totalPrice.discountPrice === 0)
        .map((game: any) => ({
          title: game.title,
          description: game.description,
          developers: [game.developerDisplayName],
          publishers: [game.publisherDisplayName],
          originalPrice: game.price.totalPrice.fmtPrice.originalPrice,
          discountedPrice: game.price.totalPrice.fmtPrice.discountPrice,
          discountPercent: "100",
          link:`https://store.epicgames.com/pt-BR/browse?q=${game.title}&sortBy=relevancy&sortDir=DESC&count=40`,
          thumbnail: game.keyImages.find(
            (img: any) => img.type === "OfferImageWide" || img.type === "OfferImageTall"
          ).url,
        }));
    }

    return games;
  }
}
