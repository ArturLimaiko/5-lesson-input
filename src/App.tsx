import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";

const addMessage = () => {
    console.log('aaaaaaaa')
}

function App() {
    //  представим что эти данные приходят с сервера
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},

    ])

    //должна прозвониться функция для того что бы добавлять ее в title выше.далее мы ее прокидываем в <FullInput/>
    const addMessage = (title: string) => {
        //добавим новое сообщение. создадим переменную newMessage и
        // приравняем переменной значение {message: title}
        // title который к нам пришел в параметрах
        let newMessage = {message: title}

        //передаем ...message все старые сообщения(...spread оператор)
        // +  newMessage и добавляем к ним новое сообщение
        //
        setMessage([newMessage, ...message]);

    }

    return (
        <div className={'App'}>
            <FullInput addMessage={addMessage}/>
            {message.map((element, index) => {
                return (
                    <div key={index}>{element.message}</div>
                )
            })}
        </div>
    );
}

export default App;
