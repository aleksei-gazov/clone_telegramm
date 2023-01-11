import React, {ChangeEvent, useState} from "react";
import {MessageType} from './App';

type InputPropsType = {
    title: MessageType[]

}




export const Scoreboard = (props: InputPropsType) => {
    // const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     props.setTitle(event.currentTarget.value)
    // }
    return (
     <div>{props.title.map((t)=> {
         return (
             <div>{t.message}</div>
         )
     })}</div>
    )
}