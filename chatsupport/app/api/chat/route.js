import {NextResponse} from 'next/server'
import OpenAI from "openai";

// Meg: stopped at 8:21
export async function POST(req){
    const openai = new OpenAI();
    // console.log(req.json())
    const data = await req.json()
    //console.log(data)
    const completion = await openai.chat.completions.create({
        messages: [{"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Who won the world series in 2020?"},
            {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
            {"role": "user", "content": "Where was it played?"}],
        model: "gpt-4o-mini",
      });
    
      console.log(completion.choices[0].message.content);
    return NextResponse.json({message: 'Hello from the server :)'})
}

/* import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}],
    model: "gpt-4o-mini",
  });

  console.log(completion.choices[0]);
}
main();*/