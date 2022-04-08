import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW10.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading);

    const dispatch = useDispatch();

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true));
        // setTimeout
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000);
        console.log('loading...')
    };

    return (
        <div className={s.classForHw10}>
            <hr/>
            homeworks 10
            <div className={s.loading}>
                {/*should work (должно работать)*/}
                {
                    loading
                        ? (
                            <img className={s.rot}
                                 src={"https://img.icons8.com/ios-filled/2x/fidget-spinner--v1.png"}
                                 alt={'spinner'}
                            />
                        ) : (
                            <div>
                                <SuperButton onClick={setLoading}>set loading...</SuperButton>
                            </div>
                        )
                }
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
