import { Table, Button, Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

const ProductListScreen = () => {
  const { pageNumber } = useParams();

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
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-end'>
        <form>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <label>
            Price:
            <input type="text" name="name" />
        </label>
        <label>
            Category:
            <input type="text" name="name" />
        </label>
        <label>
            Brand:
            <input type="text" name="name" />
        </label>
        <button>Create Product</button>
        </form>
          
        </Col>
      </Row>
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <Link to={`/admin/product/${product.id}/edit`}>
                      <Button variant='light' className='btn-sm mx-2'>
                        Edit
                        </Button>
                    </Link>
                    <Button
                      variant='danger'
                      className='btn-sm'
                    
                    >
                        delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
    </>
  );
};

export default ProductListScreen;
