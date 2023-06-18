import React from 'react'
import "./SideMenu.scss"
import { Menu } from 'antd'
import { HomeOutlined, DropboxOutlined, TeamOutlined, TagOutlined } from '@ant-design/icons/lib/icons'
import { useNavigate } from 'react-router-dom'

const SideMenu = () => {

    const navigate = useNavigate()

    const handleClick = (items) => {
        navigate(items.key)
    }

  return (
    <div className='sidemenu'>
        <Menu onClick={handleClick} items={[
            {
                label : "Dashboard",
                key : "/",
                icon : <HomeOutlined />,
            },
            {
                label : "Inventory",
                key : "/inventory",
                icon : <DropboxOutlined />,
            },
            {
                label : "Customers",
                key : "/customers",
                icon : <TeamOutlined />,
            },
            {
                label : "Order",
                key : "/orders",
                icon : <TagOutlined />,
            },
        ]}>




        </Menu>
    </div>
  )
}

export default SideMenu