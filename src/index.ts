import { App } from "@slack/bolt";
import dotenv from "dotenv";
import { end } from "./cmd/end";
import { start } from "./cmd/start";
import { times } from "./cmd/times";

const PORT = process.env.PORT || "3000";
dotenv.config();
const config = {
  token: process.env.BOT_USER_OAUTH_TOKEN,
  signingSecret: process.env.SIGNING_SECRET,
};

const app = new App(config);
app.command("/start", start);
app.command("/end", end);
app.command("/times", times);

app.start(parseInt(PORT));
console.log(`⚡️ Bolt app is running!: ${PORT}`);
