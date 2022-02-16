import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props:MessagePropsType) {
    return (
        <div className={s.wrapper}>
            <div className={s.avatar}>
                <img className={s.image} src={props.avatar} alt={"avatar"}/>
            </div>
            <div className={s.bubble}>
                    <div className={s.text}>
                        <p className={s.name}>{props.name}</p>
                        <p className={s.message}>{props.message}</p>
                        <span className={s.timestamp}>{props.time}</span>
                    </div>
                    <div className={s.angle} />
            </div>
        </div>
    );
}

export default Message
