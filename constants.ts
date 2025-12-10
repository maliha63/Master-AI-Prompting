import { PromptCategory, LlmModel } from './types';

export const LLM_MODELS: LlmModel[] = [
  {
    name: 'GPT-5.1',
    company: 'OpenAI',
    features: 'Multimodal, strong reasoning, great for coding and creative writing.',
    link: 'https://chat.openai.com',
    logo: 'https://i.pinimg.com/736x/ad/67/73/ad677323d6e26238249ddda776fe7ae8.jpg'
  },
  {
    name: 'Gemini 3 (Pro & Deep Think)',
    company: 'Google',
    features: 'Strong search integration, good for research, multimodal.',
    link: 'https://gemini.google.com',
    logo: 'https://i.pinimg.com/1200x/1f/9f/a7/1f9fa7ff2e8a8c352533bc4cbc9e651c.jpg'
  },
  {
    name: 'Claude 4.5 Opus', 
    company: 'Anthropic',
    features: 'Safe, long context, strong reasoning.',
    link: 'https://claude.ai',
    logo: 'https://i.pinimg.com/1200x/7b/78/e9/7b78e99546e7ad98a3e20a4d52eeb979.jpg'
  },
  {
    name: 'Grok 4.1',
    company: 'xAI',
    features: 'Real-time information, Direct Access to the Pulse, integrated with X.',
    link: 'https://x.ai',
    logo: 'https://i.pinimg.com/736x/58/91/45/5891451440e4fc9672f936c1762cad4a.jpg'
  },
  {
    name: 'LLaMA-based chat',
    company: 'Meta/OSS',
    features: 'Open-source, customizable, available via third-party interfaces.',
    link: 'https://www.llama.com/',
    logo: 'https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80'
  },
  {
    name: 'DeepSeek-V3.2 Speciale',
    company: 'DeepSeek',
    features: 'Open weights, high performance coding and reasoning, cost-effective.',
    link: 'https://chat.deepseek.com/',
    logo: 'https://i.pinimg.com/736x/05/54/40/055440737406a41acb8265c600084093.jpg'
  }
];

