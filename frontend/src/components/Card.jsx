import React, { useEffect, useState, useRef } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'; 

export default function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
    const [qty, setQty] = useState('1');
    const [size, setSize] = useState(priceOptions[0]);
    const [rating, setRating] = useState(0); 

    useEffect(() => {
        setSize(priceRef.current.value);
    }, []);

    const handleAddToCart = async () => {
        let food = null;
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item;
                break;
            }
        }
        let newQty = parseInt(qty); 
        if (food) {
            newQty = newQty + food.qty; 
        } else {
           
            console.log("Item not found in cart!");
        }

        let finalPrice = qty * parseInt(options[size]); 

        if (food) {
            if (food.size === size) {
               
                await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
            } else {
                
                await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });
            }
        } else {
          
            await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });
        }

        console.log(data);
    };

    const handleStarClick = (index) => {
       
        setRating(index + 1);
    };

    let finalPrice = qty * parseInt(options[size]);

    return (
        <div>
            <div>
                <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
                    <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)} value={qty}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1} </option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)} value={size}>
                                {priceOptions.map((data) => {
                                    return <option key={data} value={data}>{data}</option>
                                })}
                            </select>
                            <div className='d-inline fs-5'>
                                {finalPrice}/-
                            </div>
                            <div className="mt-2">
                                {/* Render star icons based on rating */}
                                {[...Array(5)].map((star, index) => {
                                    const ratingValue = index + 1;
                                    return (
                                        <span key={index} onClick={() => handleStarClick(index)}>
                                            {ratingValue <= rating ? (
                                                <AiFillStar size={24} color="#ffc107" />
                                            ) : (
                                                <AiOutlineStar size={24} color="#ffc107" />
                                            )}
                                        </span>
                                    );
                                })}
                            </div>
                            <hr></hr>
                            <button className={'btn btn-success justify-centre ms-2'} onClick={handleAddToCart}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

