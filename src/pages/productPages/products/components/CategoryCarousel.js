import React from 'react';
import { Carousel } from "react-responsive-carousel";

function CategoryCarousel(props) {
    return (
        <div className="w-1/2">
        <Carousel autoPlay infiniteLoop useKeyboardArrows thumbWidth={40} >
            <div style={{height: "580px"}}>
                <img src={"http://"+window.location.host+"/media/category_images/books.jpg"} alt="logo png" style={{width:'100%' , height:'100%'}} />
                <p className="legend text-yellow-500 bg-blue-500">Books</p>
            </div>
            <div style={{height: "580px"}}>
                <img src={"http://"+window.location.host+"/media/category_images/camera.jpg"} alt="logo png" style={{width:'100%' , height:'100%'}} />
                <p className="legend">Camera</p>
            </div>
            <div style={{height: "580px"}}>
                <img src={"http://"+window.location.host+"/media/category_images/console.jpg"} alt="logo png" style={{width:'100%' , height:'100%'}} />
                <p className="legend">Console</p>
            </div>
            <div style={{height: "580px"}}>
                <img src={"http://"+window.location.host+"/media/category_images/dress.jpg"} alt="logo png" style={{width:'100%' , height:'100%'}} />
                <p className="legend">Dress</p>
            </div>
            <div style={{height: "580px"}}>
                <img src={"http://"+window.location.host+"/media/category_images/sports.jpg"} alt="logo png" style={{width:'100%' , height:'100%'}} />
                <p className="legend">Sports</p>
            </div>
            <div style={{height: "580px"}}>
                <img src={"http://"+window.location.host+"/media/category_images/tools.jpg"} alt="logo png" style={{width:'100%' , height:'100%'}} />
                <p className="legend">Tools</p>
            </div>
        </Carousel>
        </div>
    );
}

export default CategoryCarousel;