function groupAnagrams(strs) {
  let result = [];

  function getCharCount(word) {
    let count = {};
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (count[char]) {
        count[char]++;
      } else {
        count[char] = 1;
      }
    }
    return count;
  }

  function isAnagram(count1, count2) {
    let keys1 = Object.keys(count1);
    let keys2 = Object.keys(count2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let i = 0; i < keys1.length; i++) {
      let key = keys1[i];
      if (count1[key] !== count2[key]) {
        return false;
      }
    }

    return true;
  }

  for (let i = 0; i < strs.length; i++) {
    let word = strs[i];
    let wordCount = getCharCount(word);

    let foundGroup = false;

    for (let j = 0; j < result.length; j++) {
      let existingGroup = result[j];

      if (isAnagram(getCharCount(existingGroup[0]), wordCount)) {
        existingGroup.push(word);
        foundGroup = true;
        break;
      }
    }

    if (!foundGroup) {
      result.push([word]);
    }
  }

  return result;
}

const input = ["cook", "save", "taste", "aves", "vase", "state", "map"];
const output = groupAnagrams(input);
console.log(output);
