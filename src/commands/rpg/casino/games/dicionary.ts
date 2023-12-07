import * as fs from "fs";
import {modifyUserData} from "../../../../controllers/user/modify_user_data";
import {changeWord} from "../../../../controllers/casino/dicionary_change_word";

export const dicionaryGame = (message, userData, userNumber) => {
    const gameData = JSON.parse(fs.readFileSync("database/json/rpg/casino/dicionary/game.json", 'utf-8').toString())
    
    if(message?.toLowerCase() == "/dc dica"){
        return `◈━━━━━━━━━━━━━━━◈\n                    📖 「𝐝𝐢𝐜𝐚」📖\n\n  [📋] ➭ *categoria*: ${gameData.categoria}\n  [✏️] ➭ *primeiras letras*: ${gameData.dica}\n  [📕] ➭ *numero de letras*: ${gameData.letras}\n  [⏱️] ➭ *chances*: ${gameData.chances}\n\n ◈━━━━━━━━━━━━━━━◈`;
    }
    
    else if(message?.toLowerCase()?.startsWith("/dc ") && !message?.toLowerCase()?.startsWith("/dc restart") && !message?.toLowerCase()?.startsWith("/dc dica")){
        if(message?.toLowerCase().substr(4) == gameData.palavra?.toLowerCase()){
            const coins = userData.coins += 550
            modifyUserData({"id": userNumber, "coins": coins})
            changeWord();
            return `*parabéns ${userData.name}! você acertou a palavra e ganhou 550 coins!*\n*a palavra foi trocada!*`;
         }else{
             gameData.chances -=1
             if(gameData.chances > 0){
                 fs.writeFileSync("database/json/rpg/casino/dicionary/game.json", JSON.stringify(gameData))
                 return `você errou! sobraram ${gameData.chances} chances.`;
             }else{
                 return changeWord();
             }
         }
     }
     
     else if(message?.toLowerCase() == "/dc restart"){
            return changeWord()
    }
}