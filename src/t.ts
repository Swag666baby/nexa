import axios from "axios";

 const saraAi = async(message: string) => {
	try{
	
        const data = {
            "text": message?.substr(5),
            "lc": "pt"
        }
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        }

        const response = await axios.post('https://api.simsimi.vn/v1/simtalk', data, {headers});
        console.log(response.data)
    }catch(error){
    	console.log(error)
    }
}
saraAi("sara me da oi")