import { SlackCommandMiddlewareArgs } from "@slack/bolt";
import { AxiosClient } from "../axios";
import { CreateTimePointParam } from "../time_point/time_point";

export const end = async ({
  command,
  ack,
  say,
  respond,
}: SlackCommandMiddlewareArgs) => {
  try {
    await ack();

    const params: CreateTimePointParam = { status: "end" };
    await AxiosClient.post("/time_points", params);

    const text = command.text || "終わり";
    await say(`${text}`);
  } catch (err: any) {
    console.error(err);

    await respond({
      text: `failed end. err: ${err.response.data}`,
      response_type: "ephemeral",
    });
  }
};
