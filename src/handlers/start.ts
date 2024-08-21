import type { CommandContext } from "grammy";
import type { BotContext } from "~/types.ts";

const START_TEXT =
	"Привет!\n" +
	"Я бот с <b>огрооомной</b> базой стиков, <b>я кидаю их сам и по команде</b>.\n" +
	"<b>Скорей добавляй меня в чат и зацени сколько стикерпаков ты еще не видел!</b>" +
	"🔥";

export async function startHandler(ctx: CommandContext<BotContext>) {
	await ctx.reply(START_TEXT, {
		reply_parameters: ctx.message?.message_id ? { message_id: ctx.message.message_id } : undefined,
		parse_mode: "HTML",
	});
}
