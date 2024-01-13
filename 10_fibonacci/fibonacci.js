const fibonacci = function(num) {
    let n1 = 0;
    let n2 = 1;
    let n3 = 0;

    if (num < 0) {
        return "OOPS"
    } else if (!isNaN(num)) {
        num = parseInt(num)
    }

    for (let i = 1; i <= num; i++){
        n3 = n1 + n2
        n1 = n2
        n2 = n3;
    }
    return n1

   
};

// Do not edit below this line
module.exports = fibonacci;
