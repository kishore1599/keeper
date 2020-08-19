import React from "react";

function Card(){
    return(
        <div className="card">
            <h5><b>Modules</b></h5>
            <button type="button" className="btn btn-outline-dark btn-sm ">More</button>
            <div className="row">
            <div className="card-column col-lg-3 col-md-4 col-sm-6 ">
                <div class="card" style={{width: "18rem;"}}>
                    <div class="card-body">
                        <h5 class="card-title">Computer Graphics</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="card-column col-lg-3 col-md-4 col-sm-6 ">
                <div class="card" style={{width: "18rem;"}}>
                    <div class="card-body">
                        <h5 class="card-title">Communication System </h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="card-column col-lg-3 col-md-4 col-sm-6 ">
                <div class="card" style={{width: "18rem;"}}>
                    <div class="card-body">
                        <h5 class="card-title">Database Management System</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
                </div>
            </div>
            <div className="card-column col-lg-3 col-md-4 col-sm-6 ">
                <div class="card" style={{width: "18rem;"}}>
                    <div class="card-body">
                        <h5 class="card-title">Computer Architecture</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card;