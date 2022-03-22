import express from 'express'
import {Request, Response} from 'express'
import { Note } from './note'

const app = express()
const notes: Note[] = [
  {
    title: "Porsche",
    content: "Cars",
    createDate: "21-03-2022",
    tags:["#car", "#vintage", "#996"],
    id:1
  }
];

app.use(express.json())
app.get('/', function (req: Request, res: Response) {
  console.log(req.body) // e.x. req.body.title 
  res.status(201).send("Hi. Im simple api for note app");
})

app.get('/note/:id', function (req: Request, res: Response) {
  console.log(req.body) // e.x. req.body.title 
  const note = notes.find(c=>c.id===parseInt(req.params.id));
  if(!note){
    res.status(404).send("Can't find")
  }
  res.status(200).send(note)
})

app.post('/note', function (req: Request, res: Response) {
  console.log("Add me!")
  const note = req.body;
   console.log("title:", req.body.title); 
   console.log("content:", req.body.content);
   console.log("createDate:", req.body.createDate);
   console.log("tags: ", req.body.tags);
   console.log("id:", notes.length + 1);
  
  notes.push(note);
  res.status(201).send(note);
})

app.put('/note/:id', function (req: Request, res: Response) {
  console.log("Read me!")
  const note = notes.find(c=>c.id===parseInt(req.params.id));
  if(!note){
    res.status(404).send("Can't update")
  };
  res.status(203).send(note)
})

app.delete('/note/:id', function (req: Request, res: Response) {
  console.log("Read me!")
  const note = notes.find(c=>c.id===parseInt(req.params.id));
  if(!note){
    res.status(404).send("Can't delete")
  };
  res.status(204).send(note)
})

app.listen(3000)