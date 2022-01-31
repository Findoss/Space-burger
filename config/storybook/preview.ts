import { RouterProviderWrapper } from './decoratorRouter';
import { i18n, supportLangs, defaultLang } from './decoratorI18n';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  i18n,
  locale: defaultLang,
  locales: Object.entries(supportLangs).reduce((acc, [k, v]) => {
    return { ...acc, [k]: v.title };
  }, {}),
};

export const decorators = [RouterProviderWrapper];
