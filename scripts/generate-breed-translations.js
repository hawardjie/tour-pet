const fs = require('fs');
const path = require('path');

// Read the breeds.ts file
const breedsPath = path.join(__dirname, '../data/breeds.ts');
const breedsContent = fs.readFileSync(breedsPath, 'utf-8');

// Extract the dogBreeds array
const breedsMatch = breedsContent.match(/export const dogBreeds: DogBreed\[\] = \[([\s\S]*?)\];/);
if (!breedsMatch) {
  console.error('Could not find dogBreeds array');
  process.exit(1);
}

// Parse the breeds data (simplified parsing)
const breedsData = eval(`[${breedsMatch[1]}]`);

console.log(`Found ${breedsData.length} breeds`);

// Generate English translations
const enTranslations = {};
const zhTranslations = {};

// Add common translations
enTranslations.sizeSmall = "Small";
enTranslations.sizeMedium = "Medium";
enTranslations.sizeLarge = "Large";
enTranslations.sizeGiant = "Giant";
enTranslations.groupSporting = "Sporting";
enTranslations.groupHerding = "Herding";
enTranslations.groupHound = "Hound";
enTranslations['groupNon-Sporting'] = "Non-Sporting";
enTranslations.groupToy = "Toy";
enTranslations.groupWorking = "Working";
enTranslations.exerciseLow = "Low";
enTranslations.exerciseModerate = "Moderate";
enTranslations.exerciseHigh = "High";
enTranslations.exerciseVeryHigh = "Very High";
enTranslations.groomingLow = "Low";
enTranslations.groomingModerate = "Moderate";
enTranslations.groomingHigh = "High";
enTranslations.trainingEasy = "Easy";
enTranslations.trainingModerate = "Moderate";
enTranslations.trainingChallenging = "Challenging";

zhTranslations.sizeSmall = "小型";
zhTranslations.sizeMedium = "中型";
zhTranslations.sizeLarge = "大型";
zhTranslations.sizeGiant = "巨型";
zhTranslations.groupSporting = "运动犬";
zhTranslations.groupHerding = "牧羊犬";
zhTranslations.groupHound = "猎犬";
zhTranslations['groupNon-Sporting'] = "非运动犬";
zhTranslations.groupToy = "玩具犬";
zhTranslations.groupWorking = "工作犬";
zhTranslations.exerciseLow = "低";
zhTranslations.exerciseModerate = "中等";
zhTranslations.exerciseHigh = "高";
zhTranslations.exerciseVeryHigh = "非常高";
zhTranslations.groomingLow = "低";
zhTranslations.groomingModerate = "中等";
zhTranslations.groomingHigh = "高";
zhTranslations.trainingEasy = "容易";
zhTranslations.trainingModerate = "中等";
zhTranslations.trainingChallenging = "有挑战性";

// Chinese translations mapping for common terms
const chineseTranslations = {
  // Breed names
  'Golden Retriever': '金毛寻回犬',
  'Labrador Retriever': '拉布拉多寻回犬',
  'German Shepherd': '德国牧羊犬',
  'French Bulldog': '法国斗牛犬',
  'Beagle': '比格犬',
  'Poodle (Standard)': '标准贵宾犬',
  'Bulldog': '斗牛犬',
  'Rottweiler': '罗威纳犬',
  'Yorkshire Terrier': '约克夏梗',
  'Boxer': '拳师犬',
  'Border Collie': '边境牧羊犬',
  'Australian Shepherd': '澳大利亚牧羊犬',
  'Siberian Husky': '西伯利亚哈士奇',
  'Dachshund': '腊肠犬',
  'Great Dane': '大丹犬',
  'Pembroke Welsh Corgi': '彭布罗克威尔士柯基犬',
  'Shih Tzu': '西施犬',
  'Boston Terrier': '波士顿梗',
  'Pomeranian': '博美犬',
  'Cavalier King Charles Spaniel': '骑士查理王小猎犬',
  'Doberman Pinscher': '杜宾犬',
  'Bernese Mountain Dog': '伯恩山犬',
  'Cocker Spaniel': '可卡犬',
  'Akita': '秋田犬',
  'Chihuahua': '吉娃娃',

  // Origins
  'Scotland': '苏格兰',
  'Canada': '加拿大',
  'Germany': '德国',
  'France': '法国',
  'England': '英格兰',
  'Germany/France': '德国/法国',
  'United Kingdom': '英国',
  'United States': '美国',
  'Siberia': '西伯利亚',
  'Wales': '威尔士',
  'Tibet/China': '西藏/中国',
  'Germany/Poland': '德国/波兰',
  'Switzerland': '瑞士',
  'Japan': '日本',
  'Mexico': '墨西哥'
};

