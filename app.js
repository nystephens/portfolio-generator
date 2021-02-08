const profileDataArr = process.argv.slice(2, process.argv.length);

console.log(profileDataArr);


const printProfileData = profileDataArr => {
    // This
    for (let i = 0; i < profileDataArr.length; i+= 1)
    console.log(profileDataArr[i]);
};

printProfileData(profileDataArr);

console.log('=======================')

// Is the same as this...
profileDataArr.forEach(profileItem => console.log(profileItem));

