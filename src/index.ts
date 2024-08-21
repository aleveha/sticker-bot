import { useFluent } from "@grammyjs/fluent";
import { Bot } from "grammy";
import { envs } from "~/configs/envs.ts";
import { fluent } from "~/configs/fluent.ts";
import { helpHandler, startHandler } from "~/handlers";

import type { BotContext } from "~/types.ts";

const bot = new Bot<BotContext>(envs.TELEGRAM_TOKEN);
bot.use(useFluent({ fluent, defaultLocale: "en" }));

bot.command("start", startHandler);
bot.command("help", helpHandler);

await bot.api.setMyCommands([
	{ command: "start", description: "Getting started – Who am I? 👀" },
	{ command: "help", description: "Bot info – What I can do 💪" },
]);

await bot.start();
