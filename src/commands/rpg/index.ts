import {isCommand} from "../../models/command/is_command";
import {isAdmin} from "../../models/group/is_group_admin";
import {data} from "../../models/user/user_data";
import {russianRouletteGame} from "./casino/games/russian_roulette";
import {dicionaryGame} from "./casino/games/dicionary";
import {soupLetters} from "./casino/games/soup_letters";
import {rouletteGame} from "./casino/games/roulette";
import {lotteryGame} from "./casino/games/lottery"; 
import {bingoGame} from "./casino/games/bingo";
import {slotGame} from "./casino/games/slot";
import {agiotagem} from "./others/agiotagem";
import {deleteUser} from "./others/delete";
import {donate} from "./others/donate";
import {ranking} from "./others/ranking";
import {userInfo} from "./others/info";
import {giveCasinoChips} from "./others/give";
import Message from "../../config/lib/message_class";
import {findGroups} from "../../models/group/find_groups";
import {register} from "./others/register";
import {inventory} from "./others/inventory";
import {fisherWork} from "./works/fisher";
import {minerWork} from "./works/miner";
import {sellFishes} from "./stores/fishmonger/sell_fishes";
import {sellOres} from "./stores/blacksmith/sell_ores";
import {repairFisherRod} from "./stores/fishmonger/repair_fisher_rod";
import {repairPickaxe} from "./stores/blacksmith/repair_pickaxe";
import {oresTable} from "./stores/blacksmith/ores_table";
import {fishesTable} from "./stores/fishmonger/fishes_table";
require("dotenv").config()

