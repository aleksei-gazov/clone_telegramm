import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Scoreboard} from './Scoreboar';
import {Button} from './Button';
import {Input} from './Input';
import {v1} from 'uuid';
import Messenger from './Messenger';


export type MessageType = {
    id: string
    message: string
}

export type MessageListType = { id: string }

function App() {

    const MaxMessage = 5
    const MinMessage = 0

    const [count, setCount] = useState<number>(MinMessage)
    let [message, setMessage] = useState<Array<MessageType>>([])
    let [title, setTitle] = useState<string>('')

    // let messageID1 = v1()
    // let messageID2 = v1()
    //
    // let [messageLists, setMessageLists] = useState<Array<MessageListType>>([
    //     {id: messageID1},
    //     {id: messageID2}
    // ])
    //
    // let [task, setTask] = useState({
    //     count: MinMessage,
    //     [messageID1]: [],
    //     [messageID2]: [],
    //
    // })


    const addMessage = () => {
        let newId = v1()
        // let countNew = task.count + 1
        let newMessage = {id: newId, message: title}
        if (count < MaxMessage && title.trim()) {
            setMessage([newMessage, ...message])
            setTitle('')
            setCount(count + 1)
            // setTask({...task, count:  countNew, [messageID1]: [newMessage] })
            // console.log(countNew)
        }
    }

    const ResetMessage = () => {
        setTitle('')
    }
    let lastMessage = [...message]
    const DelLastMessage = () => {
        if (message.length > MinMessage) {
            lastMessage.shift()
            console.log(lastMessage)
            setMessage(lastMessage)
            setCount(count - 1)
        }
    }

    return (
        <div className="App">
            <Messenger
                count={count}
                title={title}
                setTitle={setTitle}
                addMessage={addMessage}
                ResetMessage={ResetMessage}
                DelLastMessage={DelLastMessage}
                message={message}
            />
            <Messenger
                count={count}
                title={title}
                setTitle={setTitle}
                addMessage={addMessage}
                ResetMessage={ResetMessage}
                DelLastMessage={DelLastMessage}
                message={message}
            />
        </div>
    );
}

export default App;
