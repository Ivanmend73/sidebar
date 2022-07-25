import React,{ useState } from 'react'
import { Links } from "../../Data/data.js"
import Item from '../Items/index'
import "./index.scss"


const Index = () => {

    const [open, setOpen] = useState(false)



  return (

    <>
    {
        open ?
    <div className='sidebarOpen'>

        <div             
            className='hamburguer'
            onClick={() => setOpen(!open)}>
        <i class="fa-solid fa-bars"
        ></i>
        </div>

        <div className='linksContainer'>
            {
                Links.map(({text, to ,svg}) => <Item open={open} text={text} to={to} svg={svg}>{text}</Item>)
            }
        </div>
    </div>

    :
    <div className='sidebar'>

        <div             
            className='hamburguer'
            onClick={() => setOpen(!open)}>
        <i class="fa-solid fa-bars"
        ></i>
        </div>

        <div className='linksContainer' >
            {
                Links.map(({text, to ,svg}) => <Item open={open} text={text} to={to} svg={svg}>{text}</Item>)
            }
        </div>
    </div>
    }
    </>
  )
}

export default Index