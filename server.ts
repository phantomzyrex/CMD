import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client safely
let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!geminiClient && process.env.GEMINI_API_KEY) {
    geminiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return geminiClient;
}

// Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", startup: "CMD (Calculate My Dahej) by Bihari Yuva" });
});

// API: AI Sasurji Negotiation Chatbot
app.post("/api/gemini/negotiate", async (req, res) => {
  try {
    const { messages, candidateData, currentOffer } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      // Fallback witty responses if API key is not yet set
      const defaultReplies = [
        "Arey babua, 50 lakh mang rahe ho? Pehle SSC CGL ka Tier-1 to qualify karo dhang se! 10 lakh cash aur ek Splendor Plus denge, lena hai to bolo!",
        "Hamari beti MA pass hai aur tum B.Tech karke 4 saal se Mukherjee Nagar me chai ki tapri pe debate kar rahe ho! VIP suitcase aur 5 tola sona se zyada ek chhavani nahi milegi!",
        "Chacha Vidhayak hain toh kya hua? Sansad thodi hain! Scorpio S11 Classic chahiye toh kam se kam BPSC Rank 50 ke andar lao!",
        "Acha suno, catering me Champaran Mutton aur 4 piece rasgulla per barati pakka karenge, par cash me 25 lakh se ek rupiya upar nahi badhenge!"
      ];
      const randomReply = defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
      return res.json({
        reply: randomReply,
        sentiment: "tough",
        counterOffer: Math.max(500000, Math.round((currentOffer || 3000000) * 0.65)),
      });
    }

    const systemInstruction = `You are "Shri Ramakant Singh", a shrewd, satirical, highly dramatic Indian father-in-law (Sasurji) from Bihar/UP in a comedic sketch by Satish Ray (Bihari Yuva).
You are negotiating dowry (Dahej) demands on "CMD - Calculate My Dahej" platform.
Tone: Hilarious, sarcastic, heavy Bihari Hindi / Hinglish flavor, dramatic expressions ("Arey babua", "Ganga maiya ki kripa", "Hamaar beti", "Aukaat", "Chacha vidhayak", "Rasgulla", "Scorpio").
Candidate Details: ${JSON.stringify(candidateData || {})}
Current Demanded Dahej: ₹${currentOffer || "45,00,000"}

Rules:
1. Roast the candidate's demands sarcastically based on their job, education, hairline, and properties.
2. If candidate is IAS/IPS, act respectful but secretly try to substitute cash with "Khet in Darbhanga" or "Bhoj catering".
3. If candidate is Unemployed / Startup founder / Private IT, aggressively counter-offer with "VIP Attache + 1 Hero Splendor + 10 tola sona maximum".
4. Keep responses between 2-4 sentences, funny, witty, and culturally resonant.
5. Provide a JSON response format with { "reply": "...", "sentiment": "insulted" | "considering" | "pleased" | "stubborn", "counterOffer": number }`;

    const conversationHistory = (messages || []).map((m: any) => `${m.role === 'user' ? 'Groom/Candidate' : 'Sasurji'}: ${m.content}`).join("\n");

    const prompt = `Conversation so far:\n${conversationHistory}\n\nRespond as Sasurji in humorous Hindi/Hinglish JSON format.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
      }
    });

    const parsed = JSON.parse(response.text || "{}");
    res.json({
      reply: parsed.reply || "Arey babu, dahej mangne se pehle apna scorecard dekh lo!",
      sentiment: parsed.sentiment || "stubborn",
      counterOffer: parsed.counterOffer || Math.round((currentOffer || 2500000) * 0.7),
    });
  } catch (error: any) {
    console.error("Negotiation API error:", error);
    res.status(500).json({
      reply: "Sasurji says: 'Network chala gaya, par hamara faisla atal hai — aukaat anusar hi dahej milega!'",
      sentiment: "stubborn",
      counterOffer: 1500000
    });
  }
});

// API: AI Bihari Yuva Roast & Startup Pitch Analysis
app.post("/api/gemini/roast", async (req, res) => {
  try {
    const { candidateData, valuation } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.json({
        roast: `Babu ${candidateData?.name || 'Yuva'}, aapka CMD valuation ₹${(valuation?.total || 3500000).toLocaleString('en-IN')} nikla hai! Job status dekh ke lag raha hai ki Sasurji Scorpio ki jagah second-hand WagonR thama denge!`,
        startupAdvice: "CMD Advice: Pehle SSC Tier-2 clear karo, nahi toh baraat me sirf chivda-dahi milega!",
        tagline: "Bihari Yuva Certified: Rishta Pakka, Kismat Dhakka!"
      });
    }

    const systemInstruction = `You are "Satish Ray" (Bihari Yuva), the satirical startup founder of CMD (Calculate My Dahej).
Tone: Fast-paced, punchy, hyper-comedic Bihari Hindi & English startup jargon ("Market liquidity", "Valuation multiple", "Dosh-adjusted EBITDA", "Scorpio indexing").
Objective: Provide a hilarious 3-part roast & appraisal of the groom's matrimonial score based on candidate inputs.
Candidate Data: ${JSON.stringify(candidateData || {})}
Valuation Total: ₹${valuation?.total || 4500000}

Respond in strict JSON format:
{
  "roast": "Hilarious 3-4 sentence roast in Hindi/Hinglish",
  "startupAdvice": "Funny startup-style recommendation for increasing valuation",
  "tagline": "A punchy satirical certification badge title (max 8 words)"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: "Generate valuation roast and startup verdict",
      config: {
        systemInstruction,
        responseMimeType: "application/json",
      }
    });

    const parsed = JSON.parse(response.text || "{}");
    res.json(parsed);
  } catch (error) {
    console.error("Roast API error:", error);
    res.status(500).json({
      roast: "Valuation algorithm crashed because your demands exceeded Bihar's state GDP!",
      startupAdvice: "Dowry mat lo, swayam kamao!",
      tagline: "CMD Certified Yuva"
    });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 CMD (Calculate My Dahej) Server running on http://localhost:${PORT}`);
  });
}

startServer();
