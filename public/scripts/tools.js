// this currently does bugger all!!

const express = require('express')

class Tools {
    getCurrentTime = () => {
        let today = new Date();
        return today.toISOString().substr(11, 8);
    }

    printHello = () => {
        return ('Hello')
    }
}


module.exports = Tools