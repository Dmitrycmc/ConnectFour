import express from 'express'
import OpenAI from "openai";
import {configDotenv} from "dotenv";
configDotenv()

const app = express()
const port = 80

console.log(process.env.GPT_API_KEY)

app.get('/', async (req, res) => {
    const openai = new OpenAI({apiKey: process.env.GPT_API_KEY});
    const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        store: true,
        messages: [
            {"role": "user", "content": "Hi!"}
        ]
    });

    res.send(completion.choices[0].message.content)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
