import React from 'react';
import { Card } from '@nextui-org/react';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100 px-9">
      <Card className="text-center p-10">
        <img src={logo} className="w-40 h-40 mx-auto" alt="logo" />
      </Card>
    </div>
  );
}

export default App;
