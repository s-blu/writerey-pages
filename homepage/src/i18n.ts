import Vue from "vue";
import VueI18n, { LocaleMessages } from "vue-i18n";

Vue.use(VueI18n);

function loadLocaleMessages(): LocaleMessages {
  const locales = require.context("./i18n", true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages: LocaleMessages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

let uiLocale = navigator.language.split("-")[0];
const supportedLocales = ["en", "de"];
if (!supportedLocales.includes(uiLocale)) {
  console.warn(`translations in user locale "${uiLocale}" are not available, falling back to en`);
  uiLocale = "en";
}

export default new VueI18n({
  locale: uiLocale,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages(),
});
