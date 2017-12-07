var artistList = ["Jayz","T.I","Lil Baby","Young Jeezy","2 Chainz","Migos","Lil Yahty","Outcast","K camp"];
var  nameLength =0;
var chosenArtist = "";
var item = "";
var blanks = [];
var j = 10;

var item = artistList[Math.floor(Math.random()*artistList.length)];
chosenArtist = item.split("");
namelength = chosenArtist.length;
console.log(chosenArtist);

for (var i = 0; i < namelength; i++) {
      blanks.push("_");
      
     
      }
      console.log(blanks);
      document.getElementById("question").innerHTML = blanks.join(" ");


document.onkeyup = function(event) {
      var node = document.createElement("LI");
    var textnode =string.fromCharCode(event.key).toLowerCase();
     node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);


     j--
       document.getElementById("rem").innerHTML = "you have "+ j + " guesses remaining";
    if (j==0){
          document.write("Game Over");
    }
      
     
};




//    return a * b;                // Function returns the product of a and b

 //item.toString();
//var n = item.replace("item", "_");
//alert(n);

    //document.onkeyup = function(event) {
           //var userGuess = event.key.toLowerCase();}

           //console.log("Hiiiriri");