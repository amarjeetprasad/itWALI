const express=require("express");
const bodyParser=require("body-parser");
const app=express();

//config middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');


app.get("/",(req,res)=>{
    res.sendFile("public/home/home.html",{root:__dirname});
})

app.get("/about-us",(req,res)=>{
    res.sendFile("public/aboutUS/aboutUS.html",{root:__dirname});
})

app.get("/our-offerings",(req,res)=>{
    res.sendFile("public/ourOfferings/ourOfferings.html",{root:__dirname});
})


app.get("/knowledge-bank",(req,res)=>{
    res.sendFile("public/knowledgeBank/knowledgeBank.html" ,{root:__dirname});
})

app.get("/my-account",(req,res)=>{
    res.sendFile("public/myAccount/myAccount.html" ,{root:__dirname});
})


app.get("/article",(req,res)=>{
    res.sendFile("public/article/article.html" ,{root:__dirname});
})


app.get("/news",(req,res)=>{
    res.sendFile("public/news/news.html" ,{root:__dirname});
})

app.get("/notification",(req,res)=>{
    res.sendFile("public/notification/notification.html" ,{root:__dirname});
})

app.get("/press-release",(req,res)=>{
    res.sendFile("public/pressRelease/pressRelease.html" ,{root:__dirname});
})


app.get("/judiciany",(req,res)=>{
    res.sendFile("public/judiciany/judiciany.html" ,{root:__dirname});
})


app.get("/circulars",(req,res)=>{
    res.sendFile("public/circulars/circulars.html" ,{root:__dirname});
})


app.get("/orders",(req,res)=>{
    res.sendFile("public/orders/orders.html" ,{root:__dirname});
})


app.get("/instructions",(req,res)=>{
    res.sendFile("public/instructions/instructions.html" ,{root:__dirname});
})


app.get("/login",(req,res)=>{
    res.sendFile("public/login/login.html" ,{root:__dirname});
})

app.get("/registration",(req,res)=>{
    res.sendFile("public/registration/registration.html" ,{root:__dirname});
})


app.get("/contact",(req,res)=>{
    res.sendFile("public/contact/contact.html" ,{root:__dirname});
})


app.get("/get-services",(req,res)=>{
    res.sendFile("public/getServices/getServices.html" ,{root:__dirname});
})


app.get("/post",(req,res)=>{
    res.sendFile("public/post/post.html" ,{root:__dirname});
})



const port =process.env.PORT||3000;

app.listen(port,()=>{
    console.log("server is running at port 3000!");
})
