let button = document.getElementsByClassName("button");
let heads = 1;
let tails = 0;

function randomFlip(toss){
     const showFlip = document.querySelector('#image');
    
    if(toss ===1){
        showFlip.style.backgroundImage = "images/snoopy1.jpg";
    }else{
        showFlip.style.backgroundImage = "images/snoopy2.jpg";
    }
}

button.addEventListener('click',flipCoin);

function flipCoin(){

    const toss = Math.round(Math.random());
    randomFlip(toss);

    // const elem = document.getElementById("animate");
    // function fade(){
    //     if(opacity == 0){

    //     }else{

    //     }
    // }

    // button.classList.add("flipAnimation");
    


}