import { App, ExpressReceiver } from "@slack/bolt";
import dotenv from "dotenv";
import { end } from "./cmd/end";
import { start } from "./cmd/start";
import { times } from "./cmd/times";

dotenv.config();
const PORT = process.env.PORT || "3000";

const receiver = new ExpressReceiver({
  signingSecret: process.env.SIGNING_SECRET || "",
  endpoints: `/slack/events`,
});

const ping = () => {
  receiver.app.get(`/slack/ping`, (req, res) => {
    res.sendStatus(200)

    return;
  })
};
ping();

const config = {
  token: process.env.BOT_USER_OAUTH_TOKEN,
  signingSecret: process.env.SIGNING_SECRET,
  appToken: process.env.APP_TOKEN,
  socketMode: true,
  logLevel: "debug",
  // receiver,
};

const app = new App(config);

app.command("/start", start);
app.command("/end", end);
app.command("/times", times);

app.start(parseInt(PORT));
console.log(`⚡️ Bolt app is running!: ${PORT}`);
