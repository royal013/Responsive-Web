const express=require("express");
require("./db/connection");
const User=require("./models/schema");
const hbs=require("hbs");
const path=require("path");

const app=express();
const port=process.env.PORT || 3000;
app.set("view engine","hbs");
// app.use(express.static());
app.use(express.urlencoded({extended:false}));
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
app.use(express.static(static_path));
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist")));


app.get("/",(req,res)=>{
    res.render("index.hbs");
})
app.get("/about",(req,res)=>{
    res.render("ABOUT");
})
app.get("/service",(req,res)=>{
    res.render("SERVICE");
})
app.get("/gallary",(req,res)=>{
    res.render("GALLARY");
})
app.get("/contact",(req,res)=>{
    res.render("CONTACT");
})

app.post("/contact",async(req,res)=>{
    try {
        // res.send(req.body);
        const userData=new User({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            message:req.body.message
        })
        const data= await userData.save();
        res.status(200).render("index.hbs");
        
    } catch (error) {
        res.status(400).send(error);
    }
})


app.listen(port,()=>{
    console.log(`Listening on port number: ${port}`);
})