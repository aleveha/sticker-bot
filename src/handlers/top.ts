import type { CommandContext } from "grammy";
import type { BotContext } from "~/types.ts";

export async function topHandler(ctx: CommandContext<BotContext>) {
	await ctx.reply(ctx.t("common.not-implemented"), {
		reply_parameters: { message_id: ctx.msg?.message_id, allow_sending_without_reply: true },
	});
}
