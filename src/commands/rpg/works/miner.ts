import {modifyUserData} from "../../../controllers/user/modify_user_data";
import {readFileSync} from "fs";

export const minerWork = (userData, userNumber) => {
	const ores = JSON.parse(
        readFileSync(
            "database/json/rpg/works/miner/ores.json"
        ).toString()
    );
    const inventory: any[] = userData.character.inventory.unequipped;
    const durability: number = userData.character.inventory.tools.pickaxe.durability
    const randomDurability: number = Math.floor(Math.random() * durability);
    const randomAmountOre: number = Math.floor(Math.random() * 5);
    let myOre: string = ""; 
    
	if(durability >= 1){
		    
        for(let i = 0; i <= randomAmountOre; i++){
		    const randomOre = Math.floor(Math.random() * ores.length)
            const ore = inventory.find(element => element.name == ores[randomOre].name)
            myOre += `, *${ores[randomOre].name}*`
                
            if(ore) ore.quantity++
            else inventory.push({ "name": ores[randomOre].name, "quantity": 1})
                
        }
        modifyUserData({"id": userNumber, "character":{ "inventory":{ "tools":{ "pickaxe":{ "durability": randomDurability}}}}}) 
        modifyUserData({"id": userNumber, "character":{ "inventory":{ "unequipped": inventory}}})
		return `mineração realizada com sucesso! você obteve${myOre} e sua picareta está em ${randomDurability}%\nconsulte seus minérios no _/inventario_ e os venda no ferreiro com _/venderminerios_`.replace(",", "");
		    
	}else{
		return "*você não possui uma picareta ou a sua está quebrada! você pode comprar uma no ferreiro utilizando _/picareta_*";
	}
}
