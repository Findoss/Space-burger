import React, { ReactChild } from 'react';
import '../../src/app/styles/index.css';

export const ModalsWrapper = (
  Story: React.FC,
  context: {
    children?: React.ReactNode;
  },
) => {
  const $root = document.querySelector('#root');
  const $modals = document.createElement('div');
  $modals.id = 'modals';
  if ($root) {
    $root.append($modals);
  }

  return <>{Story(context)}</>;
};
