const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json())
const port=5000;
app.get('/',(req,res)=>{
    res.send('Hello  my  node server');

});

// all users data 
const users=[
    {id:0,name:"shakil",email:"shakil@gmai.com",phone:"01775592414"},
    {id:1,name:"ahmed",email:"shakil@gmai.com",phone:"01775592414"},
    {id:2,name:"wev",email:"shakil@gmai.com",phone:"01775592414"},
    {id:3,name:"aaahakil",email:"shakil@gmai.com",phone:"01775592414"},
    {id:4,name:"shdfsakil",email:"shakil@gmai.com",phone:"01775592414"},
    {id:5,name:"jhakil",email:"shakil@gmai.com",phone:"01775592414"},
    {id:6,name:"oli",email:"shakil@gmai.com",phone:"01775592414"},
]


app.get('/users',(req,res)=>{

    // search qyery 
   const search=(req.query.search)
   if(search){
    const searchresult=users.filter(user=>user.name.toLowerCase().includes(search));
    res.send(searchresult)

   }
   else{

       res.send(users);
   }

});
//app methord
app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length
    users.push(newUser);
 console.log('hitting the post',req.body)
//  res.send('inside post')
 res.json(newUser)
})
// dynamic api 
app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id]
    res.send(user)
});
app.listen(port,()=>{
    console.log('Listening to port',port);
})