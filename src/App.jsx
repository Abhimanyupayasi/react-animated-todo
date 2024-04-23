import React from 'react';
import Boreground from './components/background';
import Foreground from './components/foreground';

const App = () => {
  return (
    <div className='w-full relative h-screen bg-zinc-800'>
      <Boreground />
      <Foreground />
    </div>
  );
}

export default App;
