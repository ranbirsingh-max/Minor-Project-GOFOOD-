import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
    const [orderData, setOrderData] = useState("");

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("https://go-food-minor-project.onrender.com/api/myOrderData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json();
            await setOrderData(response);
        });
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <>
            <div>
                <Navbar />
                <div className='container-fluid' style={{  backgroundImage: `url('https://static.thehoneycombers.com/wp-content/uploads/sites/2/2022/02/food-delivery-in-singapore.png')`, backgroundSize: 'cover', minHeight: '100vh', paddingTop: '80px', paddingBottom: '80px' }}>
                    <div className='row justify-content-center'>
                        {orderData.length !== 0 ? Array(orderData).map(data => {
                            return (
                                data.orderData ? data.orderData.order_data.slice(0).reverse().map((item, index) => {
                                    return (
                                        <div key={index} className='col-12 col-md-6 col-lg-4 mb-4'>
                                            <div className="card p-3 shadow" style={{ borderRadius: '10px', transition: 'transform 0.3s', backgroundColor: 'white' }}>
                                                <h5 className="card-title mb-4 text-center">Order #{item[0].Order_id}</h5>
                                                <ul className="list-group list-group-flush">
                                                    {item.map((arrayData, subIndex) => (
                                                        <li key={subIndex} className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span>{arrayData.name} - {arrayData.size}</span>
                                                            <span>Qty: {arrayData.qty}</span>
                                                            <span>₹{arrayData.price}/-</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                }) : ""
                            );
                        }) : ""}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