// Generate breed-specific translations
breedsData.forEach(breed => {
  const prefix = `breed_${breed.id}`;

  // English
  enTranslations[`${prefix}_name`] = breed.name;
  enTranslations[`${prefix}_description`] = breed.description;
  enTranslations[`${prefix}_origin`] = breed.origin;
  enTranslations[`${prefix}_lifespan`] = breed.lifespan;
  enTranslations[`${prefix}_exercise`] = breed.exercise;
  enTranslations[`${prefix}_grooming`] = breed.grooming;
  enTranslations[`${prefix}_training`] = breed.training;

  // Temperament
  enTranslations[`${prefix}_temperament`] = String(breed.temperament.length);
  breed.temperament.forEach((trait, idx) => {
    enTranslations[`${prefix}_temperament_${idx}`] = trait;
  });

  // Characteristics
  Object.entries(breed.characteristics).forEach(([key, value]) => {
    enTranslations[`${prefix}_characteristic_${key}`] = key.replace(/([A-Z])/g, ' $1').trim();
  });

  // Care notes
  enTranslations[`${prefix}_careNotes`] = String(breed.careNotes.length);
  breed.careNotes.forEach((note, idx) => {
    enTranslations[`${prefix}_careNote_${idx}`] = note;
  });

  // Chinese - simplified translations
  zhTranslations[`${prefix}_name`] = chineseTranslations[breed.name] || breed.name;
  zhTranslations[`${prefix}_description`] = translateDescription(breed.name, breed.description);
  zhTranslations[`${prefix}_origin`] = chineseTranslations[breed.origin] || breed.origin;
  zhTranslations[`${prefix}_lifespan`] = breed.lifespan.replace('years', '年');
  zhTranslations[`${prefix}_exercise`] = translateExercise(breed.exercise);
  zhTranslations[`${prefix}_grooming`] = translateGrooming(breed.grooming);
  zhTranslations[`${prefix}_training`] = translateTraining(breed.training);

  // Temperament (Chinese)
  zhTranslations[`${prefix}_temperament`] = String(breed.temperament.length);
  breed.temperament.forEach((trait, idx) => {
    zhTranslations[`${prefix}_temperament_${idx}`] = translateTrait(trait);
  });

  // Characteristics (Chinese)
  Object.entries(breed.characteristics).forEach(([key, value]) => {
    zhTranslations[`${prefix}_characteristic_${key}`] = translateCharacteristic(key);
  });

  // Care notes (Chinese)
  zhTranslations[`${prefix}_careNotes`] = String(breed.careNotes.length);
  breed.careNotes.forEach((note, idx) => {
    zhTranslations[`${prefix}_careNote_${idx}`] = translateCareNote(note);
  });
});

