import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {Cards} from "../components/Cards"

export const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search,setSearch]=useState('');

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      response = await response.json();
      setFoodItem(response[0]);
      setFoodCat(response[1]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Navbar />
       

       


      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id="carousel">
  <div className='carousel-caption' style={{zIndex:"10"}}>
  <div class="d-flex justify-content-center">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      </div>
  </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/300x300/?burger" className="d-block w-100" alt="..." style={{filter:"brightness(70%"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?pizza" className="d-block w-100" alt="..." style={{filter:"brightness(70%"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?meat" className="d-block w-100" alt="..." style={{filter:"brightness(70%"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>







      <div className="container">
        {foodCat.length > 0 ? foodCat.map((data) => (
          <div key={data._id} className="row mb-3">
            <div className="fs-3 m-3">
              {data.CategoryName}
            </div>
            <hr />
            {foodItem.length > 0 ?
              foodItem.filter((item) => (item.CategoryName === data.CategoryName)&&(item.name.toLowerCase().includes(search.toLowerCase()))).map((filterItems) => (
                <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                  <Cards foodName={filterItems.name} options={filterItems.options[0]} imgSrc={filterItems.img} description={filterItems.description} />
                </div>
              )) :
              <div>NO SUCH DATA</div>
            }
          </div>
        )) :
          <div>"""""""""""""""""""</div>
        }
      </div>
      <Footer />
    </>
  );
};
