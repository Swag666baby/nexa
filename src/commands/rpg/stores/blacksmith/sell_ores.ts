import {modifyUserData} from "../../../../controllers/user/modify_user_data";
import {readFileSync} from "fs";

export const sellOres = (userData, userNumber) => {
	const ores = JSON.parse(readFileSync("./database/json/rpg/works/miner/ores.json").toString())
	let inventory = userData.character.inventory.unequipped;
	let totalPayment: number = 0;
	
	for(let item of inventory){
		const ore = ores.find(element => element.name == item.name)
		
		if(ore.name == item.name){
			totalPayment += ore.price * item.quantity 
		    item.quantity = 0
        }
    }
    
	inventory = inventory.filter(item => item.quantity !== 0);
    modifyUserData({"id": userNumber, "character":{ "inventory":{ "unequipped": inventory}}})
    modifyUserData({"id": userNumber, "coins": totalPayment + userData.coins}) 
    return `*minérios vendidos com sucesso! você recebeu um total de ${totalPayment}*`;
}