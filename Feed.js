// feed.js
// Fake whale activity generator (until real API integration)

const { sendWhaleAlert } = require("./alerts");

function simulateWhaleActivity() {
  const assets = ["BTC", "ETH", "SOL", "XRP", "NVDA", "TSLA"];
  const types = ["buy", "sell", "accumulation"];
  
  const randomAsset = assets[Math.floor(Math.random() * assets.length)];
  const randomType = types[Math.floor(Math.random() * types.length)];
  const randomAmount = (Math.random() * 5 + 1).toFixed(2) + "M";

  sendWhaleAlert(randomType, randomAsset, randomAmount);
}

module.exports = {
  simulateWhaleActivity,
};
