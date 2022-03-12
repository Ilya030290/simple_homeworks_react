import React from 'react'
import Message from "./Message";
import s from './HW1.module.css'


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Ilya',
    message: 'Всем привеет!! Это IT-Incubator! Летииим!',
    time: '23:00',
}

function HW1() {
    return (
        <div className={s.classForHw1}>
            <hr/>
            homeworks 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
