import "dotenv/config";

const getGenAIAPIResponse = async(message) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.GENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gemini-3.0-flash-mini",
            messages: [{
                role: "user",
                content: message
            }]
        })
    };

    try {
        const response = await fetch("https://api.genai.com/v1/chat/completions", options);
        const data = await response.json();
        return data.choices[0].message.content; //reply
    } catch(err) {
        console.log(err);
    }
}

export default getGenAIAPIResponse;
