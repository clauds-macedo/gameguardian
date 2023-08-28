const axios = require("axios");

exports.fetchFreeGames = async (req, res) => {
  try {
    const response = await axios.get("https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions");
    const data = response.data;
    console.log(data)

    res.json({ data });
  } catch (error) {
    console.error("Error fetching free games:", error);
    res.status(500).json({ error: "Erro ao buscar os jogos grátis." });
  }
};
