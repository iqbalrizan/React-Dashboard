import React from 'react'
import { Card, Space, Statistic } from 'antd'
import { LikeOutlined } from '@ant-design/icons'

const DashboardCard = ({value, prefix, title}) => {
  return (
    <div>
         <Card>
      <Statistic value={value} prefix={prefix} title={title}>
      </Statistic>
      </Card>
    </div>
  )
}

export default DashboardCard