import React from 'react';
import Clock from './clock';
import ReactDOM from 'react-dom';

function Root() {
    return (
        <div>
            <Clock/>
        </div>
    )
}
















document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");


    ReactDOM.render(<Root/>, root)
});
