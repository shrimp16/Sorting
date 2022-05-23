const yargs = require('yargs');
const fs = require('fs');

const initialFile = yargs.argv._[0];
const sortBy = yargs.argv._[1];
const sortedFile = yargs.argv._[2] || 'new_file';

if(!initialFile){
    console.log("You have to select a file!");
    process.exit();
}

if(!sortBy){
    console.log("You have to choose what's the base!");
    process.exit();
}
 
const data = JSON.parse(fs.readFileSync(`${initialFile}.json`));

const newData = data.sort((a, b) => {
    if(a[sortBy] > b[sortBy]){
        return 1;
    }

    if(a[sortBy] < b[sortBy]){
        return -1;
    }

    return 0;
})

fs.writeFile(`${sortedFile}.json`, JSON.stringify(newData, null, 2), (err) => {
    if(err) throw err;
})

console.log("File sorted!");