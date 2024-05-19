import React from "react"
import "./searchBar.scss";

export default function SearchBar(){
    const [query, setQuery] = React.useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0
    })
    const types = ["buy", "rent"];

    function switchType(val){
        const newQuery = {...query, type: val};
        setQuery(newQuery);
    }

    return (
        <div className="searchbar">
            <div className="type">
                {
                    types.map((type)=>{
                        return <button 
                                    type={`${type}`} 
                                    onClick={()=>switchType(type)}
                                    className={(query.type===type?"active":"")}
                                >
                                    {type}
                                </button>    
                    })
                }
                {/* <button type="buy">Buy</button>
                <button type="rent">Rent</button> */}
            </div>
            <form>
                <input type="text" placeholder="City Location"></input>
                <input type="number" placeholder="Min Price"></input>
                <input type="number" placeholder="Max Price"></input>
                <button type="submit">
                    <img src="/search.png"></img>
                </button>
            </form>
        </div>
    )
}