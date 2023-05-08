import { Route, NavLink, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useFetch } from '../src/hooks/useFetch';
import './index.css';
import React from 'react';

function Home() {
  return (
    <div class="homepg">
      <h1 class="h1hm">👋Welcome👋</h1>
      <div class="texthm">
        <h1>Welcome to our website!</h1>
        <p>We offer a wide selection of products for all your needs.</p>
        <p>Our products are sourced from the highest quality materials and crafted with care to ensure their longevity and durability.</p>
        <p>Whether you're looking for something practical, like a set of kitchen utensils, or something more indulgent, like a luxury candle, we have something for everyone.</p>
        <p>Take a look around our site and explore all the wonderful things we have to offer. And don't hesitate to reach out to us if you have any questions or concerns!</p>
        <p>Thank you for choosing our products, and we hope you enjoy your shopping experience with us.</p>
      </div>
    </div>
  );
}

function Products() {
  const { data, loading, error } = useFetch('products');
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <h1 class="lsheading">📜Item List📜</h1>      
      <div class="list">
        {data.map(product => (
          <div class="itemnum" key={product.id}>
            <NavLink to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

const ProductDetail = () => {
  const { productId } = useParams();
  const history = useHistory();
  const { isLoading, data: product, error } = useFetch(`/api/products/${productId}`);

  // Handle error
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Render loading indicator if data is still loading
  if (isLoading || !product) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <button onClick={() => history.goBack()}>Назад</button>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div>
        <nav>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink exact activeClassName="active" to="/">
          💮 
          </NavLink>
          <NavLink activeClassName="active" to="/products">
            Products
          </NavLink>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;