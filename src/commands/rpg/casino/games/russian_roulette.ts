import {modifyUserData} from "../../../../controllers/user/modify_user_data";

export const russianRouletteGame = (myAdmin, sock, userData, userNumber, jid, number) => {
    const randomRusssianRoulette = Math.floor(Math.random() * 3);
    
    if(myAdmin){
        if(userData.coins > 0){
            if(randomRusssianRoulette == 1){
                const coins = Number(userData.coins)*3
                modifyUserData({"id": userNumber, "coins": coins})
                return `*parabéns ${userData.name}! você triplicou suas fichas e sobreviveu a roleta russa.📌*`;
            }else{
                const coins = userData.coins - userData.coins 
                modifyUserData({"id": userNumber, "coins": coins})
                sock.groupParticipantsUpdate(jid, [number], "remove");
                return `*bang bang🎀 você morreu!*`;
            }
        }else{
            return "você não pussui coins para ganhar ou perder. ";
        }
    }else{
        return "este comando só pode ser usado quando eu possuir admin.";
    }
}