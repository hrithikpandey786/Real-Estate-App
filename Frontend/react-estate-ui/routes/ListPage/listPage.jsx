import React from "react"
import {listData} from "../../lib/dummydata";
import "./listPage.scss"
import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter"
import Map from "../../components/Map/Map";
import { useLoaderData } from "react-router-dom";

export default function Listpage(){
    const items = useLoaderData();
   
    return( 
        <div className="listPage">
            <div className="listContainer">
                <div className="wrapper">
                        <Filter/>
                    {
                        items.data.map((data)=>{
                            return <Card item={data} key={data.id}/>;
                        })
                    }
                </div>
            </div>
            <div className="mapContainer">
                <Map items={items.data}/>
            </div>
        </div>
    )
}