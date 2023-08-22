import React from 'react';
import '../Styles/TopPostContainer.css';
import placeholder from '../Assets/placeholder.jpg';

function TopPostContainer()
{
    return(
        <div className='topPostContainer'>
            <div className='topPost'><img src={placeholder} className='topPostImage' alt=""/></div>
            <div className='topPost'><img src={placeholder} className='topPostImage' alt=""/></div>
            <div className='topPost'><img src={placeholder} className='topPostImage' alt=""/></div>
            <div className='topPost'><img src={placeholder} className='topPostImage' alt=""/></div>
            <div className='topPost'><img src={placeholder} className='topPostImage' alt=""/></div>
        </div>
    );
}

export default TopPostContainer;
