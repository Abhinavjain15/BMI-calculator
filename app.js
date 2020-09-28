var express=require("express"),
	app=express();
app.use(express.static(__dirname + "/public"));
app.get("/",function(req,res){
	res.render("bmi.ejs");
})

app.listen(3000,function(){
	console.log("Server has started...");
})