import axios from "axios";
import { getDiscountedGamesData, buildEpicGamesURL } from "../utils/helpers.js";

class EpicController {
  fetchFreeGames = async (_, res) => {
    try {
      const response = await axios.get(
        "https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions"
      );
      const data = response.data;
      res.json({ data });
    } catch (error) {
      console.error("Error fetching free games:", error);
      res.status(500).json({ error: "Erro ao buscar os jogos grátis." });
    }
  };

  getDiscountedGames = async (req, res) => {
    try {
      const queryParams = req.query;
      const url = buildEpicGamesURL(queryParams);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "User-Agent": "Insomnia/2023.5.6",
        },
      });

      if (!response.ok) {
        throw new Error(`Erro de conexão`);
      }

      const data = await response.json();
      const elements = data.data.Catalog.searchStore.elements;

      const all_games_discounted = getDiscountedGamesData(elements);

      res.json({ data: all_games_discounted });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Erro ao buscar os jogos em desconto." });
    }
  };
}

export default new EpicController();