// Helper function to translate breed descriptions
function translateDescription(breedName, description) {
  const translations = {
    'Golden Retriever': '金毛寻回犬是友好、聪明、忠诚的狗狗，是出色的家庭伴侣。它们以美丽的金色毛发和温和的性格而闻名。',
    'Labrador Retriever': '拉布拉多是美国最受欢迎的犬种，以其友好的性格、聪明和多功能性而闻名。它们是优秀的家庭宠物、服务犬和狩猎伴侣。',
    'German Shepherd': '德国牧羊犬是高度聪明、多功能的工作犬，以其勇气、忠诚和可训练性而闻名。它们在警察工作、搜救和家庭守卫方面表现出色。',
    'French Bulldog': '法国斗牛犬是紧凑、肌肉发达的狗狗，有着独特的蝙蝠耳朵。它们是充满爱心、适应性强的伴侣，非常适合公寓生活。',
    'Beagle': '比格犬是小型猎犬，拥有难以置信的嗅觉和快乐的个性。它们是优秀的家庭宠物，以其独特的嚎叫声而闻名。',
    'Poodle (Standard)': '贵宾犬是高度聪明、运动型的狗狗，毛发不易引起过敏。它们有三种尺寸，在服从和敏捷训练方面表现出色。',
    'Bulldog': '斗牛犬是温和、有尊严的狗狗，有着独特的皱纹脸和扁平的鼻子。尽管外表强悍，但它们是甜蜜可靠的伴侣。',
    'Rottweiler': '罗威纳犬是强大、忠诚的守卫犬，充满自信和平静。通过适当的训练和社交化，它们是忠诚的家庭伴侣。',
    'Yorkshire Terrier': '约克夏梗是个性张扬的小型犬。它们长长的丝滑毛发和活泼的性格使它们成为受欢迎的伴侣犬。',
    'Boxer': '拳师犬是精力充沛、爱玩耍的狗狗，以其对儿童的耐心和保护天性而闻名。它们有着独特的方形下颚和肌肉发达的身材。',
    'Border Collie': '边境牧羊犬被广泛认为是最聪明的犬种。最初培育用于牧羊，它们精力充沛、运动能力强，在犬类运动和工作角色中表现出色。',
    'Australian Shepherd': '尽管名字如此，澳大利亚牧羊犬是在加利福尼亚培育的。这些多功能的牧羊犬以其引人注目的毛色、智慧和无限的精力而闻名。',
    'Siberian Husky': '西伯利亚哈士奇是由西伯利亚楚科奇人培育用于拉雪橇的引人注目的犬种。它们以蓝色眼睛、厚毛发和令人难以置信的耐力而闻名。',
    'Dachshund': '腊肠犬，也被称为"热狗"，是为了猎獾而培育的。它们长长的身体和短短的腿使它们一眼就能认出。它们有光滑毛、刚毛和长毛三种类型。',
    'Great Dane': '大丹犬是以巨大的体型和平静的举止而闻名的温柔巨人。尽管体型巨大，但它们充满爱心，是优秀的家庭伴侣。',
    'Pembroke Welsh Corgi': '彭布罗克威尔士柯基犬是个性张扬的小型牧羊犬。作为伊丽莎白二世女王的首选犬种而闻名，这些聪明的狗狗活跃、忠诚、可训练。',
    'Shih Tzu': '西施犬是为中国皇室培育的伴侣犬。这些小型、强壮的狗狗有着飘逸的毛发和友好的性格，是理想的膝上犬和伴侣。',
    'Boston Terrier': '波士顿梗，绰号"美国绅士"，是紧凑、举止优雅的狗狗，有着燕尾服般的标记。它们聪明、可训练，是优秀的城市犬。',
    'Pomeranian': '博美犬是个性张扬、有着蓬松双层毛的小型犬。尽管体型小，但它们自信、警觉，是出人意料的优秀看门狗。',
    'Cavalier King Charles Spaniel': '骑士查理王小猎犬是温和、充满爱心的玩具西班牙猎犬，以其富有表情的眼睛和丝滑的毛发而闻名。它们能很好地适应各种生活方式，是优秀的治疗犬。',
    'Doberman Pinscher': '杜宾犬是强大、运动型的守卫犬。通过适当的训练和社交化，它们是忠诚的家庭伴侣和优秀的保护犬。',
    'Bernese Mountain Dog': '伯恩山犬是有着引人注目的三色毛发的大型温柔巨人。最初在瑞士阿尔卑斯山作为农场犬培育，它们平静、忠诚，对家庭非常友好。',
    'Cocker Spaniel': '可卡犬是快乐、温和的运动犬，有着美丽的飘逸毛发。它们最初作为猎犬培育，现在是以其甜美性格而闻名的受欢迎家庭伴侣。',
    'Akita': '秋田犬是为守卫皇室和猎取大型猎物而培育的大型、强大的日本犬。它们有尊严、忠诚，对家人忠诚但对陌生人冷淡。',
    'Chihuahua': '吉娃娃是最小的犬种，体重不超过6磅。尽管体型小，但它们有着巨大的个性，对主人极其忠诚。'
  };
  return translations[breedName] || description;
}

