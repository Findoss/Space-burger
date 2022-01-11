import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';

export const I18nProviderWrapper = (Story: any) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  );
};
