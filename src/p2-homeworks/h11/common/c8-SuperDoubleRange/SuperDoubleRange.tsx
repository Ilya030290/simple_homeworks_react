import React from 'react'
import {Slider} from "@mui/material";
type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки


    const handleChange = (event: Event, value: number | number[]) => {
        onChangeRange && onChangeRange(value as [number,number]);
    };


    return (
        <>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </>
    )
}

export default SuperDoubleRange
