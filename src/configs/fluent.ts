import { Fluent } from "@moebius/fluent";

const LOCALES = ["en", "ru"] as const;

export const fluent = new Fluent();

for (const locale of LOCALES) {
	await fluent.addTranslation({
		locales: locale,
		filePath: `${import.meta.dir}/../locales/${locale}.ftl`,
	});
}
