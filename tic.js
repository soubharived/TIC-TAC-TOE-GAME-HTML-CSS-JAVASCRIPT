
let music =  new Audio('./Audios/mixkit-ominous-drums-227.wav')
let audioTurn = new Audio('./Audios/mixkit-arcade-game-jump-coin-216.wav')
let gameover = new Audio('./Audios/mixkit-cartoon-gossip-voices-301.wav')

let turn = "X";
let isgameover= false;

// window.onbeforeunload = function (e) {
//     music.play();
    
// }



//function to chage the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
} 

//function to check for a win
const checkwin =()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let  wins = [
        [0 , 1 , 2],
        [3 , 4 , 5],
        [6 , 7 , 8],
        [0 , 3 , 6],
        [1 , 4 , 7],
        [2 , 5 , 8],
        [0 , 4 , 8],
        [2 , 4 , 6],
    ]
    let flag = 0;
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "won"
            isgameover = true;
            flag = 1;
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";

        }
    
   

    })

    
    wins.forEach(e=>{
        if(boxtext[e[0] ].innerText==='' || boxtext[e[1]].innerText ==='' || boxtext[e[2]].innerText === ''){
            flag = 1;
        }
    })
    if(flag == 0){
        document.querySelector('.info').innerText = "Match tie";
        isgameover =  true;
        gameover.play();
    }

    


    
}

//game Logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if (boxtext.innerText ===''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkwin();

            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }  
        }
    })

})

// Add onclick listener to reset button
reset.addEventListener('click' , ()=>{
    // gameover.play=false;
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = " "
    });
    turn = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    music.play();
    window.location = "/tictac.html"
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})