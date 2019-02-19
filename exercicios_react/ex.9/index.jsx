import React from "react";
import ReactDOM from "react-dom";
import Family from './family';
import Member from './member';

ReactDOM.render(
    <Family lastName='Automação' >
        <Member name='Lucas' />
        <Member name='Rodrigo' />
        <Member name='Clemidio' />
    </Family>
 , document.getElementById("app")
);
