console.log("🐋 Whale Watcher: Insider Scoop starting up...");

const { simulateWhaleActivity } = require("./feed");

console.log("Initializing whale activity scanner...");
console.log("Tracking large buys, sells, and accumulation...");

// Run a simulated whale event every 5 seconds
setInterval(() => {
  simulateWhaleActivity();
}, 5000);
