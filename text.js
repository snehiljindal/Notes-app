console.log("my name is snehil")
console.log(module)
var add=function(a,b){
    return a+b
}
const fs=require('fs')
let fetchnotes=() =>{
    try {
        let notesstring=fs.readFileSync('notes-data1.json')
        return JSON.parse(notesstring);
    }catch(e){
        console.log('file doesnot form')
        return []
    }
};
let savenotes=(notes) =>{
    fs.writeFileSync('notes-data1.json',JSON.stringify(notes))
};
let addnotes=(title,body) =>{
//console.log("Adding note",title,body)
var notes=fetchnotes();
var note={
   title,
   body 
}

let duplicatenotes=notes.filter((note) =>note.title===title)

if(duplicatenotes.length===0)
{notes.push(note);
    console.log("snehil chutiya hai")
    savenotes(notes);
    return note; 
   }
  
};
let getall=() =>{
    console.log("getting all notes")
    return fetchnotes()
}
let getnote=(title) =>{
    //console.log('getting note',title)
    let notes=fetchnotes()
    let filternotes=notes.filter((note) =>note.title===title)
    return filternotes[0]
}
let removenote=(title) =>{
//console.log('remove note',title)
let notes=fetchnotes();
let filternotes=notes.filter((note) => note.title!==title)
savenotes(filternotes)
return notes.length!==filternotes.length
}
let lognote=function(note){
    debugger;
    console.log("note found")
    console.log('__')
    console.log(`title:${note.title}`)
    console.log(`body:${note.body}`)

}
module.exports={
    add, 
    addnotes,
    getall,
    getnote,
    removenote,
    lognote
}