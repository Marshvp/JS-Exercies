const repeatString = function(string, n) {

    let word = "";

    if (n > 0) {
        for (let i = 0; i < n; i++) {
            word += string;
        }
        return word;
    } else if (n === 0) {
        return "";
    } return "ERROR"
};

// Do not edit below this line
module.exports = repeatString;
