import axios from "axios";
require("dotenv").config();

export const deleteUser = (userNumber, message) => {
	if(userNumber == process.env.MY_NUMBER){
		const user = message.replace(/[^0-9]/g, "")
	    axios.post(`${process.env.DATABASE}/delete`, {"id": user})
	    return "usuário deletado com sucesso!";
	}else{
		return "comando exclusivo para o meu desenvolvedor.";
	}
}