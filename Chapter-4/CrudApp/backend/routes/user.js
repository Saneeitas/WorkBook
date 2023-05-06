const router = require('express').Router();
const User = require("../models/User");


router.post('/create', (req, res) => {

  if (!req.body.name || !req.body.phone || !req.body.address ) {
    return res.status(400).send({ message: "Inputs cannot be empty" });
  }

  const addUser = new User({
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address
  });

  addUser.save((err, user) => {
    if (err) {
      res.send(err)
    } else {
      res.send(user)
    }
  })
  

})

router.get('/read', (req,res)=>{
  User.find({}, (err, findUsers) => {
    if (!err) {
      res.send(findUsers);
    }
  });
})

router.get('/read/:id', (req, res) => {
  const id = req.params.id;
  
  User.findById(id)
    .then(data => {
      if (!data) {
        res.status(404).send(
          { message: `User not found` });
      } else {
        res.send(data)
    }
    })
    .catch(err => {
    res.status(500).send({message: "Error"})
  })
    
  })


router.put('/update/:id', (req, res) => {
  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send(
          { message: `Cannot update record with id ${id}. Record not found` });
      } else {
        res.send({message: "Updated successfully"})
    }
    })
    .catch(err => {
    res.status(500).send({message: "Error updating record"})
  })
  
})

router.delete('/delete/:id', (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send(
          { message: `Cannot delete record with id ${id}. Record not found` });
      } else {
        res.send({message: "Deleted successfully"})
    }
    })
    .catch(err => {
    res.status(500).send({message: "Error deleting record"})
    })
  
  // User.deleteOne({ _id: id }).then(() => {
  //   res.send("Delete")
  // }).catch((err) => {
  //   res.send(err)
  // })
  
})


module.exports = router;