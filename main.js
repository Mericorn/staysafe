prediction_1 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/W1bmqDXpP/model.json', modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

//define function gotResult(error, results)
function gotResult(error, results){
  if(error){
    console.error(error);
  } else{
      console.log(results);
      document.getElementById("status").innerHTML = prediction_1;
      if(prediction_1 == "Mask"){      
    document.getElementById("update_emoji").innerHTML = "&#x1F637";
    } else{
        document.getElementById("update_emoji").innerHTML = "&#x26d4";
    }
  }
}
