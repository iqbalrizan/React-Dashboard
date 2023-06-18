import React from 'react'
import "./Header.scss"
import { MessageFilled, NotificationFilled } from '@ant-design/icons'
import { Badge } from 'antd'


const Header = () => {
  return (
    <div className='header'>
        <svg id="logo-72" width="52" height="44" viewBox="0 0 53 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z" class="ccustom" fill="#212326"></path> </svg>
        <h1>React Dashboard</h1>
        <div className="headerlogo">
            <Badge count={2}>
        <MessageFilled style={{fontSize: '30px'}} />
            </Badge>
            <Badge count={3}>
        <NotificationFilled style={{fontSize: '30px'}}  />
            </Badge>
        </div>
    </div>
  )
}

export default Header