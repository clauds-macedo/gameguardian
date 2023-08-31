const { exec } = require("child_process");
const shellQuote = require("shell-quote");

exports.fetchPrices = (req, res) => {
  const platform = req.params.platform;
  const page = req.params.page;
  
  const command = `python3 scripts/main.py ${shellQuote.quote([platform])} ${page}`;
  exec(
    command,
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
};
