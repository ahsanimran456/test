import express from "express";
// import getData from "./get.js";
// import addpost from "./add.js";
// import Deletepost from "./delete.js";
// import getAllposts from "./getallpost.js";
// import Edit from "./edit.js";
const router = express.Router()

const products = []
router.post("/post", (req, res) => {
    const body = req.body
    console.log(body)
    if (body.name && body.class) {
        products.push({
            name: body.name,
            class: body.class,
        })
        res.send("product add succesfuly")
    } else {
        res.send("product not added")
    }
})
router.get("/posts",(req,res)=>{
    res.send({products})
})

router.delete("/posts/:id",(req,res)=>{
    const userid =  req.params.id
    if (body.name && body.class) {
        let flag = false
        for( i =0 ; i< products.length ; i++){
            if(products[i].id==userid){
                products.splice(i,1)
                res.send("product delete successfuly")
                flag = true;
                break
            }else{
                res.send("product not found")
            }
        }
    } else {
        res.send("frontend data error")
    }
})


// router.get("/getdata/:Cityname", getData)
// router.delete("/delete", Deletepost)
// router.put("post", Edit)





export { products, router }
