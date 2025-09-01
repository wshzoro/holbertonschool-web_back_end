console.log("Welcome to Holberton School, what is your name?");

process.stdin.on("data", (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);

  if (process.stdin.isTTY) {
    process.exit(0);
  }
});

process.stdin.on("end", () => {
  console.log("This important software is now closing");
});
process.stdin.resume();
