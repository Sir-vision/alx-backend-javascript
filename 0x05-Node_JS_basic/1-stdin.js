process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const mssg = process.stdin.read();

  if (mssg) {
    process.stdout.write(`Your name is: ${mssg}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
