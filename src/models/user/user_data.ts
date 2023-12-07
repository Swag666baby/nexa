import axios from "axios"
require('dotenv').config();

export const data = async(userNumber) => {
    const response = await axios.get(`${process.env.DATABASE}/search?id=${userNumber}`)
	if(response.data?.id) return response.data
	else return null
}