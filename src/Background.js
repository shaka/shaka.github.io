import React from 'react';

const Background = ( { children } ) =>
{
    return (
       
        <span className="bg-white dark:bg-black">
            {children}
        </span>
    )
}

export default Background;