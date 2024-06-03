import React from "react";
import {Link} from "react-router-dom";
import "./Card.scss";

export default function Card({item}){
    // console.log(item.images[0]);
    return (
        <div className="card">
            <Link to={`/${item.id}`} className="imageContainer">
                <img src={(item.images)?item.images[0]:"/favicon.png"}></img>
            </Link>

            <div className="textContainer">
                <div className="title">
                    <h2><Link to={`/${item.id}`}>{item.title}</Link></h2>
                </div>
                <div className="address">
                    <img src="/pin.png"></img>
                    <span>{item.address}</span>
                </div>
                <div className="price">
                    <p>${item.price}</p>
                </div>

                <div className="bottom">
                    <div className="features">
                        <div className="feature">
                            <img src="/bed.png"></img>
                            <span>{item.bedroom}</span>
                        </div>
                        <div className="feature">
                            <img src="/bath.png"></img>
                            <span>{item.bathroom}</span>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <img src="/save.png"></img>
                        </div>
                        <div className="icon">
                            <img src="/chat.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 