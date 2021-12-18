import { App, ExpressReceiver, LogLevel } from "@slack/bolt";
import dotenv from "dotenv";
import { end } from "./cmd/end";
import { start } from "./cmd/start";
import { times } from "./cmd/times";

dotenv.config();
const PORT = process.env.PORT || "3000";

const config = {
  token: process.env.BOT_USER_OAUTH_TOKEN,
  signingSecret: process.env.SIGNING_SECRET,
  appToken: process.env.APP_TOKEN,
  socketMode: true,
  logLevel: LogLevel.DEBUG,
};

const app = new App(config);

app.command("/start", start);
app.command("/end", end);
app.command("/times", times);

app.start(parseInt(PORT));
console.log(`⚡️ Bolt app is running!: ${PORT}`);
console.log(`env`)
console.log(`USER_OAUTH_TOKEN: ${config.token}`)
console.log(`SIGNING_SECRET: ${config.signingSecret}`)
console.log(`APP_TOKEN: ${config.appToken}`)
