var potatoes = 0;


function addPotato(number){
    potatoes = potatoes + number;
	document.getElementById("potatoes").innerHTML = potatoes;
};


var plants = 0;

function buyPlant(){
    var plantCost = Math.floor(10 * Math.pow(1.1,plants));     //works out the cost of this cursor
    if(potatoes >= plantCost){                                   //checks that the player can afford the cursor
        plants = plants + 1;                                   //increases number of cursors
    	potatoes = potatoes - plantCost;                          //removes the cookies spent
        document.getElementById('plants').innerHTML = plants;  //updates the number of cursors for the user
        document.getElementById('potatoes').innerHTML = potatoes;  //updates the number of cookies for the user
    };
    var nextPlantCost = Math.floor(10 * Math.pow(1.1,plants));       //works out the cost of the next cursor
    //document.getElementById('plantCost').innerHTML = nextPlantCost;  //updates the cursor cost for the user
};

var pigs = 0;

function buyPig(){
    var pigCost = Math.floor(10 * Math.pow(1.11,pigs));     //works out the cost of this cursor
    if(potatoes >= pigCost){                                   //checks that the player can afford the cursor
        pigs = pigs + 1;                                   //increases number of cursors
    	potatoes = potatoes - pigCost;                          //removes the cookies spent
        document.getElementById('pigs').innerHTML = pigs;  //updates the number of cursors for the user
        document.getElementById('potatoes').innerHTML = potatoes;  //updates the number of cookies for the user
    };
    var nextPigCost = Math.floor(10 * Math.pow(1.11,pigs));       //works out the cost of the next cursor
    //document.getElementById('pigCost').innerHTML = nextPigCost;  //updates the cursor cost for the user
};


function save(){
	var save = {
	potatoes: potatoes,
	plants: plants,
	pigs: pigs
	}
localStorage.setItem("save",JSON.stringify(save));
};

function load(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	document.getElementById("potatoes").innerHTML = potatoes;
	if (typeof savegame.potatoes !== "undefined") potatoes = savegame.potatoes;
	if (typeof savegame.plants !== "undefined") plants = savegame.plants;
	if (typeof savegame.pigs !== "undefined") pigs = savegame.pigs;
	
};

function deletesave(){
	localStorage.removeItem("save");
};

window.setInterval(function(){
	
	addPotato(plants*2)
	addPotato(pigs*5)
	save()
}, 1000);

function startup(){
	load()	
	document.getElementById('potatoes').innerHTML = potatoes;
	document.getElementById('plants').innerHTML = plants;
	document.getElementById('pigs').innerHTML = pigs;
	/*document.getElementById('plantCost').textContent = Math.floor(10 * Math.pow(1.1,plants)); 
	document.getElementById('pigCost').textContent = Math.floor(10 * Math.pow(1.11,pigs));*/
	
}