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