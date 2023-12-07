import axios from "axios"
require('dotenv').config();

export const nexaAi = async(message: string) => {
	
    try{
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        };
        const data = {
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": message?.substr(5)}],
            "temperature": 0.7
        };
            
        const response: any = await axios.post('https://api.chatanywhere.cn/v1/chat/completions', data, {headers});
        return response.data?.choices[0]?.message?.content;
            
    }catch{
        return "Desculpe, não entendi a pergunta. Poderia reformulá-la, por favor?";
    }
}