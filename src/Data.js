import React from 'react';
import './data.css'
import { useState,useEffect } from 'react';
import axios from 'axios';

import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis,Tooltip,LabelList } from "recharts";
import Navbar from './Navbar/Navbar';




const Array =[

    {
        name:"Onion",
        Student:10,
        fees:10000
    },
    {
        name:"Tomato",
        Student:15,
        fees:7000
    },
    {
        name:"Wheat",
        Student:5,
        fees:5000
    },
    {
        name:"Soyabeen",
        Student:13,
        fees:10000
    },
    {
        name:"Cotton",
        Student:10,
        fees:10000
    },
    {
        name:"Maize",
        Student:10,
        fees:6000
    },
    {
        name:"Maize",
        Student:10,
        fees:6000
    },
    {
        name:"Remain",
        Student:15,
        fees:1000
    },
    {
        name:"Remain",
        Student:15,
        fees:1000
    },
    {
        name:"Remain",
        Student:15,
        fees:1000
    },
    {
        name:"Remain",
        Student:15,
        fees:1000
    },
    {
        name:"Remain",
        Student:15,
        fees:1000
    },
    

]



function Data() {
    let max =20;

    const[data,setData]=useState([])

    useEffect(() => {

        async function getData() {

          let response = await axios.get("http://localhost:4500/cropdata/");
        
          setData(response.data);
          console.log(data)
          
        }
        getData();
      }, []);


      let onionArea=0;
       
      data.forEach((cropInfo)=>{

        if(cropInfo.crop=="Onion"){

             let area=parseInt(cropInfo.area)
       
             onionArea=onionArea+area
             console.log("hello")
               
        }

      })
   
    console.log("sugarcaneArea",onionArea)

    let sugarcaneArea=0

    data.forEach((cropInfo)=>{

        if(cropInfo.crop=="Sugarcane"){

             let area=parseInt(cropInfo.area)
       
             sugarcaneArea=sugarcaneArea+area
             console.log("hello")
               
        }

      })

      console.log("sugarcaneArea",sugarcaneArea)


      let cottonArea=0;

      
    data.forEach((cropInfo)=>{

        if(cropInfo.crop=="Cotton"){

             let area=parseInt(cropInfo.area)
       
             cottonArea=cottonArea+area
             console.log("hello")
               
        }

      })

      console.log("cottonArea",cottonArea)
let oilseedsArea=0

data.forEach((cropInfo)=>{

    if(cropInfo.crop=="Oilseeds"){

         let area=parseInt(cropInfo.area)
   
         oilseedsArea=oilseedsArea+area
         console.log("hello")
           
    }

  })

  console.log("oilseedsArea",oilseedsArea)

  let juiteArea=0

  
data.forEach((cropInfo)=>{

    if(cropInfo.crop=="Jute"){

         let area=parseInt(cropInfo.area)
   
         juiteArea=juiteArea+area
         console.log("hello")
           
    }

  })

  console.log("juiteArea",juiteArea)

let riceArea=0

  data.forEach((cropInfo)=>{

    if(cropInfo.crop=="Rice"){

         let area=parseInt(cropInfo.area)
   
         riceArea=riceArea+area
         console.log("hello")
           
    }

  })

  console.log("riceArea",riceArea)


let soyabeansArea=0;
  
  data.forEach((cropInfo)=>{

    if(cropInfo.crop=="Soyabeans"){

         let area=parseInt(cropInfo.area)
   
         soyabeansArea=soyabeansArea+area
         console.log("hello")
           
    }

  })

  console.log("soyabeansArea",soyabeansArea)
      
let coffeeArea=0

  data.forEach((cropInfo)=>{

    if(cropInfo.crop=="Coffee"){

         let area=parseInt(cropInfo.area)
   
         coffeeArea=coffeeArea+area
         console.log("hello")
           
    }

  })

  console.log("coffeeArea",coffeeArea)

let wheatArea=0

  data.forEach((cropInfo)=>{

    if(cropInfo.crop=="Wheat"){

         let area=parseInt(cropInfo.area)
   
         wheatArea=wheatArea+area
         console.log("hello")
           
    }

  })

  console.log("wheatArea",wheatArea)


  let tabacoArea=0

  data.forEach((cropInfo)=>{

    if(cropInfo.crop=="Tobacco"){

         let area=parseInt(cropInfo.area)
   
         tabacoArea=tabacoArea+area
         console.log("hello")
           
    }

  })

  console.log("tabacoArea",tabacoArea)


let peanutsArea=0

  data.forEach((cropInfo)=>{

    if(cropInfo.crop=="Peanuts"){

         let area=parseInt(cropInfo.area)
   
         peanutsArea=peanutsArea+area
         console.log("hello")
           
    }

  })

  console.log("peanutsArea",peanutsArea)


  let grepesArea=0


  data.forEach((cropInfo)=>{

    if(cropInfo.crop=="Grapes"){

         let area=parseInt(cropInfo.area)
   
         grepesArea=grepesArea+area
         console.log("hello")
           
    }

  })

  console.log("grepesArea",grepesArea)




      

      let crpoData=[

        {
         cropName:"Onion",
         area:onionArea
        },

        {
            cropName:"Sugarcane",
            area:sugarcaneArea
        },
        {
            cropName:"Cotton",
            area:cottonArea
        },
        {
            cropName:"Oilseeds",
            area:oilseedsArea
        },
        {
            cropName:"Jute",
            area:juiteArea
        },
        {
            cropName:"Rice",
            area:riceArea
        },
        {
            cropName:"Soyabeans",
            area:soyabeansArea
        },
        {
            cropName:"Coffe",
            area:coffeeArea
        },
        {
            cropName:"Wheat",
            area:wheatArea
        },
        {
            cropName:"Tobacco",
            area:tabacoArea
        },
        {
            cropName:"Peanuts",
            area:peanutsArea
        },
        {
            cropName:"Grapes",
            area:grepesArea
        },


     ]
 




  return (
   
    <>
    <Navbar/>
    <div className='barChart'>
       
 {/* <h1>Crop Data</h1> */}
    <div className="continer">
   <div>
    <h3>Data Analysis</h3>
         
    <p> On Y-axis: Area in acers</p>
   </div>

    {/* for bar height use aspect  */}
   
    <ResponsiveContainer width="98%" aspect={2} >
        <BarChart data={crpoData} width={200} height={400}>
            <XAxis dataKey="cropName" />
            <YAxis dataKey="area" />
            <Bar dataKey="area" fill='green' radius={[4,4,0,0]} barSize={30} />
            <Tooltip/>
        </BarChart>
        
      </ResponsiveContainer>
    
    
    </div>      

{/* 
    <div style={{ width: 500, height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={Array}>
            <XAxis dataKey="name" />
            <YAxis/>
            <Tooltip />
            <Bar dataKey="student" fill="rgb(12, 12, 97)">
              <LabelList dataKey="student" position="top" />
            </Bar>
            <Bar dataKey="pv" fill="rgb(59, 180, 59)" >
              <LabelList dataKey="pv" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        </div> */}
    
    </div>
    </>
  )
}

export default Data;
