import {modifyGroupData} from "../../../controllers/groups/modify_group_data";

export const toggleRpg = (groupData, jid, message) => {
    const enable = message?.toLowerCase()?.endsWith("on") ? true : false;
    const action = enable ? "liberados" : "bloqueados";
  
    if(groupData?.data?.rpg !== enable){
        groupData.data.rpg = enable;
        modifyGroupData(jid, groupData);
        return `*comandos rpg ${action} com sucesso!*`;
    }else{
        return `*os comandos rpg já foram ${action} anteriormente.*`;
    }
};
