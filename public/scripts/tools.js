const express = require('express')

class Tools {
    getCurrentTime = () => {
        let today = new Date();
        return today.toISOString().substr(11, 8);
    }
}

module.exports = Tools;