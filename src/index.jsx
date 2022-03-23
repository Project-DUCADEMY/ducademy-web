import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import { RecoilRoot } from 'recoil'
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <AppRouter/>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

