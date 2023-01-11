import React from "react";

export type ButtonType = {
    name: string
    callBack:()=>void
    classMain?: string
    disabledButton?: boolean
}

export const Button=(props: ButtonType) => {


    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button onClick={onClickHandler} className={props.classMain} disabled={props.disabledButton}>{props.name}</button>
        </div>
    )
}