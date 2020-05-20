let playerCounter;
let computerCounter;
function computerPlay() {
    const arr = ['камень', 'ножницы', 'бумага'];
    let choice = arr[Math.floor(Math.random()*3)];
    return choice;
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        computerCounter +=1;
        playerCounter +=1;
        return `ПК выбрал ${computerSelection} и Вы выбрали ${playerSelection}.Ничья`;
    }
    if (playerSelection === 'камень' & computerSelection === 'бумага'|| playerSelection === 'ножницы' & computerSelection=== 'камень' || playerSelection ==='бумага' & computerSelection === 'ножницы'){
        computerCounter +=1;
        return `Вы проиграли в раунде! ${computerSelection} бьет ${playerSelection}.`;
    } else {
        playerCounter +=1;
        return `Вы выиграли раунд! ${playerSelection} бьет ${computerSelection}. `;
    } 

}

function game() {
    playerCounter = 0;
    computerCounter = 0;
    for ( let i=1; i<=5; i++){
        const playerSelection = prompt('Введите: камень, ножницы или бумага:').trim().toLowerCase();
        if (playerSelection != 'камень' & playerSelection != 'ножницы' & playerSelection != 'бумага' ){
            i -=1;
            console.log('Вы ввели неверное значение!!! Введите камень, ножницы или бумага.');
            continue;

        }
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
    if(playerCounter === computerCounter){
        console.log(`Ничья. Счет ${playerCounter}:${computerCounter}`);
    }
    else if (playerCounter > computerCounter){
        console.log(`Вы выиграли со счетом ${playerCounter}:${computerCounter}`);
    } else (console.log(`Компютер выиграл со счетом ${playerCounter}:${computerCounter}`));
}
game();