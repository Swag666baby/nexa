import {modifyUserData} from "../../../controllers/user/modify_user_data";
require("dotenv").config();

export const giveCasinoChips = (userNumber, message, dialedUserData, dialedUserNumber) => {
	if(userNumber == process.env.MY_NUMBER){
		if(dialedUserNumber){
            const giveValue = Number(message.replace(/[^0-9]/g, ""))
            const chips = dialedUserData.coins + giveValue
            modifyUserData({"id": dialedUserNumber, "coins": chips})
            return `*${giveValue} coins enviados com sucesso para ${dialedUserData.name}*`;
        }else{
            return "é necessário marcar um usuário.";
        }
    }else{
    	return "comando exclusivo para o meu desenvolvedor.";
    }
}