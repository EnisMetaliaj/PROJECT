import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

const api_img="https://image.tmdb.org/t/p/w500/";
const MovieBox=({title,poster_path,vote_average,release_date,overview})=>{

    const[show,SetShow]=useState(false);
    const handleShow=()=>SetShow(true);
    const handleClose=()=>SetShow(false);
   

    return(
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
            <img className="card-img-top" src={api_img + poster_path}></img>
            <div className="card-body">
            <button type="button" className="btn btn-dark" onClick={handleShow} >View more</button>

            <Modal  show={show} onHide={handleClose}>

<Modal.Header closeButton>

<Modal.Title></Modal.Title>
</Modal.Header>
<Modal.Body>
<img className="card-img-top" style={{width:"14rem"}} src={api_img + poster_path}></img>
<h3>{title}</h3>
<h4>Imdb: {vote_average}</h4>
<h5>Release date: {release_date}</h5>
<br></br>
<h6>Overview</h6>
<p>{overview}</p>
</Modal.Body>
<Modal.Footer>

    <Button variant="secondary" onClick={handleClose}>

    </Button>
</Modal.Footer>
            </Modal>
           


            </div>

            </div>
            
            </div>
    )
}
export default MovieBox;