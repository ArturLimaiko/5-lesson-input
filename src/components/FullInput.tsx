import React, {ChangeEvent, useState} from 'react';


// протипизируем то что предали в функцию а именно функцию которая ничего не возвращает и не принимает () => void
// так же не забудем в параметрах указать значение title : string
type FullInputPropsType = {
    addMessage: (title: string) => void
}

// а далее прокидываем ее  в параметр FullInputPropsType
export const FullInput = (props: FullInputPropsType) => {

    let [title, setTitle] = useState('');
    console.log(title)

    //создадми вверху 2 функции и протипизируем их, затем их  передадим вниз в input и button
    //обязательно не забываем про типизацию в функции event: ChangeEvent<HTMLInputElement>
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        //передадим в функцию addMessage значение title
        //и не забудем в типизации указать значение title!
        // а так же передать его же в функцию addMessage
        props.addMessage(title)
        //после нажатия кнопки очищаем input - вызываем setTitle('') и передаем пустоту.а так же указать ниже в input value
        setTitle('')
    }

    return (
        <div>
            {/*не забыть указать значение value={title} что бы поле очищалось после ввода!!!
            привязываем title к значению input*/}
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};