function timer() {
    let timer;
    let isRunning = false;
    $("#start-timer").click(startTimer);
    $("#stop-timer").click(stopTimer);

    let hours = $("#hours").text();
    let minutes = $("#minutes").text();
    let seconds = $("#seconds").text();

    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            timer = setInterval(step, 1000);

            function step() {
                seconds++;

                $("#seconds").text(
                    seconds < 10 ? "0" + seconds.toString() : seconds
                );

                if (seconds == 59) {
                    minutes++;
                    $("#minutes").text(
                        minutes < 10 ? "0" + minutes.toString() : minutes
                    );

                    seconds = 0;
                }

                if (minutes == 59) {
                    hours++;
                    $("#hours").text(
                        hours < 10 ? "0" + hours.toString() : hours
                    );

                    minutes = 0;
                }
            }
        }
    }

    function stopTimer() {
        isRunning = false;
        clearInterval(timer);        
    }
}
