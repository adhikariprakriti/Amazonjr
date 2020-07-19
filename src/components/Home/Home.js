import React from 'react';
import Product from '../Product/Product';
import './Home.css';

function Home() {
  return (
    
        <div className="home">
           <img className="home__image"
                 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                 alt=""
                 />
            {/* product id,description,price,rating,image */}
            <div className="home__row">
                  <Product id={123}
                      title="this is very interesting book"
                      price={13}
                      rating={3}
                       image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                   
                   <Product id={123}
                      title="this is very interesting book"
                      price={13}
                      rating={3}
                       image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>

            </div>
            
            <div className="home__row">
                  <Product id={123}
                      title="this is very interesting book"
                      price={13}
                      rating={3}
                       image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                   
                   <Product id={123}
                      title="this is very interesting book"
                      price={13}
                      rating={3}
                       image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>

                     <Product id={123}
                      title="this is very interesting book"
                      price={13}
                      rating={3}
                       image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>


            </div>

            <div className="home__row">
                  <Product id={123}
                      title="this is very interesting book"
                      price={13}
                      rating={3}
                       image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                   
                   
            </div>
            
      
            
      

    </div>
  );
}

export default Home;