// Helper function to translate temperament traits
function translateTrait(trait) {
  const traits = {
    'Friendly': '友好',
    'Intelligent': '聪明',
    'Devoted': '忠诚',
    'Trustworthy': '值得信赖',
    'Reliable': '可靠',
    'Outgoing': '外向',
    'Even-tempered': '性格平和',
    'Gentle': '温和',
    'Agile': '敏捷',
    'Confident': '自信',
    'Courageous': '勇敢',
    'Loyal': '忠诚',
    'Watchful': '警惕',
    'Playful': '爱玩',
    'Adaptable': '适应性强',
    'Smart': '聪明',
    'Affectionate': '充满爱心',
    'Alert': '警觉',
    'Merry': '快乐',
    'Curious': '好奇',
    'Determined': '坚定',
    'Active': '活跃',
    'Trainable': '可训练',
    'Instinctual': '本能的',
    'Docile': '温顺',
    'Willful': '任性',
    'Gregarious': '合群',
    'Loving': '有爱',
    'Obedient': '听话',
    'Fearless': '无畏',
    'Sprightly': '活泼',
    'Tomboyish': '假小子',
    'Bold': '大胆',
    'Energetic': '精力充沛',
    'Bright': '聪慧',
    'Responsive': '反应灵敏',
    'Tenacious': '顽强',
    'Work-oriented': '工作导向',
    'Exuberant': '热情洋溢',
    'Good-natured': '性格好',
    'Outgoing': '外向',
    'Mischievous': '调皮',
    'Clever': '聪颖',
    'Stubborn': '固执',
    'Lively': '活泼',
    'Patient': '耐心',
    'Dependable': '可靠',
    'Reserved': '矜持',
    'Calm': '冷静',
    'Strong': '强壮',
    'Happy': '快乐',
    'Trusting': '信任',
    'Graceful': '优雅',
    'Dignified': '有尊严',
    'Inquisitive': '好问',
    'Sociable': '善于交际',
    'Amusing': '有趣',
    'Charming': '迷人',
    'Sassy': '活泼',
    'Protective': '保护欲强'
  };
  return traits[trait] || trait;
}

