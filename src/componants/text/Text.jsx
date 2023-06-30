import React from 'react'
import "./text.css"

const Text = (props) => {
    const classNames = ["text"];
    if (props.className){
        classNames.push(props.className);
    }
    switch(props.type){
        case "h1":
            return <h1 className={classNames.join(" ")}>{props.children}</h1>
        case "h2":
            return <h2 className={classNames.join(" ")}>{props.children}</h2>
        case "h3":
            return <h3 className={classNames.join(" ")}>{props.children}</h3>
        case "p":
            return <p className={classNames.join(" ")}>{props.children}</p>
        default:
            return <h6 className={classNames.join(" ")}>{props.children}</h6>
    }
}

export default Text