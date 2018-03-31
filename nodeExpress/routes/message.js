var express = require("express");
var router = express.Router();
var readFile = require("./utils").readFile;
var writeFile = require("./utils").writeFile;
var axios = require("axios");

router.get("/getData", async function(req, res, next) {
  let { kw, type } = req.query;
  let data = await readFile("index.json");
  if (type !== undefined) {
    data = data[type].data;
    res.json(data);
  }
  if (kw !== undefined) {
    let arr = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        data[key].data.forEach(item => {
          if (item.content.includes(kw)) {
            arr.push(item);
          }
        });
      }
    }
    res.json(arr);
  }
});

router.post("/comment",async (req, res) => {
  let {id} = req.query;
  let comment = req.body.comment;
  let result = await readFile("comment.json");
  result = result.map(item=>{
    if (item.id==id) {
      item.data.unshift(comment)
    }
    return item;
  })
  writeFile('comment.json',result).then(() => {
    res.send("success");
  }).catch((e) => {
    res.send("failed")
  }) 
});

router.post("/collectArticle", (req, res) => {
  req.session.collect = req.session.collect || [];
  let ary = req.session.collect;
  let isExit = ary.find(item => {
    return item.id == req.body.info.id;
  });
  !isExit ? ary.push(req.body.info) : null;
 
  res.send("ok");
});
router.get("/rankData", async (req, res) => {

  let { id } = req.query;
  id==='undefined'?id=0:id=Number(id);
  if (id) {
    let data = (await readFile("rankData.json")).find(item => item.id == id);
    res.send(data);
  } else {
    let data = await readFile("rankData.json");
    res.send(data);
  }
});
router.get("/class",async (req,res) => {
  let data = await readFile("class.json");
  res.send(data);
})

router.get("/search",async (req,res)=>{
  let {id} = req.query;
  let data = await readFile("index.json");
  let result = {}
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
           result= data[key].data.find(item=>item.posterId==id);
            if(result){
                res.send(result);
                break;
            }
        }
    }
})

router.get("/comment",async (req,res)=>{
  let {id} = req.query;
  let result = await readFile("comment.json");
  result = result.find(item=>item.id==id);
  res.send(result.data);
})

module.exports = router;
