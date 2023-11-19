import React from 'react'
import "../Resource Library/Style/library.css";
import Image1 from "../../../assets/images/image1.png"

function Library() {
  return (
    <div className="libraries">
        <h1 className="heading">Resource Library <div className="resourse-link"><a href="#">View Resource Library</a> <i className="fa-solid fa-arrow-right-long"></i></div></h1> 
        <div className="box-container">
            <div className="box">
                <img src={Image1} alt="library image"/>
                <h3>Videos</h3>
                <a href="#" className="btn">Explore Now</a>
            </div>
            <div className="box">
                <img src="../../../src/assets/images/image4.png" alt="" />
                <h3>E-Books</h3>
                <a href="#" className="btn">Explore Now</a>
            </div>
            <div className="box">
                <img src="../../../src/assets/images/image5.png" alt=""/>
                <h3>Projects</h3>
                <a href="#" className="btn">Explore Now</a>
            </div>
            <div className="box">
                <img src="../../../src/assets/images/image6.png" alt=""/>
                <h3>Tutorials</h3>
                <a href="#" className="btn">Explore Now</a>
            </div>
        </div>
        <div className="mobile-resourse-link"><a href="#">View Resource Library</a> <i className="fa-solid fa-arrow-right-long"></i></div>
    </div>
  )
}

export default Library;