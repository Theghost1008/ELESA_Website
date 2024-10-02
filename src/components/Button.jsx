import React from "react";


function Buttons(props)
{
    return <button style={{borderRadius: '15px', backgroundColor:'#181F25', border:'2px solid #2D415B'}}onClick={props.onClick}>
            {props.name}
        </button>
}

export default Buttons;