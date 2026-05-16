# How to Get All 4 Free API Keys

---

## 1. Groq — FREE (fastest, ~1s)
**URL:** https://console.groq.com

1. Go to https://console.groq.com and click **Sign Up** (or log in with Google/GitHub)
2. Once logged in, click **API Keys** in the left sidebar
3. Click **Create API Key**, give it a name (e.g. "mufti-ai")
4. Copy the key and paste it into `.env.local` as `GROQ_API_KEY=`

**Free tier:** 14,400 requests/day on Llama 3.1 8B Instant

---

## 2. Cerebras — FREE (~1s)
**URL:** https://cloud.cerebras.ai

1. Go to https://cloud.cerebras.ai and click **Sign Up**
2. Verify your email and complete sign-up
3. From the dashboard, go to **API Keys** → **Create New Key**
4. Copy the key and paste it into `.env.local` as `CEREBRAS_API_KEY=`

**Free tier:** Generous free requests per day on Llama 3.1 8B

---

## 3. DeepSeek — FREE $5 credit (~3s)
**URL:** https://platform.deepseek.com

1. Go to https://platform.deepseek.com and click **Sign Up**
2. Verify your phone or email
3. Click your profile icon (top right) → **API Keys**
4. Click **Create new API key**, give it a name
5. Copy the key and paste it into `.env.local` as `DEEPSEEK_API_KEY=`

**Free tier:** $5 credit on signup (enough for thousands of chats)

---

## 4. Together AI — FREE $1 credit
**URL:** https://api.together.ai

1. Go to https://api.together.ai and click **Get Started**
2. Sign up with Google or email
3. From the dashboard, go to **Settings** → **API Keys**
4. Click **Create API Key**, give it a name
5. Copy the key and paste it into `.env.local` as `TOGETHER_API_KEY=`

**Free tier:** $1 credit on signup

---

## After adding keys, restart the dev server:

```bash
npm run dev
```

The fallback chain will try providers in order: **Groq → Cerebras → DeepSeek → Together AI**
If any provider is busy (rate limited), it skips to the next one automatically.
