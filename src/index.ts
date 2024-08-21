import { useFluent } from "@grammyjs/fluent";
import { Bot } from "grammy";
import { envs } from "~/configs/envs.ts";
import { fluent } from "~/configs/fluent.ts";
import { startHandler } from "~/handlers";

import type { BotContext } from "~/types.ts";

const bot = new Bot<BotContext>(envs.TELEGRAM_TOKEN);
bot.use(useFluent({ fluent, defaultLocale: "en" }));

bot.command("start", startHandler);

await bot.api.setMyCommands([{ command: "start", description: "Getting started! Who am I?" }]);

await bot.start();
