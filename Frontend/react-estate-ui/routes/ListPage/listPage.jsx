import React from "react"
import {listData} from "../../lib/dummydata";
import "./listPage.scss"
import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter"
import Map from "../../components/Map/Map";

export default function Listpage(){
    
    return( 
        <div className="listPage">
            <div className="listContainer">
                <div className="wrapper">
                        <Filter/>
                    {
                        listData.map((data)=>{
                            return <Card item={data}/>;
                        })
                    }
                </div>
            </div>
            <div className="mapContainer">
                <Map item={listData}/>
            </div>
        </div>
    )
}