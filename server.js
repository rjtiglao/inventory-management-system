const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const multer = require("multer");

//it’s a good practice to rename files after upload for security
// purposes.A random - generated ID works well for this
// which is what uuid is for
const uuidv4 = require("uuid/v4");
const path = require("path");

require("dotenv").config();

const app = express();
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: `${process.env.SQL_AUTHORIZATION}`,
  database: "HIMS"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connection as id " + connection.threadId);
});

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post("/api/items", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let attending = req.body.attending;

  console.log("Inserting new guest into guest list...");

  connection.query(
    "INSERT INTO people SET ?",
    {
      name: name,
      email: email,
      attending: attending
    },
    function(err, res) {
      if (err) throw err;
      console.log(`${name}` + " has been inserted into the people table!");
    }
  );
});

app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to my API</h1>
    <p>/api/test</p>
    <p>/api/attendees</p>
    `);
});

app.get("/api/test", cors(), (req, res) => {
  res.json({
    teacher: "Drew"
  });
});

app.get("/api/items", cors(), (req, res) => {
  connection.query("SELECT * FROM items", (err, rows, fields) => {
    if (!err)
      res.json({
        data: rows
      });
    else console.log(err);
  });
});

// FORM SUBMISSION WITH FILE UPLOADS
// configure storage for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    /*
      Files will be saved in the 'img' directory. Make
      sure this directory already exists!
    */
    cb(null, "./client/src/assets/img");
  },
  filename: (req, file, cb) => {
    /*
      uuidv4() will generate a random ID that we'll use for the
      new filename. We use path.extname() to get
      the extension from the original file name and add that to the new
      generated ID. These combined will create the file name used
      to save the file on the server and will be available as
      req.file.pathname in the router handler.
    */
    const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, newFilename);
  }
});
// create the multer instance that will be used to upload/save the file
const upload = multer({ storage });

app.post("/api/additem", upload.single("selectedFile"), (req, res) => {
  /*
    We now have a new req.file object here. At this point the file has been saved
    and the req.file.filename value will be the name returned by the
    filename() function defined in the diskStorage configuration. Other form fields
    are available here in req.body.
  */
  let fullname = req.body.fullname;
  let quantity = req.body.quantity;
  let software = req.body.software;
  let location = req.body.location;
  let description = req.body.description;
  let part_number = req.body.part_number;
  // req.file retrieves file meta data.
  let newfileName = req.file.filename;
  let newfileSize = req.file.size;
  let newfileType = req.file.mimetype;

  console.log(newfileName);

  console.log(part_number);

  console.log("Inserting item into inventory...");

  connection.query(
    "INSERT INTO items SET ?",
    {
      name: fullname,
      description: description,
      quantity: quantity,
      location: location,
      reworks: software,
      part_number: part_number,
      image_file_name: newfileName,
      image_content_type: newfileType,
      image_file_size: newfileSize
    },
    function(err, res) {
      if (err) throw err;
      console.log(
        `${part_number}` + " has been inserted into the items table!"
      );
    }
  );
  res.send();
});

app.listen(PORT, () => {
  console.log(`App is listening at PORT ${PORT}`);
});
