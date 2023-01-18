const mongoose = require("mongoose")

console.log("------------------------------------------------------------------------")

async function connectToDB(){
    try {
        mongoose.connect(process.env.DB_URI).then((db)=>{
            console.log("-----------------------")
            console.log("MONGO CONNECTED")
            console.log(db.connection.host)
            console.log(`${process.env.DB_URI}`)
            console.log("-----------------------")
        });
    } catch (error) {
        console.log(error);
    }
}

connectToDB().then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

