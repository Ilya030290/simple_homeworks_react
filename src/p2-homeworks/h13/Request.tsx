import React, {useState} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {API} from "./requestsAPI";
import s from "./HW13.module.css";


export const Request = () => {

    const [checked, setChecked] = useState<boolean>(false);
    const [data, setData] = useState<string>('');

    const sendRequest = () => {
        API.auth(checked)
            .then((response) => {
                console.log(response);
                console.log(response.data);
                setData(response.data.errorText);
            })
            .catch((error) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
                setData('Oops...error, see it in console');
            });

    };

    return (
        <div className={s.request}>
            <div className={s.checkbox}>
                <SuperCheckbox checked={checked}
                               onChangeChecked={setChecked}
                >
                    Success
                </SuperCheckbox>
            </div>
            <div>
                <SuperButton onClick={sendRequest}>
                    Send Request
                </SuperButton>
            </div>
            <div>
                Data from Response: {data}
            </div>
        </div>
    );
};

