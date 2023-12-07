import axios from "axios"
import {modifyUserData} from "../../../controllers/user/modify_user_data";

export const agiotagem = async(message, userData, dialedUserData, userNumber, dialedUserNumber, sock, jid, msg) => {
    const donationValue = Number(message.replace(/[^0-9]/g, ""))
        
    if(userData.coins > donationValue){
    	if(dialedUserNumber){
        	if(donationValue > 0){
 
                const userCoins = userData.coins - donationValue 
                const dialedUserCoins = dialedUserData.coins += donationValue 
                modifyUserData({"id": userNumber, "coins": userCoins})
                modifyUserData({"id": dialedUserNumber, "coins": dialedUserCoins})
                sock.sendMessage(jid, {text: "agiotagem realizada com sucesso! o valor retornará em 30 segundos. "}, {quoted:msg})
                
                setTimeout(async() =>{
                	
                    const reloadUserData = await axios.get(`${process.env.DATABASE}/search/?id=${userNumber}`)
                    const reloadDialedUserData = await axios.get(`${process.env.DATABASE}/search/?id=${dialedUserNumber}`)
                    const userCoinsFinalValue = reloadUserData?.data.coins + donationValue 
                    const dialedUserCoinsFinalValue = reloadDialedUserData?.data.coins - donationValue 
                    modifyUserData({"id": userNumber, "coins": userCoinsFinalValue})
                    modifyUserData({"id": dialedUserNumber, "coins": dialedUserCoinsFinalValue})
                    sock.sendMessage(jid, {text: `*agiotagem para ${dialedUserData.name} retornou a sua conta.*` }, {quoted:msg})
                
                }, 30000)
            }else{
            	sock.sendMessage(jid, {text: "valor invalido!"}, {quoted:msg})
            }
        }else{
        	sock.sendMessage(jid, {text: "é preciso marcar a mensagem do usuário que receberá a agiotagem."}, {quoted:msg})
        }
    }else{
        sock.sendMessage(jid, {text: "você não tem coins suficientes para agiotar. " }, {quoted:msg}) 
    }
}
