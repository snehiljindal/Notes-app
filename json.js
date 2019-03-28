var obj={
    name:'Andrew'
};
var stringobj=JSON.stringify(obj)
console.log(typeof stringobj)
console.log(stringobj);

let personstring='{"name":"Andrew","Age":25}';
let person=JSON.parse(personstring)
console.log(typeof person)
console.log(person)

const fs=require('fs');
let originalnote={
    title:'Some Title',
    body:'Some body'
}
let originalnotestring=JSON.stringify(originalnote)
fs.writeFileSync('notes.json',originalnotestring)

let notestring=fs.readFileSync('notes.json','utf8')
let note=JSON.parse(notestring)
console.log(typeof note)
console.log(note.title)