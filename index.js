const express=require('express');
const app=express();
const bodyParser=require('body-parser');

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("home",{
        title:"Home"
    })
})
app.get("/timeline",(req,res)=>{
    res.render("timeline",{
        title:"Timeline"
    })
})
app.get("/contact",(req,res)=>{
    res.render("contact",{
        title:"Contact Us"
    })
})
app.get("/feedback",(req,res)=>{
    res.render("feedback",{
        title:"Feedback"
    })
})
//when there is get request from parameter or url 
// app.get("/submit/:id",(req,res)=>{
//     res.send("your name is "+req.params.id)
// })
//when there is get request from query tag
// app.get("/submit",(req,res)=>{
//     res.send("your name is "+req.query.name)
// })

app.post("/submit",(req,res)=>{
    res.send("Thank you "+req.body.name+" for giving your valuable feedback")
})


app.listen(8000,(req,res)=>{
    console.log("server is running")
})