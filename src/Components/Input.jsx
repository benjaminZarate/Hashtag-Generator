import React from "react";
import '../Styles/InputKeyword.css';
function InputKeyword()
{
    return(
        <div className="container">
            <input name="keyword" placeholder="Insert your keyword" className="inputKey"/>
        </div>
    );
}

export default InputKeyword;