import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function Main() {
  return (
    <div>
      <h1>Welcome to our website!</h1>
      <p>We offer a wide selection of products for all your needs.</p>
      <p>Our products are sourced from the highest quality materials and crafted with care to ensure their longevity and durability.</p>
      <p>Whether you're looking for something practical, like a set of kitchen utensils, or something more indulgent, like a luxury candle, we have something for everyone.</p>
      <p>Take a look around our site and explore all the wonderful things we have to offer. And don't hesitate to reach out to us if you have any questions or concerns!</p>
      <p>Thank you for choosing our products, and we hope you enjoy your shopping experience with us.</p>
    </div>
  );
}

export default Main;