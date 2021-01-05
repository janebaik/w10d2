import React from 'react';
import Clock from './clock';
import ReactDOM from 'react-dom';
import Tab from './tab';




const subtab = [
    {title: 'one', content: 'I am the first'},
    {title: 'two', content: 'Second pane here'},
    {title: 'three', content: 'Third pane here'}
]

function Root() {
    return (
        <div>
            <div>
                <Clock/>
            </div>

            <div>
                <Tab tabs={subtab}/>
            </div>
        </div>
    )
}
















document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");


    ReactDOM.render(<Root/>, root)
});
