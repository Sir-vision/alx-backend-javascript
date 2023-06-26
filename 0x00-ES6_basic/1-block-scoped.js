export default function taskBlock(trueOrFalse) {
  task2 = false;
  task = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
