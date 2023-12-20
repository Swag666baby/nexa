import {tz} from "moment-timezone";
import * as fs from "fs";

export const menu = (userName) => {
	const hora = tz("America/Sao_Paulo").format("HH:mm:ss");
    const data = tz("America/Sao_Paulo").format("DD/MM/YY");
    const prefix = "/";
	const allCommands = JSON.parse(fs.readFileSync("database/json/commands/all.json").toString())
	

    return `◈━━━━━━━━━━━━━━━◈
                   🎡「𝐧𝐞𝐱𝐚」🎡

 [🎡] ➭  Prefixo:『 / 』
 [🎡] ➭  Olá ${userName}
 [🎡] ➭  seja bem vindo(a) 
 [🎡] ➭  ao menu de comandos
 [🎡] ➭  data: ${data}
 [🎡] ➭  horas: ${hora}
◈━━━━━━━━━━━━━━━◈
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎                 🪐「𝐠𝐫𝐨𝐮𝐩𝐬」🪐

 [🪐] ➭ *${prefix}fecharg* 
 [🪐] ➭  *${prefix}abrirg* 
 [🪐] ➭  *${prefix}promover* 
 [🪐] ➭  *${prefix}rebaixar* 
 [🪐] ➭  *${prefix}add* (numero)
 [🪐] ➭  *${prefix}ban*
 [🪐] ➭  *${prefix}descg*  (descricao)
 [🪐] ➭  *${prefix}nomeg* (nome)
 [🪐] ➭  *${prefix}delete*

◈━━━━━━━━━━━━━━━◈
                   🎲「𝐜𝐚𝐬𝐢𝐧𝐨」🎲

 [🎲] ➭ *${prefix}roleta* (valor)
 [🎲] ➭ *${prefix}agiotar* (valor)
 [🎲] ➭ *${prefix}roletarussa* 
 [🎲] ➭ *${prefix}loteria* (n1) (n2) 
 [🎲] ➭ *${prefix}dc*
 [🎲] ➭ *${prefix}sopa*
 [🎲] ➭ *${prefix}bingo* (n1) 
 [🎲] ➭ *${prefix}slot* 

◈━━━━━━━━━━━━━━━◈
                  🛡️「*******」⚔️ *DEV*

 [🛡️] ➭ *${prefix}registrar*
 [⚔️] ➭ *${prefix}info*
 [🛡️] ➭ *${prefix}investigar*
 [⚔] ➭ *${prefix}ranking*
 [🛡️] ➭ *${prefix}pescar*
 [⚔] ➭ *${prefix}vara*
 [🛡️] ➭ *${prefix}picareta*
 [⚔] ➭ *${prefix}minerar*
 [🛡️] ➭ *${prefix}venderpeixes*
 [⚔] ➭ *${prefix}venderminerios*
 [🛡️] ➭ *${prefix}inventario*
 [⚔] ➭ *${prefix}peixes* 
 [🛡️] ➭ *${prefix}minerios* 
 [⚔] ➭ *${prefix}doar* (coins)
 
◈━━━━━━━━━━━━━━━◈
                  🔞 「𝐧𝐬𝐟𝐰」🔞

 [🔞] ➭ *${prefix}hsearch* (tema)
 [🔞] ➭ *${prefix}hvideosearch* (tema)
 [🔞] ➭ *${prefix}amateur*
 [🔞] ➭ *${prefix}anal*
 [🔞] ➭ *${prefix}anal-gape*
 [🔞] ➭ *${prefix}arab*
 [🔞] ➭ *${prefix}argentina*
 [🔞] ➭ *${prefix}asian*
 [🔞] ➭ *${prefix}ass*
 [🔞] ➭ *${prefix}ass-licking*
 [🔞] ➭ *${prefix}asshole*
 [🔞] ➭ *${prefix}babe*
 [🔞] ➭ *${prefix}bbc*
 [🔞] ➭ *${prefix}bbw*
 [🔞] ➭ *${prefix}bdsm*
 [🔞] ➭ *${prefix}big-tits*
 [🔞] ➭ *${prefix}beach*
 [🔞] ➭ *${prefix}beautiful*
 [🔞] ➭ *${prefix}big-clit*
 [🔞] ➭ *${prefix}big-cock*
 [🔞] ➭ *${prefix}big-tits*
 [🔞] ➭ *${prefix}bikini*
 [🔞] ➭ *${prefix}blonde*
 [🔞] ➭ *${prefix}blowjob*
 [🔞] ➭ *${prefix}brazilian*
 [🔞] ➭ *${prefix}ebony*
 [🔞] ➭ *${prefix}facial*
 [🔞] ➭ *${prefix}feet*
 [🔞] ➭ *${prefix}anal*
 [🔞] ➭ *${prefix}gangbang*
 [🔞] ➭ *${prefix}gay*
 [🔞] ➭ *${prefix}glasses*
 [🔞] ➭ *${prefix}gloryhole*
 [🔞] ➭ *${prefix}goth*
 [🔞] ➭ *${prefix}granny*
 [🔞] ➭ *${prefix}gym*
 [🔞] ➭ *${prefix}hairy*
 [🔞] ➭ *${prefix}handjob*
 [🔞] ➭ *${prefix}hardcore*
 [🔞] ➭ *${prefix}high-heels*
 [🔞] ➭ *${prefix}homemade*
 [🔞] ➭ *${prefix}indian*
 [🔞] ➭ *${prefix}interracial*
 [🔞] ➭ *${prefix}japanese*
 [🔞] ➭ *${prefix}jeans*
 [🔞] ➭ *${prefix}korean*
 [🔞] ➭ *${prefix}pussy*
 [🔞] ➭ *${prefix}ladyboy*
 [🔞] ➭ *${prefix}latina*
 [🔞] ➭ *${prefix}legs*
 [🔞] ➭ *${prefix}brunette*
 [🔞] ➭ *${prefix}bukkake*
 [🔞] ➭ *${prefix}cameltoe*
 [🔞] ➭ *${prefix}casting*
 [🔞] ➭ *${prefix}chinese*
 [🔞] ➭ *${prefix}chubby*
 [🔞] ➭ *${prefix}colombian*
 [🔞] ➭ *${prefix}cosplay*
 [🔞] ➭ *${prefix}teen*
 [🔞] ➭ *${prefix}cougar*
 [🔞] ➭ *${prefix}cowgirl*
 [🔞] ➭ *${prefix}creampie*
 [🔞] ➭ *${prefix}cuckold*
 [🔞] ➭ *${prefix}cum-in-mouth*
 [🔞] ➭ *${prefix}cum-in-pussy*
 [🔞] ➭ *${prefix}cumshot*
 [🔞] ➭ *${prefix}curvy*
 [🔞] ➭ *${prefix}cute*
 [🔞] ➭ *${prefix}deepthroat*
 [🔞] ➭ *${prefix}dildo*
 [🔞] ➭ *${prefix}doggy-style*
 [🔞] ➭ *${prefix}double-penetration*
 [🔞] ➭ *${prefix}dress*
 [🔞] ➭ *${prefix}tall*
 [🔞] ➭ *${prefix}tattoo*
 [🔞] ➭ *${prefix}teacher*
 [🔞] ➭ *${prefix}teen*
 [🔞] ➭ *${prefix}thai*
 [🔞] ➭ *${prefix}thong*
 [🔞] ➭ *${prefix}threesome*
 [🔞] ➭ *${prefix}upskirt*
 [🔞] ➭ *${prefix}venezuela*
 [🔞] ➭ *${prefix}vintage*
 [🔞] ➭ *${prefix}webcams*
 [🔞] ➭ *${prefix}white*
 [🔞] ➭ *${prefix}wife*
 [🔞] ➭ *${prefix}yoga*
 [🔞] ➭ *${prefix}yoga-pants*
 [🔞] ➭ *${prefix}redhead*
 [🔞] ➭ *${prefix}russian*
 [🔞] ➭ *${prefix}saggy-tits*
 [🔞] ➭ *${prefix}sandals*
 [🔞] ➭ *${prefix}schoolgirl*
 [🔞] ➭ *${prefix}secretary*
 [🔞] ➭ *${prefix}selfie*
 [🔞] ➭ *${prefix}shemale*
 [🔞] ➭ *${prefix}short-hair*
 [🔞] ➭ *${prefix}latina*
 [🔞] ➭ *${prefix}shorts*
 [🔞] ➭ *${prefix}shower*
 [🔞] ➭ *${prefix}skinny*
 [🔞] ➭ *${prefix}skirt*
 [🔞] ➭ *${prefix}solo*
 [🔞] ➭ *${prefix}ssbbw*
 [🔞] ➭ *${prefix}stockings*
 [🔞] ➭ *${prefix}tall*
 [🔞] ➭ *${prefix}tattoo*
 [🔞] ➭ *${prefix}teacher*
 [🔞] ➭ *${prefix}teen*
 [🔞] ➭ *${prefix}thai*
 [🔞] ➭ *${prefix}thong*
 [🔞] ➭ *${prefix}threesome*

◈━━━━━━━━━━━━━━━◈
                  🔍「𝐬𝐞𝐚𝐫𝐜𝐡」🔎

 [🔎] ➭ *${prefix}imgsearch* (assunto)
 [🔎] ➭ *${prefix}pinterest* (assunto) 
 [🔎] ➭ *${prefix}play* (musica) 
 [🔎] ➭ *${prefix}insta* (url) 
 [🔎] ➭ *${prefix}tiktok* (url)
 [🔎] ➭ *${prefix}tiktokmp3* (url)

◈━━━━━━━━━━━━━━━◈
                ⚙「𝐬𝐞𝐭𝐭𝐢𝐧𝐠𝐬」⚙ 

 [⚙] ➭ *${prefix}nsfw* (on/off)
 [⚙] ➭ *${prefix}rpg* (on/off) 
 [⚙] ➭ *${prefix}antilink* (on/off) 
 [⚙] ➭ *${prefix}bug* (descrição)

◈━━━━━━━━━━━━━━━◈
                  🎑「𝐬𝐭𝐢𝐜𝐤𝐞𝐫」🎑  

 [🎑] ➭ *${prefix}s* (foto)
 [🎑] ➭ *${prefix}toimg* (foto)

◈━━━━━━━━━━━━━━━◈
                      🧠「𝐚𝐢」🌐
[🧠] ➭nexa (pergunta)
[🌐] ➭sara (pergunta)
                          
◈━━━━━━━━━━━━━━━◈
                    ✨「𝐝𝐞𝐯」✨

 [✨] ➭ *${prefix}give* (coins)
 [✨] ➭ *${prefix}userdel* (número)

◈━━━━━━━━━━━━━━━◈
                 📌 「𝐢𝐧𝐟𝐨𝐬」📌

 [📌] ➭  versão: 1.3.0
 [📌] ➭  comandos: ${allCommands.length}
 [📌] ➭  github: github.com/Swag666baby
 [📌] ➭  dev: +1 (323) 435-8049
 
◈━━━━━━━━━━━━━━━◈`;
}
