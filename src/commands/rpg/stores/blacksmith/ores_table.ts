import {readFileSync} from "fs";

export const oresTable = () => {
	const ores = JSON.parse(readFileSync("database/json/rpg/works/miner/ores.json").toString())
	let items: string = ""
	
	for(let item of ores){
		items += `\n[⚖️] ➭  *${item.name}*: ${item.price}`
	}
		return `◈━━━━━━━━━━━━━━━◈\n                ⚖️「𝐦𝐢𝐧𝐞𝐫𝐢𝐨𝐬 」⚖️\n${items}\n\n◈━━━━━━━━━━━━━━━◈`;
}