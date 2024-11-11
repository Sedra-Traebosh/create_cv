const image_input = document.querySelector("#file1");
var uploaded_image = "";
image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector(
      "#image1"
    ).style.backgroundImage = `url(${uploaded_image})`;
    uploaded_image.style.zIndex = "2";
  });
  reader.readAsDataURL(this.files[0]);
});

var type1 = ["C", "r", "e", "a", "t", "e", " Y", "o", "u", "r", " C", "V"];
var t = setInterval(typing, 100);
var i = 0;
function typing() {
  document.getElementById("p1").innerText += type1[i];
  i++;
  if (i == type1.length) {
    clearInterval(t);
  }
}
//to translate between first and second page;
var next = document.getElementById("href11");
var two = document.getElementById("two1");
var one = document.getElementById("one1");
next.onclick = () => {
  next.href = "http://127.0.0.1:5500/.picasaoriginals/second_CV.html";
};

// let text="Hi , I am Hussein";

// let speach=new
// SpeechSynthesisUtterance();
// function TextToSpeach(){
//     speach.text=text;
//     speach.rate=1;
//     speach.volume=1;
//     speach.pitch=1;
//     speach.lang="en-US";
//     SpeechSynthesis.speak(speach);
// }
// TextToSpeach();
