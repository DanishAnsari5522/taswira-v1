import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../css/KochoComp.css'
import { AiFillLike } from 'react-icons/ai'
import one from '../assets/one.png'
import d from '../assets/11.jpeg'
import d1 from '../assets/2.jpg'
function KochoComp(props) {
    const [likeCount, setLikeCount] = useState(0)
    return (
        <>

            <div className="col-md-3 p-3">
                <Card bsPrefix className='cards'>

                    <NavLink exact to={`/DetailProjectComp/${props.id}`} bsPrefix className="navlink">
                        <Card.Img variant="top" src={d1} className="img w-100" bsPrefix />
                    </NavLink>

                    <Card.Body>
                        <Card.Title className="title" style={{ width: "108%" }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly</Card.Title>
                        <Card.Text className="price">Rs.  150.00</Card.Text>
                        <NavLink exact to={`/DetailProjectComp/${props.id}`} bsPrefix className="add-to-cart">
                            <Button variant="dark">Add To Cart</Button>
                        </NavLink>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default KochoComp;