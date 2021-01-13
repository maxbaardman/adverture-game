var gameContainer = document.getElementById('game-container');
var title = document.getElementById('title');
var description = document.getElementById('description');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var inventoryItem = document.getElementById('inventoryItem');

var oppakken = {mes:false, breekijzer:false, sleutels:false, briefje:false, };
var button_titels = {button1:"", button2:"", button3:""};
var level_onclick = {button1:"", button2:"", button3:""};
var inventoryItem = document.getElementById("inventoryItem");

start();

function start(){
    gameContainer.style.backgroundImage = "url('img/busje.jpg')";
    console.log("start");
    title.innerHTML = "ontsnappen van de ontvoerders";
    description.innerHTML = "omschrijving: je word ontvoerd door 2 mannen. ze nemen je mee naar het bos er zijn twee paden naar het huis van de ontvoerders en je komt van rechts als je van het huis naar de padden kijkt. je ziet een voor deur en een kelder je word mee naar binnen genomen ze brengen je naar zolder. ze binden je handen en voeten vast dus je kan niks doen je kan allen weg komen zonder dood te gaan door goede beslissingen te maken.";
    description.style.color = "red";
    

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
    
    button2.innerHTML = "de zolder door zoeken"

    button1.style.display = "none";

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
    gameContainer.style.backgroundImage = "url('img/zolder.jpg";
    console.log("zolder");
    title.innerHTML = "de zolder door zoeken";
    description.innerHTML = "omschrijving: nou dat je los bent ga je op zolder kijken of je iets kan vinden";
    description.style.color = "red";

    button1.innerHTML = "naar de deur gaan";
    button2.innerHTML = "maak de deur open";


    button1.style.display = "inline";
    button1.onclick = function() {level6()};

    button2.style.display = "none";
    button2.onclick = function() {level7()};

    button3.style.display = "none";

    inventoryItem.style.display = "inline";
    inventoryItem.src = "img/breekijzer.jpg"
    inventoryItem.onclick = function (){
        oppakken["breekijzer"] = true;
        level5();
    };

    if (oppakken["breekijzer"] == true) {
        button2.style.display = "inline-block";
    } else {
        button2.style.display = "none";
    } 

function level6(){
    gameContainer.style.backgroundImage = "url('img/deur.jpg')";
    console.log("deur");
    title.innerHTML = "de deur";
    description.innerHTML = "omschrijving: je staat voor een gesloten deur";
    
    button1.innerHTML = "terug naar de zolder";

    button1.style.display = "inline";
    button1.onclick = function() {level5()};

    button2.style.display = "none";
    
    button3.style.display = "none";

    inventoryItem.style.display = "none";
}

function level7(){
    gameContainer.style.backgroundImage = "url('img/linksofrechts.jpg')";
    console.log("links of rechts");
    title.innerHTML = "links of rechts";
    description.innerHTML = "omschrijving: waar ga je heen";
    
    button1.innerHTML = "links";
    button2.innerHTML = "rechts";

    button1.style.display = "inline";
    button1.onclick = function() {level8()};

    button2.style.display = "inline";
    button2.onclick = function() {level9()};
    
    button3.style.display = "none";

    inventoryItem.style.display = "none";
}

function level8(){
    gameContainer.style.backgroundImage = "url('img/gangnaarkamer.jpg')";
    console.log("gang naar kamer");
    title.innerHTML = "een gang naar een kamer";
    description.innerHTML = "omschrijving: ga je de kamer in?";
    
    button1.innerHTML = "naar de kamer";
    button2.innerHTML = "terug";

    button1.style.display = "inline";
    button1.onclick = function() {level10()};

    button2.style.display = "inline";
    button2.onclick = function() {level7()};
    
    button3.style.display = "none";

    inventoryItem.style.display = "none";
}

function level9(){
    gameContainer.style.backgroundImage = "url('img/trap.jpg')";
    console.log("gang naar kamer");
    title.innerHTML = "een gang met een trap naar beneden";
    description.innerHTML = "omschrijving: ga je naar beneden?";
    
    button1.innerHTML = "naar beneden";
    button2.innerHTML = "terug";

    button1.style.display = "inline";
    button1.onclick = function() {level11()};

    button2.style.display = "inline";
    button2.onclick = function() {level7()};
    
    button3.style.display = "none";

    inventoryItem.style.display = "none";
}

function level10(){
    gameContainer.style.backgroundImage = "url('img/kamer.jpg')";
    console.log("de kamer");
    title.innerHTML = "de kamer";
    description.innerHTML = "omschrijving: je staat in de kamer";
    
    button2.innerHTML = "terug";

    button1.style.display = "none";

    button2.style.display = "inline";
    button2.onclick = function() {level7()};
    
    button3.style.display = "none";

    inventoryItem.style.display = "none";
}

function level11(){
    gameContainer.style.backgroundImage = "url('img/kapstok.jpg')";
    console.log("de kapstok");
    title.innerHTML = "de kapstok";
    description.innerHTML = "omschrijving: je ziet een kapstok";
    
    button1.innerHTML = "terug";
    button2.innerHTML = "je hebt de sleutels nu verder";

    button1.style.display = "inline";
    button1.onclick = function() {level9()};
    button2.style.display = "inline";
    button2.onclick = function() {level12()};
    
    button3.style.display = "none";

    button2.innerHTML = "je hebt de sleutels nu verder";
    inventoryItem.style.display = "inline";
    inventoryItem.src = "img/sleutels.jpg"
    inventoryItem.onclick = function (){
        oppakken["sleutels"] = true;
        level11(); 
    };
    if (oppakken["sleutels"] == true) {
        button2.style.display = "inline-block";
    } else {
        button2.style.display = "none";
    }
}

function level12(){
    gameContainer.style.backgroundImage = "url('img/uitleg.jpg')";
    console.log("uitleg sleutels");
    title.innerHTML = "uitleg sleutels";
    description.innerHTML = "omschrijving: je hebt nu de sleutels gevonden je ziet een voor deur een een deur naar de kelder toe welke deur ga je kiezen";
    
    button1.innerHTML = "voordeur"
    button2.innerHTML = "kelder";

    button1.style.display = "inline";
    button1.onclick = function() {level13()};

    button2.style.display = "inline";
    button2.onclick = function() {level14()};
    
    button3.style.display = "none";

    inventoryItem.style.display = "none";
}

function level13(){
    gameContainer.style.backgroundImage = "url('img/dood.jpg')";
    console.log("dood");
    title.innerHTML = "game over";
    description.innerHTML = "omschrijving: je bent naar de voordeur gegaan maar toen je langs de keuken liep hebben ze je gezien en vermoord";
    
    button1.innerHTML = "opnieuw spelen";

    button1.style.display = "inline";
    button1.onclick = function() {start()};

    button2.style.display = "none";
    
    button3.style.display = "none";

    inventoryItem.style.display = "none";
}

function level14(){
    gameContainer.style.backgroundImage = "url('img/kelder.jpg')";
    console.log("de kelder");
    title.innerHTML = "de kelder";
    description.innerHTML = "omschrijving: je bent nu in de kelder";
    
    button1.innerHTML = "naar buiten gaan";
    button2.innerHTML = "het briefje lezen";

    button1.style.display = "inline";
    button1.onclick = function() {level15()};
    button2.style.display = "inline";
    button2.onclick = function() {level16()};
    
    button3.style.display = "none";

    button2.innerHTML = "het briefje lezen";
    inventoryItem.style.display = "inline";
    inventoryItem.src = "img/briefje.jpg"
    inventoryItem.onclick = function (){
        oppakken["briefje"] = true;
        level14(); 
    };
    if (oppakken["briefje"] == true) {
        button2.style.display = "inline-block";
    } else {
        button2.style.display = "none";
    }
}

function level16(){
    gameContainer.style.backgroundImage = "url('img/lezen.jpg')";
    console.log("lezen briefje");
    title.innerHTML = "briefje";
    description.innerHTML = "omschrijving: onderdelen vervangen van auto";
    
    button2.innerHTML = "terug";

    button1.style.display = "none";

    button2.style.display = "inline";
    button2.onclick = function() {level14()};
    
    button3.style.display = "none";

    inventoryItem.style.display = "none";
}

function level15(){
    gameContainer.style.backgroundImage = "url('img/autooffiets.jpg')";
    console.log("auto of fiets");
    title.innerHTML = "auto of fiets ";
    description.innerHTML = "omschrijving: pak je de auto of de fiets?";
    
    button1.innerHTML = "auto";
    button2.innerHTML = "fiets";

    button1.style.display = "inline";
    button1.onclick = function() {level18()};

    button2.style.display = "inline";
    button2.onclick = function() {level17()};
    
    button3.style.display = "none";

    inventoryItem.style.display = "none";
}

function level17(){
    gameContainer.style.backgroundImage = "url('img/linksofrechts.jpg')";
    console.log("rechts of links");
    title.innerHTML = "rechts of links";
    description.innerHTML = "omschrijving:ze zitten achter je aan dus wat ga je doen ga je links of rechts?";
    
    button1.innerHTML = "rechts";
    button2.innerHTML = "links";

    button1.style.display = "inline";
    button1.onclick = function() {level20()};

    button2.style.display = "inline";
    button2.onclick = function() {level19()};
    
    button3.style.display = "none";

    inventoryItem.style.display = "none";
}

function level18(){
    gameContainer.style.backgroundImage = "url('img/dood.jpg')";
    console.log("dood");
    title.innerHTML = "game over";
    description.innerHTML = "omschrijving: je bent gepakt";
    
    button1.innerHTML = "opnieuw spelen";

    button1.style.display = "inline";
    button1.onclick = function() {start()};

    button2.style.display = "none";
    
    button3.style.display = "none";

    inventoryItem.style.display = "none";
}

}
