const fs = require('fs');

const writeFile = fieContent => {
    return new Promise((resolve, reject) =>{
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there is an error reject promise and send error to the Promise's .catch method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesnt accidentally execute the resolve function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the .then method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) =>{
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'stylesheet copied!'
            })
        })
    });
};

module.exports = { writeFile, copyFile };