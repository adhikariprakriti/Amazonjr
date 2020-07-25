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
                  <Product id={1}
                      title="this is very interesting book"
                      price={13}
                      rating={3}
                       image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                   
                   <Product id={2}
                      title="this is very interesting book"
                      price={13}
                      rating={3}
                       image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS02wIG4ta6h_wOrBSe4EQ4CiattUk0v-7x5g&usqp=CAU"/>

            </div>
            
            <div className="home__row">
                  <Product id={3}
                      title="this is very interesting book"
                      price={13}
                      rating={3}
                       image="https://m.media-amazon.com/images/I/A1eTeNsmm7L._SR500,500_.jpg"/>
                   
                   <Product id={4}
                      title="this is very interesting book"
                      price={13}
                      rating={3}
                       image="https://in-files.apjonlinecdn.com/landingpages/family-pages/hp-business-solutions/images/laptop_products-row-1-img.png"/>

                      <Product id={5}
                      title="this is very interesting book"
                      price={13}
                      rating={3}
                       image="https://fossil.scene7.com/is/image/FossilPartnersRender/wb_mn_front_preview_sfcc?$topring=FossilPartnersRender/CTTSP0008_main&$case=FossilPartnersRender/CTCSPC220008_main&$dial=FossilPartnersRender/CTDSPC0005_main&$strap=FossilPartnersRender/S221302_baw&$sfcc_fos_baw_main_desktop$"/>


            </div>

            <div className="home__row">
                  <Product id={6}
                      title="this is very interesting book"
                      price={13}
                      rating={3}
                       image="https://image.shutterstock.com/image-vector/vector-illustration-isolated-plus-size-260nw-1368418490.jpg"/>
                   
                   
            </div>
            
      
            
      

    </div>
  );
}

export default Home;
