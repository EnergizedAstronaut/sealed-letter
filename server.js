const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use((req, res, next) => {
  res.set("X-Robots-Tag", "noindex, nofollow");
  res.set("Referrer-Policy", "strict-origin"); // origin only: YouTube embeds refuse to play without a referrer
  next();
});
app.get("/healthz", (req, res) => res.send("ok"));
app.use(express.static(path.join(__dirname, "public")));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

app.listen(PORT, "0.0.0.0", () => console.log("Sealed Letter running on " + PORT));
