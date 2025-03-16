import React from 'react'
import style from '../Components/Button.module.css'
import { NavLink } from 'react-router-dom'

export default function Button() {
  return (
    <div className={style.goback}>
    <NavLink to='/'>&larr;  Go Back to Home</NavLink>
    </div>
  )
}
