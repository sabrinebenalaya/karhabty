const Agency = require("../Models/user");

const updateOneAgency = async (req, res) => {
  console.log("req=", req.params);
  const id = req.params.id;
  const attribut = req.params.attribut;

  const text = req.params.text;

  try {
    const agency = await Agency.findByIdAndUpdate(
      id,
      { [attribut]: text },
      { new: true }
    );
    await agency.save();

    if (!agency) {
      res.status(402).json({ msg: "Agency not found" });
    } else {
      res.status(200).json({ agency });
    }
  } catch (error) {
    res.status(500).json({ msg: "Operation of getOneAgency is failed" });
  }
};

module.exports = { updateOneAgency };
