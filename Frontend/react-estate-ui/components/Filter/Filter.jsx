import React from "react";
import "./filter.scss";

export default function Filter(){
    return (
        <form>
            <h1>Search Results for London</h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city" name="city">Location</label>
                    <input type="text" id="city" name="city" placeholder="City Location"></input>
                    
                </div>
            </div>
            <div className="bottom">
                 <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option>any</option> 
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>  
                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property">
                        <option>any</option> 
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>  
                <div className="item">
                    <label htmlFor="minprice">Min Price</label>
                    <input type="number" name="minprice" id="minprice" placeholder="Any"></input>
                </div>  
                <div className="item">
                    <label htmlFor="maxprice">Max Price</label>
                    <input type="number" name="maxprice" id="maxprice" placeholder="Any"></input>
                </div>  
                <div className="item">
                    <label htmlFor="bedroom">Bedroom</label>
                    <input type="text" name="bedroom" id="bedroom" placeholder="Any"></input>
                </div>   

                <button type="submit">
                    <img src="/search.png"></img>
                </button>
            </div>
        </form>
    )
}