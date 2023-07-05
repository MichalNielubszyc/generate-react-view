import * as dotenv from "dotenv";
import { OpenAI } from "langchain";
import { PromptTemplate } from "langchain/prompts";

dotenv.config();

const model = new OpenAI({
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const template = "What is a good name for a company that makes {product}?";

const prompt = new PromptTemplate({
  template,
  inputVariables: ["product"],
});



const promptRes = await prompt.format({ product: "colorful socks" });

console.log(promptRes);

const res = await model.call(promptRes);

console.log(res);
