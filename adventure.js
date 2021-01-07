var gameContainer = document.getElementById('game-container');
var title = document.getElementById('title');
var description = document.getElementById('description');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var inventoryItem = document.getElementById('inventoryItem');

var oppakken = {mes:false, breekijzer:false, };
var button_titels = {button1:"", button2:"", button3:""};
var level_onclick = {button1:"", button2:"", button3:""};
var inventoryItem = document.getElementById("inventoryItem");

start();

function start(){
    gameContainer.style.backgroundImage = "url('img/busje.jpg')";
    console.log("start");
    title.innerHTML = "ontsnappen van de ontvoerders";
    description.innerHTML = "omschrijving: je word ontvoerd door 2 mannen. ze nemen je mee naar het bos er zijn twee paden naar het huis van de ontvoerders en je komt van rechts als je van het huis naar de padden kijkt. je ziet een voor deur en een kelder je word mee naar binnen genomen ze brengen je naar zolder. ze binden je handen en voeten vast dus je kan niks doen je kan allen weg komen zonder dood te gaan door goede beslissingen te maken.";
    

    button1.innerHTML = "start";

    button1.style.display = "inline";
    button2.style.display = "none";
    button3.style.display = "none";
    inventoryItem.style.display = "none";
    
    button1.onclick = level1;
}

function level1(){
    gameContainer.style.backgroundImage = "url('img/eten.jpg";
    console.log("eten");
    title.innerHTML = "eten";
    description.innerHTML = "omschrijving: je zit al even vast op zolder je begint te roepen dat je honger hebt een van de twee mannen komt eten brengen met een mes en vork";
    description.style.color = "red";

    button1.innerHTML = "je eten op eten";
    button2.innerHTML = "je zelf los maken";
    button3.innerHTML = "je valt hem aan";

    button1.style.display = "inline";
    button1.onclick = function() {level2()};

    button2.style.display = "inline";
    button2.onclick = function() {level3()};

    button3.style.display = "inline";
    button3.onclick = function() {level4()};

    inventoryItem.style.display = "inline";
    inventoryItem.src = "img/mes.jpg"
    inventoryItem.onclick = function (){
        oppakken["mes"] = true;
        level1(); 
    };

    if (oppakken["mes"] == true) {
        button2.style.display = "inline-block";
        button3.style.display = "inline-block";
    } else {
        button2.style.display = "none";
        button3.style.display = "none"; 
    } 
}

function level2(){
    gameContainer.style.backgroundImage = "url('img/dood.jpg')";
    console.log("dood");
    title.innerHTML = "game over";
    description.innerHTML = "omschrijving: je hebt het eten op en er zat vergif in";
    
    button1.innerHTML = "opnieuw spelen";

    button1.style.display = "inline";
    button1.onclick = function() {start()};

    button2.style.display = "none";
    
    button3.style.display = "none";

    inventoryItem.style.display = "none";
}

function level3(){
    gameContainer.style.backgroundImage = "url('img/touw.jpg')";
    console.log("los");
    title.innerHTML = "je bent los";
    description.innerHTML = "omschrijving: je hebt je zelf los gemaakt en eet het eten niet op";
    
    button1.innerHTML = "naar de deur die naar beneden gaat";
    button2.innerHTML = "de zolder door zoeken"

    button1.style.display = "inline";
    button1.onclick = function() {level6()};

    button2.style.display = "inline";
    button2.onclick = function() {level5()};

    button3.style.display = "none";

    inventoryItem.style.display = "none";
}

function level4(){
    gameContainer.style.backgroundImage = "url('img/dood.jpg')";
    console.log("dood");
    title.innerHTML = "game over";
    description.innerHTML = "omschrijving: je hebt er een vermoord maar de anderen schoot je dood";
    
    button1.innerHTML = "opnieuw spelen";

    button1.style.display = "inline";
    button1.onclick = function() {start()};

    button2.style.display = "none";
    
    button3.style.display = "none";

    inventoryItem.style.display = "none";
}

function level5(){
    gameContainer.style.backgroundImage = "url('img/eten.jpg";
    console.log("zolder");
    title.innerHTML = "de zolder door zoeken";
    description.innerHTML = "omschrijving: nou dat je los bent ga je op zolder kijken of je iets kan vinden";
    description.style.color = "red";

    button1.innerHTML = "ga naar de deur";


    button1.style.display = "inline";
    button1.onclick = function() {level6()};

    button2.style.display = "none";

    button3.style.display = "none";

    inventoryItem.style.display = "inline";
    inventoryItem.src = "img/breekijzer.jpg"
    inventoryItem.onclick = function (){
        oppakken["breekijzer"] = true; 
    };

    if (oppakken["breekijzer"] == true) {
        description.innerHTML = '';
        button2.style.display = "inline-block";
        button2.onclick = function() {
            oppakken["breekijzer"] = false;
        };
    } else {
        button2.style.display = "none";
}
}