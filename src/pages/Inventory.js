import React, { useState } from 'react'
import "./Inventory.scss"
import { Avatar, Rate, Table } from 'antd'
import { useEffect } from 'react'

const Inventory = () => {

  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(res => {
      setProduct(res.products)
    })

    


    setLoading(false)
  }, [])



  return (
    <div className='inventory'>
      <h1>Inventory</h1>
      <Table  columns={[
         {
          title: 'Thumbnail',
          dataIndex: 'thumbnail',
          key: 'thumbnail',
          render : image => <Avatar src={image}/>
        },
        {
          title: 'Name',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
          render : price => `$${price}`
        },
        {
          title: 'Rating',
          dataIndex: 'rating',
          key: 'rating',
          render : rate => <Rate allowHalf disabled value={rate}/>
        },
        {
          title: 'Stock',
          dataIndex: 'stock',
          key: 'stock',
        },
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
        },
      ]} 
      dataSource={product}
      loading={loading}
      pagination={{pageSize : 5}}
      >


      </Table>
    </div>
  )
}

export default Inventory