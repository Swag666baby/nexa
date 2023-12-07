import axios from "axios";

export const saraAi = async(message: string) => {
	try{
	
        const data = {
            "text": message?.substr(5),
            "lc": "pt"
        }
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        }

        const response = await axios.post('https://api.simsimi.vn/v1/simtalk', data, {headers});
        return response.data.message;
    }catch{
    	return "não consegui formular uma resposta.";
    }
}