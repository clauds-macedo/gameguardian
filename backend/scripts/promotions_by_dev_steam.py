import sys
import requests
import bs4
from bs4 import BeautifulSoup
import re
import json

url = "https://store.steampowered.com/developer/"

def promotions_by_dev_steam(dev:str="EA"):
  response = requests.get(url + dev)

  id_regex = re.compile(r"/app/(\d+)")

  content_type = response.headers.get("Content-Type")
  id_list: list[str] = []
  if "html" in content_type:
    soup = BeautifulSoup(response.content, "html.parser")

    promotions_container = soup.find("div", {"id":"discounted_0"})

    for anchor in promotions_container.findAll("a", href=True):
      match = id_regex.search(anchor["href"])
      if match:
        id_list.append(match.group(1))

  return id_list



def main():
  if len(sys.argv) >= 2:
    try:
      id_list = promotions_by_dev_steam(sys.argv[1])
      print(json.dumps(id_list))
    except Exception:
      print(json.dumps({ "error": f"Failed to get games from {sys.argv[1]}"}))
  else:
    print(json.dumps({ "error": "Inform developer name."}))
  
if __name__ == "__main__":
  main()