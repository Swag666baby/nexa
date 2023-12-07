import {modifyGroupData} from "../../../controllers/groups/modify_group_data";

export const toggleAntilink= (groupData, jid, message) => {
    const enable = message?.toLowerCase()?.endsWith("on") ? true : false;
    const action = enable ? "habilitado" : "desabilitado";
  
  
    if(groupData?.data?.antilink !== enable){
        groupData.data.antilink = enable;
        modifyGroupData(jid, groupData);
        return `*antilink ${action} com sucesso!*`;
    }else{
      return `*o antilink ja foi ${status} anteriormente. para ver quais recursos estão habilitados ou não digite /status.*`;
    }
};