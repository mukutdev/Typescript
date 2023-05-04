"use strict";
const chekcNullValue = (value) => {
    if (value === null) {
        console.log('there is nothing to search');
    }
    else {
        console.log('Searching.....');
    }
};
chekcNullValue('');
