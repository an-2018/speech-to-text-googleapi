require('dotenv').config();
const fs = require('fs');
const _ = require('lodash');
const speech = require('@google-cloud/speech');
const linear = require('linear16');
const {pathOut} = require('./convertToWav');

// crete a client
const speechClient = new speech.SpeechClient();

// the path to the audio file to transcribe
// convert mp3  to wav require for google speech api input

pathOut().then(console.log('done hh'));
    /*
const linaerOut = linear('./audio/datasets_4114_6391_recordings_recordings_english1.mp3', './audio/datasets_4114_6391_recordings_recordings_english1.wav')
.then(outPath => console.log(outPath));
*/
const filePath = './audio/datasets_4114_6391_recordings_recordings_english1.wav';

// reads a local audio and converts it to base64
const file = fs.readFileSync(filePath);
const audioBytes = file.toString('base64');
const audio = {
    content: audioBytes,
};

// the sudio file's encoding, sample rate in herstz and BCP-47 language code 'en-US'
const config = {
    encoding: 'LINEAR16',
    sampleRateHertz: 16000,
    languageCode:'en-US'
};

const request = {
    audio,
    config,
};

// detects speech in the auddio file
speechClient
    .recognize(request)
    .then((data) => {
        const results = _.get(data[0], 'results', []);
        const transcription = results
            .map(result => result.alternatives[0].transcript)
            .join('\n');
            console.log(`Transcription: ${transcription}`);
    })
    .catch(err => {
        console.log('Error:', err);
    })

    