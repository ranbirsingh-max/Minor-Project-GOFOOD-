import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loginSuccess, setLoginSuccess] = useState(false); // State for tracking login success
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://minor-project-gofood-2.onrender.com/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      setLoginSuccess(true); // Set login success state to true
      setTimeout(() => {
        setLoginSuccess(false); // Hide pop-up after 3 seconds
        navigate("/"); // Redirect to home page
      }, 3000);
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div style={{
      backgroundImage: 'url(https://img.freepik.com/free-photo/spices-black-background-space-text_169016-3118.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1711929600&semt=ais)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      backgroundBlendMode: 'overlay'
    }}>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Lighter black background
        padding: '2rem',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        width: '100%',
        maxWidth: '400px',
        animation: 'fadeIn 1s ease-in-out',
        position: 'relative'
      }}>
        {loginSuccess && ( // Conditional rendering for the pop-up message
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#28a745',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '5px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            animation: 'fadeIn 0.5s ease-in-out'
          }}>
            Login Successful!
          </div>
        )}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="mb-3" style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: 'white', fontWeight: 'bold', marginBottom: '0.5rem' }}>Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} style={{
              border: '2px solid #ced4da',
              borderRadius: '5px',
              padding: '0.75rem',
              fontSize: '1rem',
              color: 'white' // Text color changed to white
            }} />
            <div id="emailHelp" className="form-text" style={{ color: '#6c757d', marginTop: '0.5rem' }}>We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3" style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: 'white', fontWeight: 'bold', marginBottom: '0.5rem' }}>Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} style={{
              border: '2px solid #ced4da',
              borderRadius: '5px',
              padding: '0.75rem',
              fontSize: '1rem',
              color: 'Black' // Text color changed to white
            }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button type="submit" className="m-3 btn" style={{
              flex: '1',
              padding: '0.75rem',
              fontSize: '1.1rem',
              backgroundImage: 'linear-gradient(90deg, #ff8a00, #e52e71)',
              border: 'none',
              borderRadius: '5px',
              color: 'white',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>Submit</button>
            <Link to="/createuser" className="m-3 btn" style={{
              flex: '1',
              padding: '0.75rem',
              fontSize: '1.1rem',
              backgroundImage: 'linear-gradient(90deg, #11998e, #38ef7d)',
              border: 'none',
              borderRadius: '5px',
              color: 'white',
              textAlign: 'center',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>I'm a new user</Link>
          </div>
        </form>
      
      </div>
    </div>
  );
}


