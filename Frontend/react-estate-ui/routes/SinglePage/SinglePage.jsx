import React from "react";
import Slider from "../../components/Slider/Slider";
import "./singlePage.scss";
import { singlePostData, userData } from "../../lib/dummydata";

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
                    Wrapper
                </div>
            </div>
        </div>
    )
}