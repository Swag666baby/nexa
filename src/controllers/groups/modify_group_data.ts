import * as fs from "fs";

export const modifyGroupData = (groupId, groupData) => {
    const data = JSON.parse(fs.readFileSync("database/json/groups/groups.json").toString())
    const updatedData = data.map((element: any) => {
         if(element.id === groupId){
             return groupData;
         }
             return element;
    });
    fs.writeFileSync("database/json/groups/groups.json", JSON.stringify(updatedData, null, 2));
}