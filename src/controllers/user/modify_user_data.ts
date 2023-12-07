import axios from 'axios'
require('dotenv').config();

export const modifyUserData = (value) => {
    axios.post(
        `${process.env.DATABASE}/modify`,
        value,
        {headers:{"Content-Type": "application/json"}}
    )
}