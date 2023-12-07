import {registerGroup} from "../../controllers/groups/register_group";
import * as fs from "fs"

export const findGroups = (jid) => {
    try{
    	if(typeof jid == "string"){
	        const data = JSON.parse(fs.readFileSync("database/json/groups/groups.json").toString());
            const groupData = data.find(element => element.id == jid)
	        if(groupData) return groupData;
	        else registerGroup(jid);
	    }
    }catch{
	    new TypeError("Error searching for group!");
    }
}