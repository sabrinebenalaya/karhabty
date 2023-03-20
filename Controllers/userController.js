const Person = require("../Models/user");


const addUser = async (req, res) => {
    const person = req.body;
    const newPerson = new Person({
        firstName: person.firstName,
        lastName: person.lastName,
        isAgency: person.agency,
        mail: person.mail,
        password: person.password,
        photo: person.photo,
        adress: person.adress,
    });
    try {
      const person = await newPerson.save();
      if (!person) {
        res.status(404).json({ msg: "person not added" });
      } else {
        res.status(200).json({ person });
      }
    } catch (error) {
      res.status(500).json({ msg: "Operation of addPerson is failed" });
    }
  };
const updateUser = async (req, res)=>{

}

const deleteUser = async (req, res)=>{
  
}

const getUser = async (req, res)=>{
  
}
  module.exports = { addUser, updateUser, deleteUser, getUser}

