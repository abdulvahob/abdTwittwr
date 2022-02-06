import React from 'react';
import './AppHeader.css'
const AppHeader = (props) => {
    const {liked , allPost} = props;
    return (
        <div className='app-header d-flex' >
                <h1>Abdulvahob</h1>
                <h2> {allPost} post , {liked} like </h2>
        </div>
    );
};

export default AppHeader;