import axios from "axios";
import React, { useEffect, useState } from "react";
// import SideComp from "./SideComp";
import "./AddData.css";
import moment from "moment";
import Navbar from "./Navbar/Navbar";
import { useParams, useNavigate } from "react-router-dom";

function UpdateCropInfo() {
  const { id } = useParams();
  console.log(id);

  const [cropUpdateData, setCropUdateData] = useState({
    id: id,
    state: "",
    district: "",
    taluka: "",
    area: "",
    soil: "",
    season: "",
    culti_date: "",
    yeild_date: "",
    village: "",
    crop: "",
  });
  const [data, setData] = useState([]);
  const [state, setState] = useState(data.state);
  const [district, setDistrict] = useState(data.district);
  const [taluka, setTaluka] = useState(data.taluka);
  const [area, setArea] = useState(data.area);
  const [soil, setSoil] = useState(data.soil);
  // const [crop, setCrop] = useState("");
  const [season, setSeason] = useState(data.season);
  const [culti_date, setCultiDate] = useState(data.culti_date);
  const [yeild_date, setYeildDate] = useState(data.yeild_date);
  const [village, setVillage] = useState(data.village);
  const [crop, setCrop] = useState(data.crop);

  useEffect(() => {
    async function getData() {
      let response = await axios.get("http://localhost:4500/cropInfo/" + id);
      //  console.log(response.data)
      setData(response.data);
      // setValues({...values,sname:res.data[0].sname, email:res.data[0].email})

      setCropUdateData({
        ...cropUpdateData,
        state: response.data[0].state,
        district: response.data[0].district,
        taluka: response.data[0].taluka,
        area: response.data[0].area,
        soil: response.data[0].soil,
        season: response.data[0].season,
        culti_date: response.data[0].culti_date,
        yeild_date: response.data[0].yeild_date,
        village: response.data[0].village,
        crop: response.data[0].crop,
      });
    }
    getData();
  }, []);

  //  console.log(cropUpdateData)

  let navigate = useNavigate();

  async function updateData() {
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

    console.log(cropUpdateData);

    const response = await axios.post(
      "http://localhost:4500/updatecrop/",
      cropUpdateData
    );

    console.log(response.data);

    if (response.data === "sucess") {
      alert("crop data updated sucessfully");
      navigate("/admin");
      window.location.reload();
    } else {
      alert("smoething went wrong");
    }
  }

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

                  <select
                    onChange={(e) =>
                      setCropUdateData({
                        ...cropUpdateData,
                        crop: e.target.value,
                      })
                    }
                    defaultValue={cropUpdateData.crop}
                  >
                    <option>select crop</option>
                    <option>onion</option>
                    <option>sugarcane</option>
                    <option>cotton</option>
                    <option>oilseeds</option>
                    <option>jute</option>
                    <option>rice</option>
                    <option>soyabeans</option>
                    <option>coffee</option>
                    <option>Wheat</option>
                    <option>Tobacco</option>
                    <option>peanuts</option>
                    <option>grapes</option>
                  </select>
                </div>
                <button onClick={updateData}>update data</button>
              </div>
            </div>

            <div className="selecttags1">
              <div>
                <p>state</p>

                <input
                  type="text"
                  placeholder="Enter Your State"
                  defaultValue={cropUpdateData.state}
                  onChange={(e) =>
                    setCropUdateData({
                      ...cropUpdateData,
                      state: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <p>district</p>

                <input
                  type="text"
                  placeholder="Enter yout District "
                  defaultValue={cropUpdateData.district}
                  onChange={(e) =>
                    setCropUdateData({
                      ...cropUpdateData,
                      district: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <p>taluka</p>

                <input
                  type="text"
                  defaultValue={cropUpdateData.taluka}
                  placeholder="Enter your Taluka"
                  onChange={(e) =>
                    setCropUdateData({
                      ...cropUpdateData,
                      taluka: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="selecttags2">
              <div>
                <p>area</p>
                <input
                  type="number"
                  placeholder="enter crop area"
                  value={cropUpdateData.area}
                  onChange={(e) =>
                    setCropUdateData({
                      ...cropUpdateData,
                      area: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <p>soil</p>
                <select
                  onChange={(e) =>
                    setCropUdateData({
                      ...cropUpdateData,
                      soil: e.target.value,
                    })
                  }
                  defaultValue={cropUpdateData.soil}
                >
                  <option>select soil type</option>
                  <option>sandy</option>
                  <option>Low</option>

                  <option>Medium</option>
                </select>
              </div>
              <div>
                <p>season</p>
                <select
                  onChange={(e) =>
                    setCropUdateData({
                      ...cropUpdateData,
                      season: e.target.value,
                    })
                  }
                  defaultValue={cropUpdateData.season}
                >
                  <option>select season</option>

                  <option>Summer</option>
                  <option>Winter</option>

                  <option>mansoon</option>
                </select>
              </div>
            </div>

            <div className="selecttags3">
              <div>
                <p> cultivation date</p>
                <input
                  type="date"
                  placeholder="Enter Start Date"
                  defaultValue={cropUpdateData.culti_date}
                  onChange={(e) =>
                    setCropUdateData({
                      ...cropUpdateData,
                      culti_date: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <p>expected yeild date</p>
                <input
                  type="date"
                  placeholder="Enter End Date"
                  defaultValue={cropUpdateData.yeild_date}
                  onChange={(e) =>
                    setCropUdateData({
                      ...cropUpdateData,
                      yeild_date: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <p>village</p>

                <input
                  type="text"
                  placeholder="village"
                  defaultValue={cropUpdateData.village}
                  onChange={(e) =>
                    setCropUdateData({
                      ...cropUpdateData,
                      village: e.target.value,
                    })
                  }
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

export default UpdateCropInfo;
