import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
    const [signupSuccess, setSignupSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://go-food-minor-project.onrender.com/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                location: credentials.geolocation
            })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            setSignupSuccess(true);
            setCredentials({ name: "", email: "", password: "", geolocation: "" });
        } else {
            alert("Enter Valid Credentials");
        }
    }

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    }

    return (
        <div style={{
            backgroundImage: 'url(https://t4.ftcdn.net/jpg/02/92/20/37/360_F_292203735_CSsyqyS6A4Z9Czd4Msf7qZEhoxjpzZl1.jpg)',
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
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                width: '100%',
                maxWidth: '400px',
                animation: 'fadeIn 1s ease-in-out',
                position: 'relative'
            }}>
                {signupSuccess && (
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
                        Signup Successful!
                    </div>
                )}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="mb-3" style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="name" className="form-label" style={{ color: 'white', fontWeight: 'bold', marginBottom: '0.5rem' }}>Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} style={{
                            border: '2px solid #ced4da',
                            borderRadius: '5px',
                            padding: '0.75rem',
                            fontSize: '1rem'
                        }} />
                    </div>
                    <div className="mb-3" style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: 'white', fontWeight: 'bold', marginBottom: '0.5rem' }}>Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} style={{
                            border: '2px solid #ced4da',
                            borderRadius: '5px',
                            padding: '0.75rem',
                            fontSize: '1rem'
                        }} />
                        <div id="emailHelp" className="form-text" style={{ color: '#6c757d', marginTop: '0.5rem' }}>We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3" style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: 'white', fontWeight: 'bold', marginBottom: '0.5rem' }}>Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} style={{
                            border: '2px solid #ced4da',
                            borderRadius: '5px',
                            padding: '0.75rem',
                            fontSize: '1rem'
                        }} />
                    </div>
                    <div className="mb-3" style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: 'white', fontWeight: 'bold', marginBottom: '0.5rem' }}>Address</label>
                        <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} style={{
                            border: '2px solid #ced4da',
                            borderRadius: '5px',
                            padding: '0.75rem',
                            fontSize: '1rem'
                        }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button type="submit" className="m-3 btn" style={{
                            flex: '1',
                            padding: '0.75rem',
                            fontSize: '1.1rem',
                            background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                            border: 'none',
                            borderRadius: '5px',
                            color: 'white',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                        }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>Submit</button>
                        <Link to="/login" className='m-3 btn' style={{
                            flex: '1',
                            padding: '0.75rem',
                            fontSize: '1.1rem',
                            background: 'linear-gradient(90deg, #11998e, #38ef7d)',
                            border: 'none',
                            borderRadius: '5px',
                            color: 'white',
                            textAlign: 'center',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                          }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>Already a user</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
