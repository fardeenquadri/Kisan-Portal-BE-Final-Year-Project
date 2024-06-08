import mysql from "mysql";
import expres from "express";
import cors from "cors";

const app = expres();

app.use(expres.json());
app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "final_year_project",
});

con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected susessfully");
  }
});

app.post("/reg", (req, res) => {

  console.log(req.body);

  const { name, email,mobile, password } = req.body;

  const dataQuery = "insert into registration set ?";

  con.query(dataQuery, { name, email,mobile, password }, (err, result) => {
    if (err) {
      console.log(err);
      return res.json(err);
    } else {
      res.json("sucess");
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)
  const query = "SELECT * FROM registration WHERE email = ? AND password = ?";
  con.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);

      return res.json("fail");
    }
    if (results.length === 0) {
      console.log("fail1");
      return res.json("fail");
    }

    // console.log("fail2");
    return res.json("sucess");
  });
});


// save data api

app.post("/savedata",(req,res)=>{

  console.log(req.body)

  let {state,district,taluka,area,crop,season,culti_date,yeild_date,village,soil} = req.body

  const dataQuery="insert into crop_data set ?"

  con.query(dataQuery,{state,district,taluka,area,crop,season,culti_date,yeild_date,village,soil},(err,result)=>{

    if(err){
      console.log(err)
      return res.json("fail")
    }else{
      console.log("data saved")
      return res.json("sucess")
    }
  })


})


// fetch project data api

app.get("/cropdata",(req,res)=>{

  const dataQuery ="select * from crop_data"

  con.query(dataQuery,(err,result)=>{

    if(err){
      console.log(err)
      return res.json("fail")

    }else{
      console.log("sucess")
      // console.log(result)
      return res.json(result)
    }
  })

})


app.get("/cropInfo/:id",(req,res)=>{

  console.log( req.params.id)
  // console.log(req.body)
  let id = req.params.id
  const dataQuery ="select * from crop_data where id =? "

  con.query(dataQuery,[id],(err,result)=>{

    if(err){
      console.log(err)
      return res.json("fail")

    }else{
      console.log("sucess")
      // console.log(result)
      return res.json(result)
    }
  })

})

// update status api

app.post("/updatecrop",(req,res)=>{

  console.log(req.body)

  
  const { id,state,district,taluka,area,soil,season,culti_date,yeild_date,village } = req.body;

  
  const dataQuery = "update crop_data set `state`=?,`district`=?,`taluka`=?,`area`=?,`soil`=?,`season`=?,`culti_date`=?,`yeild_date`=?,`village`=? where id=?";


  con.query(dataQuery, [state,district,taluka,area,soil,season,culti_date,yeild_date,village,id], (error, results) => {
    if (error) {
      console.error('Error updating column:', error);
      // res.status(500).json({ error: 'Failed to update column' });
      return res.json("fail")
    } else {
      console.log('Column updated successfully');
      res.json("sucess");
    }
  });
})


app.delete("/del",(req,res)=>{

  console.log(req.body);

    let {id}=req.body;

    console.log(req.body);

    let sql = "DELETE FROM crop_data WHERE id = ?"

    con.query(sql,[id],(err,result)=>{

          if(err){

              console.log(err)
              return res.json('fail');
          }else{

              console.log("Data deleted")
              return res.json(result)
          }
    })
})




app.listen(4500);
