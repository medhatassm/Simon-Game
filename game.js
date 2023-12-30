$(document).ready(function () {
    //alert("Connected");
    var buttonsColors = ["red", "blue", "green", "yellow"];
    var gamePattern = [];
    var userClickedPattern = [];
    var flag = false;
    var level = 0;
    //nextSequence();
    function nextSequence() {
        userClickedPattern = [];
        level++;
        $('#level-title').text('Level ' + level);
        //flag = true;
        var randomNumber = Math.floor(Math.random() * Math.floor(4));
        //console.log(randomNumber);
        var randomChosenColor = buttonsColors[randomNumber];
        gamePattern.push(randomChosenColor);

        $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
        //console.log(randomChosenColor);
        playSound(randomChosenColor);

    }

    $('.btn').on('click', function () {
        var userChosenColor = $(this).attr('id');
        //console.log(userChosenColor);
        userClickedPattern.push(userChosenColor);
        //console.log(userClickedPattern);
        animatePress(userChosenColor);
        playSound(userChosenColor);
        checkAnswer(userClickedPattern.length - 1);

    });

    function playSound(name) {
        var audio = new Audio('./sounds/' + name + '.mp3');
        audio.play();
    }

    function animatePress(currentColor) {
        $('#' + currentColor).addClass('pressed');
        setTimeout(function () {
            $('#' + currentColor).removeClass("pressed");
        }, 100);
    }

    function checkAnswer(currentLevel) {
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
            console.log("success");
            if (userClickedPattern.length === gamePattern.length) {
                setTimeout(function () {
                    nextSequence();
                }, 1000);
            }
        }
        else {
            var audio = new Audio('./sounds/wrong.mp3');
            audio.play();
            console.log("fail");
            $('body').addClass('game-over');
            setTimeout(function () {
                $('body').removeClass('game-over');
            }, 200);
            $('#level-title').text('Game Over, Press Any Key to Restart');
            startOver();
        }
    }

    function startOver() {
        level = 0;
        gamePattern = [];
        flag = false;
      }

    $(document).keydown(function (e) {
        if (!flag) {
            nextSequence();
            flag = true;
            
        }
    });

});

