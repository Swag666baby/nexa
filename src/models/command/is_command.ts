import {readFileSync} from "fs";

export const isCommand = (message: string, type: string) => {
	
	let commands: any[] = []
	if(type == "all") commands = JSON.parse(readFileSync("database/json/commands/all.json").toString());
	else if(type == "nsfw") commands = JSON.parse(readFileSync("database/json/commands/nsfw.json").toString());
	else if(type == "admin") commands = JSON.parse(readFileSync("database/json/commands/admin.json").toString()); 
	else if(type == "rpg") commands = JSON.parse(readFileSync("database/json/commands/rpg.json").toString());
	
    for(let command of commands){
        if(message?.toLowerCase()?.startsWith(command)){
        	return true;
        }
    }
    return false;
}
