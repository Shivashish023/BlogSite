
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app=express();
const port=3000;
const API_URL="http://localhost:4000"

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",  async (req,res)=>{
    res.render("index.ejs");
});
app.post("/create", async (req,res)=>{
    res.render("indcreate.ejs");
});
app.post("/addpost", async (req,res)=>{
   
   try{
    const response= await axios.post(`${API_URL}/create`,req.body);
   }
   catch(error){
    res.status(500).json({ message: "Error creating post" });
   }
   
    res.redirect("/");
});

app.post("/view",async (req,res)=>{
    try {
        const response = await axios.get(`${API_URL}/posts`);
        console.log(response);
        res.render("indview.ejs", { posts: response.data });
      } catch (error) {
        res.status(500).json({ message: "Error fetching posts" });
      }
    
})


  
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
});
