import React from 'react';

//протипизируем кнопку
type ButtonPropsType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {

    //вынесли onClick сюда, далее передали в функцию  колбэк
    const onClickButtonHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};