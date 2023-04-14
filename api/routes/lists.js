const router = require("express").Router();
const List = require("../models/List");
const verify = require("../middlewares/verifyToken");
const adminAuth = require("../middlewares/adminAuth");
//CREATE

router.post("/", verify, adminAuth, async (req, res) => {
  console.log("router post called")
 
  // const isAdmin = req.user.isAdmin;
  const newList = new List(req.body);
    try {
      const savedList = await newList.save();
      res.status(201).json(savedList);
    } catch (err) {
      res.status(500).json(err);
    }

  
});

//DELETE

router.delete("/:id", verify, adminAuth, async (req, res) => {
  try {
    await List.findByIdAndDelete(req.params.id);
    res.status(201).json("The list has been delete...");
  } catch (err) {
    res.status(500).json(err);
  }
  // if (req.user.isAdmin) {
  //   try {
  //     await List.findByIdAndDelete(req.params.id);
  //     res.status(201).json("The list has been delete...");
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // } else {
  //   res.status(403).json("You are not allowed!");
  // }
});

//GET

router.get("/", verify, async (req, res) => {
  console.log("listRouter GET / called")
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    console.log("listRouter GET / success. list is: ", list)
    // res.send("23232");
    res.status(200).json(list);

  } catch (err) {
    console.log("listRouter GET / error: ", err)
    // res.status(500).json(err);
  }
});

module.exports = router;
