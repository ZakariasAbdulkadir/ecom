import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

const routes = [
    {
      path: "/",
      element: <HomeScreen/>,
    },
    {
      path: "/page/:pageNumber",
      element: <HomeScreen />
    },
    {
      path: "/admin/productlist",
      element: <ProductScreen />
    }
  ];

export default routes