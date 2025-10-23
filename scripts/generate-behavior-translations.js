const fs = require('fs');
const path = require('path');

// Read the behaviors.ts file
const behaviorsPath = path.join(__dirname, '../data/behaviors.ts');
const behaviorsContent = fs.readFileSync(behaviorsPath, 'utf-8');

// Extract the dogBehaviors array
const behaviorsMatch = behaviorsContent.match(/export const dogBehaviors: DogBehavior\[\] = \[([\s\S]*?)\];/);
if (!behaviorsMatch) {
  console.error('Could not find dogBehaviors array');
  process.exit(1);
}

// Parse the behaviors data (simplified parsing)
const behaviorsData = eval(`[${behaviorsMatch[1]}]`);

console.log(`Found ${behaviorsData.length} behaviors`);

// Comprehensive Chinese translation mapping for all 25 behaviors
const chineseTranslations = {
  'tail-wagging': {
    name: '摇尾巴',
    description: '狗通过摇尾巴来传达各种情绪和意图。',
    meaning: '其含义因速度、位置和环境而异。宽幅的中等高度摇尾通常表示快乐。高而僵硬的摇尾可能表示警觉或攻击性。低摇尾可能表示不安全感或顺从。',
    whatToDo: [
      '观察整体肢体语言，不仅仅是尾巴',
      '注意摇尾的速度和高度',
      '考虑环境和背景',
      '寻找其他信号，如耳朵位置和面部表情'
    ],
    whenToWorry: [
      '摇尾时身体姿势僵硬',
      '高频快速摇尾并露出牙齿',
      '尾巴夹在腿间并颤抖',
      '尾巴位置突然变化并伴有其他压力迹象'
    ],
    tips: [
      '放松的全身摇尾是最积极的信号',
      '每只狗都有独特的摇尾模式',
      '幼犬从其他狗那里学习尾巴沟通',
      '摇尾巴并不总是友好的标志'
    ]
  },
  'barking': {
    name: '吠叫',
    description: '吠叫是狗主要的声音沟通方式，用于表达各种需求和情绪。',
    meaning: '狗吠叫有许多原因：警报、寻求关注、表达兴奋、恐惧、无聊或回应其他狗。音调、持续时间和频率传达不同的信息。',
    whatToDo: [
      '识别吠叫的触发因素或原因',
      '不要对狗大喊（它们可能认为你也在吠叫）',
      '奖励安静的行为',
      '提供充足的运动和心理刺激',
      '考虑训练"安静"或"够了"等命令'
    ],
    whenToWorry: [
      '过度吠叫扰乱日常生活',
      '吠叫行为突然增加',
      '吠叫伴随攻击性',
      '对着虚空强迫性吠叫'
    ],
    tips: [
      '不同类型的吠叫有不同的含义',
      '某些品种天生更爱叫',
      '吠叫可能是分离焦虑的迹象',
      '未经训练师咨询切勿使用止吠项圈'
    ]
  },
  'digging': {
    name: '挖掘',
    description: '挖掘是狗的自然本能，通常与狩猎、寻求舒适或娱乐有关。',
    meaning: '狗挖掘有多种原因：创造一个凉爽的地方躺下、埋藏宝物、因无聊、逃跑或跟随气味轨迹。某些品种有更强的挖掘本能。',
    whatToDo: [
      '提供指定的挖掘区域',
      '增加运动和心理刺激',
      '监督户外时间',
      '重定向到适当的活动',
      '考虑挖掘背后的原因'
    ],
    whenToWorry: [
      '反复挖掘以逃离院子',
      '强迫性挖掘导致爪子受伤',
      '在室内挖掘（地毯、家具）',
      '老年犬突然开始挖掘'
    ],
    tips: [
      '梗犬和猎犬有强烈的挖掘本能',
      '炎热天气会增加为降温而挖掘的行为',
      '无聊是常见原因',
      '切勿事后惩罚'
    ]
  },
  'jumping': {
    name: '跳起来',
    description: '跳向人是常见的社交行为，特别是在幼犬和兴奋的狗身上。',
    meaning: '狗跳起来是为了打招呼、寻求关注、表达兴奋或建立支配地位。这通常是一种因人类反应而得到强化的学习行为。',
    whatToDo: [
      '转身离开并忽视跳跃行为',
      '奖励四爪着地的行为',
      '教授替代的问候行为（坐下）',
      '保持一致 - 不要有时允许',
      '要求访客遵循相同的规则'
    ],
    whenToWorry: [
      '伴随咆哮的攻击性跳跃',
      '导致受伤的跳跃',
      '尽管训练仍无法停止',
      '跳跃结合轻咬'
    ],
    tips: [
      '切勿用膝盖顶或推开跳跃的狗',
      '一致性是停止这种行为的关键',
      '在问候情况前进行运动',
      '应保护幼儿'
    ]
  },
  'licking': {
    name: '舔',
    description: '舔是狗的自然行为，根据环境有各种含义。',
    meaning: '狗舔是为了表达感情、寻求关注、探索环境、自我安抚或因为喜欢味道。母狗舔幼犬进行梳理和建立联系。',
    whatToDo: [
      '允许适度的感情舔舐',
      '如果过度则重定向',
      '如果过度自舔则检查皮肤问题',
      '被舔后洗手',
      '如果不想要则训练替代行为'
    ],
    whenToWorry: [
      '强迫性舔舐表面',
      '过度舔舐导致皮肤刺激',
      '舔舐伴随其他压力迹象',
      '舔舐行为突然增加'
    ],
    tips: [
      '舔舐会为狗释放内啡肽',
      '有些狗天生比其他狗更爱舔',
      '可能是恶心或消化问题的迹象',
      '可能表明焦虑或压力'
    ]
  },
  'chewing': {
    name: '咀嚼',
    description: '咀嚼是所有年龄段狗的自然且重要的行为。',
    meaning: '幼犬在出牙期咀嚼。成年狗咀嚼以保持下颚强壮、牙齿清洁，以及缓解压力或无聊。这也是探索世界的一种方式。',
    whatToDo: [
      '提供适当的咀嚼玩具',
      '为家里做好防幼犬准备',
      '增加运动和心理刺激',
      '对良好的咀嚼行为使用正向强化',
      '轮换玩具以保持兴趣'
    ],
    whenToWorry: [
      '破坏性咀嚼造成重大损害',
      '咀嚼危险物品',
      '吞食非食物物品（异食癖）',
      '老年犬过度咀嚼'
    ],
    tips: [
      '幼犬需要咀嚼 - 这不是不当行为',
      '提供多种咀嚼质地',
      '冷冻玩具可以舒缓出牙幼犬',
      '切勿给煮熟的骨头'
    ]
  },
  'play-bow': {
    name: '玩耍鞠躬',
    description: '玩耍鞠躬是一种独特的姿势，狗降低前端同时保持后部抬起。',
    meaning: '这是明确的玩耍邀请，表明随后的任何行为都是好玩的，而不是攻击性的。这是一种通用的狗沟通信号。',
    whatToDo: [
      '如果合适则参与玩耍',
      '鼓励这种积极的社交行为',
      '监督玩耍时间',
      '注意过度兴奋的迹象'
    ],
    whenToWorry: [
      '很少需要担心 - 这是积极的行为',
      '如果伴随僵硬的肢体语言',
      '如果玩耍升级为攻击性'
    ],
    tips: [
      '狗甚至对人类使用这个动作',
      '这是从幼犬期学到的社交技能',
      '有些狗会加上吠叫或玩耍咆哮',
      '表明良好的社会化'
    ]
  },
  'resource-guarding': {
    name: '资源保护',
    description: '资源保护是指狗保护食物、玩具、空间或人免受他人侵犯。',
    meaning: '这是一种自然的生存本能，但可能变得有问题。狗可能会冻结、咆哮、咬或咬以保护有价值的资源。',
    whatToDo: [
      '切勿惩罚咆哮（这是警告）',
      '与专业训练师合作',
      '用较低价值物品练习交易游戏',
      '在安静、无压力的区域喂食',
      '避免对保护物品的对抗'
    ],
    whenToWorry: [
      '保护行为升级为咬',
      '保护人或空间',
      '保护强度增加',
      '多种资源保护情况'
    ],
    tips: [
      '预防比纠正更容易',
      '切勿直接接近保护的狗',
      '某些品种更容易保护',
      '可能在任何年龄发展'
    ]
  },
  'zoomies': {
    name: '疯跑（FRAPs）',
    description: '狂热随机活动期（FRAPs），俗称"疯跑"，是突然爆发的能量。',
    meaning: '疯跑是狗释放被压抑能量或表达兴奋的自然方式。洗澡后、傍晚或非常高兴时很常见。',
    whatToDo: [
      '确保区域安全',
      '让它们跑出来',
      '不要追逐或妨碍',
      '享受这个表演',
      '如果频繁则增加定期运动'
    ],
    whenToWorry: [
      '很少需要担心 - 这是正常行为',
      '如果它们伤害自己',
      '如果不断发生',
      '如果伴随压力迹象'
    ],
    tips: [
      '在幼犬和年轻狗中更常见',
      '通常持续1-5分钟',
      '可能在可预测的时间发生',
      '快乐健康狗的标志'
    ]
  },
  'circling-before-lying': {
    name: '躺下前转圈',
    description: '许多狗在安顿下来休息前会转一次或多次圈。',
    meaning: '这是从野生祖先那里继承的行为，它们转圈以压平草地、检查威胁和创造舒适的睡眠地点。这也有助于调节体温。',
    whatToDo: [
      '允许这种自然行为',
      '确保舒适的休息区域',
      '注意过度转圈'
    ],
    whenToWorry: [
      '过度转圈（超过3-4次）',
      '转圈后难以安顿',
      '转圈伴随呜咽或痛苦',
      '可能表明疼痛或神经问题'
    ],
    tips: [
      '完全正常的行为',
      '有些狗每次都这样，有些从不',
      '在某些品种中可能更明显',
      '是它们筑巢本能的一部分'
    ]
  },
  'head-tilting': {
    name: '歪头',
    description: '狗在倾听或试图理解某事时经常歪头。',
    meaning: '歪头可能帮助狗定位声音来源、看过口鼻部或处理新信息。这也是一种能获得积极人类反应的行为。',
    whatToDo: [
      '与你的狗交谈 - 它们在听',
      '享受这种可爱的行为',
      '将其用作它们参与的信号'
    ],
    whenToWorry: [
      '持续向一侧歪头',
      '歪头伴随失去平衡',
      '伴随耳朵抓挠或分泌物',
      '可能表明耳朵感染或前庭问题'
    ],
    tips: [
      '通常发生在新词或声音时',
      '有些狗比其他狗更常这样做',
      '可能试图阅读你的表情',
      '可以训练为可爱的技巧'
    ]
  },
  'yawning': {
    name: '打哈欠',
    description: '狗在各种情况下打哈欠，并不总是因为疲倦。',
    meaning: '打哈欠可能表示疲倦，但也可能是压力、期待或作为缓解紧张的平静信号。狗可能在困惑或试图自我安抚时打哈欠。',
    whatToDo: [
      '评估打哈欠的背景',
      '寻找其他压力指标',
      '如果打哈欠似乎与焦虑有关则减轻压力',
      '如果它们看起来疲倦则允许休息'
    ],
    whenToWorry: [
      '过度打哈欠伴随喘气',
      '打哈欠伴随其他压力迹象',
      '可能表明疼痛或恶心'
    ],
    tips: [
      '打哈欠是一种平静信号',
      '可能从人类传染给狗',
      '在训练课程中很常见',
      '睡前或醒后正常'
    ]
  },
  'growling': {
    name: '咆哮',
    description: '咆哮是一种重要的警告信号，切勿惩罚。',
    meaning: '咆哮是狗说"我不舒服"或"退后"的方式。它可能表示恐惧、占有欲、疼痛或攻击前的警告。这是防止升级为咬的重要沟通。',
    whatToDo: [
      '切勿惩罚咆哮 - 这是宝贵的沟通',
      '识别触发咆哮的原因',
      '给狗空间',
      '解决潜在原因（恐惧、疼痛、资源保护）',
      '与专业训练师合作处理攻击性问题',
      '教导儿童尊重咆哮的狗'
    ],
    whenToWorry: [
      '频繁咆哮且无明显触发因素',
      '咆哮升级为咬或咬',
      '咆哮伴随僵硬的肢体语言',
      '处理时咆哮（可能表明疼痛）'
    ],
    tips: [
      '咆哮是咬之前的最后警告',
      '惩罚咆哮会让狗在没有警告的情况下咬',
      '玩耍咆哮与攻击性咆哮不同',
      '观察整个身体，不仅仅是声音'
    ]
  },
  'whining': {
    name: '呜咽',
    description: '呜咽是表达需求、兴奋或痛苦的声音沟通。',
    meaning: '狗呜咽以请求关注、食物或外出。它也可能表示焦虑、疼痛或兴奋。幼犬比成年犬更多呜咽，可能因分离焦虑而呜咽。',
    whatToDo: [
      '确定原因（需求与寻求关注）',
      '不要奖励寻求关注的呜咽',
      '满足合理需求（厕所、食物、水）',
      '提供运动和心理刺激',
      '教授替代沟通方法'
    ],
    whenToWorry: [
      '无明确原因的过度呜咽',
      '呜咽伴随疼痛迹象（跛行、弓背）',
      '呜咽行为突然增加',
      '呜咽伴随破坏性行为'
    ],
    tips: [
      '完全忽略寻求关注的呜咽',
      '在回应前等待安静',
      '老年犬可能因认知衰退而呜咽',
      '可能表明医疗问题 - 首先排除这些'
    ]
  },
  'pawing': {
    name: '用爪子拍你',
    description: '狗用爪子沟通和获得关注。',
    meaning: '拍爪通常是寻求关注的行为或请求抚摸。幼犬向母亲拍爪以获取食物。它也可能表示焦虑或一种能获得结果的学习行为。',
    whatToDo: [
      '决定是否要鼓励这种行为',
      '如果不想强化则忽视拍爪',
      '重定向到替代行为（坐下）',
      '改为奖励平静行为',
      '检查是否有特定需求（食物、外出）'
    ],
    whenToWorry: [
      '过度拍脸或眼睛',
      '拍爪伴随呜咽或痛苦',
      '拍爪伴随焦虑迹象',
      '过度拍爪导致自我伤害'
    ],
    tips: [
      '拍爪时给予关注会强化它',
      '有些狗在兴奋或高兴时拍爪',
      '可以教为"握手"或"击掌"技巧',
      '教"四爪着地"以实现更平静的互动'
    ]
  },
  'mounting': {
    name: '骑跨',
    description: '骑跨是正常的狗行为，有各种非性含义。',
    meaning: '尽管普遍认为，骑跨通常不是性行为。它可能表示玩耍、过度兴奋、压力、支配展示或仅仅是一种学习行为。在完整和绝育犬中都很常见。',
    whatToDo: [
      '平静地打断并重定向',
      '如果过度刺激则将狗从情况中移除',
      '教授"下来"或"离开"命令',
      '增加运动和心理刺激',
      '不要允许骑跨人'
    ],
    whenToWorry: [
      '强迫性骑跨行为',
      '导致与其他狗打架的骑跨',
      '骑跨伴随攻击性',
      '无法重定向或停止行为'
    ],
    tips: [
      '在幼犬和年轻狗中更常见',
      '绝育可能减少但不会消除行为',
      '通常与压力有关或来自过度兴奋',
      '有些狗在不知道该做什么时骑跨'
    ]
  },
  'sniffing': {
    name: '过度嗅闻',
    description: '嗅闻是狗探索和理解世界的方式。',
    meaning: '狗有令人难以置信的嗅觉，通过气味收集信息。嗅闻其他狗、人和物体是正常的。允许在散步时嗅闻对狗在心理上很刺激且很重要。',
    whatToDo: [
      '在散步时允许合理的嗅闻时间',
      '当该继续前进时使用"走吧"命令',
      '提供专门的嗅闻时间',
      '尝试气味工作或鼻子游戏',
      '不要不断地把狗从嗅闻中拉开'
    ],
    whenToWorry: [
      '在一个区域强迫性嗅闻',
      '嗅闻伴随舔舐或吃物体',
      '无法专注于其他任何事情',
      '可能表明焦虑或强迫症'
    ],
    tips: [
      '嗅闻是心理运动 - 非常累人',
      '"嗅闻散步"很丰富',
      '让狗通过嗅闻来问候',
      '某些品种被培育来更多地使用鼻子'
    ]
  },
  'panting': {
    name: '喘气',
    description: '喘气有多种功能，并不总是与温度有关。',
    meaning: '狗喘气以降温（它们不像人类那样出汗）。然而，喘气也可能表示压力、焦虑、兴奋、疼痛或疾病。背景很重要。',
    whatToDo: [
      '确保狗没有过热',
      '提供水',
      '评估压力或焦虑触发因素',
      '如果过度则注意其他症状',
      '提供凉爽、阴凉的区域'
    ],
    whenToWorry: [
      '休息时过度喘气',
      '喘气伴随蓝色或苍白的牙龈',
      '突然开始剧烈喘气',
      '喘气伴随痛苦、呜咽或踱步',
      '可能表明中暑、疼痛或心肺问题'
    ],
    tips: [
      '短头犬更容易喘气',
      '压力性喘气更快更浅',
      '运动后或炎热时正常',
      '夜间喘气可能表明疼痛或认知问题'
    ]
  },
  'scratching-door': {
    name: '抓门',
    description: '抓门可能表示需要外出或分离焦虑。',
    meaning: '狗抓门以沟通需求（厕所、加入你、外出）或因分离时的焦虑。如果得到强化，它可能成为破坏性习惯。',
    whatToDo: [
      '安装铃铛让狗改为按铃',
      '教授替代沟通',
      '如果存在则解决分离焦虑',
      '不要强化焦虑性抓门',
      '提供适当的抓挠出口',
      '如果合适则考虑狗门'
    ],
    whenToWorry: [
      '损坏门或伤害爪子',
      '疯狂抓门伴随焦虑迹象',
      '无法在门附近安定',
      '抓门伴随嚎叫或破坏'
    ],
    tips: [
      '教按铃作为替代',
      '按时间表带狗外出以防止抓门',
      '通过训练解决潜在焦虑',
      '如需要用防抓护板保护门'
    ]
  },
  'leaning': {
    name: '靠在你身上',
    description: '狗因各种感情或焦虑原因靠在主人身上。',
    meaning: '通常，靠是感情的标志和想要亲近。有些狗在焦虑时为安全感而靠。大型品种更倾向于靠。这通常是积极的联系行为。',
    whatToDo: [
      '如果舒适则享受这种感情',
      '如果需要空间则轻轻重定向',
      '评估是否基于恐惧（雷暴、陌生人）',
      '如果焦虑则提供安慰',
      '如果想阻止则不要强化'
    ],
    whenToWorry: [
      '很少需要担心 - 通常是积极的',
      '如果伴随颤抖或恐惧',
      '如果狗似乎无法独立站立',
      '很少可能表明平衡或虚弱问题'
    ],
    tips: [
      '巨型品种是出了名的爱靠',
      '信任和感情的标志',
      '有些狗靠而不是坐',
      '对焦虑的狗有平静作用'
    ]
  },
  'spinning': {
    name: '转圈',
    description: '转圈行为可能是正常的兴奋或强迫症。',
    meaning: '兴奋时（进餐时间、散步时间）短暂转圈是正常的。过度转圈可能表示焦虑、神经问题或强迫症。牧羊品种更容易出现。',
    whatToDo: [
      '对于正常兴奋，平静地重定向',
      '教授"安定"或"等待"命令',
      '在触发时间减少兴奋',
      '对于过度转圈，咨询兽医和行为专家',
      '增加身体和心理运动'
    ],
    whenToWorry: [
      '长时间强迫性转圈',
      '没有明显触发因素的转圈',
      '无法停止转圈',
      '转圈导致自我伤害或疲惫',
      '可能表明神经或行为障碍'
    ],
    tips: [
      '安定前短暂转圈是正常的',
      '牧羊品种更容易转圈',
      '可能发展为强迫症',
      '切勿鼓励过度转圈'
    ]
  },
  'eating-grass': {
    name: '吃草',
    description: '吃草是常见且通常无害的行为。',
    meaning: '狗吃草有多种原因：在恶心时诱发呕吐、获取纤维、因无聊或只是因为喜欢味道。大多数专家认为这是正常行为。',
    whatToDo: [
      '如果安全则允许偶尔吃草',
      '确保草没有用化学品处理',
      '如果吃大量草则提供高纤维饮食',
      '如果与无聊有关则提供心理刺激',
      '监测过度进食或呕吐'
    ],
    whenToWorry: [
      '不断或疯狂地吃草',
      '吃草后频繁呕吐',
      '吃草伴随食欲不振',
      '可能表明消化问题或恶心',
      '可能摄入农药或毒素'
    ],
    tips: [
      '大多数吃草是正常的',
      '通常不会导致呕吐',
      '可能是祖先的饮食行为',
      '确保草没有化学品'
    ]
  },
  'rolling-in-smells': {
    name: '在臭东西里打滚',
    description: '狗喜欢在恶臭物质中打滚 - 对主人来说是令人困惑的行为。',
    meaning: '这种本能行为可能源于狼掩盖自己的气味以进行狩猎或与狼群沟通有趣的发现。狗被特别刺鼻的气味所吸引。',
    whatToDo: [
      '在有已知臭物品的区域监督',
      '使用强有力的"离开"命令',
      '在有死动物的区域用牵引绳',
      '准备好紧急洗澡用品',
      '接受这是正常的狗行为'
    ],
    whenToWorry: [
      '通常不需要担心 - 只是不愉快',
      '注意物质引起的皮肤刺激',
      '确保它们没有在毒素中打滚'
    ],
    tips: [
      '所有狗都这样做 - 这是本能',
      '它们更喜欢越臭越好',
      '无法完全训练出来',
      '随时准备酶清洁剂和洗发水'
    ]
  },
  'coprophagia': {
    name: '食粪症（吃粪便）',
    description: '吃粪便是令人不安但相对常见的行为。',
    meaning: '狗可能因营养缺乏、酶缺乏、无聊、压力、从母亲那里学到的行为或仅仅因为可用而吃粪便。在幼犬中更常见。',
    whatToDo: [
      '立即清理粪便',
      '确保高质量、易消化的食物',
      '向兽医排除医疗问题',
      '增加心理刺激',
      '使用"离开"命令',
      '考虑酶补充剂',
      '将猫砂盆放在够不到的地方'
    ],
    whenToWorry: [
      '持续的食粪症可能导致寄生虫',
      '如果伴随体重减轻或毛发不良',
      '可能表明吸收不良症',
      '可能表明营养缺乏'
    ],
    tips: [
      '母狗吃幼犬粪便（正常）',
      '幼犬通常会长大后改掉',
      '猫粪便对狗特别有吸引力',
      '有商业产品可用于阻止'
    ]
  }
};

