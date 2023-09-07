import { promisify } from "util";
import shellQuote from "shell-quote";

const exec = promisify(require("child_process").exec);

export const parsePage = async (platform: string, page: string): Promise<string[]> => {
  const command = `python3 scripts/main.py ${shellQuote.quote([
    platform,
  ])} ${page}`;

  try {
    const listOutput = await exec(command);
    return JSON.parse(listOutput.stdout.trim());
  } catch (error) {
    console.log("Erro ao executar o script: ", error);
    throw "Erro ao executar o script";
  }
};
