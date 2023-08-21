import React from "react";
import '../Styles/GenerateHashtags.css';
function GenerateHashtags()
{
    return( 
        <div className="generateButtonContainer">
            <div className="buttonContainer">
                <button className="generateButton"><i class='fa fa-cog'></i> Generate Hashtag</button>
            </div>
        </div>
    );
}

export default GenerateHashtags;