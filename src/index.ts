import { Bot } from "grammy";
import { envs } from "~/configs/envs.ts";
import { startHandler } from "~/handlers";

import type { BotContext } from "~/types.ts";

const bot = new Bot<BotContext>(envs.TELEGRAM_TOKEN);

bot.command("start", startHandler);

await bot.start();
