import {modifyUserData} from "../../../controllers/user/modify_user_data";

export const donate = (message, userData, dialedUserData, userNumber, dialedUserNumber) => {
     const donationValue = Number(message.replace(/[^0-9]/g, ""))
         
     if(userData.coins >= donationValue){
     	if(dialedUserNumber){
         	if(donationValue > 0){
                 const userCoins = userData.coins - donationValue 
                 const dialedUserCoins = dialedUserData.coins + donationValue 
                 modifyUserData({"id": userNumber, "coins": userCoins})
                 modifyUserData({"id": dialedUserNumber, "coins": dialedUserCoins})
                 return `doação no valor de ${donationValue} realizada com sucesso para ${dialedUserData.name}!`; 
             }else{
             	return "valor invalido.";
             }
         }else{
         	return "é preciso marcar a mensagem do usuário que receberá a doação.";
         }
     }else{
         return "você não possui coins suficiente. ";
     }
}