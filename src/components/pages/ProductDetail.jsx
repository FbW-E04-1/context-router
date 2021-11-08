import { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import MyContext from '../../context/MyContext';

const ProductDetail = () => {
  const context = useContext(MyContext);
  const { auth } = context;

  const navigate = useNavigate();
  const location = useLocation();
  const { title, thumbnailUrl } = location.state;

  console.log(location);

  useEffect(() => {
    !auth && navigate('/', { replace: true });
  }, [auth, navigate]);

  return (
    <section className='details'>
      <p>{title}</p>
      <img src={thumbnailUrl} alt={title} />
      <button onClick={() => navigate('/products')}>Return</button>
    </section>
  );
};

export default ProductDetail;
