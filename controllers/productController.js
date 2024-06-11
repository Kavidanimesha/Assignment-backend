//GET All API

const getAllProducts = (req, res) => {
  res.json({ message: "GET Products" });
};

// POST API

const createProduct = (req, res) => {
  res.json({ message: "SET Products" });
};

//UPDATE API

const updateProduct = (req, res) => {
  res.json({ message: `UPDATE product ${req.params.id}` });
};

//DELETE API

const Deleteproduct = (req, res) => {
  res.json({ message: `DELETE product ${req.params.id}` });
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  Deleteproduct,
};
