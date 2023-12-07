export const inventory = (userData) => {
	let items: string = ""
	
	for(let item of userData.character.inventory.unequipped){
		items += `\n[📦] ➭  *${item.name}:* ${item.quantity}`
	}
		return `◈━━━━━━━━━━━━━━━◈\n                   📦「𝐢𝐧𝐯𝐞𝐧𝐭𝐚𝐫𝐢𝐨 」📦\n${items}\n\n◈━━━━━━━━━━━━━━━◈`;
}

