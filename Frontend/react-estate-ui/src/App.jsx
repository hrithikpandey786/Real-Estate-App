import react from "react"
import "./index.scss"
// import "./layout.scss"
import Navbar from "../components/Navbar/Navbar"
import "../components/Navbar/navbar.scss"
import HomePage from "../routes/HomePage/homePage"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";
import ListPage from "../routes/ListPage/listPage"
import Layout from "../routes/Layout/layout";
import "../routes/Layout/layout.scss"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>
        }
      ]
    }
  ]);
  
  return (
    // <div className="layout">
    //   <div className="navbar">
    //     <Navbar/>
    //   </div>
    //   <div className="content">
    //     <HomePage/>
    //   </div>
    // </div>
    <RouterProvider router={router}/>
  )
}

export default App