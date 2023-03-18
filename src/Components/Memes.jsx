import React from 'react';
import NewsItem from './NewsItem';

const Memes = () => {
    return (
        <>
            <div>
                <h1 className='mt-2  align-middle d-flex p-2 justify-content-center text-primary'>
                    Popular Memes Pictures
                </h1>
                <hr style={{ width: "72rem", border: "1px solid gray" }} />
            </div>
            <div className='newsitems'>
                <NewsItem />
            </div>
        </>
    )
}

export default Memes
