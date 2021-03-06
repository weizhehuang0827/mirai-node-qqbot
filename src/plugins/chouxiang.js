transTable = {
    "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", "10": "🔟",
    "圣文森特和格林纳丁斯": "🇻🇨", "特里斯坦达库尼亚群岛": "🇹🇦", "斯瓦尔巴群岛和扬马延": "🇸🇯", "圣皮埃尔和密克隆群岛": "🇵🇲", "瓦利斯和富图纳群岛": "🇼🇫", "特克斯和凯科斯群岛": "🇹🇨",
    "赫德与麦克唐纳群岛": "🇭🇲", "特立尼达和多巴哥": "🇹🇹", "圣多美和普林西比": "🇸🇹", "巴布亚新几内亚": "🇵🇬", "皮特凯恩群岛": "🇵🇳", "巴勒斯坦领土": "🇵🇸", "美属萨摩亚群岛": "🇦🇸",
    "美属维尔京群岛": "🇻🇮", "法属波利尼西亚": "🇵🇫", "密克罗尼西亚": "🇫🇲", "英属印度洋领地": "🇮🇴", "安提瓜和巴布达": "🇦🇬", "吉尔吉斯斯坦": "🇰🇬", "法国南方的领土": "🇹🇫",
    "休达和梅利利亚": "🇪🇦", "圣基茨和尼维斯": "🇰🇳", "多明尼加共和国": "🇩🇴", "乌兹别克斯坦": "🇺🇿", "新喀里多尼亚": "🇳🇨", "英属维尔京群岛": "🇻🇬", "北马里亚纳群岛": "🇲🇵",
    "南乔治亚岛和南桑威奇群岛": "🇬🇸", "100分": "💯", "哥伦比亚": "🇨🇴", "克利珀顿岛": "🇨🇵", "库克群岛": "🇨🇰", "瓦努阿图": "🇻🇺", "哥斯达黎加": "🇨🇷", "科特迪瓦": "🇨🇮",
    "中非共和国": "🇨🇫", "委内瑞拉": "🇻🇪", "津巴布韦": "🇿🇼", "梵蒂冈城": "🇻🇦", "科科斯群岛": "🇨🇨", "塞浦路斯": "🇨🇾", "捷克共和国": "🇨🇿", "美国离岛": "🇺🇲", "心心相印": "💕",
    "迪戈加西亚": "🇩🇬", "坦桑尼亚": "🇹🇿", "多米尼加": "🇩🇲", "白俄罗斯": "🇧🇾", "博茨瓦纳": "🇧🇼", "阿尔及利亚": "🇩🇿", "公共汽车": "🚌", "生日蛋糕": "🎂", "土库曼斯坦": "🇹🇲",
    "厄瓜多尔": "🇪🇨", "爱沙尼亚": "🇪🇪", "塔吉克斯坦": "🇹🇯", "不得好死": "不得🏠", "西撒哈拉": "🇪🇭", "荷兰加勒比": "🇧🇶", "人造卫星": "🛰️", "巧克力棒": "🍫", "玻利维亚": "🇧🇴",
    "斯威士兰": "🇸🇿", "马提尼克岛": "🇲🇶", "马达加斯加": "🇲🇬", "萨尔瓦多": "🇸🇻", "禁止进入": "⛔", "埃塞俄比亚": "🇪🇹", "福克兰群岛": "🇫🇰", "圣巴泰勒米": "🇧🇱", "塞内加尔": "🇸🇳",
    "圣马力诺": "🇸🇲", "塞拉利昂": "🇸🇱", "斯洛伐克": "🇸🇰", "保加利亚": "🇧🇬", "斯洛文尼亚": "🇸🇮", "圣赫勒拿": "🇸🇭", "法罗群岛": "🇫🇴", "格林纳达": "🇬🇩", "格鲁吉亚": "🇬🇪",
    "法属圭亚那": "🇬🇫", "所罗门群岛": "🇸🇧", "沙特阿拉伯": "🇸🇦", "直布罗陀": "🇬🇮", "瓜德罗普岛": "🇬🇵", "塞尔维亚": "🇷🇸", "罗马尼亚": "🇷🇴", "赤道几内亚": "🇬🇶",
    "布基纳法索": "🇧🇫", "危地马拉": "🇬🇹", "几内亚比绍": "🇬🇼", "为比利时": "🇧🇪", "孟加拉国": "🇧🇩", "波多黎各": "🇵🇷", "阿塞拜疆": "🇦🇿", "奥兰群岛": "🇦🇽", "洪都拉斯": "🇭🇳",
    "巴基斯坦": "🇵🇰", "克罗地亚": "🇭🇷", "澳大利亚": "🇦🇺", "亚美尼亚": "🇦🇲", "加那利群岛": "🇮🇨", "为以色列": "🇮🇱", "阿尔巴尼亚": "🇦🇱", "阿森松岛": "🇦🇨", "世界地图": "🗺",
    "基里巴斯": "🇰🇮", "圣诞老人": "🎅", "圣卢西亚": "🇱🇨", "列支敦士登": "🇱🇮", "尼加拉瓜": "🇳🇮", "尼日利亚": "🇳🇬", "诺福克岛": "🇳🇫", "斯里兰卡": "🇱🇰", "单曲循环": "🔂",
    "纳米比亚": "🇳🇦", "莫桑比克": "🇲🇿", "马来西亚": "🇲🇾", "利比里亚": "🇱🇷", "拉脱维亚": "🇱🇻", "马尔代夫": "🇲🇻", "毛里求斯": "🇲🇺", "摩尔多瓦": "🇲🇩", "蒙特塞拉特": "🇲🇸",
    "毛里塔尼亚": "🇲🇷", "马绍尔群岛": "🇲🇭", "厄立特里亚": "🇪🇷", "搞快点": "GKD", "圣马丁岛": "🇸🇽", "蝴蝶结": "🎀", "水晶球": "🔮", "马其顿": "🇲🇰", "鲤鱼旗": "🎏",
    "日本人": "🎎", "圣马丁": "🇲🇫", "泰迪熊": "🧸", "马耳他": "🇲🇹", "摩纳哥": "🇲🇨", "摩洛哥": "🇲🇦", "利比亚": "🇱🇾", "马拉维": "🇲🇼", "卢森堡": "🇱🇺", "立陶宛": "🇱🇹",
    "莱索托": "🇱🇸", "墨西哥": "🇲🇽", "尼日尔": "🇳🇪", "灭火器": "🧨", "温度计": "🌡", "黎巴嫩": "🇱🇧", "购物袋": "🛍", "三叉戟": "🔱", "太阳镜": "🕶️", "科威特": "🇰🇼",
    "收音机": "📻", "打印机": "🖨", "尼泊尔": "🇳🇵", "科摩罗": "🇰🇲", "指南针": "🧭", "柬埔寨": "🇰🇭", "新西兰": "🇳🇿", "肯尼亚": "🇰🇪", "DVD": "📀", "摄影机": "🎥",
    "牙买加": "🇯🇲", "照相机": "📷", "意大利": "🇮🇹", "录像机": "📹", "放大镜": "🔍", "伊拉克": "🇮🇶", "小提琴": "🎻", "手电筒": "🔦", "笔记本": "📔", "巴拿马": "🇵🇦",
    "爱尔兰": "🇮🇪", "信用卡": "💳", "萨克斯": "🎷", "匈牙利": "🇭🇺", "备忘录": "📝", "菲律宾": "🇵🇭", "打游戏": "🎮", "葡萄牙": "🇵🇹", "文件夹": "📁", "圭亚那": "🇬🇾",
    "羽毛球": "🏸", "长颈鹿": "🦒", "巴拉圭": "🇵🇾", "卡塔尔": "🇶🇦", "回形针": "📎", "乒乓球": "🏓", "俄罗斯": "🇷🇺", "几内亚": "🇬🇳", "冈比亚": "🇬🇲", "格陵兰": "🇬🇱",
    "卢旺达": "🇷🇼", "垃圾桶": "🗑", "根西岛": "🇬🇬", "塞舌尔": "🇸🇨", "保龄球": "🎳", "橄榄球": "🏈", "工具箱": "🧰", "DNA": "🧬", "显微镜": "🔬", "新加坡": "🇸🇬",
    "索马里": "🇸🇴", "苏里南": "🇸🇷", "望远镜": "🔭", "不说话": "🙊", "洗洁精": "🧴", "南苏丹": "🇸🇸", "西班牙": "🇪🇸", "叙利亚": "🇸🇾", "摩托车": "🏍️", "没眼看": "🙈",
    "托克劳": "🇹🇰", "东帝汶": "🇹🇱", "突尼斯": "🇹🇳", "土耳其": "🇹🇷", "图瓦卢": "🇹🇻", "公交车": "🚌", "卫生纸": "🧻", "吉布提": "🇩🇯", "乌克兰": "🇺🇦", "乌干达": "🇺🇬",
    "急救车": "🚑", "乌拉圭": "🇺🇾", "圣诞岛": "🇨🇽", "库拉索": "🇨🇼", "佛得角": "🇨🇻", "心相印": "💕", "消防车": "🚒", "萨摩亚": "🇼🇸", "科索沃": "🇽🇰", "出租车": "🚕",
    "喀麦隆": "🇨🇲", "高跟鞋": "👠", "马约特": "🇾🇹", "拖拉机": "🚜", "手提袋": "👜", "刚果布": "🇨🇬", "赞比亚": "🇿🇲", "刚果金": "🇨🇩", "自行车": "🚲", "加拿大": "🇨🇦",
    "伯利兹": "🇧🇿", "红绿灯": "🚦", "冰淇淋": "🍦", "布维岛": "🇧🇻", "ATM": "🏧", "巴哈马": "🇧🇸", "残疾人": "♿", "巧克力": "🍫", "向日葵": "🌻", "甜甜圈": "🍭", "百慕大": "🇧🇲",
    "汉堡包": "🍔", "伊斯兰": "☪", "布隆迪": "🇧🇮", "穆斯林": "☪", "三明治": "🥪", "仙人掌": "🌵", "四叶草": "🍀", "爆米花": "🍿", "巴多斯": "🇧🇧", "白羊座": "♈", "胡萝卜": "🥕",
    "外星人": "👽", "阿鲁巴": "🇦🇼", "西红柿": "🍅", "奥地利": "🇦🇹", "二次元": "二刺螈", "阿根廷": "🇦🇷", "南极洲": "🇦🇶", "安哥拉": "🇦🇴", "猕猴桃": "🥝", "龙卷风": "🌪️",
    "安圭拉": "🇦🇮", "圣诞树": "🎄", "阿富汗": "🇦🇫", "阿联酋": "🇦🇪", "安道尔": "🇦🇩", "高压电": "⚡", "金牛座": "♉", "双子座": "♊", "巨蟹座": "♋", "狮子座": "♌", "处女座": "♍",
    "天秤座": "♎", "天蝎座": "♏", "农民工": "👷", "射手座": "♐", "摩羯座": "♑", "孙笑川": "孙🐶", "水瓶座": "♒", "双鱼座": "♓", "蛇夫座": "⛎", "透你妈": "tony🐎",
    "剪刀手": "✌️", "返回键": "◀", "电影院": "🎦", "比基尼": "👙", "哈萨克斯坦": "🇰🇿", "蚊子": "🦟", "开曼群岛": "🇰🇾", "挥手": "👋", "鼓掌": "👏", "举手": "🙌", "合十": "🈴",
    "祈祷": "🙏", "握手": "🤝", "耳朵": "👂", "免费": "🆓", "鼻子": "👃", "眼睛": "👀", "脚印": "👣", "足迹": "👣", "大脑": "🧠", "骨头": "🦴", "牙齿": "🦷", "眼镜": "👓",
    "点赞": "丶👍", "必死": "biss", "好的": "👌", "T恤": "👕", "袜子": "🧦", "裙子": "👗", "ok": "👌", "手掌": "🖐️", "回收": "♻", "无限": "♾", "无穷": "♾", "大哥": "带哥",
    "大师": "带师", "信号": "📶", "笔芯": "🤞", "退出": "⏏", "暂停": "⏹", "快退": "⏪", "比心": "🤞", "快进": "⏩", "播放": "▶", "肌肉": "💪", "重放": "🔁", "强壮": "💪",
    "家人": "👪", "跳舞": "💃", "圣诞": "🎅", "秃子": "👨", "工人": "👷", "警察": "👮", "弟弟": "👶", "老子": "👴", "老人": "👴", "爷爷": "👴", "女人": "👩", "波黑": "🇧🇦",
    "巴林": "🇧🇭", "贝宁": "🇧🇯", "清真": "☪", "阴阳": "☯", "原子": "⚛", "返回": "🔙", "女装": "👚", "绕圈": "🔄", "循环": "🔄", "左右": "↔", "雪花": "❄️", "辐射": "☢",
    "色情": "🔞", "成人": "🔞", "禁止": "🚫", "文莱": "🇧🇳", "警告": "⚠", "婴儿": "🚼", "女厕": "🚺", "男厕": "🚹", "巴西": "🇧🇷", "轮椅": "♿", "不丹": "🇧🇹", "钱包": "👛",
    "音乐": "🎵", "铃铛": "🔔", "音量": "🔈", "静音": "🔇", "红中": "🀄", "瑞士": "🇨🇭", "扑克": "🃏", "鞋子": "👞", "梅花": "♣", "方块": "♦", "红桃": "♥", "黑桃": "♠",
    "飓风": "🌀", "旋风": "🌀", "智利": "🇨🇱", "帽子": "🎩", "口红": "💄", "昏睡": "💤", "想法": "💭", "信息": "💬", "中国": "🇨🇳", "满分": "💯", "黑心": "🖤", "心碎": "💔",
    "古巴": "🇨🇺", "德国": "🇩🇪", "心跳": "💓", "行李": "🧳", "心动": "💓", "扎心": "💘", "香烟": "🚬", "雨伞": "☂️", "海绵": "🧽", "蒙眼": "🙈", "肥皂": "🧼", "丹麦": "🇩🇰",
    "卷纸": "🧻", "篮子": "🧺", "扫把": "🧹", "扫帚": "🧹", "埃及": "🇪🇬", "欧盟": "🇪🇺", "浴缸": "🛁", "淋浴": "🚿", "马桶": "🚽", "厕所": "🚾", "不听": "🙉", "芬兰": "🇫🇮",
    "禁言": "🙊", "爆炸": "💥", "奔跑": "🏃💨", "猴子": "🐵", "雷达": "📡", "斐济": "🇫🇯", "法国": "🇫🇷", "基因": "🧬", "加蓬": "🇬🇦", "试管": "🧪", "磁铁": "🧲", "浣熊": "🦝",
    "磁力": "🧲", "英国": "🇬🇧", "锁链": "⛓", "连接": "🔗", "天平": "⚖", "齿轮": "⚙", "扳手": "🔧", "狮子": "🦁", "修理": "🔧", "盾牌": "🛡", "手枪": "🔫", "匕首": "🗡",
    "锤子": "🔨", "钥匙": "🔑", "老虎": "🐯", "加纳": "🇬🇭", "斑马": "🦓", "剪刀": "✂", "猪鼻": "🐽", "尺子": "📏", "希腊": "🇬🇷", "图钉": "📌", "骆驼": "🐫", "减少": "📉",
    "降低": "📉", "下降": "📉", "关岛": "🇬🇺", "增大": "📈", "增加": "📈", "增长": "📈", "日历": "📅", "香港": "🇭🇰", "大象": "🐘", "便签": "📝", "海地": "🇭🇹", "蜡笔": "🖍",
    "画笔": "🖌", "老鼠": "🐭", "钢笔": "🖊", "铅笔": "✏", "邮箱": "📮", "收到": "📥", "接收": "📥", "发送": "📤", "邮件": "📧", "兔子": "🐰", "考拉": "🐨", "收据": "🧾",
    "印尼": "🇮🇩", "欧元": "💶", "美元": "💵", "日元": "💴", "钱袋": "💰", "标签": "🏷", "书签": "📑", "报纸": "📰", "熊猫": "🐼", "袋鼠": "🦘", "公鸡": "🐓", "曼岛": "🇮🇲",
    "印度": "🇮🇳", "鸽子": "🕊️", "企鹅": "🐧", "蜡烛": "🕯", "放大": "🔍", "伊朗": "🇮🇷", "冰岛": "🇮🇸", "泽西": "🇯🇪", "相机": "📷", "电视": "📺", "上映": "📽", "放映": "📽",
    "约旦": "🇯🇴", "算盘": "🧮", "日本": "🇯🇵", "光盘": "💿", "硬盘": "💽", "鼠标": "🖱", "打印": "🖨", "朝鲜": "🇰🇵", "键盘": "⌨", "电脑": "💻", "插头": "🔌", "电池": "🔋",
    "电话": "☎", "手机": "📱", "收听": "📻", "韩国": "🇰🇷", "腾讯": "🐧", "钻石": "💎", "老挝": "🇱🇦", "老鹰": "🦅", "黑山": "🇲🇪", "马里": "🇲🇱", "鸭子": "🦆", "礼物": "🎁",
    "天鹅": "🦢", "缅甸": "🇲🇲", "红包": "🧧", "蒙古": "🇲🇳", "澳门": "🇲🇴", "祝贺": "🎉", "恭喜": "🎉", "气球": "🎈", "荷兰": "🇳🇱", "挪威": "🇳🇴", "鹦鹉": "🦜", "闹钟": "⏰",
    "蛤蟆": "🐸", "农民": "🐲鸣", "沙漏": "⌛", "响铃": "🛎", "鲸鱼": "🐋", "海豚": "🐬", "带鱼": "🐠", "瑙鲁": "🇳🇷", "纽埃": "🇳🇺", "评论": "🍎🚢", "鲨鱼": "🦈", "睡觉": "🛌",
    "洗澡": "🛀", "炸弹": "💣", "章鱼": "🐙", "情书": "💌", "射箭": "🏹", "电影": "🎬", "剪辑": "🎬", "阿曼": "🇴🇲", "喇叭": "📢", "钢琴": "🎹", "吉他": "🎸", "秘鲁": "🇵🇪",
    "耳机": "🎧", "话筒": "🎤", "毛线": "🧶", "艺术": "🎨", "螃蟹": "🦀", "画板": "🎨", "色子": "🎲", "骰子": "🎲", "波兰": "🇵🇱", "游戏": "🎮", "钓鱼": "🎣", "鱼竿": "🎣",
    "拳击": "🥊", "帕劳": "🇵🇼", "团圆": "🇷🇪", "苏丹": "🇸🇩", "网球": "🎾", "瑞典": "🇸🇪", "排球": "🏐", "篮球": "🏀", "棒球": "⚾", "足球": "⚽", "奖牌": "🏅", "奖杯": "🏆",
    "勋章": "🎖️", "龙虾": "🦞", "骑车": "🚴", "举重": "🏋️", "打球": "⛹️", "乌贼": "🦑", "游泳": "🏊", "滑雪": "⛷️", "骑马": "🏇", "蜗牛": "🐌", "座位": "💺", "卫星": "🛰️",
    "乍得": "🇹🇩", "火箭": "🚀", "飞碟": "🛸", "流星": "🌠", "烟花": "🎆", "石像": "🗿", "赛车": "🏎️", "多哥": "🇹🇬", "摩托": "🏍️", "蝴蝶": "🦋", "火山": "🌋", "泰国": "🇹🇭",
    "好死": "🏠", "家庭": "🏠", "房子": "🏠", "医院": "🏥", "银行": "🏦", "宾馆": "🏨", "旅馆": "🏨", "学校": "🏫", "高铁": "🚄", "火车": "🚆", "地铁": "🚇", "汤加": "🇹🇴",
    "台湾": "🇹🇼", "美国": "🇺🇸", "越南": "🇻🇳", "警车": "🚓", "也门": "🇾🇪", "汽车": "🚗", "虫子": "🐛", "南非": "🇿🇦", "女生": "👧", "单车": "🚲", "加油": "⛽", "流批": "🐮🍺",
    "蚂蚁": "🐜", "飞机": "✈️", "酒杯": "🍷", "蜜蜂": "🐝", "瓢虫": "🐞", "蜘蛛": "🕷️", "蛛网": "🕸️", "那是": "🌶💩", "啤酒": "🍺", "干杯": "🍻", "花朵": "🌸", "筷子": "🥢",
    "勺子": "🥄", "惨剧": "🍴", "餐具": "🍴", "饭团": "🍙", "米饭": "🍚", "鲜花": "🌸", "玫瑰": "🌹", "面条": "🍜", "寿司": "🍣", "月饼": "🥮", "饺子": "🥟", "女孩": "👧",
    "曲奇": "🍪", "vaalacat": "yyds", "小丑": "🤡",
    "蛋糕": "🎂", "尼哥": "👨🏿", "黑人": "👨🏿", "樱花": "🌸", "男人": "👨", "男生": "👦", "奶瓶": "🍼", "牛奶": "🥛", "哥哥": "👦", "汉堡": "🍔", "薯条": "🍟", "披萨": "🍕",
    "火腿": "🌭", "热狗": "🌭", "还行": "🌊⭐", "虾仁": "🍤", "杀人": "🍤", "男孩": "👦", "枫叶": "🍁", "培根": "🥓", "鸡腿": "🍗", "落叶": "🍂", "奶酪": "🧀", "烙饼": "🥞",
    "煎饼": "🥞", "面包": "🍞", "花生": "🥜", "蘑菇": "🍄", "黄瓜": "🥒", "地球": "🌏", "世界": "🌏", "月亮": "🌙", "辣椒": "🌶️", "萝卜": "🥕", "废物": "five", "番薯": "🥔",
    "土豆": "🥔", "太阳": "☀️", "茄子": "🍆", "生气": "👿", "愤怒": "👿", "草莓": "🍓", "樱桃": "🍒", "明星": "🌟", "桃子": "🍑", "梨子": "🍐", "多云": "⛅", "苹果": "🍎",
    "凤梨": "🍍", "菠萝": "🍍", "下雨": "🌧️", "香蕉": "🍌", "下雪": "🌨️", "柠檬": "🍋", "果子": "果汁", "西瓜": "🍉", "葡萄": "🍇", "彩虹": "🌈", "笑哭": "😂", "闪电": "⚡",
    "波浪": "🌊", "雪人": "☃️", "上下": "↕", "的": "💧", "雪": "❄️", "水": "💧", "电": "⚡", "火": "🔥", "波": "🌊", "闪": "✨", "雾": "🌫️", "瓜": "🍉", "酸": "🍋", "雨": "🌧️",
    "蕉": "🍌", "梨": "🍐", "云": "☁️", "桃": "🍑", "星": "⭐", "茄": "🍆", "日": "☀️", "了": "🌶️", "那": "🌶️", "辣": "🌶️", "肉": "🍖", "盐": "🧂", "汤": "🥣", "煎": "🍳",
    "树": "🌲", "糖": "🍬", "面": "🍜", "花": "🌸", "饭": "🍚", "筷": "🥢", "啤": "🍺", "蛛": "🕷️", "酒": "🍺", "瓢": "🐞", "嫖": "🐞", "批": "🍺", "蜂": "🐝", "逼": "🍺",
    "蚁": "🐜", "船": "🚢", "车": "🚗", "虫": "🐛", "蝶": "🦋", "山": "⛰️", "爬": "爪巴", "游": "🏊", "虾": "🦐", "票": "🎫", "蟹": "🦀", "画": "🎨", "章": "🐙", "洞": "🕳️",
    "鲨": "🦈", "睡": "🛌", "刀": "🔪", "砖": "🧱", "豚": "🐬", "油": "🛢", "鲸": "🐋", "铃": "🛎", "龙": "🐲", "沙": "⌛", "射": "🐍", "蛇": "🐍", "乖": "🐢", "龟": "🐢",
    "蛤": "🐸", "表": "⌚", "钟": "⏰", "结": "🎀", "鸭": "🦆", "礼": "🎁", "鹰": "🦅", "线": "🧵", "钻": "💎", "灯": "💡", "鸽": "🕊️", "亮": "💡", "鸟": "🐦", "本": "📕",
    "鸡": "🐔", "书": "📕", "纸": "📄", "熊": "🐻", "兔": "🐰", "信": "✉", "鼠": "🐭", "笔": "🖊", "象": "🐘", "记": "📝", "增": "📈", "驼": "🐫", "降": "📉", "尺": "📏",
    "猪": "🐷", "牛": "🐮", "剪": "✂", "虎": "🐯", "锁": "🔒", "妈": "🐴", "马": "🐴", "狮": "🦁", "修": "🔧", "磁": "🧲", "猫": "🐱", "狗": "🐶", "针": "💉", "猴": "🐵",
    "药": "💊", "奔": "💨", "滴": "💦", "炸": "💥", "要": "💊", "门": "🚪", "们": "🚪", "床": "🛏", "扫": "🧹", "看": "👀", "皂": "🧼", "伞": "☂️", "烟": "🚬", "爱": "💓",
    "困": "💤", "蒸": "♨", "停": "🛑", "牌": "🃏", "鞋": "👞", "包": "📦", "中": "🀄", "音": "🎵", "绕": "🔄", "环": "⭕", "裙": "👗", "圈": "⭕", "袜": "🧦", "圆": "⭕",
    "对": "✅", "错": "❌", "加": "➕", "嘴": "👄", "舔": "👅", "齿": "🦷", "减": "➖", "骨": "🦴", "除": "➗", "智": "🧠", "?": "¿", "!": "❗", "井": "", "您": "宁",
    "酷": "🆒", "鼻": "👃", "耳": "👂", "新": "🆕", "月": "🈷", "有": "🈶", "得": "🉐", "割": "🈹", "啪": "👏", "无": "🈚", "禁": "🈲", "不": "8️⃣", "拳": "👊", "坏": "👎",
    "差": "👎", "棒": "👍", "赞": "👍", "可": "🉑", "点": "丶", "好": "👍", "申": "🈸", "空": "🈳", "手": "🖐️", "祝": "㊗", "秘": "㊙", "满": "🈵", "零": "0️⃣", "耶": "✌️",
    "下": "⬇", "上": "⬆", "右": "➡", "左": "⬅", "指": "👈", "足": "🦶", "脚": "🦶", "腿": "🦵", "一": "1️⃣", "壮": "💪", "强": "💪", "二": "2️⃣", "三": "3️⃣", "舞": "💃",
    "四": "4️⃣", "跑": "🏃", "走": "🚶", "服": "佛", "五": "5️⃣", "六": "6️⃣", "七": "7️⃣", "八": "8️⃣", "九": "9️⃣", "十": "🔟", "？": "¿", "啊": "嗷", "爷": "👴", "哦": "嗷",
    "女": "👩", "呀": "嗷", "内": "👙", "行": "⭐", "男": "👨", "铁": "Fe", "奶": "🍼", "憨": "🍔", "钱": "💰", "屎": "💩", "球": "⚽", "鬼": "👻", "死": "💀", "怒": "💢",
    "吐": "🤮", "草": "🌿", "晕": "😵", "哭": "😭", "亲": "💋", "色": "😍", "斧": "🪓", "笑": "😁", "苹": "🍎", "信封": "✉", "吧": "8️⃣", "我": "👴", "真": "💉"
}

const func_chouxiang = async (mirai, sender, msg, query) => {
    return new Promise((resolve, reject) => {
        after = chouxiang(query[1].toLowerCase())
        if (after == query[1]) { msg.reply("不够抽象，爪巴"); }
        else { msg.reply(after); }
    })
}


const chouxiang = (origin) => {
    pre = origin
    for (i in transTable) {
        ans = pre.replace(i, transTable[i])
        while(pre!=ans){
            pre=ans
            ans = ans.replace(i, transTable[i])
        }
    }
    return ans;
}

module.exports = {
    func_chouxiang
}