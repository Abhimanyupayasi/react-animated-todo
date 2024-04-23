import React from 'react';
import Card from './Card';

const Foreground = () => {

    const ref = React.useRef(null);

    return (
        <div ref={ref} className='w-full h-full flex fixed z-[3] '>
            <Card reference={ref} />
            <Card reference={ref} />
            <Card reference={ref}/>
        </div>
    );
}

export default Foreground;
