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

    let tile = '';
    let winner = '';
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
        const { display } = updateDisplay;
        //update();
        check();
    }

    function setup() {
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener("click", place);
        }
    }
    const check = () => {

    }
    setup();
    return { setup };
})();

const updateDisplay = (() => {
    const { board } = gameBoard;
    const { setup } = gamePlay;

    let cells = document.querySelectorAll('.cells');
    function update() {
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = board[i];
        }
    }

    const resetBtn = document.querySelector(".reset");
    resetBtn.addEventListener('click', () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = '';
        }
        setup();
        update();
    });
    return { update };
})();

const p1 = Player("Player1", "O");
const p2 = Player("Player2", "X");
let players = [p1, p2];