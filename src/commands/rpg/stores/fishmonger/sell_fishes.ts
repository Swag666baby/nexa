import {modifyUserData} from "../../../../controllers/user/modify_user_data";
import {readFileSync} from "fs";

export const sellFishes = (userData, userNumber) => {
	const fishes = JSON.parse(readFileSync("./database/json/rpg/works/fisher/fishes.json").toString())
	let inventory = userData.character.inventory.unequipped;
	let totalPayment: number = 0;
	
	for(let item of inventory){
		const fish = fishes.find(element => element.name == item.name)
		
		if(fish?.name == item?.name){
			totalPayment += fish.price * item.quantity 
		    item.quantity = 0
        }
    }
    
	inventory = inventory.filter(item => item.quantity !== 0);
    modifyUserData({"id": userNumber, "character":{ "inventory":{ "unequipped": inventory}}})
    modifyUserData({"id": userNumber, "coins": totalPayment + userData.coins}) 
    return `peixes vendidos com sucesso! você recebeu um total de ${totalPayment}`;
}