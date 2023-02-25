import React from 'react'
import './Content.css'
const Content = ({heading,time,para,darkTheme}) => {
    const white={color:"#f7a7c1"}
    const black={color:"#cf3868"}
  return (
    <div className='content'>
      <h2 style={darkTheme ?  black : white}>{heading}</h2>
      <p><em>{time}</em></p>
      <p>{para}</p>
    </div>
  )
}

export default Content