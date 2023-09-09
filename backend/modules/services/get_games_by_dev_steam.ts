import { exec } from "./exec";

interface IError {
  error: string;
}

export const getGamesInPromotionByDevSteam = async (
  dev: string
): Promise<string[]> => {
  const command = `python3 scripts/promotions_by_dev_steam.py ${dev}`;

  try {
    const listOutput = await exec(command);
    const parsed = JSON.parse(listOutput.stdout.trim());
    return parsed.error ? [] : parsed;
  } catch (e) {
    console.log("Erro ao executar o script: ", e);
    throw "Erro ao executar o script";
  }
};
