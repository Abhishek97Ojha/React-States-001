import React from 'react'
import './Content.css'
const Content = ({heading,time,para,darkHeadTheme}) => {
  return (
    <div className='content'>
      <h2 style={darkHeadTheme}>{heading}</h2>
      <p><em>{time}</em></p>
      <p>{para}</p>
    </div>
  )
}

export default Content