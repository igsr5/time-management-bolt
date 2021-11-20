import { SlashCommand } from "@slack/bolt";

export const Authenticate = (command: SlashCommand) => {
  if (command.user_id !== process.env.AUTH_USER_ID) {
    throw new Error(
      `Error: permission error: this command can only be used by ${process.env.AUTH_USER_NAME}`
    );
  }
  return;
};
