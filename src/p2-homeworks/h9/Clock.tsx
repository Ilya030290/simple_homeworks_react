import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW9.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId) // stop
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            setDate(new Date()) // setDate
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)// show
    }
    const onMouseLeave = () => {
        setShow(false)// close
    }

    const stringTime = date?.toTimeString() || <br/>// fix with date
    const stringDate = date?.toDateString() || <br/>// fix with date

    return (
        <div className={s.clock}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show
                ? (<div>
                    {stringDate}
                </div>)
                : (<br/>)
            }
            <div className={s.buttons}>
                <div className={s.superButton}>
                    <SuperButton onClick={start}>start</SuperButton>
                </div>
                <div className={s.superButton}>
                    <SuperButton onClick={stop}>stop</SuperButton>
                </div>
            </div>
        </div>
    )
}

export default Clock
