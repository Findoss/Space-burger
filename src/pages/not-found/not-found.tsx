import React from 'react';

import { Main as MainLayout } from 'widgets/layout-main';
import { WrapperCenterForm } from 'widgets/wrapper-center-form';

export const NotFound = () => {
  return (
    <span className="mb-10  mt-10 text text_type_main-medium">
      404. Not found
    </span>
  );
};

export const PageNotFound = () => {
  return (
    <MainLayout>
      <WrapperCenterForm>
        <NotFound />
      </WrapperCenterForm>
    </MainLayout>
  );
};
