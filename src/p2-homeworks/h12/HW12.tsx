import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";


const themes = ['lime', 'dark', 'light', 'red', 'some'];

function HW12() {

    const getStateForTheme = (state: AppStoreType) => state.theme;

    const theme = useSelector<AppStoreType, string>(getStateForTheme); // useSelector

    // useDispatch, onChangeCallback

    const dispatch = useDispatch();

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeAC(theme));
    }

    return (
        <div className={s.classForHw12}>
            <div className={s[theme]}>
                {/*<hr/>*/}
                <span className={s[theme + '-text']}>
                homeworks 12
            </span>

                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}
                <div className={s.superSelect}>
                    <SuperSelect value={theme}
                                 options={themes}
                                 onChangeOption={onChangeCallback}
                    />
                </div>
                {/*<hr/>*/}
            </div>
        </div>
    );
}

export default HW12;
