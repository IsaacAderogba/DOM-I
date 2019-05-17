let digits = document.querySelector(".digits");

let secondTens = document.querySelector("#secondTens");
let secondOne = document.querySelector("#secondOnes");
let msHundreds = document.querySelector("#msHundreds");
let msTens = document.querySelector("#msTens");

class Timer {
    constructor() {
        this.firstCount = 0;
        this.secondCount = 0;
        this.thirdCount = 0;
        this.fourthCount = 0;
    }

    startTimer() {
        console.log(this.fourthCount, this.thirdCount, ':', this.secondCount, this.firstCount);


        if (this.firstCount < 9) {
            this.firstCount++;
            msTens.textContent = this.firstCount;

        } else {
            this.secondCount++;
            this.firstCount = 0;
            msHundreds.textContent = this.secondCount

            if (this.secondCount > 9) {
                this.secondCount = 0;
                this.thirdCount = this.thirdCount + 1;
                secondOne.textContent = this.thirdCount

                if (this.thirdCount > 9) {
                    this.thirdCount = 0;
                    this.fourthCount = this.fourthCount + 1;
                    secondTens = this.fourthCount
                    digits.classList.add('redDigit')
                }
            }
        }
    };
}

const windowTimer = new Timer();

function newTimer() {
    windowTimer.startTimer();
};

let interval = window.setInterval(newTimer, 10);