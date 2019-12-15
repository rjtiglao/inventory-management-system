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
