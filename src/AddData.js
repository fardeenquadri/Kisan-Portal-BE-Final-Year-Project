import axios from "axios";
import React, { useEffect, useState } from "react";
// import SideComp from "./SideComp";
import "./AddData.css";
import moment from "moment";
import Navbar from "./Navbar/Navbar";

function AddData() {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [area, setArea] = useState("");
  const [soil, setSoil] = useState("");
  // const [crop, setCrop] = useState("");
  const [season, setSeason] = useState("");
  const [culti_date, setCultiDate] = useState("");
  const [yeild_date, setYeildDate] = useState("");
  const [village, setVillage] = useState("");
  const [crop, setCrop] = useState("");

  let distMaha = ["nagar", "pune", "Beed"];
  let distKN = ["kymbatur", "pune", "Beed"];

  let arr2 = [];
  let arr = [
    {
      state1: "Maharashta",
      dist: ["nagar", "pune", "Beed"],
    },
    {
      state1: "Karnatak",
      dist: ["koyambatur", "", "Beed"],
    },

    {
      state1: "Gujarat",
      dist: ["koyambatur", "pune", "Beed"],
    },
    {
      state1: "MadhyaPradesh",
      dist: ["koyambatur", "pune", "Beed"],
    },
    {
      state1: "Utter Pradesh",
      dist: ["koyambatur", "pune", "Beed"],
    },
  ];

  async function save() {
    const data = {
      state: state,
      district: district,
      taluka: taluka,
      area: area,
      soil: soil,
      season: season,
      culti_date: culti_date,
      yeild_date: yeild_date,
      village: village,
      crop: crop,
    };
    console.log(data);

    if (
      state.length == 0 ||
      district.length == 0 ||
      taluka.length == 0 ||
      area.length == 0 ||
      soil.length == 0 ||
      season.length == 0 ||
      culti_date.length == 0 ||
      yeild_date.length == 0 ||
      village.length == 0 ||
      crop.length == 0
    ) {
      alert("All field are compulsaory to fill");
    } else {
      const response = await axios.post("http://localhost:4500/savedata/",data);
      console.log(response.data);

      if (response.data === "sucess") {
        alert("Crop data saved sucessfully");
        window.location.reload();
      }
    }
  }

  const [id, setId] = useState();
  const [status, setStatus] = useState("");

  async function updateStatus() {
    const data = {
      id: id,
      status: status,
    };

    console.log(data);
  }

  console.log(state);

  return (
    <>
      <Navbar />
      <div className="create-project" style={{ display: "flex" }}>
        <div className="part2">
          <div className="projectInfo">
            <div className="projectName">
              <div style={{ display: "flex" }}>
                <div>
                  {/* <input
                    type="text"
                    placeholder="Enter your Crop Name"
                    onChange={(e) => setCrop(e.target.value)}
                  /> */}

                  <select onChange={(e) => setCrop(e.target.value)}>
                  <option>select crop</option>
                    <option>Onion</option>
                    <option>Sugarcane</option>
                    <option>Cotton</option>
                    <option>Oilseeds</option>
                    <option>Jute</option>
                    <option>Rice</option>
                    <option>Soyabeans</option>
                    <option>Coffee</option>
                    <option>Wheat</option>
                    <option>Tobacco</option>
                    <option>Peanuts</option>
                    <option>Grapes</option>
                  </select>
                </div>
                <button onClick={save}>Save Crop Data</button>
              </div>
            </div>

            <div className="selecttags1">
              <div>
                <p>State</p>

                <input
                  type="text"
                  placeholder="Enter Your State"
                  onChange={(e) => setState(e.target.value)}
                />
              </div>

              <div>
                <p>District</p>

                <input
                  type="text"
                  placeholder="Enter yout District "
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>

              <div>
                <p>Taluka</p>

                <input
                  type="text"
                  placeholder="Enter your Taluka"
                  onChange={(e) => setTaluka(e.target.value)}
                />
              </div>
            </div>

            <div className="selecttags2">
              <div>
                <p>Area</p>
                <input
                  type="number"
                  placeholder="enter crop area"
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>

              <div>
                <p>Soil</p>
                <select onChange={(e) => setSoil(e.target.value)}>
                  <option>Select soil type</option>
                  <option>Black soil</option>
                  <option>Red soil</option>
                  <option>Desert soil</option>
                  <option>Mountainous soil</option>
                  <option>Forest soil</option>
                </select>
              </div>
              <div>
                <p>Season</p>
                <select onChange={(e) => setSeason(e.target.value)}>
                  <option>select season</option>

                  <option>Summer</option>
                  <option>Winter</option>
                  <option>Mansoon</option>
                  
                </select>
              </div>
            </div>

            <div className="selecttags3">
              <div>
                <p>Cultivation date</p>
                <input
                  type="date"
                  placeholder="Enter Start Date"
                  onChange={(e) => setCultiDate(e.target.value)}
                />
              </div>
              <div>
                <p>Expected yeild date</p>
                <input
                  type="date"
                  placeholder="Enter End Date"
                  onChange={(e) => setYeildDate(e.target.value)}
                />
              </div>
              <div>
                <p>Village</p>

                <input
                  type="text"
                  placeholder="village"
                  onChange={(e) => setVillage(e.target.value)}
                  id="village"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddData;
