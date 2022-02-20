import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div class="wrapper dashboard Grofoo-home">
        <div id="main" className="main">
          <div className="hero">
            <div className="container text-center hero-text font-white s_box">
              <div className="row">
                <div className="Home-logo-icon">
                  <img src="assets/images/home_icon_logo.png" />
                </div>
                <h5 className="header_white">
                  Discover
                  <span className="clr_green">food</span> or
                  <span className="clr_orange">grocery</span>
                  <br />
                  near by you
                </h5>
                <div className="banner-form">
                  <form className="form-inline">
                    <div className="form-group">
                      <div className="home-bg-icon"></div>
                      <i className="ion-ios-search-strong icon-search"></i>
                      <input
                        type="text"
                        className="form-control form-control-lg input_box"
                        id="exampleInputAmount"
                        placeholder="Enter food or grocery"
                      />
                      <div className="can-toggle demo-rebrand-1">
                        <input id="d" type="checkbox" />
                        <label for="d">
                          <div
                            className="can-toggle__switch"
                            data-checked="Grocery"
                            data-unchecked="Food"
                          ></div>
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div id="product categories" className="categories">
            <div className="container">
              <div className="row">
                <div className="home-header-text">
                  <h1 className="wow fadeInDown">Categories</h1>
                </div>

                <div id="owl_brand" className="categories_box">
                  <div className="item">
                    <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                      <div className="food-item-wrap">
                        <Link to="/">
                        <div
                            className="figure-wrap-brand bg-image"
                            style={{
                              background: `url('assets/images/Beverages.png') center center/cover no-repeat`,
                              backgroundSize: "contain",
                            }}
                          ></div>
                          <div className="content">
                            <a href="search_list_new.html">Beverages</a>
                          </div></Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                      <div className="food-item-wrap">
                        <a href="search_list_new.html">
                          <div
                            className="figure-wrap-brand bg-image"
                            style={{
                              background: `url('assets/images/Canned_and_Packaged.png') center center/cover no-repeat`,
                              backgroundSize: "contain",
                            }}
                          ></div>
                          <div className="content">
                            <a href="search_list_new.html">Canned & Packaged</a>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                      <div className="food-item-wrap">
                        <a href="search_list_new.html">
                          <div
                            className="figure-wrap-brand bg-image"
                            style={{
                              background: `url('assets/images/Condiments.png') center center/cover no-repeat`,
                              backgroundSize: "contain",
                            }}
                          ></div>
                          <div className="content">
                            <a href="search_list_new.html">Condiments</a>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                      <div className="food-item-wrap">
                        <a href="search_list_new.html">
                          <div
                            className="figure-wrap-brand bg-image"
                            style={{
                              background: `url('assets/images/Festival.png') center center/cover no-repeat`,
                              backgroundSize: "contain",
                            }}
                          ></div>
                          <div className="content">
                            <a href="search_list_new.html">Festival</a>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                      <div className="food-item-wrap">
                        <a href="search_list_new.html">
                          <div
                            className="figure-wrap-brand bg-image"
                            style={{
                              background: `url('assets/images/Freezer_Foods.png') center center/cover no-repeat`,
                              backgroundSize: "contain",
                            }}
                          ></div>
                          <div className="content">
                            <a href="search_list_new.html">Freezer & Foods</a>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                      <div className="food-item-wrap">
                        <a href="search_list_new.html">
                          <div
                            className="figure-wrap-brand bg-image"
                            style={{
                              background: `url('assets/images/Groceries.png') center center/cover no-repeat`,
                              backgroundSize: "contain",
                            }}
                          ></div>
                          <div className="content">
                            <a href="search_list_new.html">Groceries</a>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                      <div className="food-item-wrap">
                        <a href="search_list_new.html">
                          <div
                            className="figure-wrap-brand bg-image"
                            style={{
                              background: `url('assets/images/Health_Beauty.png') center center/cover no-repeat`,
                              backgroundSize: "contain",
                            }}
                          ></div>
                          <div className="content">
                            <a href="search_list_new.html">Health & Beauty</a>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                      <div className="food-item-wrap">
                        <a href="search_list_new.html">
                          <div
                            className="figure-wrap-brand bg-image"
                            style={{
                              background: `url('assets/images/Instant_Food.png') center center/cover no-repeat`,
                              backgroundSize: "contain",
                            }}
                          ></div>
                          <div className="content">
                            <a href="search_list_new.html">Instant Food</a>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                      <div className="food-item-wrap">
                        <a href="search_list_new.html">
                          <div
                            className="figure-wrap-brand bg-image"
                            style={{
                              background: `url('assets/images/kitchen.png') center center/cover no-repeat`,
                              backgroundSize: "contain",
                            }}
                          ></div>
                          <div className="content">
                            <a href="search_list_new.html">kitchen</a>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="home-header-text">
                  <h1 className="wow fadeInDown title-top-space">
                    Trending Grocery
                  </h1>
                </div>
                <div id="owl_trending_items">
                  <div className="item">
                    <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                      <div className="food-item-wrap">
                        <div
                          className="figure-wrap bg-image"
                          style={{
                            background: `url('assets/images/23664a.jpg') center center/cover no-repeat`,
                            backgroundSize: "200px",
                          }}
                        >
                          <div className="treding">
                            <a href="#" className="treding-icon">
                              <i className="ion-android-share-alt group_icon"></i>
                              12K
                            </a>
                            <a href="#" className="treding-icon">
                              <i className="ion-eye group_icon"></i>12K
                            </a>
                            <a href="#" className="treding-icon">
                              <i className="ion-bag group_icon"></i>12K
                            </a>
                          </div>
                          <div className="review pull-right">
                            <a href="#" className="treding-icon">
                              <i className="ion-ios-star-outline group_icon"></i>
                              12K
                            </a>
                            <a href="#" className="treding-icon">
                              <i className="ion-ios-chatbubble-outline group_icon"></i>
                              12K
                            </a>
                          </div>
                        </div>
                        <div className="content">
                          <h5>
                            <a href="product_page.html">
                              Aashirvaad Shudh Chakki Whole Wheat Atta
                            </a>
                          </h5>
                          <div className="product-name">12 KG </div>
                          <div className="price-btn-block">
                            <span className="price_cut">Rs 15,99</span>
                            <span className="price">Rs 15,99</span>
                            <a href="#" className="theme-btn-dash pull-right">
                              <i className="ion-ios-cart-outline"></i> Add to
                              cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                      <div className="food-item-wrap">
                        <div
                          className="figure-wrap bg-image"
                          style={{
                            background: `url('assets/images/124472a.jpg') center center/cover no-repeat`,
                            backgroundSize: "200px",
                          }}
                        >
                          <div className="treding">
                            <a href="#" className="treding-icon">
                              <i className="ion-android-share-alt group_icon"></i>
                              12K
                            </a>
                            <a href="#" className="treding-icon">
                              <i className="ion-eye group_icon"></i>12K
                            </a>
                            <a href="#" className="treding-icon">
                              <i className="ion-bag group_icon"></i>12K
                            </a>
                          </div>
                          <div className="review pull-right">
                            <a href="#" className="treding-icon">
                              <i className="ion-ios-star-outline group_icon"></i>
                              12K
                            </a>
                            <a href="#" className="treding-icon">
                              <i className="ion-ios-chatbubble-outline group_icon"></i>
                              12K
                            </a>
                          </div>
                        </div>
                        <div className="content">
                          <h5>
                            <a href="product_page.html">Grain And Oil Seed</a>
                          </h5>
                          <div className="product-name">12 KG </div>
                          <div className="price-btn-block">
                            <span className="price_cut">Rs 15,99</span>
                            <span className="price">Rs 15,99</span>
                            <a href="#" className="theme-btn-dash pull-right">
                              <i className="ion-ios-cart-outline"></i> Add to
                              cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                      <div className="food-item-wrap">
                        <div
                          className="figure-wrap bg-image"
                          style={{
                            background: `url('assets/images/pro_14626.jpg') center center/cover no-repeat`,
                            backgroundSize: "200px",
                          }}
                        >
                          <div className="treding">
                            <a href="#" className="treding-icon">
                              <i className="ion-android-share-alt group_icon"></i>
                              12K
                            </a>
                            <a href="#" className="treding-icon">
                              <i className="ion-eye group_icon"></i>12K
                            </a>
                            <a href="#" className="treding-icon">
                              <i className="ion-bag group_icon"></i>12K
                            </a>
                          </div>
                          <div className="review pull-right">
                            <a href="#" className="treding-icon">
                              <i className="ion-ios-star-outline group_icon"></i>
                              12K
                            </a>
                            <a href="#" className="treding-icon">
                              <i className="ion-ios-chatbubble-outline group_icon"></i>
                              12K
                            </a>
                          </div>
                        </div>
                        <div className="content">
                          <h5>
                            <a href="product_page.html">Organic Produce</a>
                          </h5>
                          <div className="product-name">12 KG </div>
                          <div className="price-btn-block">
                            <span className="price_cut">Rs 15,99</span>
                            <span className="price">Rs 15,99</span>
                            <a href="#" className="theme-btn-dash pull-right">
                              <i className="ion-ios-cart-outline"></i> Add to
                              cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                      <div className="food-item-wrap">
                        <div
                          className="figure-wrap bg-image"
                          style={{
                            background: `url('assets/images/pro_20189.jpg') center center/cover no-repeat`,
                            backgroundSize: "200px",
                          }}
                        >
                          <div className="treding">
                            <a href="#" className="treding-icon">
                              <i className="ion-android-share-alt group_icon"></i>
                              12K
                            </a>
                            <a href="#" className="treding-icon">
                              <i className="ion-eye group_icon"></i>12K
                            </a>
                            <a href="#" className="treding-icon">
                              <i className="ion-bag group_icon"></i>12K
                            </a>
                          </div>
                          <div className="review pull-right">
                            <a href="#" className="treding-icon">
                              <i className="ion-ios-star-outline group_icon"></i>
                              12K
                            </a>
                            <a href="#" className="treding-icon">
                              <i className="ion-ios-chatbubble-outline group_icon"></i>
                              12K
                            </a>
                          </div>
                        </div>
                        <div className="content">
                          <h5>
                            <a href="product_page.html">Vegetables</a>
                          </h5>
                          <div className="product-name">12 KG </div>
                          <div className="price-btn-block">
                            <span className="price_cut">Rs 15,99</span>
                            <span className="price">Rs 15,99</span>
                            <a href="#" className="theme-btn-dash pull-right">
                              <i className="ion-ios-cart-outline"></i> Add to
                              cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                      <div className="food-item-wrap">
                        <div
                          className="figure-wrap bg-image"
                          style={{
                            background: `url('assets/images/pro_55389.jpg') center center/cover no-repeat`,
                            backgroundSize: "200px",
                          }}
                        >
                          <div className="treding">
                            <a href="#" className="treding-icon">
                              <i className="ion-android-share-alt group_icon"></i>
                              12K
                            </a>
                            <a href="#" className="treding-icon">
                              <i className="ion-eye group_icon"></i>12K
                            </a>
                            <a href="#" className="treding-icon">
                              <i className="ion-bag group_icon"></i>12K
                            </a>
                          </div>
                          <div className="review pull-right">
                            <a href="#" className="treding-icon">
                              <i className="ion-ios-star-outline group_icon"></i>
                              12K
                            </a>
                            <a href="#" className="treding-icon">
                              <i className="ion-ios-chatbubble-outline group_icon"></i>
                              12K
                            </a>
                          </div>
                        </div>
                        <div className="content">
                          <h5>
                            <a href="product_page.html">Grain And Oil Seed</a>
                          </h5>
                          <div className="product-name">12 KG </div>
                          <div className="price-btn-block">
                            <span className="price_cut">Rs 15,99</span>
                            <span className="price">Rs 15,99</span>
                            <a href="#" className="theme-btn-dash pull-right">
                              <i className="ion-ios-cart-outline"></i> Add to
                              cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                      <div className="food-item-wrap">
                        <div
                          className="figure-wrap bg-image"
                          style={{
                            background: `url('assets/images/pro_68615.jpg') center center/cover no-repeat`,
                            backgroundSize: "200px",
                          }}
                        >
                          <div className="treding">
                            <a href="#" className="treding-icon">
                              <i className="ion-android-share-alt group_icon"></i>
                              12K
                            </a>
                            <a href="#" className="treding-icon">
                              <i className="ion-eye group_icon"></i>12K
                            </a>
                            <a href="#" className="treding-icon">
                              <i className="ion-bag group_icon"></i>12K
                            </a>
                          </div>
                          <div className="review pull-right">
                            <a href="#" className="treding-icon">
                              <i className="ion-ios-star-outline group_icon"></i>
                              12K
                            </a>
                            <a href="#" className="treding-icon">
                              <i className="ion-ios-chatbubble-outline group_icon"></i>
                              12K
                            </a>
                          </div>
                        </div>
                        <div className="content">
                          <h5>
                            <a href="product_page.html">Organic Produce</a>
                          </h5>
                          <div className="product-name">12 KG </div>
                          <div className="price-btn-block">
                            <span className="price_cut">Rs 15,99</span>
                            <span className="price">Rs 15,99</span>
                            <a href="#" className="theme-btn-dash pull-right">
                              <i className="ion-ios-cart-outline"></i> Add to
                              cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
            </div>
      
  );
};

export default Product;
