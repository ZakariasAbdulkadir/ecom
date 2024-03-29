import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Product from '../components/Product'
import Header from '../components/Header'

const HomeScreen = () => {
  const { keyword } = useParams()

  const data = [
    {
      id: 1,
      name: 'Airpods Wireless Bluetooth Headphones',
      image: '/images/airpods.jpg',
      brand: 'Apple',
      category: 'Electronics',
      description:
        'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
      rating: 4.45,
      price: 89.99,
    },
  ]
  return (
    <>
      
      <>
        <Header />
        <h1>Latest Products</h1>
        <Row>
          {data.map(product => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </>
    </>
  )
}

export default HomeScreen
