import { object, parse, string } from "valibot";

const envsSchema = object({ TELEGRAM_TOKEN: string() });

export const envs = parse(envsSchema, process.env);
