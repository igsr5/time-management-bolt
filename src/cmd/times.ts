import { SlackCommandMiddlewareArgs } from "@slack/bolt";
import { AxiosClient } from "../axios";
import { FetchDaysFromString, GetTimePointParamSumOfDays } from "../time_point/time_point";

export const times = async ({
  command,
  ack,
  say,
  respond,
}: SlackCommandMiddlewareArgs) => {
  try {
    await ack();

    const params: GetTimePointParamSumOfDays = {
      fetch_days: FetchDaysFromString(command.text),
    };

    const { data } = await AxiosClient.get("/time_points_sum_of_days", {
      params,
    });

    let text = `:hourglass_flowing_sand: 働いた時間\n`;
    Object.keys(data).forEach((key) => text += `${key}: ${data[key]}\n`)

    await say(`${text}`);
  } catch (err: any) {
    console.error(err);

    await respond({
      text: `failed times. err: ${err.response.data}`,
      response_type: "ephemeral",
    });
  }
};
