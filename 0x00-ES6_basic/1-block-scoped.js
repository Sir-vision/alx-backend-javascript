export default function taskBlock(trueOrFalse) {
  var task2 = false;
  var task = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
