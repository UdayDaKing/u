Webcam.set({
    width: 350, 
    height: 400,
    image_format:'png',
    png_quality: 90
});
Camera = document.getElementById("Camera");
Webcam.attach('#Camera');
function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="Captured_Image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GEfZBGes9/model.json',modelLoaded);
function modelLoaded(){
    console.log('model loaded');
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "the first prediction is" + prediction_1;
    speak_data2 = "the second prediction is" + prediction_2;
    var utterThis = new speechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis)
}
function Check(){
    img = document.getElementById('Captured_Image');
    classifier.classify(img,gotresult);
}

function gotresult(error, results){
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        documetn.getElementById9"result_emotion_name1").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
