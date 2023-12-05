var express = require('express');
var router = express.Router();
const catagorycontroller = require("../controllers/catagory")
const subcatagorycontroller = require("../controllers/subcatagory")
const  topiccontrollers =  require("../controllers/topic")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//Catagory Router
router.post('/CATAGORY',catagorycontroller.AddCatagory);
router.get('/CATAGORY',catagorycontroller.Getcataory);
router.delete('/CATAGORY',catagorycontroller.Deletcatagory);
router.put('/CATAGORY',catagorycontroller.Updatecatagory);

//SubCatagory Router

router.post('/SUBCATAGORY',subcatagorycontroller.AddsubCatagory);
router.get('/SUBCATAGORY',subcatagorycontroller.GetsubCatagory);
router.delete('/SUBCATAGORY',subcatagorycontroller.DeletesubCatagory);
router.put('/SUBCATAGORY',subcatagorycontroller.PutsubCatagory);

//Topic router
router.post('/TOPIC',topiccontrollers.AddTopic);
router.get('/TOPIC',topiccontrollers.GetTopic);
router.delete('/TOPIC',topiccontrollers.DeleteTopic);
router.put('/TOPIC',topiccontrollers.PutTopic);



module.exports = router;
