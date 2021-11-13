Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90
});

var camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
        });
}
console.log('ml5 version:', ml5.version);
classfier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0dq3qSQEK/model.json',modelLoaded);

function modelLoaded(){
    console.log('model-loaded');
}