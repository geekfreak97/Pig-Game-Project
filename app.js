var dice=0;
var active = 1;
var current = 0;
var p1score = 0;
var p2score = 0;
var tar = 100;
turn_on();
function target() {
	tar = prompt('ENTER NEW TARGET');
}
function roll() {
	dice = Math.floor(Math.random() * 6 + 1);
	img = document.getElementById('dice-img');
	img.src = 'dice-'+ dice +'.png';
	if(dice != 1)
	{
	current = dice + current;
	document.getElementById('p' + active + 'current').textContent = current;
	}
	else 
	{
		document.getElementById('p' + active + 'current').textContent = 0;
		current = 0;
	if(active == 1)
	{
		turn_off();
		active = 2;
		turn_on();
	}
	else
	{
		turn_off();
		active = 1;
		turn_on();
		
	}		
	}
}
function hold(){
	document.getElementById('p' + active + 'current').textContent = 0;
	if(active == 1)
	p1score = document.getElementById('p' + active + 'score').textContent = p1score + current;
	else
	p2score = document.getElementById('p' + active + 'score').textContent = p2score + current;
	if((p1score >= tar) || (p2score >= tar))
	{
	document.getElementById('p' + active + 'header').innerHTML = 'WINNER!!!';
	return;
	}
	current = 0;
	if(active == 1)
	{
		turn_off();
		active = 2;
		turn_on();
	}
	else
	{
		turn_off();
		active = 1;
		turn_on();
		
	}			
}

function turn_on(){
	document.getElementById('player'+active).style.backgroundColor = '#FFB24B';
}
function turn_off(){
	document.getElementById('player'+active).style.backgroundColor = '#FFFF78';
}

function restart(){
	current = 0;
	p1score = 0;
	p2score = 0;
	img.src = 'dice-1.png';
	turn_off();
	active = 1;
	turn_on();
	document.getElementById('p1score').textContent= 00;
	document.getElementById('p2score').textContent= 00;
	document.getElementById('p1current').textContent = 00;
	document.getElementById('p2current').textContent = 00;
	document.getElementById('p1header').innerHTML = 'PLAYER 1';
	document.getElementById('p2header').innerHTML = 'PLAYER 2';
	
}