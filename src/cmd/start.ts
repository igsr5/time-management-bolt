import { SlackCommandMiddlewareArgs } from "@slack/bolt";
import { AxiosClient } from "../axios";
import { CreateTimePointParam } from "../time_point/time_point";

export const start = async ({
  command,
  ack,
  say,
  respond,
}: SlackCommandMiddlewareArgs) => {
  try {
    await ack();

    const params: CreateTimePointParam = { status: "start" };
    await AxiosClient.post("/time_points", params);

    const text = command.text || "はじめ";
    await say(`${text}`);
  } catch (err) {
    console.error(err);

    await respond({
      text: `failed start. err: ${err}`,
      response_type: "ephemeral",
    });
  }
};
