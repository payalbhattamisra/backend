import express from 'express';
const app=express();
app.use(express.static('dist'));
// app.get('/',(req,res)=>{
//  res.send("server is ready");
// });

//get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
  const jokes=[
  {
    id:1,
    title:'a joke',
    content:'thehre is ajoke'
  },
  {
    id:2,
    title:'another joke',
    content:'thehre is another joke'
  },
  {
    id:3,
    title:'3rd joke',
    content:'thehre is 3rd joke'
  },
  {
    id:4,
    title:'4th joke',
    content:'thehre is 4th joke'
  },
  {
    id:5,
    title:'5th joke',
    content:'thehre is 5th joke'
  }
  ];
  res.send(jokes);
});
const port=process.env.PORT||3000;
app.listen(port,()=>{
 console.log(`serve at http://localhost:${port}`);
});