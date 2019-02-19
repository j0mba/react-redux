import React from "react";
import ReactDOM from "react-dom";
import Family from './family';
import Member from './member';

ReactDOM.render(
    <Family>
        <Member name='Lucas' lastName='Sousa Campos' />
    </Family>
 , document.getElementById("app")
);
