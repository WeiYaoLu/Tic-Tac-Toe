const Player = (name, tile) => {
    return { name, tile };
}

const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    return { board };
})();

const gamePlay = (() => {
    const cells = document.querySelectorAll('.cell');
    const { board } = gameBoard;

    var p = 0;

    const place = (e) => {
        let div = e.target;
        let idx = board[`${div.id}`];
        if(idx != '') return;
        if (p == 1) p = 0;
        else p = 1;
        if(idx === ''){
            board.splice(`${div.id}`,1,players[p].tile);
        }
        console.log(board);
        const { update } = updateDisplay;
        update();
        check();
    }

    function setup() {
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener("click", place);
        }
    }
    function stop() {
        for (let i = 0; i < cells.length; i++){
            cells[i].removeEventListener('click',place);
        }
    }
    const check = () => {
        const announce = document.querySelector('.announcement');
        if (board[0] === board[1] && board[1] === board[2] && board[0] !== '') {stop(); announce.textContent= `${players[p].name} Wins!`; return;} 
        if (board[3] === board[4] && board[4] === board[5] && board[3] !== '') {stop(); announce.textContent= `${players[p].name} Wins!`; return;} 
        if (board[6] === board[7] && board[7] === board[8] && board[6] !== '') {stop(); announce.textContent= `${players[p].name} Wins!`; return;}
        if (board[0] === board[3] && board[3] === board[6] && board[0] !== '') {stop(); announce.textContent= `${players[p].name} Wins!`; return;}
        if (board[1] === board[4] && board[4] === board[7] && board[1] !== '') {stop(); announce.textContent= `${players[p].name} Wins!`; return;}
        if (board[2] === board[5] && board[5] === board[8] && board[2] !== '') {stop(); announce.textContent= `${players[p].name} Wins!`; return;}
        if (board[0] === board[4] && board[4] === board[8] && board[0] !== '') {stop(); announce.textContent= `${players[p].name} Wins!`; return;}
        if (board[2] === board[4] && board[4] === board[6] && board[2] !== '') {stop(); announce.textContent= `${players[p].name} Wins!`; return;}
        if (board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '') {announce.textContent = "DRAW!"};
    }
    setup();
    return { setup };
})();

const updateDisplay = (() => {
    const { board } = gameBoard;
    const { setup } = gamePlay;

    function update() {
        let cells = document.querySelectorAll('.cell');
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = board[i];
        }
    }

    const resetBtn = document.querySelector(".reset");
    resetBtn.addEventListener('click', () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = '';
        }
        const announce = document.querySelector('.announcement');
        announce.textContent = " ";
        setup();
        update();
    });
    
    return { update };
})();

const p1 = Player("Player 1", "O");
const p2 = Player("Player 2", "X");
let players = [p1, p2];