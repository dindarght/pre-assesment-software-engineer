function groupAnagrams(strs) {
    let result = {};
    for (let word of strs) {
      let cleansed = word.split("").sort().join("");
      if (result[cleansed]) {
        result[cleansed].push(word);
      } else {
        result[cleansed] = [word];
      }
    }
    return Object.values(result);
}

const input = ["cook", "save", "taste", "aves", "vase", "state", "map"];
const output = groupAnagrams(input);

console.log(output);


