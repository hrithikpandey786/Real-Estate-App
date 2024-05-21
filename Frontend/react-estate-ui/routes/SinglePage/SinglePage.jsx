import React from "react";
import Slider from "../../components/Slider/Slider";
import "./singlePage.scss";
import { singlePostData, userData } from "../../lib/dummydata";
import Map from "../../components/Map/Map"

export default function SinglePage(){
    return (
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={singlePostData.images}/>
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{singlePostData.title}</h1>
                                <div className="address">
                                    <img src="/pin.png"></img>
                                    <span>{singlePostData.address}</span>
                                </div>
                                <div className="price">$ {singlePostData.price}</div>
                            </div>
                            <div className="user">
                                <img src={userData.img} alt=""></img>
                                <span><b>{userData.name}</b></span>
                            </div>
                        </div>
                        <div className="bottom">
                            <p>{singlePostData.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper">
                    <p className="title">General</p>
                    <div className="listVertical">
                        <div className="feature">
                            <img src="utility.png"></img>
                            <div className="featureText">
                                <span>Utilities</span>
                                <p>Renter is responsible</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="pet.png"></img>
                            <div className="featureText">
                                <span>Pet Policy</span>
                                <p>Pet Allowed</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="fee.png"></img>
                            <div className="featureText">
                                <span>Property Fees</span>
                                <p>Must have 3x the rent in total householed income</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Room Sizes</p>
                    <div className="sizes">
                        <div className="size">
                            <img src="/size.png"></img>
                            <span>50sqrm 861(sqft)</span>
                        </div>
                        <div className="size">
                            <img src="/bed.png"></img>
                            <span>2 bed</span>
                        </div>
                        <div className="size">
                            <img src="/bath.png"></img>
                            <span>1 bathroom</span>
                        </div>
                    </div>
                    <p className="title">Nearby Places</p>
                    <div className="listHorizontal">
                        <div className="feature">
                                <img src="/school.png"></img>
                                <div className="featureText">
                                    <span>School</span>
                                    <p>250m away</p>
                                </div>
                            </div>
                            <div className="feature">
                                <img src="/bus.png"></img>
                                <div className="featureText">
                                    <span>Bus Stop</span>
                                    <p>100m away</p>
                                </div>
                            </div>
                            <div className="feature">
                                <img src="/restaurant.png"></img>
                                <div className="featureText">
                                    <span>Restaurant</span>
                                    <p>200m away</p>
                                </div>
                            </div>
                    </div>
                    <p className="title">Location</p>
                    <div className="mapContainer">
                        <Map items={[singlePostData]}/>
                   </div>
                    <div className="buttons">
                        <div className="button">
                            <img src="/chat.png"></img>
                            <p>Send a Message</p>
                        </div>
                        <div className="button">
                            <img src="save.png"></img>
                            <p>Save the Place</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}