import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';

export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  const [hovered, setHovered] = useState(null);
  let data = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const navbarStyles = {
    backgroundColor: '#28a745',
    padding: '1rem 1.5rem',
    transition: 'background-color 0.3s ease-in-out',
  };

  const brandStyles = {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    color: '#ffffff',
    fontWeight: 'bold',
    transition: 'color 0.3s ease-in-out',
  };

  const linkStyles = {
    color: '#ffffff',
    fontSize: '1.125rem',
    transition: 'color 0.3s ease-in-out',
  };

  const buttonStyles = (hovered, baseColor, hoverColor) => ({
    backgroundColor: hovered ? hoverColor : baseColor,
    color: hovered ? '#ffffff' : '#28a745',
    border: 'none',
    margin: '0 0.5rem',
    padding: '0.5rem 1rem',
    transition: 'background-color 0.3s, color 0.3s',
    cursor: 'pointer',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
  });

  const buttonDangerStyles = (hovered) => ({
    ...buttonStyles(hovered, '#ffffff', '#dc3545'),
    color: hovered ? '#ffffff' : '#dc3545',
  });

  const buttonPrimaryStyles = (hovered) => ({
    ...buttonStyles(hovered, '#ffffff', '#007bff'),
    color: hovered ? '#ffffff' : '#007bff',
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyles}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={brandStyles}>GOFOOD</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={linkStyles}>Home</Link>
            </li>
            {localStorage.getItem("authToken") && (
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/myOrder" style={linkStyles}>My Orders</Link>
              </li>
            )}
          </ul>
          <div className="d-flex">
            {localStorage.getItem("authToken") ? (
              <>
                <button
                  className="btn"
                  style={buttonStyles(hovered === 'cart', '#ffffff', '#28a745')}
                  onClick={() => setCartView(true)}
                  onMouseEnter={() => setHovered('cart')}
                  onMouseLeave={() => setHovered(null)}
                >
                  My Cart <Badge pill bg="danger">{data.length}</Badge>
                </button>
                <button
                  className="btn"
                  style={buttonDangerStyles(hovered === 'logout')}
                  onClick={handleLogout}
                  onMouseEnter={() => setHovered('logout')}
                  onMouseLeave={() => setHovered(null)}
                >
                  Logout
                </button>
                <Link
                  className="btn"
                  to="/upload"
                  style={buttonStyles(hovered === 'upload', '#ffffff', '#28a745')}
                  onMouseEnter={() => setHovered('upload')}
                  onMouseLeave={() => setHovered(null)}
                >
                  Upload Food
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="btn"
                  to="/login"
                  style={buttonStyles(hovered === 'login', '#ffffff', '#28a745')}
                  onMouseEnter={() => setHovered('login')}
                  onMouseLeave={() => setHovered(null)}
                >
                  Login
                </Link>
                <Link
                  className="btn"
                  to="/createuser"
                  style={buttonStyles(hovered === 'signup', '#ffffff', '#28a745')}
                  onMouseEnter={() => setHovered('signup')}
                  onMouseLeave={() => setHovered(null)}
                >
                  Signup
                </Link>
                <Link
                  className="btn"
                  to="/about"
                  style={buttonPrimaryStyles(hovered === 'about')}
                  onMouseEnter={() => setHovered('about')}
                  onMouseLeave={() => setHovered(null)}
                >
                  About
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      {cartView && <Modal onClose={() => setCartView(false)}><Cart /></Modal>}
    </nav>
  );
}
