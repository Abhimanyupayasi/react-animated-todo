import React from 'react';

const Foreground = () => {
    return (
        <div className='w-full h-screen fixed z-[2]'>
            <div className='w-full py-10 flex justify-center text-zinc-500 text-xl font-semibold'>
        Documents
      </div>
      <h1 className='text-[13vw] leading-none tracking-tighter absolute top-1/2 left-1/2    -translate-y-[50%] -translate-x-[50%] font-semibold text-zink-900'>Docs.</h1>
        </div>
    );
}

export default Foreground;
