require("dotenv").config();
const express = require('express');
const stPrice = require("./scraper");
const puppeteer = require('puppeteer');

const app = express();

app.get("/", (req, res) => {
  res.send("Working");
})

app.get("/currPrice/:syb", async (req, res) => {
  const syb = req.params.syb;
  const url = `https://www.google.com/finance/quote/${syb}:NSE`
  const currPrice = await stPrice.run(url);
  res.json({currPrice: currPrice});
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
})
