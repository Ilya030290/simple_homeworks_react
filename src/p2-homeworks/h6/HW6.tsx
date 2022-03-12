import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './HW6.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }

    const restore = () => {
        const stateValue: string = restoreState<string>('editable-span-value', '')
        setValue(stateValue)
    }

    return (
        <div className={s.classForHw6}>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div className={s.editableSpanAndButtons}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
                <div className={s.buttons}>
                    <span className={s.superButtonSave}>
                        <SuperButton onClick={save}>save</SuperButton>
                    </span>
                    <span className={s.superButtonRestore}>
                        <SuperButton onClick={restore}>restore</SuperButton>
                    </span>
                </div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
