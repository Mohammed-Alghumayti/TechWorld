import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleBuy = () => {
    // Dispatch an action to increment the cart count
    dispatch({ type: 'INCREMENT_CART_COUNT' });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-blue">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img height={130} src={`${process.env.PUBLIC_URL}/images/tech-world.png`} alt="Logo" /></Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav fw-bold ">
            <li className="nav-item ">
              <Link className="nav-link text-light" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/books">Books</Link>
            </li>
          </ul>
        </div>
        <div className="d-flex ">
          <Link to="/cart" className="nav-link fs-5 ">
            <FaShoppingCart />
            <span className="badge bg-danger ms-2">{cartItems.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
