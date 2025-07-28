// Nestest

const score = 60;
const MyScore = 80;

if (MyScore >= 80) {
  if (score >= 80) {
    console.log("go for lunch");
  } else {
    if (score < 80 && score >= 60) {
      console.log("good luck for next Time");
    } else {
      if (score >= 40 && score < 60) {
        console.log("massage unseen.");
      } else {
        if (score < 40) {
          console.log("block friends");
        }
      }
    }
  }
} else {
  console.log("go to home and sleep and act sad");
}
