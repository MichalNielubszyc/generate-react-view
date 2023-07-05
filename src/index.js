"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var langchain_1 = require("langchain");
dotenv.config();
var model = new langchain_1.OpenAI({
    modelName: "gpt-3.5-turbo",
    openAIApiKey: process.env.OPENAI_API_KEY,
});
var res = await model.call("What's a good idea for an application to build with GPT-3?");
console.log(res);
