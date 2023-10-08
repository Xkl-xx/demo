/* eslint-disable no-console */
import './App.css';
import React from 'react';
import { Button } from 'antd';
import { getLoginQrCKey } from './api';

console.log(process.env.NODE_ENV);

function App() {
  const fn = () => {
    getLoginQrCKey()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Button type="primary" onClick={fn}>
      按钮
    </Button>
  );
}

export default App;
