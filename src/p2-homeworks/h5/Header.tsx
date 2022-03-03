import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routers";
import s from "./Header.module.css"

// @ts-ignore
const setActive = ({isActive}) => isActive ? s.active_link : s.link;

function Header() {
    return (
        <div className={`${s.block} ${s.header}`}>
            <NavLink to={PATH.PRE_JUNIOR} className={setActive}>pre_junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={setActive}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={setActive}>junior+</NavLink>
        </div>
    )
}

export default Header
