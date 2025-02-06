export const useDefaultLocale = (fallback = 'en') => {
  const locale = ref(fallback);

  // locale.value = navigator.language
  if (process.server) {
    const reqLocale = useRequestHeaders()
      ['accept-language'].split(';')[0]
      .split(',')[1];
    if (reqLocale) {
      locale.value = reqLocale;
    }
  } else if (process.client) {
    locale.value = navigator.language;
  }

  return locale;
};