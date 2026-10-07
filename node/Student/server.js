const express =require('express');

const app= express();
const port=5000;

app.set("view engine", "ejs");

const student={
    name: "Hardik Patel",
    course: "Msc.CA",
    email: "hp@gmail.com"
};

app.get("/",(req,res)=>{
    res.render("student", {student:student})
})

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})