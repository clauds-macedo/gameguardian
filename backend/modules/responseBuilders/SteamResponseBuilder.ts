import { AxiosResponse } from "axios";
import { GameResponse } from "../fetchers/GameFetcher";
import { ResponseBuilder } from "./ResponseBuilder";

export class SteamResponseBuilder implements ResponseBuilder {
  buildGameResponse = (response: AxiosResponse<any, any>): GameResponse => {
    let { data } = response;
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
      link: `https://store.steampowered.com/app/${id}`
    };
  }
}

