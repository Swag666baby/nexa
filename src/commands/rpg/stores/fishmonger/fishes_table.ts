import {readFileSync} from "fs";

export const fishesTable = () => {
	const ores = JSON.parse(readFileSync("database/json/rpg/works/fisher/fishes.json").toString())
	let items: string = ""
	
	for(let item of ores){
		items += `\n[🎣] ➭  *${item.name}*: ${item.price}`
	}
		return `◈━━━━━━━━━━━━━━━◈\n                   🎣「𝐩𝐞𝐢𝐱𝐞𝐬 」🎣\n${items}\n\n◈━━━━━━━━━━━━━━━◈`;
}