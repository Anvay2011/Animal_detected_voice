var cow = 0;
var cat = 0;
var lion = 0;
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/elnn84p2D/model.json', modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results)
        red = Math.floor(Math.random() *255) + 1;
        blue = Math.floor(Math.random() *255) + 1;
        green = Math.floor(Math.random() *255) + 1;

        document.getElementById("result_label").innerHTML = 'Detected Voice is-'+ results[0].label;
        document.getElementById("no_of_voices").innerHTML = 'Detected Lion-'+ lion+' , Cat-'+cat+ ' ,Cow-'+cow;
        document.getElementById("result_label").style.color = "rgb("+red+","+green+","+blue+")";
        document.getElementById("no_of_voices").style.color = "rgb("+red+","+green+","+blue+")";
        img=document.getElementById("animal_image");

        if (results[0].label == "Cow") {
            img.src = 'Cow.gif';
            cow=cow+1;
        }
        else if (results[0].label == "Cat") {
            img.src = 'Cat.gif';
            cat=cat+1;
        }
        else if  (results[0].label == "Lion") {
            img.src = 'Lion.gif';
            lion=lion+1;
        }
        else {
            img.src = 'Ear.png';
        }
    }
}