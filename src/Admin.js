import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
import './Admin.css'
import { Link } from "react-router-dom";
function Admin() {




  const [data, setData] = useState([]);
  useEffect(() => {
  getData()

  }, []);

  async function getData() {
    let response = await axios.get("http://localhost:4500/cropdata/");
    console.log(response.data)
    setData(response.data)
  }

 async function handleDelete(id){

    let data =id;

    console.log(data);

    let response = await axios.delete("http://localhost:4500/del/",{data:{id},name:"delete"});
    console.log(response.data);
    getData();
  }

  // const paramsdata = {
  //   state: data.state,
  //   district: data.district,
  //   taluka: data.taluka,
  //   area: data.area,
  //   soil: data.soil,
  //   season: data.season,
  //   culti_date: data.culti_date,
  //   yeild_date: data.yeild_date,
  //   village: data.village,
  //   crop: data.crop,
  // };
  // console.log(paramsdata)
 
  return (
    <>
      <Navbar />
      <div>
        <main class="admin">
          {/* <h1>User Info</h1> */}
          <table class="table" border={1}>
            <thead>
              <tr>
                <th>crop</th>
                <th>season</th>
                <th>soil type</th>
                <th>area</th>
                <th>cultivation date</th>
                <th>expected yeild date</th> 
                 <th>state</th>
                <th>district</th>
                <th>taluka</th>
                <th>village</th>
                <th>action</th>
                {/* <th>Farmer Image</th>
                    <th>7/12 Image</th>
                    <th>8A Image</th> */}
              </tr>
            </thead>

            <tbody border>
              {data.map((cropInfo) => {
                return (
                  <tr>
                    {/* {cropInfo}<td>{farmer.id}</td> */}
                    <td>{cropInfo.crop}</td>
                    <td>{cropInfo.season}</td>
                    <td>{cropInfo.soil}</td>
                    <td>{cropInfo.area}</td>
                    <td>{cropInfo.culti_date}</td>
                    <td>{cropInfo.yeild_date}</td>
                    <td>{cropInfo.state}</td>
                    <td>{cropInfo.district}</td>
                    <td>{cropInfo.taluka}</td>
                    <td>{cropInfo.village}</td>
                    <td>
                      <button onClick={()=>handleDelete(cropInfo.id)}>Delete</button> 
                    <button> <Link to={`/update/${cropInfo.id}`} className="link">update</Link></button>
                    </td>
                  
                    {/* <td>{farmer.fimg}</td>
                       <td>{farmer.seventimg}</td>
                       <td>{farmer.eightAimg}</td> */}

                    {/* <td>
                           <button className="read-btn"><Link to={`/read/${student.id}`}>Read</Link></button> 
                           <button className="edit-btn"><Link to={`/edit/${student.id}`}>Edit</Link></button>
                           <button className="delete-btn"><Link onClick={()=>handleDelete(student.id)}>Delete</Link></button>
                       </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
}

export default Admin;
