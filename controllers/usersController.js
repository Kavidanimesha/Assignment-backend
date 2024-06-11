//GET All API

const getAllUsers = (req, res) => {
    res.json({ message: "GET USERS" });
  };
  
  // POST API
  
  const createUser = (req, res) => {
    res.json({ message: "SET USer" });
  };
  
  //UPDATE API
  
  const updateUSer = (req, res) => {
    res.json({ message: `UPDATE User ${req.params.id}` });
  };
  
  //DELETE API
  
  const DeleteUser = (req, res) => {
    res.json({ message: `DELETE User ${req.params.id}` });
  };
  
  module.exports = {
    getAllUsers,
    createUser,
    updateUSer,
    DeleteUser,
  };
  