import {default as axios} from "axios";
import {readFileSync} from "fs";
import {data} from "../../models/user/user_data";
require('dotenv').config();

export const registerNewUser = (userNumber, userName) => {
    const classes = JSON.parse(readFileSync("database/json/rpg/config/classes.json").toString())
    const randomClass = Math.floor(Math.random() * classes.length)
	
    axios.post(`${process.env.DATABASE}/register`,
    {
        "id": userNumber,
        "name": userName,
        "class": classes[randomClass].name,
        "primary_weapon": classes[randomClass].primary_weapon, 
        "secondary_weapon": classes[randomClass].secondary_weapon
    })
    return "usuário registrado com sucesso." 
}
