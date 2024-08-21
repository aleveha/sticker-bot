import type { CommandContext } from "grammy";
import type { BotContext } from "~/types.ts";

export async function helpHandler(ctx: CommandContext<BotContext>) {
	await ctx.reply(ctx.t("help-command.message"), {
		reply_parameters: { message_id: ctx.msg?.message_id, allow_sending_without_reply: true },
		parse_mode: "HTML",
	});
}
