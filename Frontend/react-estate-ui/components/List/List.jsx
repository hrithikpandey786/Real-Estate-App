import React from "react";
import {listData} from "../../lib/dummydata";
import Card from "../Card/Card";
import "./list.scss";

export default function List(){
    return (
        <div className="list">
            {
                listData.map(data=>{
                    return <Card item={data}/>
                })
            }
        </div>
    )
}