const prompts = require("prompts");
async function main() {
  let finalAns = "3";
  let players = [];
  await getPlayers(players);
  for (let i = 0; i < players.length; i++) {
    await getPlayerAnswer(players[i], finalAns);
  }
  console.log(players);
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

async function getPlayerAnswer(player, finalAns) {
  const ans = await prompts({
    type: "text",
    name: "number",
    message: `${player.name}'s guess the number (1-6):`,
  });
  player.guess = ans.number;
  console.log(finalAns);

  if (ans.number === finalAns) player.score += 1;
  //   players.find((parti) => player.id === parti.id).guess = ans.number;
}

main();