// Helper function to translate care notes (simplified - would need full translation in production)
function translateCareNote(note) {
  // This is a simplified version - in production, you'd want full translations
  return note
    .replace(/Requires?/g, '需要')
    .replace(/daily exercise/g, '每日运动')
    .replace(/mental stimulation/g, '精神刺激')
    .replace(/regular brushing/g, '定期梳理')
    .replace(/Needs?/g, '需要')
    .replace(/Prone to/g, '容易患')
    .replace(/hip dysplasia/g, '髋关节发育不良')
    .replace(/Thrives on/g, '在...中茁壮成长')
    .replace(/human companionship/g, '人类陪伴')
    .replace(/Excellent/g, '优秀的')
    .replace(/swimmers/g, '游泳者')
    .replace(/love/g, '喜欢')
    .replace(/water activities/g, '水上活动')
    .replace(/Need plenty of/g, '需要大量')
    .replace(/prevent obesity/g, '防止肥胖')
    .replace(/Short coat/g, '短毛')
    .replace(/minimal grooming/g, '最少的美容')
    .replace(/Highly/g, '高度')
    .replace(/food-motivated/g, '食物驱动')
    .replace(/excellent for training/g, '非常适合训练')
    .replace(/May be/g, '可能')
    .replace(/elbow dysplasia/g, '肘关节发育不良')
    .replace(/retrieve/g, '捡回')
    .replace(/play fetch/g, '玩捡球')
    .replace(/extensive/g, '大量的')
    .replace(/mental challenges/g, '精神挑战')
    .replace(/early socialization/g, '早期社交化')
    .replace(/consistent training/g, '持续训练')
    .replace(/Double coat sheds/g, '双层毛脱落')
    .replace(/heavily/g, '严重')
    .replace(/twice a year/g, '一年两次')
    .replace(/Natural protectors/g, '天生的保护者')
    .replace(/wary of strangers/g, '对陌生人警惕')
    .replace(/Brachycephalic breed/g, '短头颅犬种')
    .replace(/avoid overheating/g, '避免过热')
    .replace(/Cannot swim well/g, '游泳能力差')
    .replace(/body structure/g, '身体结构')
    .replace(/short walks sufficient/g, '短途散步足够')
    .replace(/Facial wrinkles/g, '面部皱纹')
    .replace(/regular cleaning/g, '定期清洁')
    .replace(/breathing difficulties/g, '呼吸困难')
    .replace(/Follow their nose/g, '跟随它们的鼻子')
    .replace(/secure fencing essential/g, '牢固的围栏必不可少')
    .replace(/Can be vocal/g, '可能很吵')
    .replace(/howl or bay/g, '嚎叫或吠叫')
    .replace(/stubborn in training/g, '训练中固执')
    .replace(/companionship/g, '陪伴')
    .replace(/don't do well alone/g, '不适合独处')
    .replace(/professional grooming/g, '专业美容')
    .replace(/every/g, '每')
    .replace(/weeks/g, '周')
    .replace(/Hypoallergenic coat/g, '低过敏性毛发')
    .replace(/doesn't shed/g, '不脱落')
    .replace(/excels in dog sports/g, '在犬类运动中表现出色')
    .replace(/reserved with strangers/g, '对陌生人矜持')
    .replace(/Cannot tolerate heat/g, '不能耐受高温')
    .replace(/keep cool and hydrated/g, '保持凉爽和水分')
    .replace(/daily/g, '每日')
    .replace(/not athletic dogs/g, '不是运动型狗')
    .replace(/snore and drool/g, '打鼾和流口水')
    .replace(/joint issues/g, '关节问题')
    .replace(/firm training/g, '坚定的训练')
    .replace(/guardians/g, '守卫者')
    .replace(/protective of family/g, '保护家人')
    .replace(/aggressive toward other dogs/g, '对其他狗有攻击性')
    .replace(/Long coat/g, '长毛')
    .replace(/Too small for/g, '太小不适合')
    .replace(/rough play/g, '粗暴玩耍')
    .replace(/young children/g, '幼儿')
    .replace(/yappy and territorial/g, '爱叫和有领地意识')
    .replace(/dental issues/g, '牙齿问题')
    .replace(/small size/g, '小体型')
    .replace(/Remain puppy-like/g, '保持幼犬般')
    .replace(/well into adulthood/g, '直到成年')
    .replace(/exuberant jumpers/g, '热情的跳跃者')
    .replace(/training needed/g, '需要训练')
    .replace(/monitor in hot weather/g, '在炎热天气中监测')
    .replace(/watchdogs/g, '看门狗')
    .replace(/family guardians/g, '家庭守卫')
    .replace(/herding trials/g, '牧羊比赛')
    .replace(/try to herd/g, '尝试牧羊')
    .replace(/destructive behavior/g, '破坏性行为')
    .replace(/experienced, active owners/g, '有经验的活跃主人')
    .replace(/several hours/g, '几个小时')
    .replace(/blue eyes/g, '蓝眼睛')
    .replace(/heterochromia/g, '异色瞳')
    .replace(/Strong herding instinct/g, '强烈的牧羊本能')
    .replace(/nip at heels/g, '咬脚后跟')
    .replace(/working roles/g, '工作角色')
    .replace(/Extremely heavy shedding/g, '极其严重的脱毛')
    .replace(/seasonal blows/g, '季节性换毛')
    .replace(/Known escape artists/g, '著名的逃跑艺术家')
    .replace(/High prey drive/g, '高猎物驱动力')
    .replace(/small animals/g, '小动物')
    .replace(/Very vocal/g, '非常吵闹')
    .replace(/howling and "talking"/g, '嚎叫和"说话"')
    .replace(/thick double coat/g, '厚双层毛')
    .replace(/back problems/g, '背部问题')
    .replace(/jumping and stairs/g, '跳跃和楼梯')
    .replace(/difficult to housetrain/g, '难以如厕训练')
    .replace(/tendency to dig/g, '挖掘倾向')
    .replace(/snappy with/g, '对...急躁')
    .replace(/weight management/g, '体重管理')
    .replace(/back strain/g, '背部拉伤')
    .replace(/careful nutrition/g, '小心营养')
    .replace(/growth phase/g, '生长阶段')
    .replace(/bloat/g, '胃胀气')
    .replace(/smaller meals/g, '少量多餐')
    .replace(/multiple times daily/g, '每天多次')
    .replace(/large living space/g, '大型生活空间')
    .replace(/calm nature/g, '平静的天性')
    .replace(/Shorter lifespan/g, '较短的寿命')
    .replace(/smaller breeds/g, '较小的品种')
    .replace(/Early training essential/g, '早期训练必不可少')
    .replace(/massive size/g, '巨大的体型')
    .replace(/Heavy shedding/g, '严重脱毛')
    .replace(/year-round/g, '全年')
    .replace(/worse seasonally/g, '季节性更严重')
    .replace(/monitor food intake/g, '监测食物摄入')
    .replace(/herding instinct/g, '牧羊本能')
    .replace(/long body/g, '长身体')
    .replace(/limit jumping/g, '限制跳跃')
    .replace(/alert/g, '警觉')
    .replace(/watchdogs/g, '看门狗')
    .replace(/Ears prone to infections/g, '耳朵容易感染')
    .replace(/frequent cleaning/g, '频繁清洁')
    .replace(/separation anxiety/g, '分离焦虑')
    .replace(/Eye conditions/g, '眼部疾病')
    .replace(/common in breed/g, '在该品种中常见')
    .replace(/Very trainable/g, '非常可训练')
    .replace(/eager to please/g, '渴望取悦')
    .replace(/same sex/g, '同性')
    .replace(/experienced owner/g, '有经验的主人')
    .replace(/overprotective/g, '过度保护')
    .replace(/Very fragile/g, '非常脆弱')
    .replace(/not suitable for homes/g, '不适合有...的家庭')
    .replace(/suspicious of/g, '怀疑')
    .replace(/Sensitive to cold/g, '对寒冷敏感')
    .replace(/sweaters/g, '毛衣')
    .replace(/bond strongly/g, '强烈依恋')
    .replace(/one person/g, '一个人')
    .replace(/Heart conditions/g, '心脏疾病')
    .replace(/regular vet checkups/g, '定期兽医检查')
    .replace(/Should not be left alone/g, '不应独自留下')
    .replace(/long periods/g, '长时间')
    .replace(/Adapt well to/g, '很好地适应')
    .replace(/apartment or house living/g, '公寓或房屋生活')
    .replace(/matting/g, '打结')
    .replace(/small dog syndrome/g, '小狗综合症')
    .replace(/proper training/g, '适当的训练')
    .replace(/Large eyes/g, '大眼睛')
    .replace(/injury/g, '受伤')
    .replace(/flatulence/g, '胀气')
    .replace(/extreme temperatures/g, '极端温度')
    .replace(/Cannot tolerate/g, '不能耐受')
    .replace(/thick coat/g, '厚毛发')
    .replace(/cancer/g, '癌症')
    .replace(/shorter/g, '较短')
    .replace(/many/g, '许多');
}

// Helper function to translate exercise levels
function translateExercise(exercise) {
  const translations = {
    'Low': '低',
    'Moderate': '中等',
    'High': '高',
    'Very High': '非常高'
  };
  return translations[exercise] || exercise;
}

// Helper function to translate grooming levels
function translateGrooming(grooming) {
  const translations = {
    'Low': '低',
    'Moderate': '中等',
    'High': '高',
    'Very High': '非常高'
  };
  return translations[grooming] || grooming;
}

// Helper function to translate training levels
function translateTraining(training) {
  const translations = {
    'Easy': '容易',
    'Moderate': '中等',
    'Challenging': '有挑战性'
  };
  return translations[training] || training;
}

// Helper function to translate characteristic names
function translateCharacteristic(key) {
  const translations = {
    'energyLevel': '能量水平',
    'affectionLevel': '亲和力',
    'friendliness': '友好度',
    'trainability': '可训练性',
    'intelligence': '智力',
    'playfulness': '玩耍性',
    'sheddingLevel': '脱毛程度',
    'protectiveness': '保护性',
    'groomingNeeds': '梳理需求',
    'adaptability': '适应性',
    'goodWithKids': '对儿童友好',
    'barkingLevel': '吠叫程度',
    'exerciseNeeds': '运动需求'
  };
  return translations[key] || key.replace(/([A-Z])/g, ' $1').trim();
}

// Output the translations
console.log('\n=== English Translations ===\n');
console.log(JSON.stringify(enTranslations, null, 2));

console.log('\n\n=== Chinese Translations ===\n');
console.log(JSON.stringify(zhTranslations, null, 2));

// Optionally write to files
const outputDir = path.join(__dirname, '../scripts/output');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(
  path.join(outputDir, 'breeds-en.json'),
  JSON.stringify(enTranslations, null, 2)
);
fs.writeFileSync(
  path.join(outputDir, 'breeds-zh.json'),
  JSON.stringify(zhTranslations, null, 2)
);

console.log('\n\nTranslations written to scripts/output/');
console.log(`Total English keys: ${Object.keys(enTranslations).length}`);
console.log(`Total Chinese keys: ${Object.keys(zhTranslations).length}`);
