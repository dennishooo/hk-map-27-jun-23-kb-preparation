console.log("ex05");

const RNA = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

// we wont able to modify the RNA object from here
Object.freeze(RNA);

function rnaTranscription(dna) {
  let ans = "";
  for (let i = 0; i < dna.length; i++) {
    // console.log("dna", dna[i]);
    // console.log("rna", RNA[dna[i]]);

    // RNA[dna[i]] === undefined
    // if (!RNA[dna[i]]) return "incorrect dna input";
    // if (!(dna[i] in RNA)) return "incorrect dna input";
    if (!RNA.hasOwnProperty(dna[i])) return "incorrect dna input";

    ans += RNA[dna[i]];
  }
  return ans;
}

console.log(rnaTranscription("GCdsfsdTA"));
console.log(rnaTranscription("GTA"));
