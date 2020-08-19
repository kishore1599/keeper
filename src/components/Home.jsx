import React from "react";
import Card from "./Card";
import FlashCards from "./FlashCards";
function Home(){
   return(
    <div className="card">
      <h5><b>Suggested Topics</b></h5>
      <button type="button" className="btn btn-outline-dark btn-sm ">More</button>
        <div className="row">
         <div className="card-column col-lg-3 col-md-4 col-sm-6 ">
                <div className="card" style={{width: "18rem;"}}>
                     <img className="card-img-top" src="https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-text">Geography</h5>
                  </div>
                  <div className="card-action">
                    <a href="#">10 Questions</a>
                    <a href="#">2Hrs 30Mins</a>
                  </div>
                </div>
          </div>
         
         <div className="card-column col-lg-3 col-md-4 col-sm-6 ">
                <div className="card" style={{width: "18rem;"}}>
                     <img className="card-img-top" src="https://studiousguy.com/wp-content/uploads/2018/07/Economics.jpg"/>
                 <div className="card-body">
                    <h5 className="card-text">Economics</h5>
                  </div>
                  <div className="card-action">
                    <a href="#">10 Questions</a>
                    <a href="#">2 Hrs</a>
                  </div>
                </div>
          </div>
         
         

         <div className="card-column col-lg-3 col-md-4 col-sm-6 ">
                <div className="card" style={{width: "18rem;"}}>
                     <img className="card-img-top" src="https://brewminate.com/wp-content/uploads/2020/02/GeorgeThompsonTeachingHistory01.png" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-text">History</h5>
                  </div>
                  <div className="card-action">
                    <a href="#">10 Questions</a>
                    <a href="#">2 Hrs</a>
                  </div>
                </div>
          </div>
         <div className="card-column col-lg-3 col-md-4 col-sm-6 ">
                <div className="card" style={{width: "18rem;"}}>
                     <img className="card-img-top" src="https://www.imf.org/external/pubs/ft/fandd/2020/06/images/frieden-1600.jpg" />
                  <div className="card-body">
                    <h5 className="card-text">Politics</h5>
                  </div>
                  <div className="card-action">
                    <a href="#">10 Questions</a>
                    <a href="#">2 Hrs 30 Mins</a>
                  </div>
                </div>
          </div>
        </div>  
        <Card />  
        <FlashCards />          
      </div>
   );
}
export default Home;