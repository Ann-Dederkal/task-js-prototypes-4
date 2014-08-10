/*Створити об'єкти монстри, які мають назву, поточний рівень життя та початковий рівень життя
(що є однаковий для всіх монстриків одного типу). 
Монстри вміють говорити своє ім'я та поранити інших монстрів, при цьому понижаючи їх поточний 
рівень життя.
Створити різновидності монстрів:
-Котомонстри, які вміють царапатись (життя ворога зменшує на 5) та мають початковий рівень життя 50,
-Птахомонсти, які вміють клювати (життя ворога зменшує на 3) та мають початковий рівень життя 60.
Завдання виконати до 10серпня.*/
function Monster(name, initialLife, currentLiving, damage){
	this.name = name;
	this.initialLife = initialLife;
	this.currentLiving = currentLiving;
	this.damage = damage;
}

Monster.prototype.sayName = function () {
	console.log("My name is ", this.name);
};
Monster.prototype.sayCurrentLiving = function () {
	console.log("My current standard of living: ", this.currentLiving);
};
Monster.prototype.sayDamage = function () {
	console.log("Life decreases the enemy: ", this.damage);
};

var CatMonster = new Monster("Kotozavr", 50, 50, 5);
CatMonster.sayName();
CatMonster.sayCurrentLiving();
CatMonster.sayDamage();
var BirdsMonster = new Monster("Birdszavr", 60, 60, 3);
BirdsMonster.sayName();
BirdsMonster.sayCurrentLiving();
BirdsMonster.sayDamage();

Monster.prototype.changeDamage = function (MonsterObject){
	if(MonsterObject.currentLiving < this.damage){			
		console.log(this.name, ' kill.');
	}else{
		MonsterObject.currentLiving -= this.damage;
		console.log(this.name, ' done life ' + this.damage + ' living.');
	}
};
function CatMonster(){
	Monster.apply(this, arguments)
}

CatMonster.prototype = Object.create(Monster.prototype);
CatMonster.prototype.damage = 5;
CatMonster.prototype.initialLife = 50;
CatMonster.prototype.currentLiving= 50;
CatMonster.prototype.scratch = function(Obj){
	this.changeDamage(MonsterObject)
};

function BirdsMonster(){
	Monster.apply(this, arguments)
}

BirdsMonster.prototype = Object.create(Monster.prototype);
BirdsMonster.prototype.damage = 3;
BirdsMonster.prototype.initialLife = 60;
BirdsMonster.prototype.currentLiving= 60;
BirdsMonster.prototype.bind = function(Obj){
	this.changeDamage(MonsterObject)
};


CatMonster.changeDamage(BirdsMonster);
CatMonster.changeDamage(BirdsMonster);

BirdsMonster.changeDamage(CatMonster);
BirdsMonster.changeDamage(CatMonster);
BirdsMonster.changeDamage(CatMonster);
BirdsMonster.changeDamage(CatMonster);
BirdsMonster.changeDamage(CatMonster);

BirdsMonster.sayCurrentLiving();
CatMonster.sayCurrentLiving();



