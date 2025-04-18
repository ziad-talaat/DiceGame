const score0=document.getElementById('score--0');
const score1=document.getElementById('score--1');
const diceImg=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const current1=document.getElementById('current--0');
const current2=document.getElementById('current--1');

const player1=document.querySelector('.player--0');
const player2=document.querySelector('.player--1');


score0.textContent=0;
score1.textContent=0;
diceImg.classList.add('hidden');

let curScore=0;

const scores=[0,0];
let activePlayer=0;

let playing=true;




const switchPlayer=function(){
    curScore=0;
    document.getElementById(`current--${activePlayer}`).textContent=curScore;
    activePlayer=activePlayer===0?1:0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
};


btnRoll.addEventListener('click',function(){
    if(playing){
//1)generate a random dice roll
const dice=Number(Math.trunc(Math.random()*6)+1);

//2)displa dice
diceImg.classList.remove('hidden');
diceImg.src=`dice-${dice}.png`;


//3)check for rolle 
if(dice !==1){
        curScore+=dice;
        document.getElementById(`current--${activePlayer}`).textContent=curScore;
    }      
else{
    switchPlayer();
   
}
}});

  

btnHold.addEventListener('click',function(){
    if(playing){
    diceImg.classList.add('hidden');  

document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer]+=curScore;

if(scores[activePlayer]>=100){
    playing=false;
    diceImg.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
}
else{
switchPlayer();
}
    }
});




const reset=function(){
    playing=true;
    curScore=0;
    activePlayer=0;
    scores[0]=0;
    scores[1]=0;

    score0.textContent=curScore;
    score1.textContent=curScore;
    current1.textContent =curScore;
    current2.textContent =curScore;


    diceImg.classList.add('hidden');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
   
}
    

btnNew.addEventListener('click',reset);