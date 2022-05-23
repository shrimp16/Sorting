const yargs = require('yargs');

console.log(yargs.argv._);
const sortBy = yargs.argv._[0];

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

const data = [
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

console.log(data.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
        return 1;
    }
    if (a[sortBy] < b[sortBy]) {
        return -1;
    }
    return 0;
}))