import {modifyUserData} from "../../../../controllers/user/modify_user_data";

export const repairPickaxe = (userData, userNumber) => {
	
    if(userData.coins >= 4000){
    	modifyUserData({"id": userNumber, "character":{ "inventory":{ "tools":{ "pickaxe":{ "durability": 100 }}}}})
		modifyUserData({"id": userNumber, "coins": userData.coins - 4000})
	    
	    return "picareta reparada com sucesso! foi cobrados 4,000 coins pelo conserto."
	}else{
		return "você não possui coins suficientes para reparar sua picareta. são necessários 4,000."
    }
}
