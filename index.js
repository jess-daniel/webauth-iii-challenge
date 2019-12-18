const server = require("./api/server");

const port = process.env.PORT || 5000;

// sanity check
server.get("/", (req, res) => {
  res.status(200).json({ message: "It's alive!!" });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
