import * as fs from "fs";
import {modifyUserData} from "../../../../controllers/user/modify_user_data";

export const lotteryGame = (message, userData, userNumber) => {
	const randomLottery = Math.floor(Math.random() * 11);
    const randomLottery02 = Math.floor(Math.random() * 11);
    const award  = JSON.parse(fs.readFileSync("database/json/rpg/casino/lottery/game.json", 'utf8').toString())
    const separateWords = message?.split(" ",3);
    
    if(separateWords[2]){
        if(separateWords[1] <= 10 && separateWords[2] <= 10){
            if(userData.coins >= 3000){
                if(randomLottery == separateWords[1] && randomLottery02 == separateWords[2] || randomLottery == separateWords[2] && randomLottery02 == separateWords[1]){
                    const coins = userData.coins + award.value
                    modifyUserData({"id": userNumber, "coins": coins})
                    
                    //update the award to the original value 
                    award.value = 65000
                    fs.writeFileSync("database/json/rpg/casino/lottery/game.json", JSON.stringify(award))
                    return `*parabens ${userData.name}! você acertou os números da loteria e ganhou ${award.value}! 🎲*`;
                }else{
                    const coins = userData.coins -= 2000
                    modifyUserData({"id": userNumber, "coins": coins})
                    
                    award.value += 2460
                    fs.writeFileSync("database/json/rpg/casino/lottery/game.json", JSON.stringify(award))
                    return `você perdeu! os números eram ${randomLottery} e ${randomLottery02}.\n o valor do prêmio subiu para ${award.value}`;
                }
            }else{
                return "erro! você não possui coins suficientes. necessario 3,000";
            }
        }else{
        	return "números inválidos! os números da loteria vão de 0 a 10 apenas.";
        }
    }else{
    	return "estão faltando os números. exemplo de jogo: /loteria 6 2";
    }
}