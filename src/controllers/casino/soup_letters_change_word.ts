import * as fs from "fs";

export const soupLettersChangeWord = () => {
    const databaseWords = JSON.parse(fs.readFileSync("database/json/rpg/casino/dicionary/words.json", 'utf-8').toString())
	const randomCategory  = Math.floor(Math.random() * databaseWords.length);
	
	const category = databaseWords[randomCategory].categoria
	const word = databaseWords[randomCategory].relacionados
	const chosenWord  = databaseWords[randomCategory].relacionados[Math.floor(Math.random() * word.length - 1)]
    
    const newWord = {
      "palavra": chosenWord,
      "chances": 5,
      "anagrama": chosenWord.split('').sort(() => Math.random() - 0.5).join(''),
      "categoria": category
    }
    fs.writeFileSync("database/json/rpg/casino/soup/game.json", JSON.stringify(newWord, null, 2))
    return "palavra trocada!"
}