app.post("/api/attendees", (req, res) => {
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

export default PostApi;
