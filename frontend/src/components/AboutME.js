import React from 'react';

import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    
    <div  style={{
      backgroundImage: 'url(https://st3.depositphotos.com/2853475/13070/i/450/depositphotos_130708954-stock-photo-group-of-friends-eating-outdoor.jpg)',
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
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '2rem',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        width: '100%',
        maxWidth: '800px',
        animation: 'fadeIn 1s ease-in-out'
      }}>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'green' }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic text-white fw-bold" to="/">GOFOOD</Link>
          <button className="btn btn-light" onClick={() => window.history.back()} style={{ marginLeft: 'auto' }}>BACK</button>
        </div>
      </nav>

        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '30px', color: 'white' }}>Welcome to [GOFOOD]!</h1>
        <p style={{ margin: '20px 0', textAlign: 'justify', fontSize: '1.1rem', color: 'white' }}>
          At [GOFOOD], we believe in the power of community and the joy of sharing delicious meals. Our platform was born out of a simple yet powerful idea: to connect people through food, fostering a sense of belonging, generosity, and culinary adventure.
        </p>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: 'white' }}>Our Mission</h2>
        <p style={{ margin: '20px 0', textAlign: 'justify', fontSize: '1.1rem', color: 'white' }}>
          Our mission is to reduce food waste, promote sustainability, and build stronger communities by facilitating the sharing of surplus food among neighbors, friends, and fellow food enthusiasts. We envision a world where every meal is shared, appreciated, and enjoyed to its fullest potential.
        </p>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: 'white' }}>How It Works</h2>
        <p style={{ margin: '20px 0', textAlign: 'justify', fontSize: '1.1rem', color: 'white' }}>
          [GOFOOD] provides a user-friendly platform where individuals, families, and businesses can share excess food with others in their community. Whether you have leftovers from a dinner party, a surplus of produce from your garden, or unopened packaged goods nearing their expiration date, our platform makes it easy to connect with those in need of a good meal.
        </p>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: 'white' }}>Why Choose Us</h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          <div style={{ flex: '1', padding: '0 10px', textAlign: 'justify' }}>
            <p style={{ marginBottom: '10px', fontSize: '1.1rem', color: 'white' }}><strong>Community-Focused:</strong> We prioritize building meaningful connections and fostering a sense of community among our users.</p>
            <p style={{ fontSize: '1.1rem', color: 'white' }}><strong>Sustainability:</strong> By sharing food, we reduce food waste and minimize our environmental footprint.</p>
          </div>
          <div style={{ flex: '1', padding: '0 10px', textAlign: 'justify' }}>
            <p style={{ marginBottom: '10px', fontSize: '1.1rem', color: 'white' }}><strong>Convenience:</strong> Our platform is designed to be simple and intuitive, making it easy for users to share and find food offerings in their area.</p>
            <p style={{ fontSize: '1.1rem', color: 'white' }}><strong>Safety and Trust:</strong> We prioritize the safety and well-being of our users, implementing measures to ensure a secure and trustworthy sharing experience.</p>
          </div>
        </div>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: 'white' }}>Join Us Today</h2>
        <p style={{ margin: '20px 0', textAlign: 'justify', fontSize: '1.1rem', color: 'white' }}>
          Whether you're passionate about reducing food waste, eager to connect with your neighbors, or simply love the idea of sharing delicious meals, we invite you to join the [Your Food Sharing Platform Name] community today. Together, let's make a positive impact one meal at a time.
        </p>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: 'white' }}>Contact Us</h2>
        <p style={{ margin: '20px 0', textAlign: 'justify', fontSize: '1.1rem', color: 'white' }}>
          Have questions or feedback? We'd love to hear from you! Reach out to our team at [Contact Email or Phone Number] and let's chat.
        </p>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: 'white' }}>Connect With Us</h2>
        {/* Add social media links or icons here */}
      </div>
   
    </div>
    
  );
};

export default AboutPage;


