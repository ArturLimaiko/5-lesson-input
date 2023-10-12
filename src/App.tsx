import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Button} from "./components/Button";
import {Input} from "./components/Input";

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

    //Это локальный стейт для инпута!
    let [title, setTitle] = useState('');
    console.log(title)

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

    //тут функция колбек которой передаем по нажатию кнопки
    // вызывает addMessage() в который передадим title
    // и так же очистим поле ввода setTitle('')
    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className={'App'}>
            {/*в компоненту input передаем setTitle={setTitle} title={title} от локального стейта который выше для синхронизации*/}
            <Input setTitle={setTitle} title={title}/>
            {/*вызываем функцию callBackButtonHandler которую выносим вверх*/}
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((element, index) => {
                return (
                    <div key={index}>{element.message}</div>
                )
            })}
        </div>
    );
}

export default App;
