import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [{
    "title": "What is react",
    "content": "React is a front end javascript framework"
},
{
    "title": "Why use react",
    "content": "Because is great"
},
{
    "title": "How do you use react",
    "content": "You use react by creating components"
}];

export default () => {
    return (
    <div>
        {/* <Accordion items={items}/> */}

        <Search />
        </div>
    );
};