export default function getRandomNumber(max) {
  if (!isNaN(max)) {
    return Math.floor(Math.random() * max) + 1;
  }
}