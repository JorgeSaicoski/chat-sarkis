const mongoose = require("mongoose")

console.log(process.env.DB_URI)

async function connectToDB(){
    try {
        await mongoose.connect(process.env.DB_URI,
            {
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            }
        );
        console.log("-----------------------")
        console.log("MONGO CONNECTED")
        console.log(`${process.env.DB_URI}`)
        console.log("-----------------------")

    } catch (error) {
        handleError(error);
    }
}

connectToDB()