// Generate English and Chinese translations
const enTranslations = {};
const zhTranslations = {};

// Add category translations
const categoryTranslations = {
  en: {
    Communication: 'Communication',
    Social: 'Social',
    Instinct: 'Instinct',
    Problem: 'Problem',
    Training: 'Training'
  },
  zh: {
    Communication: '沟通',
    Social: '社交',
    Instinct: '本能',
    Problem: '问题',
    Training: '训练'
  }
};

// Add category translations to the output
Object.entries(categoryTranslations.en).forEach(([key, value]) => {
  enTranslations[`category${key}`] = value;
});

Object.entries(categoryTranslations.zh).forEach(([key, value]) => {
  zhTranslations[`category${key}`] = value;
});

// Generate behavior-specific translations
behaviorsData.forEach(behavior => {
  const prefix = `behavior_${behavior.id}`;
  const zhBehavior = chineseTranslations[behavior.id];

  if (!zhBehavior) {
    console.error(`Missing Chinese translation for behavior: ${behavior.id}`);
    return;
  }

  // English
  enTranslations[`${prefix}_name`] = behavior.name;
  enTranslations[`${prefix}_description`] = behavior.description;
  enTranslations[`${prefix}_meaning`] = behavior.meaning;

  // What to do
  enTranslations[`${prefix}_whatToDo`] = String(behavior.whatToDo.length);
  behavior.whatToDo.forEach((item, idx) => {
    enTranslations[`${prefix}_whatToDo_${idx}`] = item;
  });

  // When to worry
  enTranslations[`${prefix}_whenToWorry`] = String(behavior.whenToWorry.length);
  behavior.whenToWorry.forEach((item, idx) => {
    enTranslations[`${prefix}_whenToWorry_${idx}`] = item;
  });

  // Tips
  enTranslations[`${prefix}_tips`] = String(behavior.tips.length);
  behavior.tips.forEach((tip, idx) => {
    enTranslations[`${prefix}_tip_${idx}`] = tip;
  });

  // Chinese
  zhTranslations[`${prefix}_name`] = zhBehavior.name;
  zhTranslations[`${prefix}_description`] = zhBehavior.description;
  zhTranslations[`${prefix}_meaning`] = zhBehavior.meaning;

  // What to do (Chinese)
  zhTranslations[`${prefix}_whatToDo`] = String(zhBehavior.whatToDo.length);
  zhBehavior.whatToDo.forEach((item, idx) => {
    zhTranslations[`${prefix}_whatToDo_${idx}`] = item;
  });

  // When to worry (Chinese)
  zhTranslations[`${prefix}_whenToWorry`] = String(zhBehavior.whenToWorry.length);
  zhBehavior.whenToWorry.forEach((item, idx) => {
    zhTranslations[`${prefix}_whenToWorry_${idx}`] = item;
  });

  // Tips (Chinese)
  zhTranslations[`${prefix}_tips`] = String(zhBehavior.tips.length);
  zhBehavior.tips.forEach((tip, idx) => {
    zhTranslations[`${prefix}_tip_${idx}`] = tip;
  });
});

// Output the translations
const outputDir = path.join(__dirname, 'output');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(
  path.join(outputDir, 'behaviors-en.json'),
  JSON.stringify(enTranslations, null, 2)
);
fs.writeFileSync(
  path.join(outputDir, 'behaviors-zh.json'),
  JSON.stringify(zhTranslations, null, 2)
);

console.log('\n✅ Successfully generated behavior translations with proper Chinese!');
console.log(`   English translations: ${Object.keys(enTranslations).length} keys`);
console.log(`   Chinese translations: ${Object.keys(zhTranslations).length} keys`);
console.log(`   Output files: ${outputDir}/behaviors-en.json and behaviors-zh.json`);
