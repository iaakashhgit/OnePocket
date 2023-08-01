const fs = require('fs');

const countWordsInFile = async () => {
  const filename = 'data.txt';
  try {
    const data = await fs.promises.readFile(filename, 'utf8');
    const wordCount = countWords(data);
    console.log(`Total word count: ${wordCount}`);
  } catch (err) {
    console.error(`Error reading file: ${err}`);
  }
}

const countWords = (text) => {
  const trimmedText = text.trim();
  const wordsArray = trimmedText.split(/\s+/);
  return wordsArray.length
}

// Call the async function to count words in the file
countWordsInFile();
