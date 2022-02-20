import React, { useState, useEffect } from "react";
import axios from "axios";

const TrendingFood = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
      params: { ingr: "apple" },
      headers: {
        "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
        "x-rapidapi-key": "0ed10d9209mshc2f317bdd2bc94ap12a16djsn09c9232fb7e1",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setFood(response.data.hints);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div class="wrapper dashboard Grofoo-home">
        <div id="main" className="main">
          <div id="product categories" className="categories">
            <div className="container">
              <div className="row">
                {/* ....dynamic content */}
                <div className="home-header-text">
                  <h1 className="wow fadeInDown title-top-space">
                    Trending Foods
                  </h1>
                </div>
               
                  <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",alignItems:"center",justifyContent:"center"}}>

                  
                    {food.map((food,index) => 
                      index <10 &&(
                        <div id="owl_product">
                        <div className="item">
                          <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                            <div className="food-item-wrap">
                            
                                <div
                                  className="figure-wrap bg-image"
                                  style={{
                                    background: `url(${food.food.image})  center center/cover no-repeat`,
                                    backgroundSize: "200px",
                                  }}
                                  
                                ><p>{food.food.label}</p></div>
                              
                            </div>
                          </div>
                        </div>
                        </div>
                      )
                    )}
                    </div>
                  </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default TrendingFood;
