const { exec } = require("child_process");

exports.fetchPrices = (req, res) => {
  const page = req.params.page;
  exec(
    `python3 scripts/main.py ${page}`,
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
