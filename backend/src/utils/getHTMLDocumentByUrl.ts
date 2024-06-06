import * as cheerio from "cheerio";
import axios from "axios";

export const getHTMLDocumentByUrl = async (url: string) => {
  const response = await axios.get(url);
  return cheerio.load(response.data);
}
