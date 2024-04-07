function OpeningCeremony(scoreObj, callbackFnc) {
    console.log("Let the games begin");
    setTimeout(() => {
      console.log("Current Score:", scoreObj);
      Race100M(scoreObj, callbackFnc);
    }, 1000);
  }
  
  function Race100M(scoreObj, callbackFnc) {
    const timeRed = Math.floor(Math.random() * 6) + 10;
    const timeBlue = Math.floor(Math.random() * 6) + 10;
    const timeGreen = Math.floor(Math.random() * 6) + 10;
    const timeYellow = Math.floor(Math.random() * 6) + 10;
  
    console.log("Race100M Result:");
    console.log("Red:", timeRed, "seconds");
    console.log("Blue:", timeBlue, "seconds");
    console.log("Green:", timeGreen, "seconds");
    console.log("Yellow:", timeYellow, "seconds");
  
    const times = [timeRed, timeBlue, timeGreen, timeYellow];
    times.sort((a, b) => a - b);
  
    scoreObj[Object.keys(scoreObj)[times.indexOf(timeRed)]] += 50;
    scoreObj[Object.keys(scoreObj)[times.indexOf(timeBlue)]] += 25;
  
    console.log("Current Score:", scoreObj);
  
    setTimeout(() => {
      console.log("Current Score:", scoreObj);
      LongJump(scoreObj, callbackFnc);
    }, 1000);
  }
  
  function LongJump(scoreObj, callbackFnc) {
    const colors = ["red", "blue", "green", "yellow"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    console.log("LongJump Result:");
    console.log(randomColor, "got 150 points");
  
    scoreObj[randomColor] += 150;
  
    console.log("Current Score:", scoreObj);
  
    setTimeout(() => {
      console.log("Current Score:", scoreObj);
      HighJump(scoreObj, callbackFnc);
    }, 1000);
  }
  
  function HighJump(scoreObj, callbackFnc) {
    const userInput = prompt("What colour secured the highest jump?");
    let updated = false;
  
    if (userInput && Object.keys(scoreObj).includes(userInput.toLowerCase())) {
      scoreObj[userInput.toLowerCase()] += 100;
      updated = true;
    } else if (userInput) {
      console.log("Event was cancelled");
    } else {
      console.log("Event was cancelled");
    }
  
    if (updated) {
      console.log("Current Score:", scoreObj);
      AwardCeremony(scoreObj);
    }
  }
  
  function AwardCeremony(scoreObj) {
    const sortedScores = Object.entries(scoreObj).sort((a, b) => b[1] - a[1]);
    console.log("Award Ceremony:");
    console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`);
    console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`);
    console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`);
  }
  
  const initialScore = { red: 0, blue: 0, green: 0, yellow: 0 };
  
  OpeningCeremony(initialScore, () => {});
  