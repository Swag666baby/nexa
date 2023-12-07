import {registerNewUser} from "../../../controllers/user/register_new_user";

export const register = (userData, userNumber, userName) => {
	if(!userData){
        registerNewUser(userNumber, userName)
        return "*usuário registrado com sucesso! para ver suas informações utilize _/info_*"
    }else{
    	return `usuário ${userData.name} ja registrado anteriormente, para consultar suas informações utilize _/info_`
    }
}