import React from "react";
import ReactDOM from "react-dom";
import Family from './family';
import Member from './member';

ReactDOM.render(
    <Family lastName='Sousa Campos' >
        <Member name='Lucas' />
    </Family>
 , document.getElementById("app")
);
