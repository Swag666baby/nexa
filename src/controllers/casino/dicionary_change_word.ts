import * as fs from "fs";

export const changeWord = () => {
    const databaseWords = JSON.parse(fs.readFileSync("database/json/rpg/casino/dicionary/words.json", 'utf-8').toString())
	const randomCategory  = Math.floor(Math.random() * 6);
	
	const category = databaseWords[randomCategory].categoria
	const word = databaseWords[randomCategory].relacionados
	const chosenWord  = databaseWords[randomCategory].relacionados[Math.floor(Math.random() * word.length)]
    
    const newWord = {
      "palavra": chosenWord,
      "chances": 5,
      "letras": chosenWord.length,
      "dica": chosenWord.substr(0, 3),
      "categoria": category
    }
    fs.writeFileSync("database/json/rpg/casino/dicionary/game.json", JSON.stringify(newWord, null, 2))
    return "palavra trocada!"
}