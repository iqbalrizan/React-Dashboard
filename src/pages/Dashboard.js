import React, { useEffect, useState } from 'react'
import './Dashboard.scss'
import { Card, Col, Row, Space, Statistic, Table } from 'antd'
import { ShoppingCartOutlined, ShoppingOutlined, UserOutlined, DollarOutlined } from '@ant-design/icons'
import DashboardCard from './DashboardCard'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const Dashboard = () => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Revenue',
      },
    },
  };

 const [users, setUsers] = useState(0)
 const [orders, setOrders] = useState(0)
 const [inventory, setInventory] = useState(0)
 const [income, setIncome] = useState(0)

  const [ product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [revenue, setRevenue] = useState({
    labels : [],
    datasets : []
  })

  useEffect(() => {
    setLoading(true)
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(json => 
      setProduct(json.products.splice(0, 5)),
      )

      // fetching chart

      fetch('https://dummyjson.com/carts')
      .then(res => res.json())
      .then(res => {
        const labels = res.carts.map((item) => {
          return `No-${item.userId}`
        })
        const data = res.carts.map((item) => {
          return item.discountedTotal
        })
        
        const dataSource = {
          labels,
          datasets: [
            {
              label: 'Revenue',
              data: data,
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],
        };

        setRevenue(dataSource)

      })


      

      setLoading(false)

  }, [])

  console.log(product)


  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <Space direction='horizontal' className='dashboardspace' >
     <DashboardCard value={1526} title="orders" prefix={<ShoppingOutlined />}/>
     <DashboardCard value={inventory} title="inventory"  prefix={<ShoppingCartOutlined />}/>
     <DashboardCard value={37128} title="customers"  prefix={<UserOutlined  />}/>
     <DashboardCard value={73289} title="revenue"  prefix={<DollarOutlined />}/>
      </Space>
      <h2>Recent Products</h2>
      <br />
      <Row>
        <Col span={12}>
        <Table columns={[
         {
          title: 'Name',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Stock',
          dataIndex: 'stock',
          key: 'stock',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
      ]} 
      dataSource={product}
      pagination={false}
      loading={loading}
      >
      </Table>
        </Col>
        <Col span={12}>
          <Card style={{ width:"500px", height: "350px"}}>
        <Bar options={options} data={revenue} className='bar'/>
          </Card>

        </Col>
      </Row>
      
     
    </div>
  )
}

export default Dashboard