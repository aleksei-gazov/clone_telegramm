import React from 'react';
import {Input} from './Input';
import {Button} from './Button';
import {Scoreboard} from './Scoreboar';
import {MessageType} from './App';

type MessengerPropsType = {
    count: number
    title: string
    setTitle: (title: string) => void
    addMessage: () => void
    ResetMessage: () => void
    DelLastMessage: () => void
    message: Array<MessageType>
}

const Messenger: React.FC<MessengerPropsType> = ({
                                                     count,
                                                     title,
                                                     setTitle,
                                                     addMessage,
                                                     ResetMessage,
                                                     DelLastMessage,
                                                     message,
                                                 }) => {
    return (
        <div>
            <div>'message count: ' {count}</div>
            <div>
                <Input title={title} setTitle={setTitle}/>
                <Button name={'Add'} callBack={addMessage}/>
                <Button name={'Reset'} callBack={ResetMessage}/>
            </div>
            <div>
                <Button name={'Delete last message'} callBack={DelLastMessage}/>
                <Scoreboard title={message}/>
            </div>
        </div>
    );
};

export default Messenger;