const express = require('express');
const stPrice = require("./scraper");

const app = express();

app.get("/currPrice/:syb", async (req, res) => {

  const syb = req.params.syb;
  const url = `https://www.google.com/finance/quote/${syb}:NSE`
  const currPrice = await stPrice.run(url);
  await res.json({currPrice: currPrice});
});

app.listen(3000, () => {
  console.log("Server is running");
})
