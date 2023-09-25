var myVar;
var factNumber;
var factPlaceholder = document.getElementById("placeholder");
var RandomFacts = ["The ancient Egyptians were the first to tame the cat (in about 3000 BC), and used them to control pests.",
               "Cats share 95.6% of their DNA with tigers.",
               "Cats are asleep for 70% of their lives.",
               "Cat kidneys are super efficient, they can rehydrate by drinking seawater.",
               "Kittens who are taken along on short, trouble-free car trips to town tend to make good passengers when they get older. They get used to the sounds and motions of traveling and make less connection between the car and the visits to the vet.",
              "fact 6",
              "fact 7",
            "fact 8"]



function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function randomFact(){
  factNumber = Math.floor(Math.random()*5);
  return RandomFacts[factNumber];
}

 function display(){
  
  factPlaceholder.textContent = randomFact();
}
display()


