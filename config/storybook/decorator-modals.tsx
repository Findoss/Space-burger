import React from 'react';
import '../../src/styles/index.css';

export const ModalsWrapper = (Story: any, context: any) => {
  const $root = document.querySelector('#root');
  const $modals = document.createElement('div');
  $modals.id = 'modals';
  if ($root) {
    $root.append($modals);
  }

  return <>{Story(context)}</>;
};
