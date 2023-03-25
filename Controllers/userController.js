const Person = require("../Models/user");



const updateUser = async (req, res)=>{

}

const deleteUser = async (req, res)=>{
  
}

const getUser = async (req, res)=>{
  
}

const getOneAgency = async (req, res) => {
  const id = req.params.id;
 
  try {
    const Agency = await Person.findById(id);
    

    if (!Agency) {
      res.status(402).json({ msg: "Agency not found" });
    } else {
      res.status(200).json({ Agency });
    }
  

  } catch (error) {
    res.status(500).json({ msg: "Operation of getOneAgency is failed" });
  }
};

  module.exports = { updateUser, deleteUser, getUser, getOneAgency}

