
// 页面刷新函数
function refreshPage() {
    location.reload();
}

// 汉堡菜单切换功能
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    if (!hamburger) return;
    hamburger.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) navLinks.classList.toggle('active');
    });
}

// HTML 转义函数
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// 构造器函数
function createApp({ name, description, link, icon }) {
    const app = {
        name: name || 'Unnamed App',
        description: description || 'No description available',
        link: link || '#',
        icon: icon || 'https://via.placeholder.com/60?text=No+Image'
    };
    return app;
}

// 显示错误
function displayError(message) {
    let container = document.getElementById('error-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'error-container';
        Object.assign(container.style, {
            position: 'fixed', top: '10px', left: '50%', transform: 'translateX(-50%)',
            background: '#ffebee', color: '#c62828', padding: '10px 20px', borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)', zIndex: '1000', maxWidth: '80%'
        });
        document.body.appendChild(container);
    }
    const p = document.createElement('p');
    p.textContent = message;
    p.style.margin = '5px 0';
    container.appendChild(p);
    setTimeout(() => { p.remove(); if (!container.hasChildNodes()) container.remove(); }, 10000);
}

const appData = [
    {
        "title": "Web",
        "apps": [
            {
                "name": "TopHub",
                "description": "Daily trending news and rankings",
                "link": "https://tophub.today/",
                "icon": "./images/tophub.png"
            },
            {
                "name": "IT之家",
                "description": "Leading technology news and reviews",
                "link": "https://www.ithome.com/",
                "icon": "./images/ithome.png"
            },
            {
                "name": "Outlook",
                "description": "Platform developed by Microsoft",
                "link": "https://outlook.live.com/",
                "icon": "./images/Microsoft_Outlook.png"
            },
            {
                "name": "Zoho Mail",
                "description": "Host your business email on a secure",
                "link": "https://mail.zoho.eu/",
                "icon": "./images/Zoho-Mail.png"
            },
            {
                "name": "新片场",
                "description": "Discover global creative talent hub",
                "link": "https://www.xinpianchang.com/",
                "icon": "./images/xinpianchang.jpg"
            },
            {
                "name": "ZCool",
                "description": "Inspiring design discovery platform",
                "link": "https://www.zcool.com.cn/",
                "icon": "./images/Zcool.png"
            },
            {
                "name": "GitHub",
                "description": "Collaborative code hosting platform",
                "link": "https://github.com/",
                "icon": "./images/github.png"
            },
            {
                "name": "Vercel",
                "description": "Simplified frontend deployment cloud",
                "link": "https://vercel.com/",
                "icon": "./images/vercel.png"
            },
            {
                "name": "Cloudflare",
                "description": "Web acceleration and security service",
                "link": "https://dash.cloudflare.com/",
                "icon": "./images/cloudflare.svg"
            },
            {
                "name": "Ping",
                "description": "Website performance testing tool",
                "link": "https://ping.chinaz.com/",
                "icon": "./images/ChinaZ.png"
            },
            {
                "name": "Teambition",
                "description": "Enterprise-grade team collaboration tool",
                "link": "https://www.teambition.com/organization/61ade96d461f91c76e3bfc06/task/shortcut/66d920b8e2a3f00f0ddca2e3/",
                "icon": "./images/Teambition.jpg"
            },
            {
                "name": "Google Keep",
                "description": "Lightweight note-taking and to-do application",
                "link": "https://keep.google.com/",
                "icon": "./images/Google_Keep.png"
            },
            {
                "name": "Whimsical",
                "description": "Unified workspace for teams",
                "link": "https://whimsical.com/",
                "icon": "./images/whimsical.jfif"
            },
            {
                "name": "闪电分镜",
                "description": "Efficient pre-production planning tool",
                "link": "https://web.mediastory.cc/",
                "icon": "./images/SDFJ.webp"
            },
            {
                "name": "Nodeseek",
                "description": "Vibrant web developer community",
                "link": "https://www.nodeseek.com/",
                "icon": "./images/NodeSeek.png"
            },
            {
                "name": "V2EX",
                "description": "Creative professionals' discussion forum",
                "link": "https://www.v2ex.com/",
                "icon": "./images/v2ex.jpeg"
            },
            {
                "name": "Google Voice",
                "description": "Business Phone Number & Systems",
                "link": "https://voice.google.com/",
                "icon": "./images/google-voice.png"
            },
            {
                "name": "Notion",
                "description": "Versatile all-in-one productivity app",
                "link": "https://www.notion.so/",
                "icon": "./images/notion.webp"
            }
        ],
        "domId": "cat-0"
    },
    {
        "title": "AI",
        "apps": [
            {
                "name": "ChatGPT",
                "description": "OpenAI's official conversational AI",
                "link": "https://chatgpt.com/",
                "icon": "./images/openai.png"
            },
            {
                "name": "Gemini",
                "description": "Google AI planning and assistance",
                "link": "https://gemini.google.com/",
                "icon": "./images/Gemini.png"
            },
            {
                "name": "Flow",
                "description": "Google 高级视频AI 模型 Veo",
                "link": "https://labs.google/fx/tools/flow",
                "icon": "./images/Flow.jpg"
            },
            {
                "name": "Sora",
                "description": "旗舰级视频音频生成模型 Sora 2",
                "link": "https://sora.chatgpt.com/profile",
                "icon": "./images/Sora.webp"
            },
            {
                "name": "Grok",
                "description": "xAI's generative AI chatbot",
                "link": "https://grok.com/",
                "icon": "./images/Grok.jpg"
            },
            {
                "name": "GoogleLabs",
                "description": "AI-powered video storytelling platform",
                "link": "https://labs.google/fx",
                "icon": "./images/Google+Labs+Logo.jpg"
            },
            {
                "name": "GoogleAiStudio",
                "description": "Google DeepMind's latest AI tools",
                "link": "https://aistudio.google.com/",
                "icon": "./images/GoogleAiStudio.png"
            },
            {
                "name": "豆包",
                "description": "字节跳动旗下AI 智能助手",
                "link": "https://www.doubao.com/",
                "icon": "./images/doubao.png"
            },
            {
                "name": "Ai.WWZ.iM",
                "description": "Cutting-edge AI conversation system",
                "link": "https://ai.wwz.im/",
                "icon": "./images/ai.png"
            },
            {
                "name": "GitHub Copilot",
                "description": "AI-powered coding assistant",
                "link": "https://github.com/copilot/",
                "icon": "./images/GitHub Copilot.png"
            },
            {
                "name": "Xiaomi MiMo",
                "description": "Unlocking the Reasoning Potential of Language Model",
                "link": "https://aistudio.xiaomimimo.com/",
                "icon": "./images/Xiaomi.png"
            },
            {
                "name": "Qwen",
                "description": "阿里巴巴云开发的智能助手",
                "link": "https://www.tongyi.com/",
                "icon": "./images/QWEN.png"
            },
            {
                "name": "DeepSeek",
                "description": "Advanced AI research platform",
                "link": "https://chat.deepseek.com/",
                "icon": "./images/DeepSeek.jpg"
            },
            {
                "name": "Microsoft Copilot",
                "description": "AI companion for productivity",
                "link": "https://copilot.microsoft.com/",
                "icon": "./images/Copilot.png"
            },
            {
                "name": "Suno",
                "description": "Generate complete songs with lyrics",
                "link": "https://suno.com/",
                "icon": "./images/suno.jpg"
            },
            {
                "name": "Viggle",
                "description": "Animate photos with dynamic motions",
                "link": "https://viggle.ai/",
                "icon": "./images/viggle.webp"
            },
            {
                "name": "ElevenLabs",
                "description": "Realistic AI-generated synthetic voice",
                "link": "https://elevenlabs.io/",
                "icon": "./images/elevenlabs.png"
            },
            {
                "name": "Perplexity",
                "description": "AI-driven search and Q&A",
                "link": "https://www.perplexity.ai/",
                "icon": "./images/perplexity.png"
            },
            {
                "name": "WebSim",
                "description": "Instant AI-powered code generation",
                "link": "https://websim.ai/",
                "icon": "./images/WebSim.png"
            },
            {
                "name": "Bolt.new",
                "description": "AI-driven web development tool",
                "link": "https://bolt.new/",
                "icon": "./images/Bolt.jpg"
            },
            {
                "name": "DeepAI",
                "description": "AI for images, videos, text",
                "link": "https://deepai.org/",
                "icon": "./images/DeepAI.png"
            },
            {
                "name": "Ollama",
                "description": "Run large language models locally",
                "link": "https://ollama.com/",
                "icon": "./images/ollama.png"
            },
            {
                "name": "LM Studio",
                "description": "Manage local language models",
                "link": "https://lmstudio.ai/",
                "icon": "./images/lmstudio_ai_logo.jpeg"
            },
            {
                "name": "Cherry Studio",
                "description": "多模型AI助手平台",
                "link": "https://www.cherry-ai.com/",
                "icon": "./images/CherryStudio.png"
            },
            {
                "name": "AnythingLLM",
                "description": "Comprehensive AI application suite",
                "link": "https://anythingllm.com/",
                "icon": "./images/anythingllm.png"
            },
            {
                "name": "Bigjpg",
                "description": "AI-powered lossless image upscaling",
                "link": "https://bigjpg.com/",
                "icon": "./images/bigjpg.png"
            },
            {
                "name": "ComfyUI",
                "description": "Intuitive AI image generation",
                "link": "https://www.comfy.org/",
                "icon": "./images/ComfyUI.jpg"
            },
            {
                "name": "Hugging Face",
                "description": "Open-source AI development hub",
                "link": "https://huggingface.co/",
                "icon": "./images/huggingface.png"
            },
            {
                "name": "AI Short",
                "description": "Simplified AI command interface",
                "link": "https://www.aishort.top/",
                "icon": "./images/aishort.png"
            },
            {
                "name": "Hyper3D",
                "description": "AI-powered 3D model generator",
                "link": "https://hyper3d.ai/",
                "icon": "./images/hyper3d.png"
            },
            {
                "name": "LiblibAI",
                "description": "China's leading AI creation platform",
                "link": "https://www.liblib.art/",
                "icon": "./images/liblib.jpg"
            },
            {
                "name": "Civitai",
                "description": "Open-source generative AI community",
                "link": "https://civitai.com/",
                "icon": "./images/civitai.jpg"
            },
            {
                "name": "Playground",
                "description": "Free AI Design Tool",
                "link": "https://playground.com/",
                "icon": "./images/playground.jpeg"
            }
        ],
        "domId": "cat-1"
    },
    {
        "title": "iOS",
        "apps": [
            {
                "name": "Hiddify",
                "description": "Multi-protocol VPN and proxy",
                "link": "https://apps.apple.com/us/app/hiddify-proxy-vpn/id6596777532?platform=iphone",
                "icon": "./images/hiddify.png"
            },
            {
                "name": "Shadowrocket",
                "description": "Rule-based proxy management utility",
                "link": "https://apps.apple.com/us/app/shadowrocket/id932747118",
                "icon": "./images/shadorocket.webp"
            },
            {
                "name": "Notion",
                "description": "Plan, organize, and track projects",
                "link": "https://apps.apple.com/us/app/notion-notes-tasks-ai/id1232780281",
                "icon": "./images/notion.webp"
            },
            {
                "name": "ChatGPT",
                "description": "OpenAI's official AI chatbot",
                "link": "https://apps.apple.com/us/app/chatgpt/id6448311069",
                "icon": "./images/openai.png"
            },
            {
                "name": "Duolingo",
                "description": "Learn over 40 languages playfully",
                "link": "https://apps.apple.com/us/app/duolingo-language-lessons/id570060128",
                "icon": "./images/Duolingo.webp"
            },
            {
                "name": "ProMovie Recorder",
                "description": "Advanced mobile camera features",
                "link": "https://apps.apple.com/us/app/promovie-recorder/id1076481548",
                "icon": "./images/ProMovie.webp"
            },
            {
                "name": "Blackmagic Camera",
                "description": "Professional digital film for iPhone",
                "link": "https://www.blackmagicdesign.com/products/blackmagiccamera",
                "icon": "./images/BlackMagicCamera.webp"
            },
            {
                "name": "极影相机",
                "description": "Professional camera in your pocket",
                "link": "https://apps.apple.com/cn/app/%E6%9E%81%E5%BD%B1%E7%9B%B8%E6%9C%BA/id1459953293",
                "icon": "./images/jiying.webp"
            },
            {
                "name": "Monitor+",
                "description": "Remote control for Sony cameras",
                "link": "https://apps.apple.com/al/app/monitor/id1554619768",
                "icon": "./images/Monitor+.webp"
            },
            {
                "name": "Sony|Monitor&Control",
                "description": "Supported cameras (as of April 2025)",
                "link": "https://apps.apple.com/us/app/sony-monitor-control/id1643900558",
                "icon": "./images/SonyMonitor.webp"
            },
            {
                "name": "Cadrage+",
                "description": "Pro filmmaking and photography tool",
                "link": "https://apps.apple.com/us/app/cadrage-directors-viewfinder/id793232740",
                "icon": "./images/Cadrage.webp"
            },
            {
                "name": "LocalSend",
                "description": "Secure local file sharing",
                "link": "https://apps.apple.com/us/app/localsend/id1661733229",
                "icon": "./images/localsend.png"
            },
            {
                "name": "Hypic",
                "description": "Photo Editor & AI Art",
                "link": "https://apps.apple.com/de/app/hypic-photo-editor-ai-art/id1644042837",
                "icon": "./images/hypic.webp"
            },
            {
                "name": "截图带壳",
                "description": "截图/视频带壳支持手机/手表全系列机型",
                "link": "https://apps.apple.com/cn/app/%E6%88%AA%E5%9B%BE%E5%B8%A6%E5%A3%B3-%E5%B8%A6%E5%A3%B3%E6%88%AA%E5%9B%BE-%E8%A7%86%E9%A2%91%E9%AB%98%E6%B8%85%E5%AF%BC%E5%87%BA/id6544797343",
                "icon": "./images/Snapmod.webp"
            },
            {
                "name": "QWeather",
                "description": "Accurate global weather forecasts",
                "link": "https://www.qweather.com/en/app",
                "icon": "./images/QWeather.webp"
            },
            {
                "name": "默沙东诊疗手册",
                "description": "健康信息是人人都应享受的权利",
                "link": "https://apps.apple.com/mx/app/%E9%BB%98%E6%B2%99%E4%B8%9C%E8%AF%8A%E7%96%97%E6%89%8B%E5%86%8C-%E5%A4%A7%E4%BC%97%E7%89%88/id1188334624",
                "icon": "./images/msdmanuals.webp"
            },
            {
                "name": "太阳测量师",
                "description": "Plan sunrise and sunset moments",
                "link": "https://apps.apple.com/cn/app/%E5%A4%AA%E9%98%B3%E6%B5%8B%E9%87%8F%E5%B8%88-sun-surveyor/id525176875",
                "icon": "./images/sun.webp"
            },
            {
                "name": "Project Indigo",
                "description": "A new camera from Adobe Labs",
                "link": "https://apps.apple.com/us/app/project-indigo/id6742591546",
                "icon": "./images/ProjectIndigo.webp"
            },
            {
                "name": "航旅纵横",
                "description": "民航官方直销平台值机火车票接送机免税酒店",
                "link": "https://apps.apple.com/cn/app/%E8%88%AA%E6%97%85%E7%BA%B5%E6%A8%AA-%E6%B0%91%E8%88%AA%E5%AE%98%E6%96%B9%E7%9B%B4%E9%94%80%E5%B9%B3%E5%8F%B0%E5%80%BC%E6%9C%BA%E7%81%AB%E8%BD%A6%E7%A5%A8%E6%8E%A5%E9%80%81%E6%9C%BA%E5%85%8D%E7%A8%8E%E9%85%92%E5%BA%97/id480161784",
                "icon": "./images/Travelsky.webp"
            },
            {
                "name": "铁路12306",
                "description": "中国铁道科学研究院集团有限公司",
                "link": "https://apps.apple.com/us/app/%E9%93%81%E8%B7%AF12306/id564818797",
                "icon": "./images/12306.webp"
            },
            {
                "name": "Google Authenticator",
                "description": "Google Authenticator adds an extra layer",
                "link": "https://apps.apple.com/us/app/google-authenticator/id388497605",
                "icon": "./images/Google-Authenticator.webp"
            },
            {
                "name": "Microsoft Authenticator",
                "description": "Protects your online identity",
                "link": "https://apps.apple.com/us/app/microsoft-authenticator/id983156458",
                "icon": "./images/Microsoft-Authenticator.webp"
            },
            {
                "name": "旅客八达通",
                "description": "随时随地为iPhone 或 Apple Watch内的八达通充值。",
                "link": "https://apps.apple.com/cn/app/%E6%97%85%E5%AE%A2%E5%85%AB%E8%BE%BE%E9%80%9A/id1505492952",
                "icon": "./images/Tourists.webp"
            },
            {
                "name": "小红书千帆",
                "description": "小红书千帆商家移动工作台",
                "link": "https://apps.apple.com/cn/app/%E5%B0%8F%E7%BA%A2%E4%B9%A6%E5%8D%83%E5%B8%86/id1508097648",
                "icon": "./images/Xingin.webp"
            },
            {
                "name": "Google Voice",
                "description": "Smarter voice calling",
                "link": "https://apps.apple.com/us/app/google-voice/id318698524",
                "icon": "./images/Google-Voice.webp"
            },
            {
                "name": "Telegram",
                "description": "Fast. Secure. Powerful.",
                "link": "https://apps.apple.com/us/app/telegram-messenger/id686449807",
                "icon": "./images/Telegram.webp"
            },
            {
                "name": "Threads",
                "description": "Connect and share ideas",
                "link": "https://apps.apple.com/us/app/threads/id6446901002",
                "icon": "./images/Threads .webp"
            },
            {
                "name": "Instagram",
                "description": "Videos, creators & friends",
                "link": "https://apps.apple.com/us/app/instagram/id389801252",
                "icon": "./images/Instagram.webp"
            },
            {
                "name": "米家",
                "description": "简单愉悦的智能生活体验",
                "link": "https://apps.apple.com/cn/app/%E7%B1%B3%E5%AE%B6/id957323480",
                "icon": "./images/MiHome.webp"
            },
            {
                "name": "涂鸦",
                "description": "涂鸦智能App 智生活 能享受",
                "link": "https://apps.apple.com/cn/app/%E6%B6%82%E9%B8%A6/id1586116399",
                "icon": "./images/Tuya.webp"
            },
            {
                "name": "云鲸",
                "description": "立足家用智能清洁电器",
                "link": "https://apps.apple.com/cn/app/%E4%BA%91%E9%B2%B8%E6%99%BA%E8%83%BD/id1462004352",
                "icon": "./images/narwal.webp"
            },
            {
                "name": "飓风相机",
                "description": "电影创作者打造的相机应用",
                "link": "https://apps.apple.com/us/app/%E9%A3%93%E9%A3%8E%E7%9B%B8%E6%9C%BA/id6749835845",
                "icon": "./images/Ostar.webp"
            },
            {
                "name": "野草助手",
                "description": "智能电视 adb 应用分享工具",
                "link": "https://apps.apple.com/ar/app/%E9%87%8E%E8%8D%89%E5%8A%A9%E6%89%8B/id6479590367",
                "icon": "./images/yecao.webp"
            }
        ],
        "domId": "cat-2"
    },
    {
        "title": "Android",
        "apps": [
            {
                "name": "V2rayNG",
                "description": "Cross-platform VPN client solution",
                "link": "https://v2rayng.2dust.link/",
                "icon": "./images/v2ray.png"
            },
            {
                "name": "LocalSend",
                "description": "Secure local file sharing",
                "link": "https://localsend.org/#/download",
                "icon": "./images/localsend.png"
            },
            {
                "name": "Blip",
                "description": "You've never sent files this fast",
                "link": "https://blip.net/download",
                "icon": "./images/blip.png"
            },
            {
                "name": "AuroraOSS",
                "description": "Collection of open-source apps",
                "link": "https://auroraoss.com/",
                "icon": "./images/auroralogo.png"
            },
            {
                "name": "APkPure",
                "description": "Fast Android APK downloader",
                "link": "https://blog.wwz.im/article/APKPure",
                "icon": "./images/apkpure.png"
            },
            {
                "name": "酷安",
                "description": "Engaging tech community platform",
                "link": "https://www.coolapk.com/",
                "icon": "./images/CoolAPK.png"
            },
            {
                "name": "uSmart",
                "description": "Intelligent camera control app",
                "link": "https://store.ulefone.com/pages/usmart-e02-spec?srsltid=AfmBOoqAycnJXCjQBEDzKCgebRBO2_SQXoJtjZDYA4JRoi2X2L4poXxI",
                "icon": "./images/uSmart.png"
            },
            {
                "name": "Monitor+",
                "description": "Professional mobile monitoring tool",
                "link": "https://monitorplus.cc/",
                "icon": "./images/monitor+.jpg"
            },
            {
                "name": "MXPlayer",
                "description": "Powerful video playback app",
                "link": "https://blog.wwz.im/article/MX_Player_Pro",
                "icon": "./images/MxPlayer.png"
            },
            {
                "name": "Time 计时",
                "description": "Clock and countdown display",
                "link": "https://github.com/wangwenzhiwwz/Time/releases/tag/Time",
                "icon": "./images/wow.png"
            },
            {
                "name": "DU RECORDER",
                "description": "Easy screen recording and streaming",
                "link": "https://www.du-recorder.com/",
                "icon": "./images/du-recorder.png"
            },
            {
                "name": "Battery显示",
                "description": "Monitor remaining battery life",
                "link": "https://github.com/wangwenzhiwwz/File/releases/tag/APK",
                "icon": "./images/Battery.png"
            },
            {
                "name": "时间悬浮",
                "description": "Display precise current time",
                "link": "https://github.com/wangwenzhiwwz/File/releases/tag/APK",
                "icon": "./images/clock.png"
            },
            {
                "name": "CPDT Benchmark",
                "description": "Test storage and memory speed",
                "link": "https://play.google.com/store/apps/details?id=com.Saplin.CPDT",
                "icon": "./images/CPDT.webp"
            },
            {
                "name": "Androbench",
                "description": "Benchmark tool for Android",
                "link": "https://apkpure.net/androbench-storage-benchmark/com.andromeda.androbench2/download",
                "icon": "./images/Androbench.webp"
            },
            {
                "name": "Chromascreen",
                "description": "Green screen video editing",
                "link": "https://chromascreen.en.softonic.com/android?_gl=1*h21rbq*_gcl_au*OTQwNjczMjcwLjE3NjE4OTU4MDE.",
                "icon": "./images/Chromascreen.webp"
            },
            {
                "name": "Focus Chart",
                "description": "Display professional focus chart",
                "link": "https://apkpure.com/focus-chart/com.distantblue.focuschart",
                "icon": "./images/Focus Chart.webp"
            },
            {
                "name": "Brevent",
                "description": "App standby without root",
                "link": "https://play.google.com/store/apps/details?id=me.piebridge.brevent&hl=en",
                "icon": "./images/Brevent.webp"
            },
            {
                "name": "Scene",
                "description": "Powerful system management tool",
                "link": "https://apkpure.net/scene/com.omarea.vtools/download",
                "icon": "./images/Scene.webp"
            },
            {
                "name": "Shizuku",
                "description": "Let your app use system APIs directly",
                "link": "https://github.com/RikkaApps/Shizuku/releases",
                "icon": "./images/Shizuku.webp"
            },
            {
                "name": "Nrfr",
                "description": "免 Root 的 SIM 卡国家码修改工具",
                "link": "https://github.com/Ackites/Nrfr/releases",
                "icon": "./images/Nrfr.png"
            },
            {
                "name": "晨钟网络科技",
                "description": "免ROOT的通用ADB玩机工具《搞机工具箱》",
                "link": "https://jamcz.com/",
                "icon": "./images/CZ.png"
            },
            {
                "name": "贝利自动点击器",
                "description": "Automated screen tapping utility",
                "link": "https://blog.wwz.im/article/Bailey_Auto_Clicker",
                "icon": "./images/贝利.png"
            },
            {
                "name": "Estk APP",
                "description": "Removable eUICC management solution",
                "link": "https://github.com/wangwenzhiwwz/File/releases/tag/esim",
                "icon": "./images/Estk.png"
            }
        ],
        "domId": "cat-3"
    },
    {
        "title": "Windows",
        "apps": [
            {
                "name": "PowerToys",
                "description": "用于自定义 Windows 的实用工具",
                "link": "https://learn.microsoft.com/zh-cn/windows/powertoys/",
                "icon": "./images/PowerToys.png"
            },
            {
                "name": "BalenaEtcher",
                "description": "Flash OS images to USB",
                "link": "https://etcher.balena.io/#download-etcher",
                "icon": "./images/balena etcher.png"
            },
            {
                "name": "Parsec",
                "description": "Remote access for work, gaming",
                "link": "https://parsec.app/",
                "icon": "./images/parsec.png"
            },
            {
                "name": "Tabby SSH",
                "description": "Cross-platform SSH management tool",
                "link": "https://tabby.sh/",
                "icon": "./images/tabby-logo.png"
            },
            {
                "name": "V2rayN",
                "description": "Windows GUI VPN client",
                "link": "https://blog.wwz.im/article/VPN",
                "icon": "./images/v2rayn.jpg"
            },
            {
                "name": "VPN Gate",
                "description": "Free Access to World Knowledge Beyond Government's Firewall.",
                "link": "https://www.vpngate.net/en/",
                "icon": "./images/VPN Gate.jpg"
            },
            {
                "name": "Moo0",
                "description": "Video and image compression",
                "link": "https://blog.wwz.im/article/Moo0",
                "icon": "./images/Moo0.png"
            },
            {
                "name": "Windows设置",
                "description": "Practical Windows 11 settings tool",
                "link": "https://github.com/wangwenzhiwwz/File/releases/tag/Windows",
                "icon": "./images/windows.jpg"
            },
            {
                "name": "数码荔枝",
                "description": "Share premium software resources",
                "link": "https://lizhi.shop/",
                "icon": "./images/smlz.jpg"
            },
            {
                "name": "RuTracker.org",
                "description": "Largest Russian torrent tracker",
                "link": "https://rutracker.org/",
                "icon": "./images/rutracker.jpg"
            },
            {
                "name": "Lrepacks",
                "description": "Russian software repack solutions",
                "link": "https://lrepacks.net/",
                "icon": "./images/lrepacks.png"
            },
            {
                "name": "CyberMania",
                "description": "Adobe software cracking tools",
                "link": "https://www.cybermania.ws/?s=adobe",
                "icon": "./images/CyberMania.png"
            },
            {
                "name": "4K Downloader",
                "description": "Download 4K YouTube videos",
                "link": "https://lrepacks.net/repaki-programm-dlya-interneta/801-4k-downloader-repack-amp-portable.html",
                "icon": "./images/4KDownloader.png"
            },
            {
                "name": "BalenaEtcher",
                "description": "Graphical OS image flashing",
                "link": "https://etcher.balena.io/",
                "icon": "./images/balena.png"
            },
            {
                "name": "Hbuilder X",
                "description": "Lightweight yet powerful IDE",
                "link": "https://www.dcloud.io/hbuilderx.html",
                "icon": "./images/hbuilderx.png"
            },
            {
                "name": "Billfish素材管家",
                "description": "Essential creative asset manager",
                "link": "https://www.billfish.cn/",
                "icon": "./images/billfish.png"
            },
            {
                "name": "PureRef",
                "description": "Floating image inspiration organizer",
                "link": "https://www.pureref.com/",
                "icon": "./images/PureRef.png"
            },
            {
                "name": "MPC-BE",
                "description": "Free open-source video player",
                "link": "https://github.com/wangwenzhiwwz/File/blob/master/software/MPC-BE.1.8.2.x64.exe",
                "icon": "./images/MPC.jpg"
            },
            {
                "name": "IrfanView",
                "description": "Fast image viewer and converter",
                "link": "https://www.irfanview.com/",
                "icon": "./images/irfanview.jpg"
            },
            {
                "name": "Adobe GenP",
                "description": "Universal Adobe product patcher",
                "link": "https://www.cybermania.ws/apps/adobe-genp/",
                "icon": "./images/adobe genp.png"
            },
            {
                "name": "Cursor",
                "description": "AI-enhanced coding environment",
                "link": "https://www.cursor.com/",
                "icon": "./images/cursor.jpg"
            },
            {
                "name": "影刀 RPA",
                "description": "Robotic process automation tool",
                "link": "https://www.yingdao.com/",
                "icon": "./images/yingdao.webp"
            },
            {
                "name": "Uninstall Tool",
                "description": "安全、快速、强大的软件卸载删除工具",
                "link": "https://www.ghxi.com/uninstalltool.html",
                "icon": "./images/UninstallTool.png"
            },
            {
                "name": "Advanced-IP-Scanner",
                "description": "数秒内完成网络扫描",
                "link": "https://www.advanced-ip-scanner.com/cn/",
                "icon": "./images/Advanced-IP-Scanner.webp"
            },
            {
                "name": "AdGuard",
                "description": "AdGuard for Windows is more than an ad blocker",
                "link": "https://adguard.com/en/welcome.html",
                "icon": "./images/AdGuard.png"
            },
            {
                "name": "Visual Studio Code",
                "description": "Code Editing. Redefined",
                "link": "https://code.visualstudio.com/",
                "icon": "./images/VScode.jpg"
            },
            {
                "name": "Batch Render Creator",
                "description": "Local Render Queue for Blender",
                "link": "https://github.com/wangwenzhiwwz/File/releases/tag/blander",
                "icon": "./images/batch_render_creator.png"
            },
            {
                "name": "PSD Codec",
                "description": "无需启动 Photoshop 进行快速预览",
                "link": "https://github.com/wangwenzhiwwz/File/releases/tag/video",
                "icon": "./images/PSDCodec.png"
            },
            {
                "name": "Moi 3D",
                "description": "STP格式转换到OBJ Moi 3D",
                "link": "https://github.com/wangwenzhiwwz/File/releases/tag/3D",
                "icon": "./images/Moi-3D.png"
            },
            {
                "name": "CATIA_2018",
                "description": "法国达索系统开发的高端三维设计与工程软件",
                "link": "https://github.com/wangwenzhiwwz/File/releases/tag/3D",
                "icon": "./images/DS-catia.jpg"
            },
            {
                "name": "超链PRO",
                "description": "开箱即用的网盘下载/解析解决方案",
                "link": "https://clianpro.cn/",
                "icon": "./images/clianpro.svg"
            },
            {
                "name": "Affinity",
                "description": "Professional Creative Software, Free for Everyone",
                "link": "https://www.affinity.studio/",
                "icon": "./images/affinity.png"
            }
        ],
        "domId": "cat-4"
    },
    {
        "title": "Mac",
        "apps": [
            {
                "name": "奇迹秀",
                "description": "Boost productivity with plugins",
                "link": "https://www.qijishow.com/",
                "icon": "./images/qijishow.svg"
            },
            {
                "name": "Apple",
                "description": "Official Apple website and resources",
                "link": "https://www.apple.com/",
                "icon": "./images/Apple.png"
            },
            {
                "name": "MOC",
                "description": "Smooth mouse scrolling for macOS",
                "link": "https://mos.caldis.me/",
                "icon": "./images/moc.png"
            },
            {
                "name": "IINA",
                "description": "Modern media player for macOS",
                "link": "https://iina.io/",
                "icon": "./images/iina.jpg"
            },
            {
                "name": "CapTure One",
                "description": "Professional photo editing software",
                "link": "https://jpsmile.com/phase-one-capture-one-23-pro/",
                "icon": "./images/captureone.png"
            },
            {
                "name": "Gyroflow",
                "description": "Advanced video stabilization tool",
                "link": "https://gyroflow.xyz/",
                "icon": "./images/gyroflow.png"
            },
            {
                "name": "捡屁笑",
                "description": "Simple content sharing platform",
                "link": "https://jpsmile.com/",
                "icon": "./images/jpsmile.png"
            },
            {
                "name": "Davinci Resolve",
                "description": "Pro editing, color, and audio",
                "link": "https://www.blackmagicdesign.com/products/davinciresolve/studio",
                "icon": "./images/Davinci-Resolve.png"
            },
            {
                "name": "Adobe",
                "description": "Adobe 2024 universal Mac patch",
                "link": "https://blog.wwz.im/article/Adobe/",
                "icon": "./images/Adobe.svg"
            },
            {
                "name": "VS Code",
                "description": "Microsoft's cross-platform code editor",
                "link": "https://code.visualstudio.com/",
                "icon": "./images/vscode.jpg"
            },
            {
                "name": "HandBrake",
                "description": "Open-source video transcoding tool",
                "link": "https://handbrake.fr/",
                "icon": "./images/HandBrake.png"
            },
            {
                "name": "WPS",
                "description": "AI-powered office productivity suite",
                "link": "https://www.wps.com/",
                "icon": "./images/wps.png"
            },
            {
                "name": "Surge",
                "description": "Advanced network toolbox for Mac",
                "link": "https://nssurge.com/",
                "icon": "./images/surge.png"
            },
            {
                "name": "Appstorrent",
                "description": "Hundreds of macOS apps, games",
                "link": "https://appstorrent.ru/",
                "icon": "./images/appstorrent.jpg"
            },
            {
                "name": "Milanote",
                "description": "Visual project management platform",
                "link": "https://app.milanote.com/",
                "icon": "./images/milanote.jpg"
            }
        ],
        "domId": "cat-5"
    },
    {
        "title": "VPS",
        "apps": [
            {
                "name": "Nginx Proxy Manager",
                "description": "Get Connected · Proxy Hosts",
                "link": "https://npm.wwz.im/",
                "icon": "./images/Nginx Proxy Manager.png"
            },
            {
                "name": "VPS.WWZ.iM",
                "description": "Server monitoring and operation tool",
                "link": "https://vps.wwz.im/",
                "icon": "./images/Nezha Monitoring.png"
            },
            {
                "name": "Oracle",
                "description": "Free high-performance cloud servers",
                "link": "https://cloud.oracle.com",
                "icon": "./images/Oracle.png"
            },
            {
                "name": "BandwagonHost",
                "description": "Enterprise-grade VPS hosting plans",
                "link": "https://bwh88.net/services",
                "icon": "./images/bwh.png"
            },
            {
                "name": "EUserv",
                "description": "Dedicated servers and cloud hosting",
                "link": "https://support.euserv.com/",
                "icon": "./images/EUserv.jpg"
            },
            {
                "name": "ColoCrossing",
                "description": "Colocation & Dedicated Server Hosting",
                "link": "https://cloud.colocrossing.com/clientarea.php?action=services",
                "icon": "./images/colocrossing.png"
            },
            {
                "name": "CloudCone",
                "description": "KVM-based VPS and dedicated servers",
                "link": "https://app.cloudcone.com/",
                "icon": "./images/CloudCone.jpg"
            },
            {
                "name": "Hostinger",
                "description": "Bring Your Idea Online With a Website",
                "link": "https://hpanel.hostinger.com/vps",
                "icon": "./images/hostinger.png"
            },
            {
                "name": "RackNerd",
                "description": "Global infrastructure as a service",
                "link": "https://my.racknerd.com/clientarea.php",
                "icon": "./images/RackNerd.jpg"
            },
            {
                "name": "DogYun",
                "description": "Affordable and flexible cloud servers",
                "link": "https://vm.dogyun.com/server/list",
                "icon": "./images/dogyun.png"
            },
            {
                "name": "VPS推荐",
                "description": "Curated cost-effective VPS deals",
                "link": "https://kejilion.pro/topvps/",
                "icon": "./images/Cloud-icon.png"
            },
            {
                "name": "Serv00",
                "description": "Reliable web application hosting",
                "link": "https://panel5.serv00.com/",
                "icon": "./images/Serv00.jpg"
            },
            {
                "name": "ITDOG",
                "description": "Practical tools for IT operations",
                "link": "https://www.itdog.cn/ping_ipv6/kr6.w1997.eu.org",
                "icon": "./images/ITDOG.png"
            },
            {
                "name": "Dynadot",
                "description": "Competitive domain registration and transfer",
                "link": "https://www.dynadot.com/account/domain/name/list.html",
                "icon": "./images/Dynadot.jpg"
            },
            {
                "name": "EU.org",
                "description": "Free domains since 1996",
                "link": "https://nic.eu.org/arf/en/",
                "icon": "./images/EUorg.png"
            },
            {
                "name": "Hurricane Electric",
                "description": "Free IPv6 tunnel proxy service",
                "link": "https://tunnelbroker.net/",
                "icon": "./images/Hurricane Electric.jpg"
            },
            {
                "name": "FreeDNS",
                "description": "Free DNS and dynamic DNS",
                "link": "https://freedns.afraid.org/subdomain/",
                "icon": "./images/FreeDNS.png"
            },
            {
                "name": "Freenom",
                "description": "World's first free domain provider",
                "link": "https://my.freenom.com/clientarea.php?action=domains",
                "icon": "./images/Freenom.png"
            },
            {
                "name": "Name.com",
                "description": "Wide range of domain TLDs",
                "link": "https://www.name.com/zh-cn/account/login",
                "icon": "./images/name.jpg"
            },
            {
                "name": "IPing.cc",
                "description": "IP Address Query - IPv4",
                "link": "https://www.iping.cc/",
                "icon": "./images/iping.cc.png"
            },
            {
                "name": "Scamalytics",
                "description": "Check VPS IP fraud risk",
                "link": "https://scamalytics.com/",
                "icon": "./images/scamalytics.png"
            },
            {
                "name": "ZeroTier",
                "description": "Global Networking Solution for IoT, SD-WAN, and VPN",
                "link": "https://my.zerotier.com/",
                "icon": "./images/zerotier.png"
            },
            {
                "name": "Myip.is",
                "description": "显示你当前的公网 IP 地址",
                "link": "https://myip.is/",
                "icon": "./images/myip.jpg"
            }
        ],
        "domId": "cat-6"
    },
    {
        "title": "Payzone",
        "apps": [
            {
                "name": "什么值得买",
                "description": "我们的兴趣消费指南",
                "link": "https://www.smzdm.com/",
                "icon": "./images/smzdm.jpg"
            },
            {
                "name": "转运中国",
                "description": "全球购物轻松送到国内",
                "link": "https://www.uszcn.com/",
                "icon": "./images/uszcn.png"
            },
            {
                "name": "阿奇索",
                "description": "阿奇索自动发货软件",
                "link": "https://www.agiso.com/",
                "icon": "./images/agiso.webp"
            },
            {
                "name": "Walmart",
                "description": "Save Money. Live better",
                "link": "https://www.walmart.com/",
                "icon": "./images/walmart.svg"
            },
            {
                "name": "Artlist",
                "description": "Royalty-free digital asset subscription",
                "link": "https://artlist.io/",
                "icon": "./images/artlist.png"
            },
            {
                "name": "光厂",
                "description": "Royalty-free video material platform",
                "link": "https://www.vjshi.com/",
                "icon": "./images/光厂.jpg"
            },
            {
                "name": "新片场素材",
                "description": "Royalty-free audio-visual material hub",
                "link": "https://stock.xinpianchang.com/",
                "icon": "./images/xinpianchang.jpg"
            },
            {
                "name": "千库网",
                "description": "Free PNG images and backgrounds",
                "link": "https://588ku.com/",
                "icon": "./images/千库网.png"
            },
            {
                "name": "证件照回执",
                "description": "证件数码相片质量检测中心",
                "link": "https://hzl.rzzx.com.cn/upload",
                "icon": "./images/HZL.jpg"
            },
            {
                "name": "123短信接码",
                "description": "全球多个国家临时手机电话号码",
                "link": "https://web.duanxin-jiema.com/",
                "icon": "./images/123Jiema.png"
            },
            {
                "name": "三维家",
                "description": "房屋装修效果图设计软件",
                "link": "https://720.3vjia.com/S124417348?lang=zh-CN",
                "icon": "./images/SWJ.png"
            },
            {
                "name": "SMS-Activate.",
                "description": "Virtual Number for OTP",
                "link": "https://sms-activate.world/",
                "icon": "./images/SMS.png"
            },
            {
                "name": "环球巴士",
                "description": "一站式流媒体合租平台",
                "link": "https://universalbus.cn/",
                "icon": "./images/HQBS.png"
            },
            {
                "name": "CASETiFY",
                "description": "Show Your Colors",
                "link": "https://www.casetify.com/",
                "icon": "./images/casetify.png"
            },
            {
                "name": "Gumroad",
                "description": "Earn your first dollar online with Gumroad",
                "link": "https://gumroad.com/discover",
                "icon": "./images/gumroad.png"
            },
            {
                "name": "小红书千帆",
                "description": "解锁社交内容电商全新体验",
                "link": "https://ark.xiaohongshu.com/ark",
                "icon": "./images/ark.xiaohongshu.jpg"
            },
            {
                "name": "eSIMDB",
                "description": "找到最佳的预付费 eSIM 套餐",
                "link": "https://esimdb.com/",
                "icon": "./images/esimdb.png"
            },
            {
                "name": "Firsty",
                "description": "Your international mobile data travel app",
                "link": "https://www.firsty.app/",
                "icon": "./images/firsty.webp"
            },
            {
                "name": "Estk.me",
                "description": "Removable eUICC management solution",
                "link": "https://www.estk.me/downloads/",
                "icon": "./images/Estk.png"
            },
            {
                "name": "BNESIM",
                "description": "Best eSIM Plans for International Travel",
                "link": "https://app.bnesim.com/",
                "icon": "./images/bnesim.jpeg"
            },
            {
                "name": "RedteaGO",
                "description": "eSIM for seamless global travel",
                "link": "https://esim.redteago.com/zh-CN/orders",
                "icon": "./images/RedteaGO.jpg"
            }
        ],
        "domId": "cat-7"
    },
    {
        "title": "Other",
        "apps": [
            {
                "name": "WWZ.iM",
                "description": "My personal website and portfolio",
                "link": "https://www.wwz.im/",
                "icon": "./images/Avatar.jpg"
            },
            {
                "name": "QR Studio",
                "description": "Professional HD & Vector QR Generator",
                "link": "https://qr.wwz.im/",
                "icon": "./images/W-QR.png"
            },
            {
                "name": "MY IP",
                "description": "View public IPv4 and IPv6",
                "link": "https://ip.wwz.im/",
                "icon": "./images/myip.png"
            },
            {
                "name": "YandexTranslate",
                "description": "TranslaYandexTranslatete text from images and photos online",
                "link": "https://translate.yandex.com/translate",
                "icon": "./images/YandexTranslate.png"
            },
            {
                "name": "Alist",
                "description": "Organized file storage solution",
                "link": "https://alist.wwz.im/",
                "icon": "./images/alist.png"
            },
            {
                "name": "Yandex",
                "description": "fast Internet search",
                "link": "https://yandex.com/",
                "icon": "./images/yandex.png"
            },
            {
                "name": "Cusdis",
                "description": "轻量级、隐私优先、开源的评论系统",
                "link": "https://cusdis.com/dashboard",
                "icon": "./images/Cusdis.png"
            },
            {
                "name": "Translate",
                "description": "Intranet-based online translation tool",
                "link": "https://translate.google.com/",
                "icon": "./images/Google_Translate.png"
            },
            {
                "name": "TuChong",
                "description": "Showcase stunning photography portfolios",
                "link": "https://wangwenzhi.tuchong.com/videos/",
                "icon": "./images/tuchong.jpg"
            },
            {
                "name": "Temp Mail",
                "description": "Disposable temporary email service",
                "link": "https://temp-mail.org/",
                "icon": "./images/Temp Mail.png"
            },
            {
                "name": "Emotn",
                "description": "Free app store for Android TV",
                "link": "https://app.emotn.com/",
                "icon": "./images/emotn.webp"
            },
            {
                "name": "CN影院",
                "description": "Online cinema for Chinese content",
                "link": "https://huarenok.com/",
                "icon": "./images/nivideo.jfif"
            },
            {
                "name": "TypingClub",
                "description": "Online typing practice and learning platform.",
                "link": "https://www.edclub.com/sportal/",
                "icon": "./images/typingclub.jpeg"
            },
            {
                "name": "US Address",
                "description": "Generate valid US addresses",
                "link": "https://fauxid.com/identity/46c7de5b-db09-4161-b1bf-b5496f24384d",
                "icon": "./images/dizhi.png"
            },
            {
                "name": "TheMatrix",
                "description": "Matrix-inspired digital code background",
                "link": "https://wangwenzhi.eu.org/TheMatrix/",
                "icon": "./images/TheMatrix.png"
            },
            {
                "name": "菜鸟工具",
                "description": "Online tools for developers, designers",
                "link": "https://www.jyshare.com/",
                "icon": "./images/cainiao.png"
            },
            {
                "name": "Birme",
                "description": "将图片压缩到所需的尺寸",
                "link": "https://www.birme.net/",
                "icon": "./images/birme.png"
            },
            {
                "name": "默沙东诊疗手册",
                "description": "获得医生同样信赖的医学信息",
                "link": "https://www.msdmanuals.cn/home",
                "icon": "./images/msdmanuals.svg"
            },
            {
                "name": "Radio Garden",
                "description": "Stream global radio stations",
                "link": "https://radio.garden/",
                "icon": "./images/radio.garden.png"
            },
            {
                "name": "WebIntoApp",
                "description": "Convert websites to mobile apps",
                "link": "https://www.webintoapp.com/",
                "icon": "./images/webintoapp.png"
            },
            {
                "name": "草料二维码",
                "description": "Free one-stop QR code generator",
                "link": "https://cli.im/",
                "icon": "./images/cli.png"
            },
            {
                "name": "Node Convert",
                "description": "Node Conversion Tool Website",
                "link": "https://sub.wwz.im/",
                "icon": "./images/SUB Conversion.png"
            },
            {
                "name": "V2raySE-Singbox",
                "description": "Online V2ray node conversion tool",
                "link": "https://v2rayse.com/node-convert/",
                "icon": "./images/v2rayse1.png"
            },
            {
                "name": "V2raySE-V2",
                "description": "Online V2ray node conversion tool",
                "link": "https://v2.v2rayse.com/node-convert/",
                "icon": "./images/v2rayse.png"
            },
            {
                "name": "OpenWRT固件生成",
                "description": "定制适用于您设备的OpenWrt固件",
                "link": "https://openwrt.ai/?target=mediatek%2Ffilogic&id=cudy_tr3000-mod",
                "icon": "./images/openwrt.png"
            },
            {
                "name": "SnapAny",
                "description": "Save videos, images from platforms",
                "link": "https://snapany.com/",
                "icon": "./images/snapany.png"
            },
            {
                "name": "AXU",
                "description": "Personal resource and storage hub",
                "link": "https://axutongxue.com/",
                "icon": "./images/axu.jpg"
            },
            {
                "name": "MEGA",
                "description": "新西兰的云存储和文件分享",
                "link": "https://mega.nz/",
                "icon": "./images/MEGA.png"
            },
            {
                "name": "Dropbox",
                "description": "美国的知名云存储",
                "link": "https://www.dropbox.com/",
                "icon": "./images/Dropbox.png"
            },
            {
                "name": "Wallpapers Central",
                "description": "Wallpaper collection and customization platform",
                "link": "https://wallpapers.ispazio.net/",
                "icon": "./images/wallpapers.ispazio.jpg"
            },
            {
                "name": "leManoosh",
                "description": "Industrial Design Trends, Online Courses and Jobs",
                "link": "https://lemanoosh.com/tagged/colors/",
                "icon": "./images/lemanoosh.png"
            },
            {
                "name": "Jerry-Lee Bosmans",
                "description": "Dutch visual artist & designer",
                "link": "https://www.byjer.com/",
                "icon": "./images/JER.png"
            },
            {
                "name": "SPACE TYPE GENERATOR",
                "description": "I-TRY-ALL-THINGS;-I-ACHIEVE-WHAT-I-CAN",
                "link": "https://spacetypegenerator.com/clutter",
                "icon": "./images/spacetypegenerator.png"
            },
            {
                "name": "Vocal Remover",
                "description": "Vocal Remover and Isolation [AI]",
                "link": "https://vocalremover.org/",
                "icon": "./images/vocalremover.jpg"
            },
            {
                "name": "SeedHub",
                "description": "影视&动漫分享",
                "link": "https://www.seedhub.cc/",
                "icon": "./images/seedhub.png"
            },
            {
                "name": "Google Search Console",
                "description": "Search Console tools and reports help you measure your site's Search traffic and performance",
                "link": "https://search.google.com/search-console/performance/insights?resource_id=sc-domain%3Awwz.im",
                "icon": "./images/search-console.svg"
            }
        ],
        "domId": "cat-8"
    }
];

