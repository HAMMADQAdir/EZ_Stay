import mysql from "mysql";
import express from "express";
import cors from'cors'
const server = express();
server.use(cors())
server.use(express.json());

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "faraday@123",
  insecureAuth: true,
});
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  db.query("USE ezStay", function (err, result) {
    if (err) throw err;
    console.log("ezStay in Use");
  });
});

server.get("/", (req, res) => {
  res.send("home");
});
// post property in property table
// server.post("/addingProperty",(req,res)=>{
//   const query = 'INSERT INTO item (agreement_pdf, Pincode, Locality, Street, state, userId) VALUES(?,?,?,?,?,?)'
//   const {agreement_pdf, Pincode, Locality, Street, state, userId} = req.body
//   db.query(query,[agreement_pdf, Pincode, Locality, Street, state, userId],(err,result)=>{
//     if (err) throw err;
//     console.log("added")
//     res.json(result)
//   })

// })
// getting items
server.get("/getItem", (req, res) => {
  db.query("SELECT * FROM item", (err, result) => {
    if (err) throw err;
    else {
      res.send(result);
    }
  });
});
// registering user in my sql
server.post("/register", (req, res) => {

  const { FirstName, LastName, STREETNO, Locality, Pincode } = req.body;
 
  const query =
    "INSERT INTO user (FirstName, LastName, STREETNO, Locality, Pincode) VALUES (?,?,?,?,?)";
  db.query(query, [FirstName, LastName, STREETNO, Locality, Pincode], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send("Error inserting data");
    } else {
      console.log("Data added successfully");
      res.status(200).send("Data added successfully");
      res.render('/home');
    }
  });



});

// inserting propeerties details in mysql


server.post("/prpty", (req, res) => {
  const { Pincode, Locality, Street, state,category } = req.body;
  
  let query;
  let params;
  query =
  "INSERT INTO item (Pincode, Locality, Street, state) VALUES (?,?,?,?)";
params = [
  Pincode, Locality, Street, state
];
console.log("get")
db.query(query, params, (err, result) => {
  if (err) {
    console.error("Error inserting data:", err);
    res.status(500).send("Error inserting data");
  } else {
    console.log("Data added successfully");
    res.status(200).send("Data addeddddd successfully");
    res.redirect('/home'); // Use res.redirect instead of res.render
  }
});
  if (category === "PG") {
    const { pg_timing, emminities, pg_mess, mess_timing } = req.body;
    query =
      "INSERT INTO pg_table (Pincode, Locality, Street, state, pg_timing, emminities, pg_mess, mess_timing) VALUES (?,?,?,?,?,?,?,?)";
    params = [
      Pincode, Locality, Street, state,
      pg_timing,
      emminities,
      pg_mess,
      mess_timing,
    ];
  } else if (category === "Flat") {
    const { size, floors, Ftype } = req.body;
    query =
      "INSERT INTO flat_table (FirstName, LastName, STREETNO, Locality, Pincode, size, floors, Ftype) VALUES (?,?,?,?,?,?,?,?)";
    params = [
      FirstName,
      LastName,
      STREETNO,
      Locality,
      Pincode,
      size,
      floors,
      Ftype,
    ];
  } else if (category === "House") {
    const { size, floors } = req.body;
    query =
      "INSERT INTO house_table (FirstName, LastName, STREETNO, Locality, Pincode, size, floors) VALUES (?,?,?,?,?,?,?)";
    params = [
      FirstName,
      LastName,
      STREETNO,
      Locality,
      Pincode,
      size,
      floors,
    ];
  }

  db.query(query, params, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send("Error inserting data");
    } else {
      console.log("Data added successfully");
      res.status(200).send("Data added successfully");
      res.redirect('/'); // Use res.redirect instead of res.render
    }
  });
});


// 1122
server.listen(1122, () => {
  console.log("listen");
});

//   // db.query("CREATE TABLE USER (userId int NOT NULL AUTO_INCREMENT , FirstName VARCHAR(10), LastName VARCHAR(20),STREETNO VARCHAR(10) ,Locality VARCHAR(50), Pincode VARCHAR(6) , PRIMARY KEY(userId) )",(err,result)=>{
//   //     if(err) throw err;
//   //     else console.log(result);
//   // })

//   // db.query("INSERT INTO USER(FirstName, LastName ,STREETNO  ,Locality , Pincode ) VALUE ('jhinga','lala','13','brhampuri','110053')");

//   // creating phn_no table
//   // db.query("CREATE TABLE USER_PHN_NO (USERID INT,phoneNumber VARCHAR(10),FOREIGN KEY (USERID) REFERENCES USER(userId));");
//   let userno = '0076543210';
//   db.query("INSERT INTO USER_PHN_NO (USERID, phoneNumber) VALUES (3, '" + userno + "')");

//   db.query("CREATE TABLE item (itemId INT AUTO_INCREMENT PRIMARY KEY,agreement_pdf BLOB,document_pdf BLOB,Pincode VARCHAR(10),Locality VARCHAR(255),Street VARCHAR(255),state VARCHAR(255),userId INT,  FOREIGN KEY (userId) REFERENCES user(USERID));", function (err, result) {
//     if (err) throw err;
//     console.log(result);
// });

// db.query("DROP TABLE USER_PHN_NO",function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });
