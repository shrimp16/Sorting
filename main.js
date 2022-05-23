const yargs = require('yargs');
const fs = require('fs');

const initialFile = yargs.argv._[0];
const sortedFile = yargs.argv._[1];
const sortBy = yargs.argv._[2];

const data = JSON.parse(fs.readFileSync(`${initialFile}.json`));

console.log(data);

fs.writeFile(`${sortedFile}.json`, JSON.stringify(data, null, 2), (err) => {
    if(err) throw err;
})

const names = [
    "Luis",
    "Beatriz",
    "Date a Live I",
    "Bruno",
    "Bruna",
    "Sofia",
    "Date a Live II",
    "Luis Camara",
    "Date a Live III",
    "Luis Antonio",
    "Date a Live IV",
    "Date a Live A"
]

const obj = [
    {
        name: "Luis",
        age: 18
    },
    {
        name: "Sofia",
        age: 17
    },
    {
        name: "Beatriz",
        age: 15
    },
    {
        name: "Bruno",
        age: 19
    },
    {
        name: "Bruna",
        age: 12
    },
    {
        name: "John",
        age: 12
    },
    {
        name: "Andre",
        age: 12
    },
]

//console.log(names.sort());

/*console.log(data.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
        return 1;
    }
    if (a[sortBy] < b[sortBy]) {
        return -1;
    }
    return 0;
}))*/