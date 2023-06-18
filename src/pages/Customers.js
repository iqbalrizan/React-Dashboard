import React, { useEffect, useState } from 'react'
import "./Customers.scss"
import { Avatar, Table } from 'antd'

const Customers = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(data => 
      setUsers(data.users)
      )

      setLoading(false)
  }, [])


  return (
    <div className='customers'>
      <h1>Customers</h1>
      <Table columns={[
         {
          title: 'Avatar',
          dataIndex: "image",
          key: 'image',
          render : img => <Avatar src={img} />
        },
         {
          title: 'Name',
          dataIndex: "firstName",
          key: 'name',
        },
        {
          title: 'Email',
          dataIndex: "email",
          key: 'email',
        },
        {
          title: 'Phone',
          dataIndex: "phone",
          key: 'phone',
        },
        {
          title: 'Gender',
          dataIndex: "gender",
          key: 'gender',
        },
        {
          title: 'Age',
          dataIndex: "age",
          key: 'age',
        },
      ]}
      dataSource={users}
      loading={loading}
      pagination={{pageSize: 5}}
      >

      </Table>
      <br />
    </div>
  )
}

export default Customers