const express = require("express");
const bodyParser = require("body-parser");
const { exec } = require("child_process");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/:platform/:page", (req, res) => {
  const platform = req.params.platform;
  const page = req.params.page;

  exec(
    `python3 scripts/main.py ${platform} ${page}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return res
          .status(500)
          .json({ error: "Erro ao executar o script Python." });
      }
      res.json({ data: stdout });
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
