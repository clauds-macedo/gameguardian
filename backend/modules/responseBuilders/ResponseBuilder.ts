import { GameResponse } from "../fetchers/GameFetcher";
import { AxiosResponse } from "axios"

export interface ResponseBuilder {
  buildGameResponse: (response: AxiosResponse) => GameResponse;
}
