import { AxiosResponse } from "axios";
import { GameResponse } from "../../utils/types";
import { ResponseFormatter } from "./ResponseFormatter";

export class EpicDiscountResponseFormatter implements ResponseFormatter {
  format = (response: AxiosResponse | AxiosResponse[]): GameResponse[] => {
    let games: GameResponse[] = [];

    if (!Array.isArray(response)) {
      const { elements } = response.data.data.Catalog.searchStore;

      games = elements.map((game: any): GameResponse => {
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
