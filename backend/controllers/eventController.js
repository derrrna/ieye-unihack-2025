const OpenAI = require("openai");
const dotenv = require("dotenv");

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

const generateSuggestion = async (req, res) => {
  const category = req.query.category;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [
      {
        role: "system",
        content:
          "You are an idea generator for a group of friends who are not sure what to do when they hangout. Provide 5 unique ideas related to the given category. Each idea should only be one word and each idea should be seperated by a comma. For example if the catagory is sports 'vollyball,badminton,football,tennis,basketball'",
      },
      {
        role: "user",
        content: `Give me 5 ideas related to ${category}`,
      },
    ],
  });
  let result = completion.choices[0].message.content;
  let resultArray = result.split(',').map(item => item.trim());
  res.json(resultArray);
};

module.exports = {
  generateSuggestion,
};
