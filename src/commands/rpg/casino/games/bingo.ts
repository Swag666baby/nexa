import {modifyUserData} from "../../../../controllers/user/modify_user_data";

export const  bingoGame = (message, userData, userNumber) => {
    const randomBingo = Math.floor(Math.random() * 11);
    const bingoValue = Number(message.replace(/[^0-9]/g, ""))
    
    if(userData.coins >= 500){
        if(bingoValue < 10 ){
            if(randomBingo == bingoValue){
                const coins = userData.coins += 15000
                modifyUserData({"id": userNumber, "coins": coins})
                return `*parabéns ${userData.name}! você acertou o número do bingo e ganhou 15,000 fichas!*`;
            }else{
                const coins = userData.coins -= 500
                modifyUserData({"id": userNumber, "coins": coins})
                return `*você perdeu! o número do bingo era 「${randomBingo}」*`;
            }
        }else{
        	return "*numero invalido! os numeros do bingo vão de 0 a 10.*";
        }
    }else{
        return "*você não possui coins suficientes! coins necessários: 500*";
    }
}