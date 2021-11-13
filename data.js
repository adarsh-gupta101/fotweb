const router = require("express").Router();
const data = require("./dataSchema");

router.post("/", async (req, res) => {
  const newData = new data({
    Q1: req.body.Q1,
    Q2: req.body.Q2,
    Q3: req.body.Q3,
    Q4: req.body.Q4,
    Q5: req.body.Q5,
    Q6: req.body.Q6,
    name: req.body.name,
    mobile: req.body.mobile,
  });
  try {
    const savedUser = await newData.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