// 创建应用项
function createAppItem(app) {
    return `
        <div class="app-item">
            <a href="${app.link}" class="app-link" target="_blank" rel="noopener noreferrer">
                <img class="app-icon" src="${app.icon}" alt="${escapeHtml(app.name)}" loading="lazy"
                     onerror="this.src='https://via.placeholder.com/60?text=Image+Not+Found';">
                <h3 class="app-name">${escapeHtml(app.name)}</h3>
                <p class="app-description">${escapeHtml(app.description)}</p>
            </a>
        </div>
    `;
}

// 创建类别
function createCategory(category, index) {
    const appItems = category.apps.map(createAppItem).join('');
    return `
        <section class="app-category" id="${category.title.toLowerCase()}" style="animation-delay: ${index * 0.1}s;">
            <h2 class="app-category-title" data-index="${index}" style="cursor: pointer;" title="点击打开所有该类网站">
                ${escapeHtml(category.title)}
            </h2>
            <div class="app-grid">${appItems}</div>
        </section>
    `;
}

// 渲染
function renderCategories() {
    const container = document.getElementById('app-container');
    if (!container || !appData || !Array.isArray(appData)) return;

    const fragment = document.createDocumentFragment();
    appData.forEach((category, index) => {
        const div = document.createElement('div');
        div.innerHTML = createCategory(category, index);
        fragment.appendChild(div.firstElementChild);
    });
    container.appendChild(fragment);

    // 标题点击打开所有
    document.querySelectorAll('.app-category-title').forEach(title => {
        title.addEventListener('click', () => {
            const index = title.getAttribute('data-index');
            const category = appData[parseInt(index)];
            if (category && category.apps) {
                category.apps.forEach(app => window.open(app.link, '_blank'));
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupHamburgerMenu();
    renderCategories();
});
