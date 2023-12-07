import {modifyUserData} from "../../../../controllers/user/modify_user_data";
const emojis = ["🍒", "🍉", "⚡", "🍋", "🍍"]

export const slotGame = (userData, userNumber) => {
    const slotRandom01 = Math.floor(Math.random() * 5);
    const slotRandom02 = Math.floor(Math.random() * 5);
    const slotRandom03 = Math.floor(Math.random() * 5);
    
    if(userData.coins >= 500){
        if(slotRandom01 == slotRandom02 && slotRandom02 == slotRandom03){
            const coins = userData.coins += 70000
            modifyUserData({"id": userNumber, "coins": coins})
            return `       você venceu!\n━━━━❪🎰❫━━━━\n       ${emojis[slotRandom01]} ◈ ${emojis[slotRandom02]} ◈ ${emojis[slotRandom03]} \n━━━━❪🎲❫━━━━`;
        }else{
            const coins = userData.coins -= 500
            modifyUserData({"id": userNumber, "coins": coins})
            return `       você perdeu!\n━━━━❪🎰❫━━━━\n       ${emojis[slotRandom01]} ◈ ${emojis[slotRandom02]} ◈ ${emojis[slotRandom03]} \n━━━━❪🎲❫━━━━`;
        }
    }else{
        return "*voce não possui coins suficientes! necessario: 500*";
    }
}