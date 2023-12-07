import {modifyUserData} from "../../../../controllers/user/modify_user_data";

export const rouletteGame = (message, userData, userNumber) => {
    const randomRoulette = Math.floor(Math.random() * 2);
    const betAmount = Number(message.replace(/[^0-9]/g, ""))
    
	if(userData?.coins >= betAmount && userData?.coins > 0){
 	   if(randomRoulette == 1){
            const coins = userData.coins + betAmount 
 	       modifyUserData({"id": userNumber, "coins": coins});
            return `parabéns, ${userData.name}! você ganhou ${betAmount} jogando na loteria.`;
 	   }else{
            const coins = userData.coins - betAmount 
            modifyUserData({"id": userNumber, "coins": coins})
            return `poxa ${userData.name} 😕, infelizmente você perdeu.`;
        }
    }else{
         return  "você não possui coins suficientes!";
    }
}