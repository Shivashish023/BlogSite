import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;
let posts=[
    {
   Title:"My First Blog Post",
   Datte:"Posted on 1-1-24",
   Paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Donec sed odio dui."
} ,
{
    Title:"Random VLog",
   Datte:"Posted on 12-1-24",
   Paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Donec sed odio dui."
   }
];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/posts",(req,res)=>{
    res.json(posts);
});
app.post("/create",(req,res)=>{
    const post = {
      Title: req.body.ti,
      Paragraph: req.body.para,
      Datte: req.body.da,
    };
    
    posts.push(post);
    res.status(201).json(post);
})

app.listen(port,()=>{
    console.log(`APi running on  port ${port}..`)
})