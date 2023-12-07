import {modifyUserData} from "../../../../controllers/user/modify_user_data";

export const repairFisherRod = (userData, userNumber) => {
	
    if(userData.coins >= 4000){
    	modifyUserData({"id": userNumber, "character":{ "inventory":{ "tools":{ "fisher_rod":{ "durability": 100 }}}}})
		modifyUserData({"id": userNumber, "coins": userData.coins - 5000})
	    
	    return "vara de pesca reparada com sucesso! foi cobrados 4,000 coins pelo conserto.";
	}else{
		return "você não possui coins suficientes para reparar sua vara de pesca. são necessários 4,000.";
    }
}