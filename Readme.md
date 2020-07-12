## Google Speech to text api 
In this case its covered a simple speech to text api use case to transcript a sample .mp3 audio file.
To this its used the google-cloud speech api, then its require to setup a projet on [console.cloud](https://console.cloud.google.com/).
After setting up a projet we need to enable the speech api for that projet on this link [Setup speech api](https://console.cloud.google.com/flows/enableapi?apiid=speech.googleapis.com).
Having the api enable we create a new service acount on **Api's & Services**  at this link [Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)and we add a new key wich will downoload in this case a json file that serves as a key to use the service on our aplication.
Having the json file with the key, we will use it on the .env file of our app to make request's to the speech to text api.

Here we start by converting an audio file to wav as one of the required input is:
- FLAC
- LINEAR16
- MULAW
- AMR
- AMR_WB
- OGG_OPUS
- SPEEX_WITH_HEADER_BYTE
To do this its used the packacge linear16 that basicly converts the .mp3 file to a .wav format
```js
const linear = require('linear16');

const pathOut = async ()=>{
 
    const outPath = await linear({
    inPath:  './audio/datasets_4114_6391_recordings_recordings_english1.mp3',
    outPath: './audio/datasets_4114_6391_recordings_recordings_english1.wav'
    });
    console.log(outPath); // Returns the output path, ex: ./output.wav
     
    };

exports.pathOut = pathOut;
```
### Input
As input its used the Kaggle audio dataset for testing with the speech: "She can scoop these things into three red bags, and we will go meet her Wednesday at the train station."

### Output
```bash
Transcription: please call Stella ask her to bring these things with her from the store six spoons of fresh snow peas five thick slabs of blue cheese and maybe a snack for her brother Bob we also need a small plastic snake and a big toy frog for the kids she can scoop these things into three red bags and 
we will go meet her Wednesday at the train station
```

### References
- Kaggle dataset - english audio
[Speech Accent Archive - Parallel English speech samples from 177 countries](https://www.kaggle.com/rtatman/speech-accent-archive)
