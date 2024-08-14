import { Bot } from "grammy";
import { envs } from "~/configs/envs.ts";

const bot = new Bot(envs.TELEGRAM_TOKEN);

bot.command("start", (ctx) => ctx.reply("Hi, I'm Sticker Bot!"));

await bot.start();
