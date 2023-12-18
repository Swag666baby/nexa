import * as fs from "fs";
import {modifyUserData} from "../../../../controllers/user/modify_user_data";
import {soupLettersChangeWord} from "../../../../controllers/casino/soup_letters_change_word";

export const soupLetters = (message, userData, userNumber) => {
    const gameData = JSON.parse(fs.readFileSync("database/json/rpg/casino/soup/game.json", 'utf-8').toString())
    
    if(message?.toLowerCase() == "/sopa"){
        return `◈━━━━━━━━━━━━━━━◈\n                    📖 「𝐝𝐢𝐜𝐚」📖\n\n  [📋] ➭ *categoria*: ${gameData.categoria}\n  [✏️] ➭ *anagrama*: ${gameData.anagrama}\n  [⏱️] ➭ *chances*: ${gameData.chances}\n\n ◈━━━━━━━━━━━━━━━◈`;
    }
    
    else if(message?.toLowerCase()?.startsWith("/sopa ") && !message?.toLowerCase()?.startsWith("/sopa restart")){
        if(message?.toLowerCase().substr(6) == gameData.palavra?.toLowerCase()){
            const coins = userData.coins += 1000
            modifyUserData({"id": userNumber, "coins": coins})
            soupLettersChangeWord();
            return `*parabéns ${userData.name}! você acertou a palavra e ganhou 1,000 coins!*\n*a palavra foi trocada!*`;
         }else{
             gameData.chances -=1
             if(gameData.chances > 0){
                 fs.writeFileSync("database/json/rpg/casino/soup/game.json", JSON.stringify(gameData))
                 return `você errou! sobraram ${gameData.chances} chances.`;
             }else{
                 return soupLettersChangeWord();
             }
         }
     }
     
     else if(message?.toLowerCase() == "/sopa restart"){
            return soupLettersChangeWord()
    }
}
