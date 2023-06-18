import { Table } from 'antd'
import React, { useState } from 'react'
import "./Orders.scss"
import { useEffect } from 'react'

const Orders = () => {

  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("https://dummyjson.com/carts/1")
    .then( res => res.json())
    .then(data => 
      setOrders(data.products)
      )





    setLoading(false)
  }, [])



  return (
    <div className='orders'>
      <h1>Orders</h1>
      <Table columns={[
         {
          title: 'Name',
          dataIndex: "title",
          key: 'title',
        },
        {
          title: 'Total',
          dataIndex: 'total',
          key: 'total',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
          render : price => `$${price}`
        },
        {
          title: 'Quantity',
          dataIndex: 'quantity',
          key: 'quantity',
        },
      ]}
      dataSource={orders}
      loading={loading}
      pagination={false}
      >

      </Table>
      <br />
      <br />
    </div>
  )
}

export default Orders