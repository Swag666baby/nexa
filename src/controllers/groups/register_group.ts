import * as fs from "fs";

export const registerGroup = (jid) => {
	try{
       const data = JSON.parse(fs.readFileSync("database/json/groups/groups.json").toString());
		
		data.push({
            "id": jid,
            "data":{
                "nsfw": false,
                "rpg": false,
                "antilink": false
            }
        })
        fs.writeFileSync("database/json/groups/groups.json", JSON.stringify(data, null, 2), {encoding: "utf8"})
    }catch{
    	throw new TypeError("Error registering new group.");
    }
}