var computerPick = 0;
var wins = 0;
var losses = 0;
var userScore = 0;
var startgame;
var blue;
var green;
var red;
var yellow;


$(document).ready(function() {
    
    $("#w-span").text(wins);
    $("#l-span").text(losses);
    
    function startgame(){
        computerPick = Math.floor(Math.random() * (120 - 19 + 1)) +19;
        $("#computer-pick").text(computerPick);
        console.log(computerPick);
        blue = Math.floor(Math.random()*(12-1+1))+1;
        green = Math.floor(Math.random()*(12-1+1))+1;
        red = Math.floor(Math.random()*(12-1+1))+1;
        yellow = Math.floor(Math.random()*(12-1+1))+1;
        userScore = 0;
    
    }

    startgame();

    $("#blue").on("click", function(){
         userScore = userScore + blue;
         $("#userScore").text(userScore);

         if (userScore=== computerPick){
             wins++;
             $("#w-span").text(wins);
             startgame();
         }

         if (userScore> computerPick){
             losses++;
             $("#l-span").text(losses);
             startgame();
         }
    })


    $("#red").on("click", function(){
        //red = Math.floor(Math.random()*(12-1+1))+1; 
        userScore = userScore + red;
        $("#userScore").text(userScore);

         if (userScore=== computerPick){
             wins++;
             $("#w-span").text(wins);
             startgame();
         }

         if (userScore> computerPick){
             losses++;
             $("#l-span").text(losses);
             startgame();
         }
    })


    $("#green").on("click", function(){
        //green = Math.floor(Math.random()*(12-1+1))+1; 
        userScore = userScore + green;
        $("#userScore").text(userScore);

         if (userScore=== computerPick){
             wins++;
             $("#w-span").text(wins);
             startgame();
         }

         if (userScore> computerPick){
             losses++;
             $("#l-span").text(losses);
             startgame();
         }
    })


    $("#yellow").on("click", function(){
        //red = Math.floor(Math.random()*(12-1+1))+1; 
        userScore = userScore + yellow;
        $("#userScore").text(userScore);

         if (userScore=== computerPick){
             wins++;
             $("#w-span").text(wins);
             startgame();
         }

         if (userScore> computerPick){
             losses++;
             $("#l-span").text(losses);
             startgame();
         }
    })

    //userScore = blue+red+green+red;

})