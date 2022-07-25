import React from 'react'
import {NavLink} from "react-router-dom"
import "./styles.scss"

export const Index = ({ text, to, svg, open }) => {
  return (
    <>
    {
    open
     ?
        <NavLink className="linkOpen" to={to}>
            <div>{svg}</div>
            {
                open ? <p>{text}</p> : null
            }
        </NavLink>
    :
        <NavLink className="normal" to={to}>
        <div>{svg}</div>
        {
            open ? <p>{text}</p> : null
        }
        </NavLink>
    }
    </>
 
  )





}

export default Index