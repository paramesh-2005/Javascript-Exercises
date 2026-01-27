let score = JSON.parse(localStorage.getItem('score')) ||
      {
          wins: 0,
          losses:0,
          ties:0
        };
        
      updateScoreElement();
            
      function pickComputerMove(){
        const randomNumber = Math.random();
        let computerMove='';
      if(randomNumber>=0 && randomNumber<1/3){
        computerMove = 'Rock';
      }
      else if(randomNumber>=1/3 && randomNumber<2/3){
        computerMove = 'Paper';
      }
      else if(randomNumber>=2/3 && randomNumber<1){
        computerMove = 'Scissors';
      }
      return computerMove;
       }

       function playGame(playerMove){

        const computerMove = pickComputerMove();
        let result='';

        if(playerMove === 'Scissors'){
          if(computerMove === 'Rock'){
            result3= 'You Lose.';
          }
          else if(computerMove === 'Paper'){
            result = 'You Win.';
          }
          else if(computerMove === 'Scissors'){
            result = 'tie.'
          }
        }
        else if(playerMove==='Paper'){
          if(computerMove === 'Rock'){
        result = 'You Win';
      }
      else if(computerMove === 'Paper'){
        result = 'tie.';
      }
      else if(computerMove === 'Scissors'){
        result = 'You Lose.'
      }
        }
        else{
          if(computerMove === 'Rock'){
        result = 'tie.';
      }
      else if(computerMove === 'Paper'){
        result = 'You Lose.';
      }
      else if(computerMove === 'Scissors'){
        result = 'You Win.'
      }
        }
      if(result==='You Win.'){
        score.wins +=1;
      }else if(result === 'You Lose.'){
        score.losses +=1;
      }else{
        score.ties+=1;
      }

      localStorage.setItem('score',JSON.stringify(score));

      updateScoreElement();
      document.querySelector('.js-result')
          .innerHTML = result;
      document.querySelector('.js-playermove')
        .innerHTML =`You <img src="images/${playerMove}-emoji.png" class="image-size">
      <img src="images/${computerMove}-emoji.png" class="image-size">
      Computer`;
            
       }

       function updateScoreElement(){
       document.querySelector('.js-score')
        .innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;

        
       }

       