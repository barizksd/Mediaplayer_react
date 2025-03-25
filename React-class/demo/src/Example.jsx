import React from 'react'
import style from './myStyle.module.css'


function Example(porps){

    return(
        <>
        <h1> this is predifind {porps.sub}</h1>
            <h1 className={style.reactStyle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat et dignissimos quis sequi eum beatae eaque cupiditate nihil, amet quos, esse numquam, similique saepe voluptate iure praesentium dolorem molestias laborum.</h1>
        </>
    )
}

export default Example