export const rpgCommands = async(m, sock) => {
    const {message, jid, msg, dialedUserNumber, userNumber, userName, number } = new Message(m);

    if(isCommand(message, "rpg")){
        if(findGroups(jid)?.data?.rpg){
            const userData = await data(userNumber);
            const dialedUserData = await data(dialedUserNumber);
            const myAdmin = await isAdmin(jid, sock, `${process.env.BOT_NUMBER}@s.whatsapp.net`);

            if(userData || message == "/registrar"){
                switch (true){
                    case message?.toLowerCase()?.startsWith("/bingo"):
                        sock.sendMessage(jid, { text: `${bingoGame(message, userData, userNumber)}` }, { quoted: msg });
                        break;

                    case message?.toLowerCase()?.startsWith("/roleta "):
                        sock.sendMessage(jid, { text: `${rouletteGame(message, userData, userNumber)}` }, { quoted: msg });
                        break;

                    case message?.toLowerCase()?.startsWith("/dc"):
                        sock.sendMessage(jid, { text: `${dicionaryGame(message, userData, userNumber)}` }, { quoted: msg });
                        break;
                    
                    case message?.toLowerCase()?.startsWith("/sopa"):
                        sock.sendMessage(jid, { text: `${soupLetters(message, userData, userNumber)}` }, { quoted: msg });
                        break;
                    
                    case message?.toLowerCase()?.startsWith("/loteria"):
                        sock.sendMessage(jid, { text: `${lotteryGame(message, userData, userNumber)}` }, { quoted: msg });
                        break;

                    case message?.toLowerCase()?.startsWith("/roletarussa"):
                        sock.sendMessage(jid, { text: `${russianRouletteGame(myAdmin, sock, userData, userNumber, jid, number)}` }, { quoted: msg });
                        break;

                    case message?.toLowerCase() == "/slot":
                        sock.sendMessage(jid, { text: `${slotGame(userData, userNumber)}` }, { quoted: msg });
                        break;

                    case message?.toLowerCase()?.startsWith("/doar"):
                        sock.sendMessage(jid, { text: `${donate(message, userData, dialedUserData, userNumber, dialedUserNumber)}` }, { quoted: msg });
                        break;

                    case message?.toLowerCase()?.startsWith("/agiotar"):
                        agiotagem(message, userData, dialedUserData, userNumber, dialedUserNumber, sock, jid, msg);
                        break;

                    case message?.toLowerCase() == "/info":
                        sock.sendMessage(jid, { text: `${userInfo(userData)}` }, { quoted: msg });
                        break;

                    case message?.toLowerCase() == "/investigar":
                        sock.sendMessage(jid, { text: `${userInfo(dialedUserData)}` }, { quoted: msg });
                        break;

                    case message?.toLowerCase()?.startsWith("/userdel"):
                        sock.sendMessage(jid, { text: `${deleteUser(userNumber, message)}` }, { quoted: msg });
                        break;

                    case message?.toLowerCase()?.startsWith("/give "):
                        sock.sendMessage(jid, { text: `${giveCasinoChips(userNumber, message, dialedUserData, dialedUserNumber)}` }, { quoted: msg });
                        break;

                    case message?.toLowerCase() == "/registrar":
                        sock.sendMessage(jid, { text: `${register(userData, userNumber, userName)}` }, { quoted: msg });
                        break;

                    case message?.toLowerCase() == "/ranking":
                        const response = await ranking();
                        sock.sendMessage(jid, { text: `${response}` }, { quoted: msg });
                        break;
                        
                    case message?.toLowerCase() == "/inventario":
                        sock.sendMessage(jid, { text: `${inventory(userData)}` }, { quoted: msg });
                        break;
                        
                    case message?.toLowerCase() == "/venderpeixes":
                        sock.sendMessage(jid, { text: `${sellFishes(userData, userNumber)}` }, { quoted: msg });
                        break;
                    
                    case message?.toLowerCase() == "/venderminerios":
                        sock.sendMessage(jid, { text: `${sellOres(userData, userNumber)}` }, { quoted: msg });
                        break;
                        
                    case message?.toLowerCase() == "/pescar":
                        await sock.sendMessage(jid, {text: "iniciando pescaria...🎣"}, {quoted: msg});
                        sock.sendMessage(jid, {image: {url: "database/media/images/fisher.jpg" }, mimetype: 'image/jpeg' , caption: `◈━━━━━━━━━━━━━━━◈\n                   🎣「𝐩𝐞𝐬𝐜𝐚」🎣\n\n${fisherWork(userData, userNumber)}\n\n◈━━━━━━━━━━━━━━━◈` },{quoted:msg })
                        break;
                    
                    case message?.toLowerCase() == "/vara":
                        sock.sendMessage(jid, { text: `${repairFisherRod(userData, userNumber)}` }, { quoted: msg });
                        break;
                        
                    case message?.toLowerCase() == "/picareta":
                        sock.sendMessage(jid, { text: `${repairPickaxe(userData, userNumber)}` }, { quoted: msg });
                        break;
                    
                    case message?.toLowerCase() == "/minerar":
                        await sock.sendMessage(jid, {text: "iniciando mineração...⛏️"}, {quoted: msg});
                        sock.sendMessage(jid, {image: {url: "database/media/images/miner.jpg" }, mimetype: 'image/jpeg' , caption: `◈━━━━━━━━━━━━━━━◈\n                   ⛏️「𝐦𝐢𝐧𝐞𝐫𝐚𝐜𝐚𝐨」⛏️\n\n${minerWork(userData, userNumber)}\n\n◈━━━━━━━━━━━━━━━◈` },{quoted:msg })
                        break;
                        
                    case message?.toLowerCase() == "/peixes":
                        sock.sendMessage(jid, { text: `${fishesTable()}` }, { quoted: msg });
                        break;
                    
                    case message?.toLowerCase() == "/minerios":
                        sock.sendMessage(jid, { text: `${oresTable()}` }, { quoted: msg });
                        break;

                    default:
                        // Handle default case or do nothing
                        break;
                }
            }else{
                sock.sendMessage(jid, { text: "*usuário não registrado. registre-se usando _/registrar_*"}, { quoted: msg });
            }
        }else{
            sock.sendMessage(jid, { text: "*o rpg esta desabilitado. para habilitá-lo, use _/rpg on_*" }, { quoted: msg });
        }
    }
};