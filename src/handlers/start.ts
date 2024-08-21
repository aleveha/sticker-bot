import type { CommandContext } from "grammy";
import type { InlineKeyboardMarkup } from "grammy/types";
import type { BotContext } from "~/types.ts";

export async function startHandler(ctx: CommandContext<BotContext>) {
	const replyMarkup: InlineKeyboardMarkup = {
		inline_keyboard: [
			[
				{
					text: ctx.t("start-command.button"),
					url: `https://t.me/${ctx.me.username}?startgroup=${ctx.me.username}`,
				},
			],
		],
	};

	await ctx.reply(ctx.t("start-command.message"), {
		reply_parameters: { message_id: ctx.msg?.message_id, allow_sending_without_reply: true },
		parse_mode: "HTML",
		reply_markup: ctx.chat.type === "private" ? replyMarkup : undefined,
	});
}
