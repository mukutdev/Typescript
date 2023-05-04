"use strict";
function kgToGram(value) {
    try {
        if (typeof value === 'number') {
            const actualValue = value * 1000;
            return actualValue;
        }
        if (typeof value === 'string') {
            const actualValue = parseFloat(value) * 1000;
            return actualValue;
        }
    }
    catch (err) {
        console.log(err.message);
    }
}
