import { NextApiRequest, NextApiResponse } from "next"
import { OpenAI } from "openai"

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end()

  const { foods, supplements } = req.body

  const content = `
Calcule os macronutrientes e micronutrientes da seguinte refeição:

${foods.map((f: any) => `- ${f.qty} de ${f.name}`).join("\n")}
${supplements.map((s: any) => `- ${s.qty} de ${s.name} (suplemento)`).join("\n")}

Retorne um JSON com o seguinte formato:
{
  "carbs": number,
  "protein": number,
  "fat": number,
  "fiber": number,
  "calories": number,
  "micronutrients": [
    { "name": string, "amount": number, "unit": string, "cdrPct": number }
  ]
}
  `.trim()

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content }],
      temperature: 0.2
    })

    const text = completion.choices[0].message.content || "{}"
    const parsed = JSON.parse(text)
    res.status(200).json(parsed)
  } catch (err: any) {
    console.error(err)
    res.status(500).json({ error: "Erro ao consultar o GPT" })
  }
}
