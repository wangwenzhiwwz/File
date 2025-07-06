// 页面刷新函数
function refreshPage() {
    location.reload();
}

// 汉堡菜单切换功能
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    if (!hamburger) {
        console.warn('Hamburger menu element not found.');
        return;
    }
    hamburger.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.classList.toggle('active');
        } else {
            console.warn('Navigation links element not found.');
        }
    });
}

// HTML 转义函数，防止 XSS
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// 构造器函数，确保字段完整性并记录错误
function createApp({ name, description, link, icon }) {
    const errors = [];
    if (!name) errors.push('缺少 name 字段');
    if (!description) errors.push('缺少 description 字段');
    if (!link) errors.push('缺少 link 字段');
    if (!icon) errors.push('缺少 icon 字段');

    const app = {
        name: name || 'Unnamed App',
        description: description || 'No description available',
        link: link || '#',
        icon: icon || 'https://via.placeholder.com/60?text=No+Image'
    };

    if (errors.length > 0) {
        const errorMessage = `应用 "${app.name}" 数据错误: ${errors.join(', ')}`;
        console.error(errorMessage);
        displayError(errorMessage);
    }

    return app;
}

// 显示错误信息的函数
function displayError(message) {
    let errorContainer = document.getElementById('error-container');
    if (!errorContainer) {
        errorContainer = document.createElement('div');
        errorContainer.id = 'error-container';
        Object.assign(errorContainer.style, {
            position: 'fixed',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#ffebee',
            color: '#c62828',
            padding: '10px 20px',
            borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            zIndex: '1000',
            maxWidth: '80%',
            overflowY: 'auto',
            maxHeight: '200px'
        });
        document.body.appendChild(errorContainer);
    }

    const errorItem = document.createElement('p');
    errorItem.textContent = message;
    errorItem.style.margin = '5px 0';
    errorContainer.appendChild(errorItem);

    setTimeout(() => {
        errorItem.remove();
        if (!errorContainer.hasChildNodes()) {
            errorContainer.remove();
        }
    }, 10000);
}


