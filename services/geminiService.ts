import { GoogleGenAI } from "@google/genai";

// Initialize the client
// API Key is injected via process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCoverImage = async (userPrompt: string): Promise<string> => {
  try {
    // Enhance the prompt to ensure aesthetic, FPV-style results
    // Even if user input is Chinese, these English style keywords help guide the model better for the specific art style
    const enhancedPrompt = `
      Create a high-quality, cinematic, vibrant digital art cover image for an FPV drone video based on this description: "${userPrompt}".
      
      Visual Style Requirements:
      - Style: Cyberpunk, energetic, dynamic motion blur, wide angle lens effect.
      - Lighting: Glowing neon accents, dramatic lighting.
      - Quality: 4k resolution, hyper-detailed, photorealistic or high-end digital art.
      - Perspective: First-person view (FPV) or dynamic action camera angle.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: enhancedPrompt,
          },
        ],
      },
    });

    // Extract image from response
    // The model returns the image as base64 in inlineData
    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
           return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    
    throw new Error("生成图片失败，未返回数据");

  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};