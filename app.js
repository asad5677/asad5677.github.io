
var initTotalScore, score, initCurrentScore, player, totalScore, gamePlaying, target, finalScore;


// Calling of the init funtion;
   init();
   

/******************EventListeners on buttons *********************/ 

//EventListener on Roll Buttom;
 document.getElementById('btn-roll').addEventListener('click', roll);

//EventListener on Hold Button;
document.getElementById('btn-hold').addEventListener('click', hold);

// EventListener on New Game Button;
document.getElementById('btn-new').addEventListener('click', init);

 //Funtion Decleration of RollButton
 function roll() {
            //  console.log('He roll Button is Pressed'); // for testing in console;
    if(gamePlaying) {
      
          target =  document.querySelector('.final-score').value;
      if(!target){
         document.getElementById('target').textContent = 'Final Score ' + finalScore;
      } else {
         document.getElementById('target').textContent = 'Final Score ' + target;
      }
         
      
      console.log('Roll -  '+target);


        // Random Numberr Generator
         var randomNumber = Math.floor(Math.random()*6+1);
         // console.log(randomNumber); // for testing of Random nmb in console.
         // firstly dice is visible and  Change dice Pic according to random Nmber
         var diceDOM = document.querySelector('#dice-1');
         diceDOM.style.visibility = 'visible';
         diceDOM.src ='img/dice-'+randomNumber+'.png';

         if (randomNumber!=1) {
         // console.log('Player is still playing'); // just for testing
         score+=randomNumber;
            // console.log(score); //for testing
         // Update the Current score in DOM 
         document.getElementById('currentScorePlayer-'+player).innerHTML = score;
         } else {
         console.log('player is changed') // just for testing
         changePlayer();
         }
      }
   } // roll fnction end;

   // Hold Function
   function hold() {
         if(gamePlaying) {
            
            // target =  document.querySelector('.final-score').value;
         
            if(!target) {
               target = finalScore;
            } 

            console.log(target);

            totalScore[player] += score;
            document.getElementById('totalScorePlayer-'+player).innerHTML = totalScore[player];

            if(totalScore[player] >= target) {
               document.querySelector('#player-'+player).textContent = 'Winner!';
               document.querySelector('.dice').style.visibility = 'hidden';
               document.querySelector('.game-section__player--'+player).classList.add('winner');
               document.querySelector('.game-section__player--'+player).classList.remove('active');
               gamePlaying = false;
            } else {
               changePlayer();
            }
         }
      } //hold function end



      // PlayerChanging function
      function changePlayer() {

         score = 0;
         document.getElementById('currentScorePlayer-'+player).innerHTML = score;

         if(player == 0) {
            document.querySelector('.game-section__player--0').classList.remove('active');
            document.querySelector('.game-section__player--1').classList.add('active');
            document.querySelector('#dice-1').style.visibility = 'hidden';
            player = 1;
         } else if(player == 1) {
            document.querySelector('.game-section__player--0').classList.add('active');
            document.querySelector('.game-section__player--1').classList.remove('active');
            document.querySelector('#dice-1').style.visibility = 'hidden';
            player = 0;
         }

      }

      function init() {

         /******************* Initialization of the Scores *******************/

         //Variable Declaration;
            initTotalScore = 0;
            score = 0;
            initCurrentScore = 0;
            player = 0; 
            totalScore = [0, 0]; 
            gamePlaying = true;
            target = 0;
            finalScore = 50;
            
         //  document.querySelector('.target-notify').innerHTML = target+' Scores to Win';
          

          document.getElementById('target').textContent = 'Final Score '+finalScore;

            
         //initialization of totalScore
          document.getElementById('totalScorePlayer-0').textContent = 0;
          document.getElementById('totalScorePlayer-1').textContent = 0;

         // initialization of CurrentScore
          document.getElementById('currentScorePlayer-0').textContent = 0;
          document.getElementById('currentScorePlayer-1').textContent = 0;


          document.querySelector('.game-section__player--0').classList.remove('winner');
          document.querySelector('.game-section__player--1').classList.remove('winner');

          document.getElementById('player-0').textContent = 'Player 1';
          document.getElementById('player-1').textContent = 'Player 2';

         //visiblity is hidden before starting of the game
         var dice = document.querySelector('.dice');
         dice.style.visibility = 'hidden';

         document.querySelector('.game-section__player--0').classList.add('active');
         document.querySelector('.game-section__player--1').classList.remove('active');

         


      }
