import axios from "axios"
require("dotenv").config

export const ranking = async() => {
	
    try{
        const players = await axios.get(process.env.DATABASE)
        let ranking: string = "";
        players.data.sort(function(a, b){
            return b.xp - a.xp
        })
        for(let i = 0; i < 10; i++){
            let o = i+1
            if(players.data[i]?.id > 0) ranking += `\n ${o}°\n [🛡️] ➭ *ID*: ${players.data[i]?.id}\n [🛡️] ➭ *NOME*: ${players.data[i]?.name},\n [🛡️] ➭ *LEVEL*: ${players.data[i]?.level},\n [🛡️] ➭ *XP*: ${players.data[i]?.xp}\n [🛡️] ➭ *COINS*: ${players.data[i]?.coins}\n`
        }
        return ranking;
    }catch (error){
        console.error(error);
    }
}