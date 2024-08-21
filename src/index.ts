import { useFluent } from "@grammyjs/fluent";
import { Bot } from "grammy";
import { envs } from "~/configs/envs.ts";
import { fluent } from "~/configs/fluent.ts";
import { activeHandler, helpHandler, languageHandler, startHandler, stickerHandler, topHandler } from "~/handlers";

import type { BotContext } from "~/types.ts";

const bot = new Bot<BotContext>(envs.TELEGRAM_TOKEN);
bot.use(useFluent({ fluent, defaultLocale: "en" }));

bot.command("active", activeHandler);
bot.command("help", helpHandler);
bot.command("lang", languageHandler);
bot.command("start", startHandler);
bot.command("s", stickerHandler);
bot.command("top", topHandler);

await bot.api.setMyCommands([
	{ command: "start", description: "Getting started – Who am I? 👀" },
	{ command: "help", description: "Bot info – What I can do 💪" },
	{ command: "s", description: "Get random sticker or sticker by emoji 🔍" },
	{ command: "active", description: "Manage the probability of auto-sending a sticker 🎲" },
	{ command: "top", description: "Top 5 users by the amount of sent stickers 🏆" },
	{ command: "lang", description: "Change the language 🌐" },
]);

await bot.start();
