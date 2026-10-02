import dotenv from "dotenv";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

import connectDB from "./db/index.js";
import express from "express";

const app = express();

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(` server is runining at port: ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("MongoDB connection failed!!!", err)
    })







/*
    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/$
            {DB_NAME}`)
            app.on("error", (error) => {
                console.log("EROOR: ", error)
                throw error
            })
            app.listen(process.env.PORT, () => {
                console.log(`app is listen on port${process.env.PORT}`);
            })
        } catch (error) {
            console.error("ERROR:", error)
            throw error
        }
    })()
        */