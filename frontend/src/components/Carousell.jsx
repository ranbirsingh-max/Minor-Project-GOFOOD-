import React from 'react';

export default function Carousell() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain ! important"}}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner" id ='xxy'>
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
      </form>
    </div>
  );
}

