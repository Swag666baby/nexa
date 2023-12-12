import {modifyGroupData} from "../../../controllers/groups/modify_group_data";

export const toggleNsfw= (groupData, jid, message) => {
	const enable = message?.toLowerCase()?.endsWith("on") ? true : false;
    const action = enable ? "liberados" : "bloqueados";
  
    if(groupData?.data?.nsfw !== enable){
        groupData.data.nsfw = enable;
        modifyGroupData(jid, groupData);
        return `*comandos nsfw ${action} com sucesso!*`;
    }else{
        return `*os comandos nsfw já foram ${action} anteriormente.*`;
    }
};
