import { GameResponse } from "../../utils/types";
import { AxiosResponse } from "axios"

export interface ResponseFormatter {
  format: (response: AxiosResponse | AxiosResponse[]) => GameResponse[];
}

