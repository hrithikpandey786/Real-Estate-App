import { listData } from "../../lib/dummydata";
import "./listPage.scss";
import Filter from "../../components/filter/Filter"
import Card from "../../components/card/Card"
import Map from "../../components/map/Map";
import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";


function ListPage() {
  // const data = listData;
  const posts = useLoaderData();
  

  return <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter/>
        <Suspense fallback={<p>Loading...</p>}>
          <Await  resolve={posts.postResponse}
            errorElement={<p>Error Loading Posts!</p>}
          >
            {postResponse=>postResponse.data.map(
              post=>(
                <Card key={post.id} item={post}/>
              )
            )}
          </Await>
        </Suspense>
        {/* {posts.map(post=>(
          <Card key={post.id} item={post}/>
        ))} */}
      </div>
    </div>
    <div className="mapContainer">
      {/* <Map items={posts}/> */}

      <Suspense fallback={<p>Loading...</p>}>
          <Await  resolve={posts.postResponse}
            errorElement={<p>Error Loading Posts!</p>}
          >
            {(postResponse)=>{
              return <Map items={posts.postResponse._data.data}></Map>
            }}
          </Await>
        </Suspense>
    </div>
  </div>;
}

export default ListPage;
