import { AxiosResponse } from "axios";
import { ResponseFormatter } from "./ResponseFormatter";
import { GameResponse } from "../../utils/types";

export class SteamResponseFormatter implements ResponseFormatter {
  format = async (response: AxiosResponse | AxiosResponse[]) => {
    let games: GameResponse[] = [];

    if (Array.isArray(response)) {
      games = response.map((resp) => {
        let { data } = resp;
        const id = Object.keys(data)[0];
        data = data[id].data;

        const price = data.price_overview;

        return {
          title: data.name,
          description: data.short_description,
          developers: data.developers,
          publishers: data.publishers,
          thumbnail: data.header_image,
          originalPrice: price && price.initial_formatted,
          discountedPrice: price && price.final_formatted,
          discountPercent: price && price.discount_percent,
          link: `https://store.steampowered.com/app/${id}`,
          genres: data.genres.map((obj: any) => obj.description),
        };
      })
    }

    return games;
  }
}

