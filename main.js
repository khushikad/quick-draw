timer_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;


function preload() {
    classifier=ml5.imageClassifier("DoodleNet")
    
    }
    
    function setup() {
        canvas = createCanvas(280, 280);
        canvas.center();
    //background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
    }
    
    function draw() {
        stroke(0);
        strokeWeight(10);
        if (mouseIsPressed) {
    line(pmouseX,pmouseY,mouseX,mouseY);
        }
    
    }

    function check_sketch(){

    }

function update_canvas(){
    background(" rgb(122, 166, 122)");
}
    
    function classifyCanvas(){
    classifier.classify(canvas,gotresults);
    
    
    }
    
    function gotresults(error,results){
    if(error){
    console.error(error);
    }
    console.log(results);
    document.getElementById("label").innerHTML="Label : "+results[0].label;
    document.getElementById("confidence").innerHTML="Confidence : "+ Math.round(results[0].confidence * 100)+"%";
    saythis=new SpeechSynthesisUtterance(results[0].label);
    synth.speak(saythis);
    }
     
    function clearcanvas(){
    background("rgb(122, 166, 122)");
    console.log("clear");

    }
    
    
    function timerEnded() {
        console.log("20 seconds have passed!");
        // You can replace this with your desired action, like an alert or DOM manipulation
      }
      
      // Set a timer to execute the function after 20 seconds (20000 milliseconds)
      setTimeout(timerEnded, 20000); 