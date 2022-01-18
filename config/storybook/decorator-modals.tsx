import React from 'react';

export const ModalsWrapper = (Story: any, context: any) => (
  <div>
    <div id="modals"></div>
    {Story(context)}
  </div>
);
