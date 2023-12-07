import {modifyUserData} from "../../../controllers/user/modify_user_data";
import {readFileSync} from "fs";

export const fisherWork = (userData, userNumber) => {
	const fishes = JSON.parse(
        readFileSync(
            "database/json/rpg/works/fisher/fishes.json"
        ).toString()
    );
    const inventory: any[] = userData.character.inventory.unequipped;
    const durability: number = userData.character.inventory.tools.fisher_rod.durability
    const randomDurability: number = Math.floor(Math.random() * durability);
    const randomAmountFish: number = Math.floor(Math.random() * 5);
    let myFish: string = ""; 
    
	if(durability >= 1){
		    
        for(let i = 0; i <= randomAmountFish; i++){
		    const randomFish = Math.floor(Math.random() * fishes.length)
            const fish = inventory.find(element => element.name == fishes[randomFish].name)
            myFish += `, ${fishes[randomFish].name}`
                
            if(fish) fish.quantity++
            else inventory.push({ "name": fishes[randomFish].name, "quantity": 1})
                
        }
        modifyUserData({"id": userNumber, "character":{ "inventory":{ "tools":{ "fisher_rod":{ "durability": randomDurability}}}}}) 
        modifyUserData({"id": userNumber, "character":{ "inventory":{ "unequipped": inventory}}})
		return `◈━━━━━━━━━━━━━━━◈\n                   🎣「𝐩𝐞𝐬𝐜𝐚」🎣\n\npesca realizada com sucesso! você obteve${myFish} e sua vara está em ${randomDurability}%\nconsulte seus peixes no _/inventario_ e os venda na peixaria com _/venderpeixes_\n\n◈━━━━━━━━━━━━━━━◈`.replace(",", "");
		    
	}else{
		return "*você não possui uma vara de pesca ou a sua está quebrada! você pode comprar uma na peixaria utilizando _/vara*";
	}
}