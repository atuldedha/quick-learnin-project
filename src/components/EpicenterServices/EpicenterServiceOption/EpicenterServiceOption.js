import React from 'react'
import "./EpicenterServiceOption.css"

const EpicenterServiceOption = ({icon, title, description}) => {
  return (
    <div className='epicenter_service_option_container'>
        <div className='epicenter_service_option_image_container'>
            <img src={icon} alt="icon" className='epicenter_service_option_image' />
        </div>

        <div className='epicenter_service_text_container'>
            <span className='epicenter_service_option_title'>{title}</span>
            <span className='epicenter_service_option_description'>{description}</span>
        </div>
    </div>
  )
}

export default EpicenterServiceOption