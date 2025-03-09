const removeFromArray = function(list, ...values) {
    let modifiedList = [];
    for (let i = 0; i < list.length; i++) {
        let valFound = false;
        for (let j = 0; j < values.length; j++) {
            if (list[i] === values[j]) {
                valFound = true;
                break;
            }
        }
        if (!valFound) {
            modifiedList.push(list[i]);
        }
    }
    return modifiedList; 
};

// Do not edit below this line
module.exports = removeFromArray;
