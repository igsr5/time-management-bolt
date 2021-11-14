import { SlackCommandMiddlewareArgs } from "@slack/bolt";

export const start = async ({
  command,
  ack,
  say,
  respond,
}: SlackCommandMiddlewareArgs) => {
  try {
    await ack();

    // TODO: ここで POST する

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