export const PROMPT_CATEGORIES: PromptCategory[] = [
  {
    title: 'Travel Counselling',
    prompts: [
      "Plan a 7-day budget trip to Himachal Pradesh for 3 college friends in winter. Include daily itinerary, accommodation under ₹800/night, local food suggestions, and safety tips for snow.",
      "Act as a local travel guide from Kerala. Recommend 5 hidden gems in Wayanad that tourists usually miss, with the best time to visit and why each place is special.",
      "List 4 money-saving travel hacks for students traveling by train across India during vacation."
    ]
  },
  {
    title: 'Study Related',
    prompts: [
      "Explain the Pomodoro Technique for exam preparation and give a sample daily study plan for someone preparing for JEE while managing school.",
      "You are a top-rank student. Share 5 practical study habits that helped you consistently score above 90%, in a friendly tone.",
      "Summarize the most effective note-taking methods for university lectures in 4 bullet points."
    ]
  },
  {
    title: 'Career Counselling & Motivation',
    prompts: [
      "Write a motivational message for students who did not get placed in the first campus recruitment round, giving them hope and practical steps.",
      "Act as a career counselor. Compare the long-term prospects of working at a big tech company vs a startup for a fresh graduate.",
      "List 3 future-proof career paths for the next 10 years and the skills needed for each."
    ]
  },
  {
    title: 'Food and Diet Planning',
    prompts: [
      "Create a weekly vegetarian meal plan for a busy student, focusing on high-protein Indian dishes that can be prepared quickly.",
      "You are a nutritionist. Suggest a day's diet for someone who wants to lose weight but has only access to a basic hostel mess.",
      "Give 3 healthy, easy-to-cook Indian breakfast ideas, with estimated prep time and calorie range."
    ]
  },
  {
    title: 'Health and Fitness',
    prompts: [
      "Design a 20-minute daily workout routine that can be done in a small room without equipment, suitable for beginners.",
      "List 5 daily habits that help reduce stress for students and briefly explain each.",
      "Explain how sleep affects learning and exam performance, in simple terms."
    ]
  },
  {
    title: 'Travel Planning',
    prompts: [
      "Plan a 3-day weekend getaway from Bengaluru within 200 km, including travel options, costs, and must-see places.",
      "Create a packing checklist for a 10-day backpacking trip across multiple Indian cities in summer.",
      "You are a travel planner. Suggest the best time of year and ideal duration for a first-time trip to Ladakh."
    ]
  },
  {
    title: 'Creative Storytelling',
    prompts: [
      "Write a humorous short story where Bangalore traffic jams become time portals, and a tech employee discovers they can travel to different eras of Indian history.",
      "Channel Ruskin Bond’s writing style to describe a modern college fest in a hill station, capturing both nostalgia and contemporary energy.",
      "Create a 150-word story about an AI assistant that helps a shy student find confidence, with a heartwarming twist about human connection."
    ]
  },
  {
    title: 'Business Ideas',
    prompts: [
      "Generate 6 innovative business ideas for college students that solve real problems on campus and require less than ₹10,000 starting budget.",
      "Act as Ritesh Agarwal (OYO founder). Share the top 3 lessons you learned while building a startup in college and your advice to current student entrepreneurs.",
      "Identify 4 pain points in college hostels and suggest one practical business solution for each that students could implement."
    ]
  },
  {
    title: 'Job Search Related',
    prompts: [
      "Help me craft a compelling ATS-friendly resume summary for a fresher applying to software developer roles at Indian IT companies.",
      "Create a 45-day job search action plan for a final-year student, including networking tasks, application targets, and learning goals.",
      "List 8 emerging job roles in the tech industry for 2025–2026, with one-line descriptions of each and key skills required."
    ]
  },
  {
    title: 'Interview Preparation',
    prompts: [
      "Conduct a mock technical interview for a Java developer role at TCS. Ask 4 progressively harder questions and then suggest strong sample answers.",
      "You are an HR manager at Infosys. Help me prepare excellent answers for ‘Tell me about yourself’, ‘Why should we hire you?’, and ‘Where do you see yourself in 5 years?’ for a fresher.",
      "Create 6 STAR method examples for common behavioral questions in tech interviews, using scenarios from college projects and internships."
    ]
  },
  {
    title: 'Creativity (Image & Video)',
    prompts: [
      "Suggest 5 creative video content ideas for a college YouTube channel that showcases campus life, each with a short shot list and editing tips.",
      "List 4 graphic design project ideas using free tools that a computer science student can include in their portfolio.",
      "Create content ideas for Instagram Reels showing ‘A day in the life of an engineering student’, including caption and audio suggestions."
    ]
  },
  {
    title: 'Creative Writing',
    prompts: [
      "Write an engaging blog post about ‘Surviving Engineering College’ in a humorous, relatable tone that students will want to share.",
      "Compose a modern poem about online classes during COVID-19, capturing both challenges and unexpected positives.",
      "Write a 5-minute comedy sketch script about miscommunication between North and South Indian roommates in a hostel, focusing on cultural misunderstandings and friendship."
    ]
  },
  {
    title: 'Business & Strategy',
    prompts: [
      "Analyze the potential for a student-focused food delivery app in a tier-2 city. Discuss market size, competitors, and go-to-market strategy.",
      "Act as a business consultant. A college canteen is losing money post-pandemic. Suggest 5 innovative strategies to increase profit and student engagement.",
      "Create a simple business plan template for student entrepreneurs, with key sections and guiding questions."
    ]
  },
  {
    title: 'STEM / Tech Learning',
    prompts: [
      "Explain quantum computing to computer science students using analogies from daily life, making it fun and easy to remember.",
      "Suggest 5 final-year project ideas in AI or machine learning that address real-world problems and can be completed with limited resources.",
      "Create a structured study guide for Data Structures and Algorithms focused on placement preparation."
    ]
  },
  {
    title: 'Critical Thinking & Debates',
    prompts: [
      "Debate the statement: ‘AI will replace 50% of IT jobs by 2030.’ Give 3 strong arguments for and 3 against, with brief justification.",
      "Analyze the pros and cons of the National Education Policy (NEP 2020) from the perspective of a computer science student.",
      "Examine the ethical implications of facial recognition in schools and colleges, considering privacy, safety, and cultural issues."
    ]
  },
  {
    title: 'Data Analysis & Interpretation',
    prompts: [
      "Analyze this placement data: CS – 85% placed, avg package ₹6.5L; ECE – 70%, ₹5.8L; Mechanical – 60%, ₹4.2L. Identify trends and suggest ways to improve outcomes for lower-placement branches.",
      "Interpret a survey where 65% of students prefer remote internships. Explain possible reasons and implications for companies.",
      "Create a data storytelling outline about ‘Rise of Ed-Tech during COVID-19’, listing key insights and suggested charts."
    ]
  }
];