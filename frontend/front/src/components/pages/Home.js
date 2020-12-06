import React from "react";
import {Link} from "react-router-dom";
import "./Home.css";
import lend from "./lend.jpg";
import find from "./find.jpg";

function Home() {
  return (

      <div className="home">
        <div className="header">
        <h2 style={{
              display:"inline-block",
              marginTop:25,
		        	marginLeft:150,
		        	marginRight:0,
              fontFamily:"ariel",
              fontWeight:"bold",
              color:"black",
            }}>BOOK EXCHANGE</h2>
        <Link to="/register"><button className="buttoncomp">Register</button></Link>
        <Link to="/login"><button className="buttoncomp">Login</button></Link>
        </div>
        <div className="main">
          <div className="textcomp" style={{
              padding:100,
            }}>
            <div style={{

              color:"white",
              fontSize:20,
              textAlign:"justified",
            }}><h4>Do you feel like selling used books is a tiring and cumbersome process?</h4><br/><p>Don't you worry because (name) makes it so much easier by connecting the buyer and the seller with easy to use interface.</p></div>
          </div>
          <div style={{
            display:"inline-block",
            position:"relative",
            left:180,

          }}>
            <img src={lend} alt="image"/>
            <h4 className="textcomp">Sell Books</h4>
            <p className="textcomp">
              Dont need a book you own?<br/>Sell used books lying idle on the shelf.
            </p>
          </div>
          <div style={{
            display:"inline-block",
            position:"relative",
            left:400,
          }}>
            <img src={find} alt="image"/>
            <h4 className="textcomp">Buy Books</h4>
            <p className="textcomp">
              Struggling to find books you like?<br/>Search for and Buy books with ease
            </p>
          </div>
        </div>
      </div>

  )
}
export default Home;
