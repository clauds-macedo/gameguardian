import fs from "fs";
import { JsonFiles } from "./jsonFiles";

export const writeJson = (content: Object, fileName: JsonFiles) => {
  if (!fs.existsSync("data/")) {
    fs.mkdirSync("data/");
  }

  const json = JSON.stringify(content);
  fs.writeFileSync("data/" + fileName, json, "utf8");
}
