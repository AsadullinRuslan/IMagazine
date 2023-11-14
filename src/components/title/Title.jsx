import React from "react";
import './title.css'

const Title = ({ children }) => {
    return (
        <header>
            <h1 className="title">{children}</h1>
        </header>
    );
};

export default Title;