// Optimized application data
const appData = [
    { title: "Web", apps: [
        createApp({ name: "TopHub", description: "Daily trending news and rankings", link: "https://tophub.today/", icon: "./images/tophub.png" }),
        createApp({ name: "IT之家", description: "Leading technology news and reviews", link: "https://www.ithome.com/", icon: "./images/ithome.png" }),
        createApp({ name: "Outlook", description: "Platform developed by Microsoft", link: "https://outlook.com/", icon: "./images/Microsoft_Outlook.png" }),
        createApp({ name: "新片场", description: "Discover global creative talent hub", link: "https://www.xinpianchang.com/", icon: "./images/xinpianchang.jpg" }),
        createApp({ name: "ZCool", description: "Inspiring design discovery platform", link: "https://www.zcool.com.cn/", icon: "./images/Zcool.png" }),
        createApp({ name: "Behance", description: "Adobe's global creative community", link: "https://www.behance.net/", icon: "./images/behance.png" }),
        createApp({ name: "GitHub", description: "Collaborative code hosting platform", link: "https://github.com/", icon: "./images/github.png" }),
        createApp({ name: "Vercel", description: "Simplified frontend deployment cloud", link: "https://vercel.com/", icon: "./images/vercel.png" }),
        createApp({ name: "Cloudflare", description: "Web acceleration and security service", link: "https://dash.cloudflare.com/", icon: "./images/cloudflare.svg" }),
        createApp({ name: "Ping", description: "Website performance testing tool", link: "https://ping.chinaz.com/", icon: "./images/ChinaZ.png" }),
        createApp({ name: "Teambition", description: "Enterprise-grade team collaboration tool", link: "https://www.teambition.com/organization/61ade96d461f91c76e3bfc06/task/shortcut/66d920b8e2a3f00f0ddca2e3/", icon: "./images/Teambition.jpg" }),
        createApp({ name: "Whimsical", description: "Unified workspace for teams", link: "https://whimsical.com/", icon: "./images/whimsical.jfif" }),
        createApp({ name: "闪电分镜", description: "Efficient pre-production planning tool", link: "https://web.mediastory.cc/", icon: "./images/SDFJ.webp" }),
        createApp({ name: "Nodeseek", description: "Vibrant web developer community", link: "https://www.nodeseek.com/", icon: "./images/NodeSeek.png" }),
        createApp({ name: "V2EX", description: "Creative professionals' discussion forum", link: "https://www.v2ex.com/", icon: "./images/v2ex.jpeg" }),
        createApp({ name: "Notion", description: "Versatile all-in-one productivity app", link: "https://www.notion.so/", icon: "./images/notion.webp" }),
        
    ]},
    { title: "AI", apps: [
        createApp({ name: "Ai.WWZ.iM", description: "Cutting-edge AI conversation system", link: "https://ai.wwz.im/", icon: "./images/ai.png" }),
        createApp({ name: "Qwen", description: "阿里巴巴云开发的智能助手", link: "https://www.tongyi.com/", icon: "./images/QWEN.png" }),
        createApp({ name: "豆包", description: "字节跳动旗下AI 智能助手", link: "https://www.doubao.com/", icon: "./images/doubao.png" }),
        createApp({ name: "Grok", description: "xAI's generative AI chatbot", link: "https://grok.com/", icon: "./images/Grok.jpg" }),
        createApp({ name: "ChatGPT", description: "OpenAI's official conversational AI", link: "https://chatgpt.com/", icon: "./images/openai.png" }),
        createApp({ name: "DeepSeek", description: "Advanced AI research platform", link: "https://chat.deepseek.com/", icon: "./images/DeepSeek.jpg" }),
        createApp({ name: "Gemini", description: "Google AI planning and assistance", link: "https://gemini.google.com/", icon: "./images/Gemini.png" }),
        createApp({ name: "Microsoft Copilot", description: "AI companion for productivity", link: "https://copilot.microsoft.com/", icon: "./images/Copilot.png" }),
        createApp({ name: "GitHub Copilot", description: "AI-powered coding assistant", link: "https://github.com/copilot/", icon: "./images/GitHub Copilot.png" }),
        createApp({ name: "GoogleAiStudio", description: "Google DeepMind's latest AI tools", link: "https://aistudio.google.com/", icon: "./images/GoogleAiStudio.png" }),
        createApp({ name: "GoogleLabs", description: "AI-powered video storytelling platform", link: "https://labs.google/fx", icon: "./images/Google+Labs+Logo.jpg" }),
        createApp({ name: "Suno", description: "Generate complete songs with lyrics", link: "https://suno.com/", icon: "./images/suno.jpg" }),
        createApp({ name: "Viggle", description: "Animate photos with dynamic motions", link: "https://viggle.ai/", icon: "./images/viggle.webp" }),
        createApp({ name: "ElevenLabs", description: "Realistic AI-generated synthetic voice", link: "https://elevenlabs.io/", icon: "./images/elevenlabs.png" }),
        createApp({ name: "Perplexity", description: "AI-driven search and Q&A", link: "https://www.perplexity.ai/", icon: "./images/perplexity.png" }),
        createApp({ name: "WebSim", description: "Instant AI-powered code generation", link: "https://websim.ai/", icon: "./images/WebSim.png" }),
        createApp({ name: "Bolt.new", description: "AI-driven web development tool", link: "https://bolt.new/", icon: "./images/Bolt.jpg" }),
        createApp({ name: "DeepAI", description: "AI for images, videos, text", link: "https://deepai.org/", icon: "./images/DeepAI.png" }),
        createApp({ name: "Ollama", description: "Run large language models locally", link: "https://ollama.com/", icon: "./images/ollama.png" }),
        createApp({ name: "LM Studio", description: "Manage local language models", link: "https://lmstudio.ai/", icon: "./images/lmstudio_ai_logo.jpeg" }),
        createApp({ name: "Cherry Studio", description: "多模型AI助手平台", link: "https://www.cherry-ai.com/", icon: "./images/CherryStudio.png" }),
        createApp({ name: "AnythingLLM", description: "Comprehensive AI application suite", link: "https://anythingllm.com/", icon: "./images/anythingllm.png" }),
        createApp({ name: "Bigjpg", description: "AI-powered lossless image upscaling", link: "https://bigjpg.com/", icon: "./images/bigjpg.png" }),
        createApp({ name: "ComfyUI", description: "Intuitive AI image generation", link: "https://www.comfy.org/", icon: "./images/ComfyUI.jpg" }),
        createApp({ name: "Hugging Face", description: "Open-source AI development hub", link: "https://huggingface.co/", icon: "./images/huggingface.png" }),
        createApp({ name: "AI Short", description: "Simplified AI command interface", link: "https://www.aishort.top/", icon: "./images/aishort.png" }),
        createApp({ name: "Hyper3D", description: "AI-powered 3D model generator", link: "https://hyper3d.ai/", icon: "./images/hyper3d.png" }),
        createApp({ name: "LiblibAI", description: "China's leading AI creation platform", link: "https://www.liblib.art/", icon: "./images/liblib.jpg" }),
        createApp({ name: "Civitai", description: "Open-source generative AI community", link: "https://civitai.com/", icon: "./images/civitai.jpg" }),
        createApp({ name: "Playground", description: "Free AI Design Tool", link: "https://playground.com/", icon: "./images/playground.jpeg" }),
    ]},
    { title: "iOS", apps: [
        createApp({ name: "Hiddify", description: "Multi-protocol VPN and proxy", link: "https://apps.apple.com/us/app/hiddify-proxy-vpn/id6596777532?platform=iphone", icon: "./images/hiddify.png" }),
        createApp({ name: "Shadowrocket", description: "Rule-based proxy management utility", link: "https://apps.apple.com/us/app/shadowrocket/id932747118", icon: "./images/shadorocket.webp" }),
        createApp({ name: "Notion", description: "Plan, organize, and track projects", link: "https://apps.apple.com/us/app/notion-notes-tasks-ai/id1232780281", icon: "./images/notion.webp" }),
        createApp({ name: "ChatGPT", description: "OpenAI's official AI chatbot", link: "https://apps.apple.com/us/app/chatgpt/id6448311069", icon: "./images/openai.png" }),
        createApp({ name: "Duolingo", description: "Learn over 40 languages playfully", link: "https://apps.apple.com/us/app/duolingo-language-lessons/id570060128", icon: "./images/Duolingo.webp" }),
        createApp({ name: "ProMovie Recorder", description: "Advanced mobile camera features", link: "https://apps.apple.com/us/app/promovie-recorder/id1076481548", icon: "./images/ProMovie.webp" }),
        createApp({ name: "Blackmagic Camera", description: "Professional digital film for iPhone", link: "https://www.blackmagicdesign.com/products/blackmagiccamera", icon: "./images/BlackMagicCamera.webp" }),
        createApp({ name: "极影相机", description: "Professional camera in your pocket", link: "https://apps.apple.com/cn/app/%E6%9E%81%E5%BD%B1%E7%9B%B8%E6%9C%BA/id1459953293", icon: "./images/jiying.webp" }),
        createApp({ name: "Monitor+", description: "Remote control for Sony cameras", link: "https://apps.apple.com/al/app/monitor/id1554619768", icon: "./images/Monitor+.webp" }),
        createApp({ name: "Sony|Monitor&Control", description: "Supported cameras (as of April 2025)", link: "https://apps.apple.com/us/app/sony-monitor-control/id1643900558", icon: "./images/SonyMonitor.webp" }),
        createApp({ name: "Cadrage+", description: "Pro filmmaking and photography tool", link: "https://apps.apple.com/us/app/cadrage-directors-viewfinder/id793232740", icon: "./images/Cadrage.webp" }),
        createApp({ name: "LocalSend", description: "Secure local file sharing", link: "https://apps.apple.com/us/app/localsend/id1661733229", icon: "./images/localsend.png" }),
        createApp({ name: "Hypic", description: "Photo Editor & AI Art", link: "https://apps.apple.com/de/app/hypic-photo-editor-ai-art/id1644042837", icon: "./images/hypic.webp" }),
        createApp({ name: "截图带壳", description: "截图/视频带壳支持手机/手表全系列机型", link: "https://apps.apple.com/cn/app/%E6%88%AA%E5%9B%BE%E5%B8%A6%E5%A3%B3-%E5%B8%A6%E5%A3%B3%E6%88%AA%E5%9B%BE-%E8%A7%86%E9%A2%91%E9%AB%98%E6%B8%85%E5%AF%BC%E5%87%BA/id6544797343", icon: "./images/Snapmod.webp" }),
        createApp({ name: "QWeather", description: "Accurate global weather forecasts", link: "https://www.qweather.com/en/app", icon: "./images/QWeather.webp" }),
        createApp({ name: "默沙东诊疗手册", description: "健康信息是人人都应享受的权利", link: "https://apps.apple.com/mx/app/%E9%BB%98%E6%B2%99%E4%B8%9C%E8%AF%8A%E7%96%97%E6%89%8B%E5%86%8C-%E5%A4%A7%E4%BC%97%E7%89%88/id1188334624", icon: "./images/msdmanuals.webp" }),
        createApp({ name: "太阳测量师", description: "Plan sunrise and sunset moments", link: "https://apps.apple.com/cn/app/%E5%A4%AA%E9%98%B3%E6%B5%8B%E9%87%8F%E5%B8%88-sun-surveyor/id525176875", icon: "./images/sun.webp" }),
    ]},
    { title: "Android", apps: [
        createApp({ name: "VPN", description: "Cross-platform VPN client solution", link: "https://www.wwz.im/article/VPN", icon: "./images/v2ray.png" }),
        createApp({ name: "LocalSend", description: "Secure local file sharing", link: "https://localsend.org/#/download", icon: "./images/localsend.png" }),
        createApp({ name: "AuroraOSS", description: "Collection of open-source apps", link: "https://auroraoss.com/", icon: "./images/auroralogo.png" }),
        createApp({ name: "APkPure", description: "Fast Android APK downloader", link: "https://www.wwz.im/article/APKPure", icon: "./images/apkpure.png" }),
        createApp({ name: "酷安", description: "Engaging tech community platform", link: "https://www.coolapk.com/", icon: "./images/CoolAPK.png" }),
        createApp({ name: "Monitor+", description: "Professional mobile monitoring tool", link: "https://monitorplus.cc/", icon: "./images/monitor+.jpg" }),
        createApp({ name: "MXPlayer", description: "Powerful video playback app", link: "https://github.com/wangwenzhiwwz/file/releases/download/APK/MX_Player_Pro-v1.68.4_build.apk", icon: "./images/MxPlayer.png" }),
        createApp({ name: "Wow时钟", description: "Clock and countdown display", link: "https://github.com/wangwenzhiwwz/file/releases/download/APK/Wow.clock.apk", icon: "./images/wow.png" }),
        createApp({ name: "DU RECORDER", description: "Easy screen recording and streaming", link: "https://www.du-recorder.com/", icon: "./images/du-recorder.png" }),
        createApp({ name: "Battery显示", description: "Monitor remaining battery life", link: "./software/Battery.apk", icon: "./images/Battery.png" }),
        createApp({ name: "时间悬浮", description: "Display precise current time", link: "./software/clock.apk", icon: "./images/clock.png" }),
        createApp({ name: "CPDT Benchmark", description: "Test storage and memory speed", link: "https://play.google.com/store/apps/details?id=com.Saplin.CPDT", icon: "./images/CPDT.webp" }),
        createApp({ name: "Androbench", description: "Benchmark tool for Android", link: "./software/Androbench.apk", icon: "./images/Androbench.webp" }),
        createApp({ name: "MyFLIR", description: "Thermal imaging mobile app", link: "./software/MyFLIR.apk", icon: "./images/MyFLIR.webp" }),
        createApp({ name: "uSmart", description: "Intelligent camera control app", link: "https://github.com/wangwenzhiwwz/file/releases/download/APK/uSmart.Camera_v1.0.070_230811.apk", icon: "./images/uSmart.png" }),
        createApp({ name: "Chromascreen", description: "Green screen video editing", link: "./software/Chromascreen.apk", icon: "./images/Chromascreen.webp" }),
        createApp({ name: "Focus Chart", description: "Display professional focus chart", link: "./software/Focus Chart.apk", icon: "./images/Focus Chart.webp" }),
        createApp({ name: "Brevent", description: "App standby without root", link: "./software/Brevent - v4.2.21.1.apk", icon: "./images/Brevent.webp" }),
        createApp({ name: "Scene", description: "Powerful system management tool", link: "./software/Scene - v8.0.15.apk", icon: "./images/Scene.webp" }),
        createApp({ name: "贝利自动点击器", description: "Automated screen tapping utility", link: "./software/贝利自动点击器_v2.8.9_v2.apk", icon: "./images/贝利.png" }),
        createApp({ name: "Estk APP", description: "Removable eUICC management solution", link: "./software/EasyEUICC-1.2.0.apk", icon: "./images/Estk.png" }),
    ]},
    { title: "Windows", apps: [
        createApp({ name: "PowerToys", description: "用于自定义 Windows 的实用工具", link: "https://learn.microsoft.com/zh-cn/windows/powertoys/", icon: "./images/PowerToys.png" }),
        createApp({ name: "BalenaEtcher", description: "Flash OS images to USB", link: "https://etcher.balena.io/#download-etcher", icon: "./images/balena etcher.png" }),
        createApp({ name: "Parsec", description: "Remote access for work, gaming", link: "https://parsec.app/", icon: "./images/parsec.png" }),
        createApp({ name: "Tabby SSH", description: "Cross-platform SSH management tool", link: "https://tabby.sh/", icon: "./images/tabby-logo.png" }),
        createApp({ name: "V2rayN", description: "Windows GUI VPN client", link: "https://www.wwz.im/article/VPN", icon: "./images/v2rayn.jpg" }),
        createApp({ name: "VPN Gate", description: "Free Access to World Knowledge Beyond Government's Firewall.", link: "https://p.wwz.im/https://www.vpngate.net/en/", icon: "./images/VPN Gate.jpg" }),
        createApp({ name: "Moo0", description: "Video and image compression", link: "https://www.wwz.im/article/Moo0", icon: "./images/Moo0.png" }),
        createApp({ name: "Windows设置", description: "Practical Windows 11 settings tool", link: "https://github.com/wangwenzhiwwz/file/releases/download/Windows/Windows.3.6.5.exe", icon: "./images/windows.jpg" }),
        createApp({ name: "数码荔枝", description: "Share premium software resources", link: "https://lizhi.shop/", icon: "./images/smlz.jpg" }),
        createApp({ name: "RuTracker.org", description: "Largest Russian torrent tracker", link: "https://rutracker.org/", icon: "./images/rutracker.jpg" }),
        createApp({ name: "Lrepacks", description: "Russian software repack solutions", link: "https://lrepacks.net/", icon: "./images/lrepacks.png" }),
        createApp({ name: "CyberMania", description: "Adobe software cracking tools", link: "https://www.cybermania.ws/?s=adobe", icon: "./images/CyberMania.png" }),
        createApp({ name: "4K Downloader", description: "Download 4K YouTube videos", link: "https://lrepacks.net/repaki-programm-dlya-interneta/801-4k-downloader-repack-amp-portable.html", icon: "./images/4KDownloader.png" }),
        createApp({ name: "BalenaEtcher", description: "Graphical OS image flashing", link: "https://etcher.balena.io/", icon: "./images/balena.png" }),
        createApp({ name: "Hbuilder X", description: "Lightweight yet powerful IDE", link: "https://www.dcloud.io/hbuilderx.html", icon: "./images/hbuilderx.png" }),
        createApp({ name: "Billfish素材管家", description: "Essential creative asset manager", link: "https://www.billfish.cn/", icon: "./images/billfish.png" }),
        createApp({ name: "PureRef", description: "Floating image inspiration organizer", link: "https://www.pureref.com/", icon: "./images/PureRef.png" }),
        createApp({ name: "MPC-BE", description: "Free open-source video player", link: "./software/MPC-BE.1.8.2.x64.exe", icon: "./images/MPC.jpg" }),
        createApp({ name: "IrfanView", description: "Fast image viewer and converter", link: "https://www.irfanview.com/", icon: "./images/irfanview.jpg" }),
        createApp({ name: "Adobe GenP", description: "Universal Adobe product patcher", link: "https://www.cybermania.ws/apps/adobe-genp/", icon: "./images/adobe genp.png" }),
        createApp({ name: "Cursor", description: "AI-enhanced coding environment", link: "https://www.cursor.com/", icon: "./images/cursor.jpg" }),
        createApp({ name: "影刀 RPA", description: "Robotic process automation tool", link: "https://www.yingdao.com/", icon: "./images/yingdao.webp" }),
        createApp({ name: "NB助手", description: "一款免费的iOS设备必备工具", link: "https://nbtool8.com/index.html", icon: "./images/nbtool.png" }),
        createApp({ name: "Advanced-IP-Scanner", description: "数秒内完成网络扫描", link: "https://www.advanced-ip-scanner.com/cn/", icon: "./images/Advanced-IP-Scanner.webp" }),
    ]},
    { title: "Mac", apps: [
        createApp({ name: "奇迹秀", description: "Boost productivity with plugins", link: "https://www.qijishow.com/", icon: "./images/qijishow.svg" }),
        createApp({ name: "Apple", description: "Official Apple website and resources", link: "https://www.apple.com/", icon: "./images/Apple.png" }),
        createApp({ name: "MOC", description: "Smooth mouse scrolling for macOS", link: "https://mos.caldis.me/", icon: "./images/moc.png" }),
        createApp({ name: "IINA", description: "Modern media player for macOS", link: "https://iina.io/", icon: "./images/iina.jpg" }),
        createApp({ name: "CapTure One", description: "Professional photo editing software", link: "https://jpsmile.com/phase-one-capture-one-23-pro/", icon: "./images/captureone.png" }),
        createApp({ name: "Gyroflow", description: "Advanced video stabilization tool", link: "https://gyroflow.xyz/", icon: "./images/gyroflow.png" }),
        createApp({ name: "捡屁笑", description: "Simple content sharing platform", link: "https://jpsmile.com/", icon: "./images/jpsmile.png" }),
        createApp({ name: "Davinci Resolve", description: "Pro editing, color, and audio", link: "https://www.blackmagicdesign.com/products/davinciresolve/studio", icon: "./images/Davinci-Resolve.png" }),
        createApp({ name: "Adobe", description: "Adobe 2024 universal Mac patch", link: "https://www.wwz.im/article/Adobe/", icon: "./images/Adobe.svg" }),
        createApp({ name: "VS Code", description: "Microsoft's cross-platform code editor", link: "https://code.visualstudio.com/", icon: "./images/vscode.jpg" }),
        createApp({ name: "HandBrake", description: "Open-source video transcoding tool", link: "https://handbrake.fr/", icon: "./images/HandBrake.png" }),
        createApp({ name: "WPS", description: "AI-powered office productivity suite", link: "https://www.wps.com/", icon: "./images/wps.png" }),
        createApp({ name: "Surge", description: "Advanced network toolbox for Mac", link: "https://nssurge.com/", icon: "./images/surge.png" }),
        createApp({ name: "Appstorrent", description: "Hundreds of macOS apps, games", link: "https://appstorrent.ru/", icon: "./images/appstorrent.jpg" }),
        createApp({ name: "Milanote", description: "Visual project management platform", link: "https://app.milanote.com/", icon: "./images/milanote.jpg" }),
    ]},
    { title: "VPS", apps: [
        createApp({ name: "VPS.WWZ.iM", description: "Server monitoring and operation tool", link: "https://vps.wwz.im/", icon: "./images/Nezha Monitoring.png" }),
        createApp({ name: "Nginx Proxy Manager", description: "Get Connected · Proxy Hosts", link: "https://npm.wwz.im/", icon: "./images/Nginx Proxy Manager.png" }),
        createApp({ name: "X-UI", description: "An Advanced Web Panel • Built on Xray Core", link: "https://www.wwz.im/article/xui/", icon: "./images/3x-ui-light.png" }),
        createApp({ name: "EUserv", description: "Dedicated servers and cloud hosting", link: "https://support.euserv.com/", icon: "./images/EUserv.jpg" }),
        createApp({ name: "BandwagonHost", description: "Enterprise-grade VPS hosting plans", link: "https://bwh88.net/services", icon: "./images/bwh.png" }),
        createApp({ name: "Hostinger", description: "Bring Your Idea Online With a Website", link: "https://hpanel.hostinger.com/vps", icon: "./images/hostinger.png" }),
        createApp({ name: "RackNerd", description: "Global infrastructure as a service", link: "https://my.racknerd.com/clientarea.php", icon: "./images/RackNerd.jpg" }),
        createApp({ name: "Oracle", description: "Free high-performance cloud servers", link: "https://cloud.oracle.com", icon: "./images/Oracle.png" }),
        createApp({ name: "CloudCone", description: "KVM-based VPS and dedicated servers", link: "https://app.cloudcone.com/", icon: "./images/CloudCone.jpg" }),
        createApp({ name: "VPS推荐", description: "Curated cost-effective VPS deals", link: "https://kejilion.pro/topvps/", icon: "./images/Cloud-icon.png" }),
        createApp({ name: "Scamalytics", description: "Check VPS IP fraud risk", link: "https://scamalytics.com/", icon: "./images/scamalytics.png" }),
        createApp({ name: "Serv00", description: "Reliable web application hosting", link: "https://panel5.serv00.com/", icon: "./images/Serv00.jpg" }),
        createApp({ name: "DogYun", description: "Affordable and flexible cloud servers", link: "https://vm.dogyun.com/server/list", icon: "./images/dogyun.png" }),
        createApp({ name: "ITDOG", description: "Practical tools for IT operations", link: "https://www.itdog.cn/ping_ipv6/kr6.w1997.eu.org", icon: "./images/ITDOG.png" }),
        createApp({ name: "Dynadot", description: "Competitive domain registration and transfer", link: "https://www.dynadot.com/account/domain/name/list.html", icon: "./images/Dynadot.jpg" }),
        createApp({ name: "EU.org", description: "Free domains since 1996", link: "https://nic.eu.org/arf/en/", icon: "./images/EUorg.png" }),
        createApp({ name: "Hurricane Electric", description: "Free IPv6 tunnel proxy service", link: "https://tunnelbroker.net/", icon: "./images/Hurricane Electric.jpg" }),
        createApp({ name: "FreeDNS", description: "Free DNS and dynamic DNS", link: "https://freedns.afraid.org/subdomain/", icon: "./images/FreeDNS.png" }),
        createApp({ name: "Freenom", description: "World's first free domain provider", link: "https://my.freenom.com/clientarea.php?action=domains", icon: "./images/Freenom.png" }),
        createApp({ name: "Name.com", description: "Wide range of domain TLDs", link: "https://www.name.com/zh-cn/account/login", icon: "./images/name.jpg" }),
    ]},
    { title: "Payzone", apps: [
        createApp({ name: "什么值得买", description: "我们的兴趣消费指南", link: "https://www.smzdm.com/", icon: "./images/smzdm.jpg" }),
        createApp({ name: "转运中国", description: "全球购物轻松送到国内", link: "https://www.uszcn.com/", icon: "./images/uszcn.png" }),
        createApp({ name: "阿奇索", description: "阿奇索自动发货软件", link: "https://www.agiso.com/", icon: "./images/agiso.webp" }),
        createApp({ name: "Walmart", description: "Save Money. Live better", link: "https://www.walmart.com/", icon: "./images/walmart.svg" }),
        createApp({ name: "Artlist", description: "Royalty-free digital asset subscription", link: "https://artlist.io/", icon: "./images/artlist.png" }),
        createApp({ name: "光厂", description: "Royalty-free video material platform", link: "https://www.vjshi.com/", icon: "./images/光厂.jpg" }),
        createApp({ name: "新片场素材", description: "Royalty-free audio-visual material hub", link: "https://stock.xinpianchang.com/", icon: "./images/xinpianchang.jpg" }),
        createApp({ name: "千库网", description: "Free PNG images and backgrounds", link: "https://588ku.com/", icon: "./images/千库网.png" }),
        createApp({ name: "证件照回执", description: "证件数码相片质量检测中心", link: "https://hzl.rzzx.com.cn/upload", icon: "./images/HZL.jpg" }),
        createApp({ name: "123短信接码", description: "全球多个国家临时手机电话号码", link: "https://web.duanxin-jiema.com/", icon: "./images/123Jiema.png" }),
        createApp({ name: "三维家", description: "房屋装修效果图设计软件", link: "https://720.3vjia.com/S124417348?lang=zh-CN", icon: "./images/SWJ.png" }),
        createApp({ name: "SMS-Activate.", description: "Virtual Number for OTP", link: "https://sms-activate.world/", icon: "./images/SMS.png" }),
        createApp({ name: "环球巴士", description: "一站式流媒体合租平台", link: "https://universalbus.cn/", icon: "./images/HQBS.png" }),
        createApp({ name: "RedteaGO", description: "eSIM for seamless global travel", link: "https://esim.redteago.com/zh-CN/orders", icon: "./images/RedteaGO.jpg" }),
        createApp({ name: "CASETiFY", description: "Show Your Colors", link: "https://www.casetify.com/", icon: "./images/casetify.png" }),
        createApp({ name: "Gumroad", description: "Earn your first dollar online with Gumroad", link: "https://gumroad.com/discover", icon: "./images/gumroad.png" }),
        createApp({ name: "Estk.me", description: "Removable eUICC management solution", link: "https://www.estk.me/downloads/", icon: "./images/Estk.png" }),
        
    ]},
    { title: "Other", apps: [
        createApp({ name: "WWZ.iM", description: "My personal website and portfolio", link: "https://www.wwz.im/", icon: "https://wangwenzhi.eu.org/images/favicon_io/apple-touch-icon.png" }),
        createApp({ name: "MY IP", description: "View public IPv4 and IPv6", link: "https://ip.wwz.im/", icon: "./images/myip.png" }),
        createApp({ name: "Cloudflare Proxy EX", description: "Cloudflare超级代理，OpenAI/ChatGPT代理，Github加速", link: "https://p.wwz.im/", icon: "./images/☭.png" }),
        createApp({ name: "Alist", description: "Organized file storage solution", link: "https://alist.wwz.im/", icon: "./images/alist.png" }),
        createApp({ name: "Translate", description: "Intranet-based online translation tool", link: "https://p.wwz.im/https://translate.google.com/", icon: "./images/Google_Translate.png" }),
        createApp({ name: "Yandex", description: "fast Internet search", link: "https://yandex.com/", icon: "./images/yandex.png" }),
        createApp({ name: "TuChong", description: "Showcase stunning photography portfolios", link: "https://wangwenzhi.tuchong.com/videos/", icon: "./images/tuchong.jpg" }),
        createApp({ name: "Temp Mail", description: "Disposable temporary email service", link: "https://temp-mail.org/", icon: "./images/Temp Mail.png" }),
        createApp({ name: "Emotn", description: "Free app store for Android TV", link: "https://app.emotn.com/", icon: "./images/emotn.webp" }),
        createApp({ name: "CN影院", description: "Online cinema for Chinese content", link: "https://cnys.tv/", icon: "./images/nivideo.jfif" }),
        createApp({ name: "TypingClub", description: "Online typing practice and learning platform.", link: "https://www.edclub.com/sportal/", icon: "./images/typingclub.jpeg" }), 
        createApp({ name: "US Address", description: "Generate valid US addresses", link: "https://fauxid.com/identity/46c7de5b-db09-4161-b1bf-b5496f24384d", icon: "./images/dizhi.png" }),
        createApp({ name: "TheMatrix", description: "Matrix-inspired digital code background", link: "https://wangwenzhi.eu.org/TheMatrix/", icon: "./images/TheMatrix.png" }),
        createApp({ name: "菜鸟工具", description: "Online tools for developers, designers", link: "https://www.jyshare.com/", icon: "./images/cainiao.png" }),
        createApp({ name: "Birme", description: "将图片压缩到所需的尺寸", link: "https://www.birme.net/", icon: "./images/birme.png" }),
        createApp({ name: "默沙东诊疗手册", description: "获得医生同样信赖的医学信息", link: "https://www.msdmanuals.cn/home", icon: "./images/msdmanuals.svg" }),
        createApp({ name: "Radio Garden", description: "Stream global radio stations", link: "https://radio.garden/", icon: "./images/radio.garden.png" }),
        createApp({ name: "WebIntoApp", description: "Convert websites to mobile apps", link: "https://www.webintoapp.com/", icon: "./images/webintoapp.png" }),
        createApp({ name: "草料二维码", description: "Free one-stop QR code generator", link: "https://cli.im/", icon: "./images/cli.png" }),
        createApp({ name: "Node Convert", description: "Node Conversion Tool Website", link: "https://sub.wwz.im/", icon: "./images/SUB Conversion.png" }),
        createApp({ name: "V2raySE-Singbox", description: "Online V2ray node conversion tool", link: "https://v2rayse.com/node-convert/", icon: "./images/v2rayse1.png" }),
        createApp({ name: "V2raySE V2", description: "Online V2ray node conversion tool", link: "https://v2.v2rayse.com/node-convert/", icon: "./images/v2rayse.png" }),
        createApp({ name: "SnapAny", description: "Save videos, images from platforms", link: "https://snapany.com/", icon: "./images/snapany.png" }),
        createApp({ name: "AXU", description: "Personal resource and storage hub", link: "https://axutongxue.com/", icon: "./images/axu.jpg" }),
        createApp({ name: "MEGA", description: "新西兰的云存储和文件分享", link: "https://mega.nz/", icon: "./images/MEGA.png" }),
        createApp({ name: "Dropbox", description: "美国的知名云存储", link: "https://www.dropbox.com/", icon: "./images/Dropbox.png" }),
        createApp({ name: "Wallpapers Central", description: "Wallpaper collection and customization platform", link: "https://wallpapers.ispazio.net/", icon: "./images/wallpapers.ispazio.jpg" }),
        createApp({ name: "leManoosh", description: "Industrial Design Trends, Online Courses and Jobs", link: "https://lemanoosh.com/tagged/colors/", icon: "./images/lemanoosh.png" }),
        createApp({ name: "Jerry-Lee Bosmans", description: "Dutch visual artist & designer", link: "https://www.byjer.com/", icon: "./images/JER.png" }),
        
    ]},
];

