const linear = require('linear16');

const pathOut = async ()=>{
 
    const outPath = await linear({
    inPath:  './audio/datasets_4114_6391_recordings_recordings_english1.mp3',
    outPath: './audio/datasets_4114_6391_recordings_recordings_english1.wav'
    });
    console.log(outPath); // Returns the output path, ex: ./output.wav
     
    };

exports.pathOut = pathOut;