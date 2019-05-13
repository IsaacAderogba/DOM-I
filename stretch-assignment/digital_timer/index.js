// doesn't work


// class Timer {
//     constructor() {
//         this.firstCount = 0;
//         this.secondCount = 0;
//         this.thirdCount = 0;
//         this.fourthCount = 0;
//     }

//     startTimer() {
//         console.log(this.fourthCount, this.thirdCount, ':', this.secondCount, this.firstCount);

//         if(this.firstCount < 9) {
//             this.firstCount++;

//         } else {
//             this.secondCount = this.secondCount + 1;
//             this.firstCount = 0;

//             if(this.secondCount === 10){
//                 this.thirdCount = this.thirdCount + 1;
//                 this.secoundCount = 0;

//                 if(this.thirdCount === 10) {
//                     this.fourthCount = this.fourthCount + 1;
//                     this.thirdCount = 0;
//                 }
//             }
//         }
//     };
// }

// const windowTimer = new Timer();

// window.setInterval(windowTimer.startTimer, 10);