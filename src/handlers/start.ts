import type { CommandContext } from "grammy";
import type { BotContext } from "~/types.ts";

export async function startHandler(ctx: CommandContext<BotContext>) {
	await ctx.reply(ctx.t("start"), {
		reply_parameters: ctx.message?.message_id ? { message_id: ctx.message.message_id } : undefined,
		parse_mode: "HTML",
	});
}
