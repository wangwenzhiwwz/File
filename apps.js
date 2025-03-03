function refreshPage() {
    location.reload(true);
}

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

const appData = [
    {
        title: "iOS",
        apps: [
            { name: "Hiddify", description: "VPN, Clash, SingBox,XRay,V2Ray", link: "https://apps.apple.com/us/app/hiddify-proxy-vpn/id6596777532?platform=iphone", icon: "./images/hiddify.png" },
            { name: "Shadowrocket", description: "基于规则的代理实用程序", link: "https://apps.apple.com/us/app/shadowrocket/id932747118", icon: "./images/shadorocket.webp" },
            { name: "QWeather", description: "和风天气提供全球天气预报", link: "https://www.qweather.com/en/app", icon: "./images/QWeather.webp" },
            { name: "ProMovie Recorder", description: "充分利用设备的摄像功能", link: "https://apps.apple.com/us/app/promovie-recorder/id1076481548", icon: "./images/ProMovie.webp" },
            { name: "LocalSend", description: "局域网发送文件", link: "https://apps.apple.com/us/app/localsend/id1661733229", icon: "./images/localsend.png" },
            { name: "Blackmagic Camera", description: "Introducing Digital Film for iPhone!", link: "https://www.blackmagicdesign.com/products/blackmagiccamera", icon: "./images/BlackMagicCamera.webp" },
            { name: "极影相机", description: "原名Fotorgear，口袋中的专业相机", link: "https://apps.apple.com/cn/app/%E6%9E%81%E5%BD%B1%E7%9B%B8%E6%9C%BA/id1459953293", icon: "./images/jiying.webp" },
            { name: "太阳测量师", description: "(Sun Surveyor)计画每一个日出和日落的时刻", link: "https://apps.apple.com/cn/app/%E5%A4%AA%E9%98%B3%E6%B5%8B%E9%87%8F%E5%B8%88-sun-surveyor/id525176875", icon: "./images/sun.webp" }
        ]
    },
    {
        title: "Android",
        apps: [
            { name: "VPN", description: "全平台VPN客户端", link: "https://www.wwz.im/article/VPN", icon: "./images/v2ray.png" },
            { name: "LocalSend", description: "局域网发送文件", link: "https://localsend.org/#/download", icon: "./images/localsend.png" },
            { name: "AuroraOSS", description: "Aurora Apps 开源软件", link: "https://auroraoss.com/", icon: "./images/auroralogo.png" },
            { name: "APkPure", description: "快速下载安卓APK文件", link: "https://www.wwz.im/article/APKPure", icon: "./images/apkpure.png" },
            { name: "酷安", description: "玩数码，上酷安 真实有趣的数码社区", link: "https://www.coolapk.com/", icon: "./images/CoolAPK.png" },
            { name: "Monitor+", description: "专业手机监视软件", link: "https://monitorplus.cc/", icon: "./images/monitor+.jpg" },
            { name: "MXPlayer", description: "强大的视频播放器", link: "https://github.com/wangwenzhiwwz/file/releases/download/APK/MX_Player_Pro-v1.68.4_build.apk", icon: "./images/MxPlayer.png" }
        ]
    },
    {
        title: "Ulefone",
        apps: [
            { name: "Wow时钟", description: "时钟/倒计时显示APP", link: "https://github.com/wangwenzhiwwz/file/releases/download/APK/Wow.clock.apk", icon: "./images/wow.png" },
            { name: "DU RECORDER", description: "The easiest way to record and livestream your screen", link: "https://www.du-recorder.com/", icon: "./images/du-recorder.png" },
            { name: "Battery显示", description: "查看手机剩余的电量", link: "./software/Battery.apk", icon: "./images/Battery.png" },
            { name: "时间悬浮", description: "查看当前准确时间", link: "./software/clock.apk", icon: "./images/clock.png" },
            { name: "CPDT Benchmark", description: "测存储（内存/NAND/NVMe/UFS/SD 卡）系统内存 (RAM) 的 I/O 速度", link: "https://play.google.com/store/apps/details?id=com.Saplin.CPDT", icon: "./images/CPDT.webp" },
            { name: "Androbench", description: "AndroBench是用于Android设备的基准测试工具", link: "./software/Androbench.apk", icon: "./images/Androbench.webp" },
            { name: "MyFLIR", description: "热成像APP", link: "./software/MyFLIR.apk", icon: "./images/MyFLIR.webp" },
            { name: "uSmart", description: "uSmart.Camera", link: "https://github.com/wangwenzhiwwz/file/releases/download/APK/uSmart.Camera_v1.0.070_230811.apk", icon: "./images/uSmart.png" },
            { name: "Chromascreen", description: "A free program for Android, by RocketJump", link: "./software/Chromascreen.apk", icon: "./images/Chromascreen.webp" },
            { name: "Focus Chart", description: "This app displays a focus chart with a siemens star.", link: "./software/Focus Chart.apk", icon: "./images/Focus Chart.webp" },
            { name: "Brevent", description: "在没有 root 权限的情况下将应用待机", link: "./software/Brevent - v4.2.21.1.apk", icon: "./images/Brevent.webp" },
            { name: "Scene", description: "强大而美观的系统管理工具", link: "./software/Scene - v8.0.15.apk", icon: "./images/Scene.webp" }
        ]
    },
    {
        title: "Web",
        apps: [
            { name: "WWZ.iM", description: "我的个人网站APP", link: "https://www.wwz.im/", icon: "https://wangwenzhi.eu.org/images/favicon_io/apple-touch-icon.png" },
            { name: "MY IP", description: "iP查询软件", link: "https://ip.wwz.im/", icon: "./images/myip.png" },
            { name: "ChatGPT", description: "对话方式进行交互的人工智能", link: "https://ai.wwz.im/", icon: "./images/openai.png" },
            { name: "Whimsical", description: "Where great ideas take shape", link: "https://w.wwz.im/", icon: "./images/whimsical.jfif" },
            { name: "闪电分镜", description: "轻松高效的 前期策划", link: "https://m.wwz.im/", icon: "./images/SDFJ.webp" },
            { name: "Nodeseek", description: "热爱Web开发服务器和极客", link: "https://www.nodeseek.com/", icon: "./images/NodeSeek.png" },
            { name: "V2EX", description: "创意工作者的社区", link: "https://www.v2ex.com/", icon: "./images/v2ex.png" },
            { name: "Noise", description: "Efficiency-follow", link: "https://spcqwserdvymm.com.vika.cn/share/shryNwH3HRgvzMTaZVAGx/fodkuzz5eaw0w", icon: "./images/noise.jpg" },
            { name: "AXU", description: "阿虚同学的储藏间", link: "https://axutongxue.com/", icon: "./images/axu.jpg" }
        ]
    },
    {
        title: "Windows",
        apps: [
            { name: "RustDesk", description: "安全可靠的远程桌面体验", link: "https://rustdesk.com/", icon: "./images/rustdesk.svg" },
            { name: "Parsec", description: "随时随地连接到工作、游戏或项目", link: "https://parsec.app/", icon: "./images/parsec.png" },
            { name: "Tabby SSH", description: "全平台SSH远程管理工具", link: "https://tabby.sh/", icon: "./images/tabby-logo.png" },
            { name: "V2rayN", description: "适用于Windows的GUI客户端", link: "https://www.wwz.im/article/VPN", icon: "./images/v2rayn.jpg" },
            { name: "Moo0", description: "视频图片转换压缩器", link: "https://www.wwz.im/article/Moo0", icon: "./images/Moo0.png" },
            { name: "Windows设置", description: "Windows 11实用设置工具", link: "https://github.com/wangwenzhiwwz/file/releases/download/Windows/Windows.3.6.5.exe", icon: "./images/windows.jpg" },
            { name: "数码荔枝", description: "专注于分享最新鲜优秀的正版软件", link: "https://lizhi.shop/", icon: "./images/smlz.jpg" },
            { name: "RuTracker.org", description: "最大的俄语torrent跟踪器", link: "https://rutracker.org/", icon: "./images/rutracker.jpg" },
            { name: "Lrepacks", description: "俄罗斯软件打包破解", link: "https://lrepacks.net/", icon: "./images/lrepacks.png" },
            { name: "CyberMania", description: "马来西亚Adobe软件破解", link: "https://www.cybermania.ws/?s=adobe", icon: "./images/CyberMania.png" },
            { name: "4K Downloader Download", description: "从 YouTube 下载 4K 超高清格式视频的程序", link: "https://lrepacks.net/repaki-programm-dlya-interneta/801-4k-downloader-repack-amp-portable.html", icon: "./images/4KDownloader.png" },
            { name: "BalenaEtcher", description: "BalenaEtcher是一个图形化烧录工具", link: "https://etcher.balena.io/", icon: "./images/balena.png" },
            { name: "Hbuilder X", description: "HX是轻如编辑器、强如IDE的合体版本", link: "https://www.dcloud.io/hbuilderx.html", icon: "./images/hbuilderx.png" },
            { name: "Billfish素材管家", description: "创意设计必备素材管理工具", link: "https://www.billfish.cn/", icon: "./images/billfish.png" },
            { name: "PureRef", description: "窗口悬浮显示图片，整理灵感", link: "https://www.pureref.com/", icon: "./images/PureRef.png" },
            { name: "MPC-BE", description: "免费开源视频播放器", link: "./software/MPC-BE.1.8.2.x64.exe", icon: "./images/MPC.jpg" },
            { name: "IrfanView", description: "图像查看/浏览/转换器", link: "https://www.irfanview.com/", icon: "./images/irfanview.jpg" },
            { name: "Adobe GenP", description: "Adobe通用补丁。可以修补adobe 产品。", link: "https://www.cybermania.ws/apps/genp/", icon: "./images/adobe genp.png" }
        ]
    },
    {
        title: "Mac",
        apps: [
            { name: "奇迹秀", description: "效率插件", link: "https://www.qijishow.com/down/index.html", icon: "./images/qijishow.svg" },
            { name: "Apple", description: "苹果官方网站", link: "https://www.apple.com/", icon: "./images/Apple.png" },
            { name: "MOC", description: "MacOS上平滑你的鼠标滚动效果", link: "https://mos.caldis.me/", icon: "./images/moc.png" },
            { name: "IINA", description: "适用于 macOS 的现代媒体播放器", link: "https://iina.io/", icon: "./images/iina.jpg" },
            { name: "CapTure One", description: "Professional Photo Editor", link: "https://jpsmile.com/phase-one-capture-one-23-pro/", icon: "./images/captureone.png" },
            { name: "Gyroflow", description: "陀螺仪视频稳定工具", link: "https://gyroflow.xyz/", icon: "./images/gyroflow.png" },
            { name: "捡屁笑", description: "简简单单的分享", link: "https://jpsmile.com/", icon: "./images/jpsmile.png" },
            { name: "Davinci Resolve", description: "专业的剪辑调色特效和音频后期制作软件", link: "https://www.blackmagicdesign.com/products/davinciresolve/studio", icon: "./images/Davinci-Resolve.png" },
            { name: "Adobe", description: "Adobe for Mac 2024通用补丁", link: "https://www.wwz.im/article/Adobe/", icon: "./images/Adobe.svg" },
            { name: "VS Code", description: "由微软开发且跨平台的免费源代码编辑器", link: "https://code.visualstudio.com/", icon: "./images/vscode.jpg" },
            { name: "HandBrake", description: "The open source video transcoder", link: "https://handbrake.fr/", icon: "./images/HandBrake.png" },
            { name: "WPS", description: "AI-Powered Office Suite for Everyone", link: "https://www.wps.com/", icon: "./images/wps.png" },
            { name: "Surge", description: "Advanced Network Toolbox for Mac & iOS", link: "https://nssurge.com/", icon: "./images/surge.png" },
            { name: "Appstorrent", description: "Сотни приложений, игр и плагинов для macOS", link: "https://appstorrent.ru/", icon: "./images/appstorrent.jpg" },
            { name: "MacGF", description: "专注于macOS系统软件下载", link: "https://www.macgf.com/", icon: "./images/macgf.png" }
        ]
    },
    {
        title: "Other",
        apps: [
            { name: "Emotn", description: "Free app store for all Android TV, TV Box and projector", link: "https://app.emotn.com/", icon: "./images/emotn.webp" },
            { name: "CN影院", description: "华人在线影院", link: "https://cnys.tv/", icon: "./images/nivideo.jfif" },
            { name: "US Address", description: "美国地址生成", link: "https://www.haoweichi.com/", icon: "./images/dizhi.png" },
            { name: "TheMatrix", description: "黑客帝国绿色乱码背景网站", link: "https://wangwenzhi.eu.org/TheMatrix/", icon: "./images/TheMatrix.png" },
            { name: "菜鸟工具", description: "为开发设计人员提供在线工具", link: "https://www.jyshare.com/", icon: "./images/cainiao.png" },
            { name: "Radio Garden", description: "位于荷兰的非营利组织的收音机", link: "https://radio.garden/", icon: "./images/radio.garden.png" },
            { name: "WebIntoApp", description: "在线将您的网站变为Android和 iOS 的专用应用程序", link: "https://www.webintoapp.com/", icon: "./images/webintoapp.png" },
            { name: "草料二维码", description: "一站式二维码生成工具，免费可用", link: "https://cli.im/", icon: "./images/cli.png" },
            { name: "V2raySE", description: " V2raySE 在线节点转换工具", link: "https://v2.v2rayse.com/node-convert/", icon: "./images/v2rayse.png" },
            { name: "VPS推荐", description: "分享VPS优惠性价比产品", link: "https://kejilion.pro/topvps/", icon: "./images/Cloud-icon.png" },
            { name: "Estk.me", description: "eSTK.me is a Removable eUICC solution", link: "./software/EasyEUICC-1.2.0.apk", icon: "./images/Estk.png" },
            { name: "RedteaGO", description: "Your top choice of eSIM for an enjoyable journey!", link: "https://esim.redteago.com/zh-CN/esim-mainland-hk-macao", icon: "./images/RedteaGO.jpg" }
        ]
    }
];

function createAppItem(app) {
    return `
        <div class="app-item">
            <a href="${app.link}" class="app-link" target="_blank" rel="noopener noreferrer">
                <img class="app-icon" src="${app.icon}" alt="${app.name} Icon" loading="lazy" onerror="this.src='https://via.placeholder.com/60?text=Image+Not+Found';">
                <h3 class="app-name">${app.name}</h3>
                <p class="app-description">${app.description}</p>
            </a>
        </div>
    `;
}

function createCategory(category, index) {
    const appItems = category.apps.map(createAppItem).join('');
    return `
        <section class="app-category" id="${category.title.toLowerCase()}" style="animation-delay: ${index * 0.1}s;">
            <h2 class="app-category-title">${category.title}</h2>
            <div class="app-grid">${appItems}</div>
        </section>
    `;
}

function renderCategories() {
    const container = document.getElementById('app-container');
    const fragment = document.createDocumentFragment();

    appData.forEach((category, index) => {
        const div = document.createElement('div');
        div.innerHTML = createCategory(category, index);
        fragment.appendChild(div.firstElementChild);
    });

    container.appendChild(fragment);

    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
            document.querySelector('.nav-links').classList.remove('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', renderCategories);
