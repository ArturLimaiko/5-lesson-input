import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: () => void
}


export const FullInput = (props: FullInputPropsType) => {

    let [title,setTitle] = useState('');
    console.log(title)

    //обязательно не забываем про типизацию в функции event: ChangeEvent<HTMLInputElement>
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

        const onClickButtonHandler = () => {

    }

    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};