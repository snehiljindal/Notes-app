let fs=require('fs')
let os=require('os')
const _ = require('lodash');
const yargs=require('yargs')

//fs.appendFileSync('main.html','Hello world')

let user=require('./text.js');

//const myfilter=_.uniq(['snehil',1,4,1,'snehil'])
//console.log(myfilter)

// var command=process.argv[2]
var argvs=yargs.argv;
var command=argvs._[0];

//console.log('command',process.argv);
console.log('command',command)
console.log('yargs',argvs)
console.log('__________')

const titleOption = {
    describe:'Title of note',
    demand:true,
    alias:'t' 
}

const argv=yargs
    .command('add','Add a new note',{
        title:{
            describe:'Title of note',
            demand:true,
            alias:'t' 
        },
        body:{
            describe:"this is my body",
            demand:true,
            alias:"b"
        }
    })
    .command('list','List all notes')
    .command('read','Read a note',{
        title: titleOption,
        //body: bodyoption
    })
    .command('remove','remove a note',{
        title: titleOption
        //body:bodyoption
    })
    .help()
    .argv;


if(command==='add'){
    //console.log('adding new notes')
    var note=user.addnotes(argv.title,argv.body)
    if(note)
        {user.lognote(note)
        }
    else
    console.log("note title taken")
}

else if(command==='list'){
    //console.log("listing new notes")
    let allnotes=user.getall()
    console.log(`printing ${allnotes.length}notes`)
    allnotes.forEach(function(note) {
        user.lognote(note)
    })
}

else if(command==='read'){
    //console.log('reading note')
    let note=user.getnote  (argv.title);
    if(note){
        user.lognote(note)
    } 
    else
    console.log("note not found")
}

else if(command==='remove'){
    //console.log('removing note')
    let noteremove= user.removenote(argv.title)
    let message=noteremove?'note was removed':'note not found'
    console.log(message)
}

else
    console.log('command not recognized')
