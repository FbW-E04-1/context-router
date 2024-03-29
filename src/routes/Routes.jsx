import {
  HashRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import MyProvider from '../context/MyProvider';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Products from '../components/pages/Products';
import ProductDetail from '../components/pages/ProductDetail';
import NestedRoute from '../components/pages/NestedRoute';
import NotFound404 from '../components/pages/NotFound404';

const Routes = () => (
  <MyProvider>
    <Router>
      <Header />
      <Switch>
        <Route path='/' element={<Home />} />

        <Route path='/about/*' element={<About />}>
          <Route path='nested-route' element={<NestedRoute />} />
        </Route>

        <Route path='/products' element={<Products />} />
        <Route path='/product-detail' element={<ProductDetail />} />
        <Route path='*' element={<NotFound404 />} />
      </Switch>
      <Footer />
    </Router>
  </MyProvider>
);

export default Routes;
