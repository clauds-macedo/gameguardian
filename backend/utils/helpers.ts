import axios from "axios";
import type { IGameInfo, ISafeObject } from "./types";

export function safeExtract({ config, key, obj }: ISafeObject) {
  return obj[key] ? obj[key] : config[key];
}

export function safeExtractImage({ config, key, obj }: ISafeObject) {
  return obj[key] ? obj[key].url : config[key];
}

export const buildEpicGamesURL = () => {
  const urlParams = {
    allowCountries: "BR",
    category: "games%2Fedition%2Fbase",
    count: 400,
    country: "BR",
    effectiveDate: `[,${new Date().toISOString()}]`,
    keywords: "",
    locale: "pt-BR",
    onSale: true,
    sortBy: "releaseDate",
    sortDir: "DESC",
    start: 0,
    tag: "",
    withPrice: true,
    comingSoon: false,
  };

  const baseUrl = "https://store.epicgames.com/graphql";
  const operationName = "searchStoreQuery";
  const variables = JSON.stringify(urlParams);
  const extensions = JSON.stringify({
    persistedQuery: {
      version: 1,
      sha256Hash:
        "7d58e12d9dd8cb14c84a3ff18d360bf9f0caa96bf218f2c5fda68ba88d68a437",
    },
  });

  const url = `${baseUrl}?operationName=${operationName}&variables=${variables}&extensions=${extensions}`;
  return url;
};

const buildEpicGenresUrl = (offerId: string, sandboxId: string) => {
  const urlParams = {
    locale: "pt-BR",
    country: "BR",
    offerId,
    sandboxId,
  };

  const baseUrl = "https://store.epicgames.com/graphql";
  const operationName = "getCatalogOffer";
  const variables = JSON.stringify(urlParams);
  const extensions = JSON.stringify({
    persistedQuery: {
      version: 1,
      sha256Hash:
        "c4ad546ad2757b60ff13ace19ffaf134abb23cb663244de34771a0444abfdf33",
    },
  });

  const url = `${baseUrl}?operationName=${operationName}&variables=${variables}&extensions=${extensions}`;
  return url;
}

export const getEpicGenresAndPlatforms = async (offerId: string, namespace: string) => {
  const response = await axios.get(
    buildEpicGenresUrl(offerId, namespace), {
    headers: {
      Accept: "application/json",
      "User-Agent": "Insomnia/2023.5.6",
    }
  });

  const { catalogOffer } = response.data.data.Catalog;
  const genres = catalogOffer.tags
    .filter((tag: any) => tag.groupName === "genre")
    .map((tag: any) => tag.name);

  const platforms = catalogOffer.tags
    .filter((tag: any) => tag.groupName === "platform")
    .map((tag: any) => tag.name);

  return { genres, platforms };
}
