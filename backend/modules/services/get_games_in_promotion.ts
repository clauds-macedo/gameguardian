import { promisify } from "util";

const exec = promisify(require("child_process").exec);

export const getGamesInPromotion = async (platform: string): Promise<string[]> => {
  const command = `python3 scripts/main.py ${platform}`;

  try {
    const listOutput = await exec(command);
    return JSON.parse(listOutput.stdout.trim());
  } catch (error) {
    console.log("Erro ao executar o script: ", error);
    throw "Erro ao executar o script";
  }
};
