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

    logger = (userAgent) => {
        let fs = require('fs');
        
        let newLog=`${new Date()},${userAgent}\r`;

        // todo - append to file
        fs.appendFile("file.xls", newLog, function(err){
                if(err) throw err;
                console.log('IS WRITTEN')
            }
        );
    }
}


module.exports = Tools