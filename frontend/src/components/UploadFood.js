import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UploadFood = () => {
  const [foodData, setFoodData] = useState({
    username: '',
    contact: '',
    CategoryName: '',
    name: '',
    img: '',
    options: {
      half: '',
      full: '',
      regular: '',
      medium: '',
      large: ''
    },
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in foodData.options) {
      setFoodData(prevState => ({
        ...prevState,
        options: {
          ...prevState.options,
          [name]: value
        }
      }));
    } else {
      setFoodData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://go-food-minor-project.onrender.com/api/upload', foodData);
      console.log(response.data);
      setFoodData({
        username: '',
        contact: '',
        CategoryName: '',
        name: '',
        img: '',
        options: {
          half: '',
          full: '',
          regular: '',
          medium: '',
          large: ''
        },
        description: ''
      });
      alert('Food item inserted successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to insert food item');
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'green' }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic text-white fw-bold" to="/">GOFOOD</Link>
          <button className="btn btn-light" onClick={() => window.history.back()} style={{ marginLeft: 'auto' }}>BACK</button>
        </div>
      </nav>

      <div style={{ 
        backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/013/353/222/original/caring-male-volunteer-give-box-with-food-to-unhappy-poor-person-outdoors-kind-man-activist-share-products-and-supplies-with-homeless-needy-people-on-streets-charity-concept-illustration-free-vector.jpg")',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '70px 0'
      }}>
        <div style={{ 
          textAlign: 'center', 
          padding: '30px', 
          borderRadius: '10px', 
          backgroundColor: 'rgba(0, 0, 0, 0.85)', 
          color: '#FFF',
          maxWidth: '600px', 
          width: '100%',
          maxHeight: '80vh',
          overflowY: 'auto'
        }}>
          <h2 style={{ 
            marginBottom: '20px', 
            textTransform: 'uppercase', 
            fontSize: '24px', 
            fontWeight: 'bold' 
          }}>Insert Food Item</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Username and Contact Section */}
            <div style={{ 
              marginBottom: '20px', 
              width: '100%', 
              backgroundColor: '#444', 
              padding: '20px', 
              borderRadius: '10px', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ 
                marginBottom: '15px', 
                fontWeight: 'bold', 
                color: '#FFF' 
              }}>User Information</h3>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ 
                  fontWeight: 'bold', 
                  marginBottom: '5px', 
                  fontSize: '18px', 
                  display: 'block' 
                }}>Username:</label>
                <input type="text" name="username" value={foodData.username} onChange={handleChange} required style={{ 
                  padding: '10px', 
                  borderRadius: '5px', 
                  border: '1px solid #ccc', 
                  width: '100%', 
                  backgroundColor: '#333', 
                  color: '#FFF', 
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
                }} />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ 
                  fontWeight: 'bold', 
                  marginBottom: '5px', 
                  fontSize: '18px', 
                  display: 'block' 
                }}>Contact:</label>
                <input type="text" name="contact" value={foodData.contact} onChange={handleChange} required style={{ 
                  padding: '10px', 
                  borderRadius: '5px', 
                  border: '1px solid #ccc', 
                  width: '100%', 
                  backgroundColor: '#333', 
                  color: '#FFF', 
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
                }} />
              </div>
            </div>
            {/* Food Details Section */}
            <div style={{ 
              marginBottom: '20px', 
              width: '100%', 
              backgroundColor: '#555', 
              padding: '20px', 
              borderRadius: '10px', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ 
                marginBottom: '15px', 
                fontWeight: 'bold', 
                color: '#FFF' 
              }}>Food Details</h3>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ 
                  fontWeight: 'bold', 
                  marginBottom: '5px', 
                  fontSize: '18px', 
                  display: 'block' 
                }}>Category Name:</label>
                <input type="text" name="CategoryName" value={foodData.CategoryName} onChange={handleChange} required style={{ 
                  padding: '10px', 
                  borderRadius: '5px', 
                  border: '1px solid #ccc', 
                  width: '100%', 
                  backgroundColor: '#333', 
                  color: '#FFF', 
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
                }} />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ 
                  fontWeight: 'bold', 
                  marginBottom: '5px', 
                  fontSize: '18px', 
                  display: 'block' 
                }}>Name:</label>
                <input type="text" name="name"                 value={foodData.name} onChange={handleChange} required style={{ 
                  padding: '10px', 
                  borderRadius: '5px', 
                  border: '1px solid #ccc', 
                  width: '100%', 
                  backgroundColor: '#333', 
                  color: '#FFF', 
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
                }} />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ 
                  fontWeight: 'bold', 
                  marginBottom: '5px', 
                  fontSize: '18px', 
                  display: 'block' 
                }}>Image URL:</label>
                <input type="text" name="img" value={foodData.img} onChange={handleChange} required style={{ 
                  padding: '10px', 
                  borderRadius: '5px', 
                  border: '1px solid #ccc', 
                  width: '100%', 
                  backgroundColor: '#333', 
                  color: '#FFF', 
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
                }} />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ 
                  fontWeight: 'bold', 
                  marginBottom: '5px', 
                  fontSize: '18px', 
                  display: 'block' 
                }}>Options:</label>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <input type="text" name="half" value={foodData.options.half} onChange={handleChange} placeholder="Half Price" style={{ 
                    padding: '10px', 
                    borderRadius: '5px', 
                    border: '1px solid #ccc', 
                    width: 'calc(50% - 5px)', 
                    marginBottom: '10px', 
                    backgroundColor: '#333', 
                    color: '#FFF', 
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
                  }} />
                  <input type="text" name="full" value={foodData.options.full} onChange={handleChange} placeholder="Full Price" style={{ 
                    padding: '10px', 
                    borderRadius: '5px', 
                    border: '1px solid #ccc', 
                    width: 'calc(50% - 5px)', 
                    marginBottom: '10px', 
                    marginLeft: '10px', 
                    backgroundColor: '#333', 
                    color: '#FFF', 
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
                  }} />
                  <input type="text" name="regular" value={foodData.options.regular} onChange={handleChange} placeholder="Regular Price" style={{ 
                    padding: '10px', 
                    borderRadius: '5px', 
                    border: '1px solid #ccc', 
                    width: 'calc(50% - 5px)', 
                    marginBottom: '10px', 
                    backgroundColor: '#333', 
                    color: '#FFF', 
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
                  }} />
                  <input type="text" name="medium" value={foodData.options.medium} onChange={handleChange} placeholder="Medium Price" style={{ 
                    padding: '10px', 
                    borderRadius: '5px', 
                    border: '1px solid #ccc', 
                    width: 'calc(50% - 5px)', 
                    marginBottom: '10px', 
                    marginLeft: '10px', 
                    backgroundColor: '#333', 
                    color: '#FFF', 
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
                  }} />
                  <input type="text" name="large" value={foodData.options.large} onChange={handleChange} placeholder="Large Price" style={{ 
                    padding: '10px', 
                    borderRadius: '5px', 
                    border: '1px solid #ccc', 
                    width: 'calc(50% - 5px)', 
                    marginBottom: '10px', 
                    backgroundColor: '#333', 
                    color: '#FFF', 
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
                  }} />
                </div>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ 
                  fontWeight: 'bold', 
                  marginBottom: '5px', 
                  fontSize: '18px', 
                  display: 'block' 
                }}>Description:</label>
                <textarea name="description" value={foodData.description} onChange={handleChange} required style={{ 
                  padding: '10px', 
                  borderRadius: '5px', 
                  border: '1px solid #ccc', 
                  width: '100%', 
                  height: '100px', 
                  backgroundColor: '#333', 
                  color: '#FFF', 
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
                }}></textarea>
              </div>
            </div>
            <button type="submit" style={{ 
              padding: '15px 30px', 
              borderRadius: '5px', 
              border: 'none', 
              backgroundColor: '#28a745', 
              color: 'white', 
              cursor: 'pointer', 
              fontSize: '18px', 
              fontWeight: 'bold',
              textTransform: 'uppercase',
              transition: 'background-color 0.3s ease-in-out',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              marginTop: '20px'
            }}>Insert Food</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadFood;