// 创建单个应用项的 HTML
function createAppItem(app) {
    return `
        <div class="app-item">
            <a href="${app.link}" class="app-link" target="_blank" rel="noopener noreferrer">
                <img class="app-icon" src="${app.icon}" alt="${escapeHtml(app.name)} Icon" loading="lazy" onerror="this.src='https://via.placeholder.com/60?text=Image+Not+Found'; console.warn('Failed to load image: ${app.icon}');">
                <h3 class="app-name">${escapeHtml(app.name)}</h3>
                <p class="app-description">${escapeHtml(app.description)}</p>
            </a>
        </div>
    `;
}

// 创建应用类别的 HTML
function createCategory(category, index) {
    const appItems = category.apps.map(createAppItem).join('');
    return `
        <section class="app-category" id="${category.title.toLowerCase()}" style="animation-delay: ${index * 0.1}s;">
            <h2 class="app-category-title" data-index="${index}" style="cursor: pointer;" title="点击打开所有该类网站">${escapeHtml(category.title)}</h2>
            <div class="app-grid">${appItems}</div>
        </section>
    `;
}

// 全局事件处理函数
const scrollHandler = () => {
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.classList.toggle('visible', window.scrollY > 300);
    }
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const headerOffset = 80; // 预留顶部空隙，避免标题被遮挡
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        document.querySelector('.nav-links')?.classList.remove('active');
    }
};

// 渲染所有类别并设置事件
function renderCategories() {
    const container = document.getElementById('app-container');
    if (!container) {
        console.error('App container element not found.');
        return;
    }
    if (!appData || !Array.isArray(appData)) {
        console.error('appData is not defined or not an array.');
        return;
    }

    const fragment = document.createDocumentFragment();
    appData.forEach((category, index) => {
        const div = document.createElement('div');
        div.innerHTML = createCategory(category, index);
        fragment.appendChild(div.firstElementChild);
    });
    container.appendChild(fragment);

    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.removeEventListener('scroll', scrollHandler);
        window.addEventListener('scroll', scrollHandler);
        backToTop.removeEventListener('click', scrollToTop);
        backToTop.addEventListener('click', scrollToTop);
    }

    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
        anchor.addEventListener('click', smoothScroll);
    });

    // 添加标题点击事件：打开所有链接
    document.querySelectorAll('.app-category-title').forEach(title => {
        title.addEventListener('click', () => {
            const index = title.getAttribute('data-index');
            const category = appData[parseInt(index)];
            if (category && category.apps) {
                category.apps.forEach(app => {
                    window.open(app.link, '_blank');
                });
            }
        });
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    setupHamburgerMenu();
    renderCategories();
});
