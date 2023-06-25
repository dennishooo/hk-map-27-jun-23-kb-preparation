const prompts = require("prompts");
async function main() {
  // generate a random number
  let finalAns = generateRandomNumber();
  let players = [];

  await getPlayers(players);

  await getPlayerAnswer(players, finalAns);
  console.log(players);
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getPlayers(players) {
  let id = 1;
  while (true) {
    const player = await prompts({
      type: "text",
      name: "name",
      message: `Enter player ${id} name (enter nothing to stop):`,
    });

    if (player.name === "") break;
    players.push({ ...player, id, score: 0 }); // => { value: 24 }
    id++;
  }
}

async function getPlayerAnswer(players, finalAns) {
  while (true) {
    for (let player of players) {
      const ans = await prompts({
        type: "text",
        name: "number",
        message: `${player.name}'s guess the number (1-6):`,
      });

      // quit the loop when player input nothing
      if (ans.number === "") return;
      player.guess = parseInt(ans.number);

      if (player.guess === finalAns) {
        console.log(`${player.name} WON! new turn start`);
        // add score for the player
        player.score += 1;
        // reassign a new ans if someone get the correct answer

        finalAns = generateRandomNumber();
      }
    }
  }
}

main();
