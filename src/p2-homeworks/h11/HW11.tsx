import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css';



function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)


    const onChangeRange = (value: number) => {
        setValue1(value);
    }

    const onChangeDoubleRange = (value: [number,number]) => {
        setValue1(value[0]);
        setValue2(value[1]);
    }

    return (
        <div className={s.classForHw11}>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.superRange}>
                <span className={s.span1}>{value1}</span>
                <SuperRange value={value1}
                            onChangeRange={onChangeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={s.doubleRange}>
                <span className={s.span2}>{value1}</span>
                <SuperDoubleRange value={[value1, value2]}
                    onChangeRange={onChangeDoubleRange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span className={s.span3}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
