import {mongoose} from "mongoose"
export let connect_DB=async()=>[
    await mongoose.connect(process.env.DB_URL),
    console.log("DB CONNECT HOO GAYA HAI")
    
]
