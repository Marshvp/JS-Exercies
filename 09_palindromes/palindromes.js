const palindromes = function (string) {
    let cleanString = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    let tempString = cleanString.split('').reverse().join('');


    return cleanString === tempString

    
};

// Do not edit below this line
module.exports = palindromes;
