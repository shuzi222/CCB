// ========== 模块1：10个语法抢分技巧 ==========
const GRAMMAR_TECHNIQUES = [
  { id:1, title:"比较级", desc:"than 提示用比较级", questions:[
    {q:"Those who have ______ money than sense may sometimes act foolishly.", opts:["much","more","most","many"], ans:1, exp:"看到 than（比），立刻想到比较级。money 不可数，用 more 而不是 many 的比较级。"},
    {q:"I like this jacket better than that one, but it costs almost three times ______.", opts:["as much","as many","so much","so many"], ans:0, exp:"倍数表达固定结构：倍数 + as + 原级 + as。three times as much = 三倍之多。"}
  ]},
  { id:2, title:"祈使句+and/or", desc:"祈使句 + and/or + 陈述句", questions:[
    {q:"______ the website of the Fire Department in your city, and you will learn a lot about firefighting.", opts:["Having searched","To search","Searching","Search"], ans:3, exp:"句型：动词原形开头 + and + 陈述句。and 前面必须是祈使句（用动词原形），不能用分词或不定式。"},
    {q:"Lose one hour in the morning ______ you will be looking for it the rest of the day.", opts:["but","and","or","so"], ans:1, exp:"祈使句 + and = '…那么就会…'，表顺承结果。or 则表示'否则'，这里没有警告的意思。"}
  ]},
  { id:3, title:"强调句", desc:"It is/was ... that ...", questions:[
    {q:"It was in New Zealand ______ Elizabeth first met Mr. Smith.", opts:["that","how","which","when"], ans:0, exp:"It was + 被强调部分 + that 是固定强调句型。去掉 It was 和 that 后句子仍完整，就是强调句的标志。"},
    {q:"It wasn't until nearly a month later ______ I received the manager's reply.", opts:["since","when","as","that"], ans:3, exp:"not...until 的强调结构：It was not until + 时间 + that...。until 不能和 since/when 混用。"}
  ]},
  { id:4, title:"非谓语动词", desc:"分词作定语/状语", questions:[
    {q:"Can those ______ at the back of the classroom hear me?", opts:["seat","sit","seated","sat"], ans:2, exp:"seated = who are seated，过去分词作后置定语表状态。sit 是主动'坐下去'，seated 是'坐着的'状态。"},
    {q:"The boss, not the workers. They just carried out the order ______.", opts:["as told","as are told","as telling","as they told"], ans:0, exp:"as told = as they were told，省略了主语和 be 动词。完整形式太长，口语中常省略。"},
    {q:"______ from endless homework on weekends, the students now find their own activities.", opts:["Freed","Freeing","To free","having freed"], ans:0, exp:"学生是被'解放'的，用过去分词 Freed 表被动。Freeing 表主动，不合逻辑。"}
  ]},
  { id:5, title:"名词性从句", desc:"what 引导的名词性从句", questions:[
    {q:"______ was most important to her, she told me, was her family.", opts:["It","This","What","As"], ans:2, exp:"What = the thing that（…的东西）。What 引导主语从句，充当主句的主语。It 不能引导主语从句放在句首。"},
    {q:"The companies are working together to create ______ they hope will be the best means of transport.", opts:["which","that","what","who"], ans:2, exp:"what 引导宾语从句，作 create 的宾语。they hope 是插入语，可以忽略它来看句子结构。"}
  ]},
  { id:6, title:"并列结构", desc:"and/but 连接并列成分", questions:[
    {q:"It is worth considering what makes 'convenience' foods so popular, and ______ better ones of your own.", opts:["introduces","to introduce","introducing","introduced"], ans:2, exp:"and 连接的两个部分必须形式一致。前面是 considering，后面也必须是 -ing 形式 introducing。"},
    {q:"Stand over there ______ you'll be able to see it better.", opts:["or","while","but","and"], ans:3, exp:"祈使句 + and = '这样做，就会…'。站在那边 → 就能看清楚，是顺承关系，不是转折。"}
  ]},
  { id:7, title:"固定搭配", desc:"介词搭配与习语", questions:[
    {q:"It looks like the weather is changing for ______. Shall we stick to your plan?", opts:["the worse","worse","the worst","worst"], ans:0, exp:"change for the worse 是固定习语 = 变坏/恶化。类似的还有 change for the better（变好）。"},
    {q:"I like Mr. Miner's speech; it was clear and ______ the point.", opts:["at","on","to","of"], ans:2, exp:"to the point = 切题/中肯，固定搭配。on the point of 是'正要…'，意思完全不同。"}
  ]},
  { id:8, title:"独立主格/不定式", desc:"独立主格结构与不定式", questions:[
    {q:"—Did the book give the information you needed? —Yes. But ______ it, I had to read the entire book.", opts:["to find","find","to finding","finding"], ans:0, exp:"不定式 to find 表目的 = '为了找到它'。为了找到那条信息，我不得不读完整本书。"},
    {q:"Not far from the school there was a garden, ______ owner seated in it playing chess.", opts:["its","whose","which","that"], ans:0, exp:"逗号后是一个独立主格结构（名词 + 分词），不是定语从句。its owner seated... = 它的主人坐在…，独立成句不需连词。"}
  ]},
  { id:9, title:"情态动词", desc:"情态动词表推测", questions:[
    {q:"You ______ be hungry already — you had lunch only two hours ago!", opts:["wouldn't","can't","mustn't","needn't"], ans:1, exp:"can't 表'不可能'（有把握的否定推测）。两小时前刚吃过饭，不可能现在饿了。mustn't 是'禁止'，不表推测。"},
    {q:"In spite of repeated wrongs done to him, he looks ______ to people greeting him.", opts:["friendly","lively","worried","cold"], ans:0, exp:"look 是系动词 = '看起来'，后接形容词。in spite of（尽管）表让步，前后意思相反：别人对他不好，他却看起来很友善。"}
  ]},
  { id:10, title:"时态语态", desc:"时态与情态动词+have done", questions:[
    {q:"Thank you for all your hard work last week. I don't think we ______ it without you.", opts:["can manage","could have managed","could manage","can have managed"], ans:1, exp:"could have done = 本来能做到（但实际没发生）。没有你我们本来完不成的，是对过去的虚拟假设。"},
    {q:"John, a friend of mine, spent $3,000 more than he ______ for the wedding.", opts:["will plan","has planned","would plan","had planned"], ans:3, exp:"plan（计划）发生在 spent（花钱）之前，过去的过去 → 过去完成时 had planned。"},
    {q:"Though we don't know what was discussed, yet we can feel the topic ______.", opts:["had changed","will change","was changed","has been changed"], ans:3, exp:"话题被改变，用被动。强调对现在的影响（虽然不知道讨论了啥，但能感觉到话题已被换了）→ 现在完成被动。"}
  ]}
];

// ========== 模块2：6个常考句式分析 ==========
const SENTENCE_PATTERNS = [
  { id:1, title:"祈使句 + and/or + 陈述句", desc:"祈使句后用 and 表顺承，or 表否则", questions:[
    {q:"Lose one hour in the morning ______ you will be looking for it the rest of the day.", opts:["but","and","or","so"], ans:1, exp:"祈使句 + and = '…那么就会…'。早上浪费一小时，那你一整天都得找它。顺承关系用 and。"},
    {q:"Follow your doctor's advice, ______ your cough will get worse.", opts:["or","and","then","so"], ans:0, exp:"祈使句 + or = '…否则…'。听医生的话，否则咳嗽会更严重。or 表警告后果。"},
    {q:"Stand over there ______ you'll be able to see it better.", opts:["or","while","but","and"], ans:3, exp:"站那边 → 就能看清楚。顺承关系，用 and。"},
    {q:"______ straight on and you'll see a church. You won't miss it.", opts:["Go","Going","If you go","When going"], ans:0, exp:"祈使句必须用动词原形开头。Going 和 To go 都不能独立构成祈使句。"},
    {q:"Turn on the television or open a magazine and you ______ advertisements showing happy families.", opts:["will often see","often see","are often seeing","have often seen"], ans:0, exp:"祈使句 + and/or + 将来时。打开电视就会看到广告，用 will see。"},
    {q:"Let's keep to the point or we ______ any decisions.", opts:["will never reach","have never reached","never reach","never reached"], ans:0, exp:"or + 将来时 = 否则将…。如果不切题，我们就永远做不了决定。"}
  ]},
  { id:2, title:"so/neither/nor 倒装", desc:"so+助动词+主语 (也…); neither/nor+助动词+主语 (也不…)", questions:[
    {q:"Mary never does any reading in the evening, ______.", opts:["so does John","John does too","John doesn't too","nor does John"], ans:3, exp:"前句有 never（否定），后面'也不'用 nor + 倒装。so 用于肯定句的'也'。"},
    {q:"—I do think the rabbit is a beautiful, gentle animal. —______.", opts:["So it is","So is it","So does it","So it does"], ans:0, exp:"赞同对方 = So + 主语 + 助动词（不倒装！）。'确实如此'用正常语序，So it is 不是 So is it。"},
    {q:"—Father, you promised! —Well, ______. But it was you who didn't keep your word first.", opts:["so was I","so did I","so I was","so I did"], ans:3, exp:"'我确实答应了' = So I did（赞同，不倒装）。So did I 的意思是'我也答应了'（倒装，表'也'），这里意思不对。"},
    {q:"—Maggie had a wonderful time at the party. —______, and so did I.", opts:["So she had","So had she","So she did","So did she"], ans:2, exp:"前半句赞同 = So she did（她确实如此），后半句'我也是' = so did I（倒装）。组合在一起考察。"},
    {q:"—David has made great progress recently. —______, and ______.", opts:["So he has, so you have","So he has, so have you","So has he, so have you","So has he, so you have"], ans:1, exp:"So he has = 赞同'他确实进步了'（不倒装）；so have you = '你也是'（倒装）。两组都考到了。"},
    {q:"—I would never ever come to this restaurant again. —______.", opts:["Nor am I","Neither would I","Same with me","So do I"], ans:1, exp:"前句 I would never… 否定 + would，回应'我也不'要用 Neither would I，助动词和时态保持一致。"}
  ]},
  { id:3, title:"however 引导让步状语", desc:"however + adj/adv + 主语 + 谓语 = 无论多么…", questions:[
    {q:"He tried his best to solve the problem, ______ difficult it was.", opts:["however","no matter","whatever","although"], ans:0, exp:"however + 形容词 = 无论多…。however difficult = no matter how difficult。no matter 后面缺了 how，不完整。"},
    {q:"You should try to get a good night's sleep ______ much work you have to do.", opts:["however","no matter","although","whatever"], ans:0, exp:"however much = 无论多少（修饰不可数名词 work）。no matter 同样缺了 how。"},
    {q:"We'll have to finish the job, ______.", opts:["long it takes however","it takes however long","long however it takes","however long it takes"], ans:3, exp:"however long = 无论多久，语序是 however + adj + 主语 + 谓语，即 however long it takes。"},
    {q:"______ Mother will wait for him to have dinner together.", opts:["However late is he","However late he is","However is he late","However he is late"], ans:1, exp:"however 从句用正常语序（不倒装！）：However late he is。区别于一般疑问句的倒装语序。"},
    {q:"______ much advice I gave him, he did exactly what he wanted to do.", opts:["How","Whatever","However","No matter"], ans:2, exp:"However much = No matter how much。much 是副词修饰 gave，不能用 whatever（whatever 修饰名词）。"}
  ]},
  { id:4, title:"It is + 时间 + since/before/when", desc:"区分三种时间句型", questions:[
    {q:"That was really a splendid evening. It's years ______ I enjoyed myself so much.", opts:["when","that","before","since"], ans:3, exp:"It is + 时间段 + since... = 自从…以来已有多久。years since I enjoyed myself = 我已经很多年没这么开心了。"},
    {q:"It was some time ______ we realized the truth.", opts:["when","until","since","before"], ans:3, exp:"It was + 时间段 + before... = 过了…时间才…。过了一段时间我们才意识到真相。"},
    {q:"—Did Jack come back early last night? —Yes. It was not yet eight o'clock ______ he arrived home.", opts:["before","when","that","until"], ans:1, exp:"It was + 时间点 + when... = 当…的时候是几点。他到家时还不到八点。"},
    {q:"Scientists say it may be five or six years ______ it is possible to test this medicine on human patients.", opts:["since","after","before","when"], ans:2, exp:"It will be + 时间段 + before = 还要过…才…。还要五六年才能在人体上测试这种药。"},
    {q:"It was evening ______ we reached the little town of Winchester.", opts:["that","until","since","before"], ans:3, exp:"我们到达小镇时已是傍晚 → It was evening before we reached... = 到达之前已经是傍晚了。"},
    {q:"It ______ long before we ______ the result of the experiment.", opts:["will not be; will know","is; will know","will not be; know","is; know"], ans:2, exp:"It will not be long before... = 不久就…。before 从句用一般现在时表将来，主句用将来时。"}
  ]},
  { id:5, title:"否定词倒装", desc:"never/seldom/little/hardly/not until 等置于句首引起倒装", questions:[
    {q:"Never before ______ in greater need of modern public transport than it is today.", opts:["has this city been","this city has been","was this city","this city was"], ans:0, exp:"Never 开头 → 部分倒装，助动词提到主语前。现在完成时 has this city been，不能还原成正常语序。"},
    {q:"They have a good knowledge of English but little ______ they know about German.", opts:["have","did","had","do"], ans:3, exp:"little 是否定词，放句首倒装。时态是一般现在时，用 do they know。"},
    {q:"Of the making of good books there is no end; neither ______ any end to their influence on man's lives.", opts:["there is","there are","is there","are there"], ans:2, exp:"neither 开头倒装。主语是 any end（单数），所以用 is there，不用 are there。"},
    {q:"Maybe you have been to many countries, but nowhere else ______ such a beautiful place.", opts:["can you find","you could find","you can find","could you find"], ans:0, exp:"nowhere 否定词开头倒装。时态是现在/一般，用 can you find。"},
    {q:"I finally got the job I dreamed about. Never in all my life ______ so happy!", opts:["did I feel","I felt","I had felt","had I felt"], ans:3, exp:"Never 开头倒装。'开心'发生在'得到工作'之前 → 过去的过去 → 过去完成时 had I felt。"},
    {q:"Not a single song ______ at yesterday's party.", opts:["she sang","sang she","did she sing","she did sing"], ans:2, exp:"Not a single song 是否定短语放句首，倒装。一般过去时，加助动词 did 构成倒装。"},
    {q:"Only when the fire was under control ______ to return to their homes.", opts:["the residents would be permitted","had the residents been permitted","would the residents be permitted","the residents had been permitted"], ans:2, exp:"only + 状语从句放句首，主句要倒装。would the residents be permitted 是部分倒装的正确形式。"}
  ]},
  { id:6, title:"强调句 It is...that", desc:"It is/was + 被强调部分 + that/who", questions:[
    {q:"It wasn't until nearly a month later ______ I received the manager's reply.", opts:["since","when","as","that"], ans:3, exp:"not...until 的强调 = It was not until...that。强调结构只能用 that（指人可用 who）。"},
    {q:"It is what you do rather than what you say ______ matters.", opts:["that","what","which","this"], ans:0, exp:"It is...that 强调主语从句 what you do rather than what you say。验证：去掉 It is 和 that，句子仍成立。"},
    {q:"—______ that he manage to get the information? —Oh, a friend of his helped him.", opts:["Where was it","What was it","How was it","Why was it"], ans:2, exp:"答语'朋友帮了他'说明问的是方式。强调句的特殊疑问形式 = 疑问词 + was it that...?"},
    {q:"It was ______ back home after the experiments.", opts:["not until midnight did he go","until midnight that he didn't go","not until midnight that he went","until midnight when he didn't go"], ans:2, exp:"强调 not...until 时，not 要放在 until 前面，后面用 that 连接，语序正常（不倒装）。"},
    {q:"It is these poisonous products ______ can cause the symptoms of the flu.", opts:["who","that","how","what"], ans:1, exp:"强调事物用 that（不用 who）。products 是物，所以用 that。"},
    {q:"It was for this reason ______ her uncle moved out of New York.", opts:["which","why","that","how"], ans:2, exp:"强调原因状语 for this reason，强调结构固定用 that，不能用 why/which。"},
    {q:"It is the ability to do the work ______ matters not where you come from.", opts:["one","that","what","it"], ans:1, exp:"强调主语 the ability to do the work，用 that。去掉 It is 和 that 后句子 = The ability to do the work matters... 完全成立。"}
  ]}
];

// ========== 模块3：综合单选100题 ==========
const COMPREHENSIVE_MCQ = [
  {id:1,q:"Stop making so much noise ____ the neighbor will start complaining.",opts:["or else","but still","and then","so that"],ans:0,exp:"or else = 否则。别再吵了，否则邻居要投诉了。祈使句 + or (else) 表警告后果。"},
  {id:2,q:"We hope to go to the beach tomorrow, but we won't go ____ it's raining.",opts:["if","when","though","because"],ans:0,exp:"if = 如果。如果下雨就不去，条件状语从句。when 表时间'当…时'，这里强调的是条件而非时间。"},
  {id:3,q:"—The weather is too cold ____ March this year. —It was still ____ when I came here years ago.",opts:["for; colder","in; cold","in; hot","for; hotter"],ans:0,exp:"too cold for March = 对三月来说太冷了。第二空 still colder = 更冷，still 修饰比较级表'还要更…'。"},
  {id:4,q:"—How much vinegar did you put in the soup? —I'm sorry to say, ____. I forget.",opts:["no","no one","nothing","none"],ans:3,exp:"none = 一点也没有，用来回答 How much 提问的量。nothing 是'没什么东西'，no one 指人，都不对。"},
  {id:5,q:"He is only too ready to help others, seldom, ____, refusing them when they turn to him.",opts:["if never","if ever","if not","if any"],ans:1,exp:"seldom, if ever = 即使有也很少。固定搭配，seldom 本身已是否定'很少'，if ever 补充'即便有过的话'。"},
  {id:6,q:"—What should I wear to attend his wedding party? —Dress ____ you like.",opts:["what","however","whatever","how"],ans:1,exp:"Dress however you like = 你想怎么穿就怎么穿。however = in whatever way，修饰动词 dress 的方式。"},
  {id:7,q:"—Who do you think can do the job? —____ my students have a try?",opts:["Shall","Must","Will","May"],ans:0,exp:"Shall I/we... 表征求对方意见 = '要不要让我的学生试试？' Shall 用于第一人称的疑问句表建议/征求意见。"},
  {id:8,q:"I'd like to live somewhere ____ the sun shines all year long.",opts:["which","that","where","in which"],ans:2,exp:"where = 关系副词，引导地点定语从句修饰 somewhere。somewhere 是地点，用 where 引导，相当于 in which。"},
  {id:9,q:"I ____ to go for a walk, but someone called and I couldn't get away.",opts:["was planning","planned","had planned","would plan"],ans:2,exp:"plan 发生在 call 之前（过去的过去）→ 过去完成时 had planned。我本打算去散步，但有人打电话来了。"},
  {id:10,q:"—Remember to return it to ____ name is on it. —No, Mom, it's my friend's.",opts:["what","which","whose","whosever"],ans:3,exp:"whosever = 无论谁的 = anyone whose。whosever name is on it = 不管谁的名字在上面，相当于名词性从句。"},
  {id:11,q:"Thank you for sending us ____ fresh vegetables. You have done us ____ great service.",opts:["/; a","the; a","/; /","the; /"],ans:0,exp:"fresh vegetables 复数泛指，不加冠词。do sb. a great service = 帮了大忙，service 此处可数，加 a。"},
  {id:12,q:"Now that we ____ all the money, it's no use turning on me.",opts:["had lost","lost","have lost","lose"],ans:2,exp:"now that = since 既然，引导现在的情况。钱已经丢了（对现在有影响）→ 现在完成时 have lost。"},
  {id:13,q:"We had a really bad time about six months ago but now things are ____.",opts:["looking up","coming up","making up","turning up"],ans:0,exp:"look up = 好转/改善。things are looking up = 情况在好转。come up 是'出现'，turn up 是'露面/调大'。"},
  {id:14,q:"—When did it begin to snow? —It started ____ the night.",opts:["during","by","from","at"],ans:0,exp:"during the night = 在夜间（整夜期间某个时候）。at night 是'在晚上'泛指，during 强调过程。"},
  {id:15,q:"Young as he is, David has gained ____ rich experience in ____ society.",opts:["the; the","a; /","/; /","the; /"],ans:2,exp:"experience 作'经验'讲不可数，不加冠词。society 泛指'社会'也不加冠词。注意 experience 作'经历'讲才可数。"},
  {id:16,q:"____ from endless homework on weekends, the students now find their own activities.",opts:["Freed","Freeing","To free","having freed"],ans:0,exp:"学生是被解放的 → 过去分词表被动。Freed from... = 从作业中解放出来后。Freeing 表主动，逻辑不通。"},
  {id:17,q:"—So you missed the meeting. —____. I got there five minutes before it finished.",opts:["Not at all","Not exactly","Not especially","Not really"],ans:1,exp:"Not exactly = 不完全是。我提前五分钟到了，所以不能算完全错过了。Not at all 是'一点也不'，不用于这种场景。"},
  {id:18,q:"—Do you mind if I smoke? —____",opts:["Why not?","Yes, help yourself","Go ahead","Yes, but you'd better not"],ans:2,exp:"Go ahead = 请便/尽管做。回答 Do you mind... 通常用 No (不介意) 或 Go ahead (请便)。"},
  {id:19,q:"—We must thank you for taking the trouble to cook us a meal. —____.",opts:["With pleasure","It doesn't matter","It was no trouble at all","By all means"],ans:2,exp:"It was no trouble at all = 一点也不麻烦。回应感谢的客气话。With pleasure 是回应请求的'乐意效劳'。"},
  {id:20,q:"____ the temperature might drop, coal was prepared for warming.",opts:["To consider","Considered","Considering","To be considered"],ans:2,exp:"Considering = 考虑到/鉴于，介词用法。Considering (that) the temperature might drop = 考虑到温度可能下降。"},
  {id:21,q:"—Tom, you are caught late again. —Oh, ____.",opts:["not at all","just my luck","never mind","that's all right"],ans:1,exp:"just my luck = 我就是这运气（真倒霉）。被抓到迟到，感叹自己运气不好。其他选项用于回应道歉或感谢。"},
  {id:22,q:"—What do you think of the concert? —I really enjoy it. I didn't expect it was ____ wonderful.",opts:["as","more","most","very"],ans:0,exp:"as wonderful = 如此精彩。didn't expect it was as wonderful as it was 的省略，表示出乎意料的程度。"},
  {id:23,q:"The engineers made two big plans for the dam, ____ was never put in force.",opts:["one of them","which","one of which","every one of which"],ans:2,exp:"one of which = 其中之一。非限制性定语从句，指 two plans 中的某一个。one of them 是独立句缺连词，which 单独指代模糊。"},
  {id:24,q:"I have no one ____ me, for I am a new comer here.",opts:["help","helping","to help","to have helped"],ans:2,exp:"have no one to help me = 没有人可以帮我。不定式 to help 作定语修饰 no one，表'可以帮忙的人'。"},
  {id:25,q:"The little girl couldn't work the problem out. She wasn't ____ clever.",opts:["that","much","enough","too"],ans:0,exp:"that = so，口语用法。She wasn't that clever = 她没那么聪明。that 可以当 so 用，修饰形容词。"},
  {id:26,q:"Listen! His family must be quarrelling, ____?",opts:["mustn't it","isn't it","aren't they","needn't they"],ans:2,exp:"must be quarrelling 表推测，反意疑问句用 aren't they。family 强调成员时复数用 they。must 表推测时反意疑问句不用 mustn't。"},
  {id:27,q:"The police have ____ power to deal with such matters by ____ law.",opts:["the; the","/; /","the; /","/; the"],ans:2,exp:"the power 特指'处理此类事务的权力'要加 the。by law = 依法，固定搭配不加冠词。"},
  {id:28,q:"Jack felt unhappy as they all went outing ____ him.",opts:["except","but","without","besides"],ans:2,exp:"without him = 没有他（他没去）。except 是'除了（排除在外）'，暗示他本应一起去，但这里强调'没带他一起去'的感觉。"},
  {id:29,q:"That she hadn't kept her ____ on her work resulted in the failure.",opts:["head","heart","brain","mind"],ans:3,exp:"keep one's mind on = 专心于。固定搭配。keep one's head 是'保持冷静'，意思不同。"},
  {id:30,q:"—Did your sister pass the exam? —She failed and is in low spirits. —I'm sorry for her. —____.",opts:["Thank you","You're welcome","I would think so","Never mind"],ans:0,exp:"对方表示同情时回应 Thank you。这是交际用语的常规问答，别人说 sorry 你就说谢谢。"},
  {id:31,q:"The students spent as much time getting trained as they ____ studying.",opts:["disliked","were","had","did"],ans:3,exp:"did 代替 spent，避免重复。as they did (spent) studying = 和他们花在学习上的时间一样多。"},
  {id:32,q:"It was believed that things would get worse, but ____ it is they are getting better.",opts:["before","after","because","as"],ans:3,exp:"as it is = 实际上/照现状来看。but as it is = 但实际上…（与预期相反）。相当于 in reality。"},
  {id:33,q:"As time went by, the plan stuck ____ fairly practical.",opts:["to proved","to proving","proved","to be proved"],ans:0,exp:"stuck to 是 stick to 的过去式 = 坚持。the plan (which was) stuck to proved practical = 被坚持的计划证明可行。"},
  {id:34,q:"More than one ____ the people heart and soul.",opts:["official has served","officials have served","official has served for","officials have served for"],ans:0,exp:"more than one + 单数名词 + 单数动词！虽然意思上是'不止一个'（复数），但语法上谓语用单数 has served。"},
  {id:35,q:"The president stood by a window inside the room, ____, looking over the square.",opts:["where I entered","into which I entered","which I entered","that I entered"],ans:2,exp:"which I entered 修饰 the room。enter the room 是及物用法，所以 which 直接作宾语，不需介词。"},
  {id:36,q:"Though I ____ to go abroad, I changed my mind and decided to stay with my family.",opts:["had wanted","wanted","would want","did want"],ans:0,exp:"want 发生在 changed 之前 → 过去的过去 → had wanted。'本想去'但改变了主意，过去完成时表达了这个时间先后。"},
  {id:37,q:"My brother is very tall. The little bed won't ____ for him.",opts:["prepare","match","fit","do"],ans:3,exp:"won't do for him = 不适合他/对他来说不行。do 在此 = be sufficient/suitable，口语常用。fit 是'尺寸合适'，但 bed fit 表达不自然。"},
  {id:38,q:"—Thank you so much for the lovely evening. —You're quite welcome. ____.",opts:["We're glad to meet you","I'm afraid you didn't have a good time","Thank you for your coming","Just stay a little longer"],ans:2,exp:"回应感谢的礼貌对话。主人也感谢客人来。'我们也一直盼着见你们'暗示这是对感谢的补充。"},
  {id:39,q:"Scientists say they have found a way to produce cancer-killing cells, ____ new hope to cancer sufferers.",opts:["offering","showing","taking","making"],ans:0,exp:"offering new hope = 带来新希望。现在分词作结果状语，表主动伴随结果，'这一发现给患者带来了希望'。"},
  {id:40,q:"We are going to discuss the way of reading works ____ it is used for real life purposes.",opts:["that","which","where","when"],ans:3,exp:"when = 当…时。讨论的是'在实际生活中应用时'的阅读方式。the way...when... 修饰的是阅读方式使用的时机。"},
  {id:41,q:"—The dinner was delicious! —I agree. I am so full. —That's too bad. But some dessert ____.",opts:["has ordered","will be ordered","has been ordered","was going to be ordered"],ans:2,exp:"has been ordered = 已经点好了（现在完成被动）。甜点早已下单了，所以'可惜你吃饱了'。"},
  {id:42,q:"—This wall of air is an effective answer and it ____ work. —But it is a question to put such a wall around the statue.",opts:["may","must","should","could"],ans:2,exp:"should = 按理应该。'这个方案按理应该有效'——说话者有信心但留有余地。must 太绝对，may 太不确定。"},
  {id:43,q:"We should know that we can only reach the top if we are ready to ____ and learn from failure.",opts:["deal with","depend on","carry on","go with"],ans:0,exp:"deal with failure = 应对/处理失败。deal with and learn from failure = 应对失败并从中学习，语义连贯。"},
  {id:44,q:"—Good evening. I ____ to see Miss Jessic. —Oh! I'm sorry, but she is not in.",opts:["came","come","have come","had come"],ans:2,exp:"have come = 现在完成，强调'我现在在这里（来拜访）'的结果。came 只表过去动作，没有与现在的联系。"},
  {id:45,q:"—Please call me at 8:00 tomorrow morning. I'm kind of forgetful. —Don't worry, you'll be surely ____.",opts:["reminded","told","warned","informed"],ans:0,exp:"remind = 提醒。对方健忘，答应会提醒他。warn 是'警告'，inform 是'通知'，语气和场景都不对。"},
  {id:46,q:"—Tim's cellphone was left in a taxi accidentally, never ____ again.",opts:["to find","to be found","finding","being found"],ans:1,exp:"never to be found = 再也没有被找到。不定式 to be found 作结果状语，表'最终被找到'（但前面有 never 否定，所以是'再也没找到'）。"},
  {id:47,q:"A terrible earthquake happened in that district at the end of 2004, ____ many countries paid close attention to.",opts:["where","when","which","what"],ans:2,exp:"which 指代前面的整个事件（地震），作 paid attention to 的宾语。非限制性定语从句，which 指代前面整件事。"},
  {id:48,q:"—How come a simple meal costs so much? —We have ____ in your bill the cost of the cup you broke.",opts:["added","included","contained","charged"],ans:1,exp:"include = 包含进去。把打破的杯子费用包含在账单里了。add 要和 to 搭配 (add to)，contain 是'内部含有'。"},
  {id:49,q:"—You didn't wait for Mr. Black last night, did you? —No, but we ____. He didn't return home at all.",opts:["couldn't have","needn't have","didn't need to","should wait have"],ans:2,exp:"didn't need to = 没必要（也确实没做）。他没回家，所以我们不需要等。needn't have waited 表'等了但没必要'，与事实不符。"},
  {id:50,q:"—How do you think I should receive the reporter? —____ you feel about him, try to be polite.",opts:["How","What","Whatever","However"],ans:3,exp:"However you feel about him = 无论你对他感觉如何。However 引导让步状语从句 = No matter how。修饰动词 feel。"},
  {id:51,q:"____ has recently been done, a shortage of public vehicles remains a serious problem.",opts:["That","What","In spite of what","Though what"],ans:2,exp:"In spite of what has been done = 尽管已经做了很多。in spite of + 名词性从句（what 引导）表让步。That/What 单独没有让步含义。"},
  {id:52,q:"As we have much time left, let's discuss the matter ____ tea and cake.",opts:["over","with","by","at"],ans:0,exp:"discuss over tea = 边喝茶边讨论。over 在此 = during/while having，'在喝茶吃蛋糕的过程中讨论'。"},
  {id:53,q:"Mr Black must be worried. You can ____ it from the look on his face.",opts:["reason","recognize","read","realize"],ans:2,exp:"read = 读懂/看出。read one's face/expression = 从表情看出来。reason 是'推理'，recognize 是'认出'，realize 是'意识到'。"},
  {id:54,q:"—Can I pay by check? —Sorry, sir. Payment ____ be made in cash.",opts:["shall","need","will","can"],ans:0,exp:"shall 用于规章/制度 = 必须/应当。酒店规定付款必须用现金，shall 表达规则和强制。"},
  {id:55,q:"If you win the competition, you will be given ____ to Europe for two.",opts:["a free 7-day trip","a free trip for 7-day","a 7-day free trip","a trip for 7-day free"],ans:0,exp:"形容词顺序：冠词 + 性质(free) + 数字(7-day) + 名词(trip) = a free 7-day trip。多个形容词修饰名词时有固定顺序。"},
  {id:56,q:"—Hey, Kelin. Happy new year! ____? —Ok, I guess. My grandma kept cooking, so I just kept eating.",opts:["How was your break","How is your break","How was your weekend","How is your weekend"],ans:0,exp:"新年假期是过去的事 → 用过去时 How was your break。答语描述假期经历（奶奶一直做饭），说明问的是假期。"},
  {id:57,q:"____ the website of the Fire Department, and you will learn a lot about firefighting.",opts:["Having searched","To search","Searching","Search"],ans:3,exp:"祈使句 + and 句型，动词原形开头。这是固定结构：Search...and you will learn... = 搜索…你就会了解到…。"},
  {id:58,q:"The money he spent ____ more than 1,000 dollars.",opts:["added to","added up to","added","covered"],ans:1,exp:"add up to = 总计达到。花的钱加起来总共超过1000美元。add to 是'增加/增添'，后接被增加的对象。"},
  {id:59,q:"Chances ____ I will be chosen as one of the volunteers.",opts:["are which","are when","are that","are what"],ans:2,exp:"Chances are that... = 有可能…，固定句型。that 引导表语从句说明 chances 的内容。"},
  {id:60,q:"You ____ me about it earlier. I ____ to help.",opts:["could have told; would come","could tell; would have come","could have told; would have come","could tell; would come"],ans:2,exp:"could have told = 你本可以早告诉我（过去虚拟），would have come = 我本会来帮忙的（过去虚拟结果）。两句都是对过去的虚拟假设。"},
  {id:61,q:"This problem may lead to more serious ones if ____ unsolved.",opts:["making","remained","keeping","left"],ans:3,exp:"left unsolved = 被留下不解决。leave sth + 形容词 = 让某物处于某状态。if (it is) left unsolved 省略了主谓。"},
  {id:62,q:"He came here ____ to learn English ____ to make friends.",opts:["rather; than","more; than","other; than","less; than"],ans:0,exp:"rather...than... = 是…而不是…。他来是为了学英语，而不是交朋友。rather than 连接两个平行的不定式。"},
  {id:63,q:"—Is your headache getting ____? —No, it's worse.",opts:["better","more","less","worse"],ans:0,exp:"从答语 worse 反推，问的是 better。'头疼好点了吗？''不，更糟了。'get better = 好转。"},
  {id:64,q:"To their relief, the fund ____ all their losses.",opts:["covered","met","included","contained"],ans:0,exp:"cover = 足以支付/弥补。cover all losses = 弥补全部损失。meet 也可以表示'支付'但通常用于 meet the cost/bill。"},
  {id:65,q:"The book made him ____ what he is today.",opts:["to be","into","become","being"],ans:1,exp:"make sb. into... = 把某人造就成…。make 后接 into 表'使变成'。make sb. do 省略 to 但这里需要介词表转变方向。"},
  {id:66,q:"I'd like to arrive 20 minutes early ____ I can have time for a cup of tea.",opts:["as soon as","as a result","in case","so that"],ans:3,exp:"so that = 以便/为了，引导目的状语。早到20分钟以便有时间喝茶。in case 是'以防万一'，这里不是这意思。"},
  {id:67,q:"He is ____ a teacher to me. He is also my friend.",opts:["sort of","kind of","more than","rather than"],ans:2,exp:"more than = 不仅仅是。more than a teacher = 不仅仅是老师（还是朋友）。和后面的 also my friend 呼应。"},
  {id:68,q:"She ____ to be a good teacher. She has all the qualities needed.",opts:["promises","expects","wants","hopes"],ans:0,exp:"promise to be = 有希望成为/可望成为。She promises to be a good teacher = 她有成为好老师的潜质。promise 在此不是'承诺'，是'预示'。"},
  {id:69,q:"____ I accept that he is not perfect, I do actually like the person.",opts:["While","Since","Before","Unless"],ans:0,exp:"While = Although 虽然/尽管。虽然我承认他不完美，但我确实喜欢他。while 放句首表让步，前后意思转折。"},
  {id:70,q:"The dance is really a hit, but years ago no one ____ they were to achieve such success.",opts:["must have imagined","could have imagined","should have imagined","would have imagined"],ans:1,exp:"could have imagined = 本可能想象到。几年前没人能想象到他们会成功。对过去可能性的否定推测。"},
  {id:71,q:"The young lady prefers dressing up for a party to ____ by others.",opts:["be noticed","being noticed","having been noticed","have been noticed"],ans:0,exp:"prefer A to B 中 A 和 B 要同形式。A 是 dressing up，但注意这里 prefer...to 的 to 是介词，后面接 doing。实际上这里 to 后面是不定式表目的：dressing up (in order) to be noticed。"},
  {id:72,q:"Before the war broke out, many people ____ possessions they could not take with them.",opts:["threw away","put away","gave away","carried away"],ans:1,exp:"put away = 存放/藏好。战前人们把带不走的东西存放好。give away 是'送掉/泄露'，throw away 是'扔掉'，都不合情境。"},
  {id:73,q:"____ the pressure from work, teachers have to deal with psychological problems.",opts:["As far as","As long as","As well as","As soon as"],ans:2,exp:"as well as = 除了…还…= in addition to。除了工作压力，老师还要处理心理问题。不是'和…一样好'的意思。"},
  {id:74,q:"—Music may have been ____ of her tastes. —Oh, yeah, and music may have been ____ of her tastes.",opts:["the rather more respectable","much the most respectable","very the most respectable","even more respectable one"],ans:1,exp:"much the most respectable = 最受尊崇的。much 修饰最高级加强语气。of her tastes 暗示是多个爱好中最…的那个，用最高级。"},
  {id:75,q:"____ children tend to prefer sweets to meat.",opts:["The most","Most","Most of","The most of the"],ans:1,exp:"Most children = 大多数孩子。泛指不加冠词。Most of the children 指特定一群孩子中的大多数，这里不特指。"},
  {id:76,q:"—He looks very hot and dry. —So ____ if you had a temperature of 103.",opts:["would you","will you","would you have been","do you"],ans:0,exp:"So would you = 你也一样。if you had（虚拟语气过去式），主句用 would + 动词原形。So 开头倒装，时态和 would 保持一致。"},
  {id:77,q:"In 1927 Benjamin Franklin founded one of the first adult-education organizations, ____ the Junto.",opts:["has been called","to call","a group called","which group called"],ans:2,exp:"a group called... = 一个叫…的团体。同位语解释前面的 organization，called 过去分词作定语。简单直接，符合英语同位语习惯。"},
  {id:78,q:"The car ____ at the present speed until it reaches the foot of the mountain at about nine o'clock.",opts:["went","is going","goes","will be going"],ans:3,exp:"直到今晚九点之前车都将保持当前速度 → 将来进行时 will be going，强调将来一段时间内持续的动作。"},
  {id:79,q:"—You didn't invite Mary to the ball? —____ her, too?",opts:["Must I invite","Should I have invited","Must I have invited","Should I invite"],ans:1,exp:"Should I have invited her too? = 我本应该也邀请她吗？对过去该做而未做的事的疑问，用 should have done。"},
  {id:80,q:"The number 9.11 is a special number, ____, I think, that will be remembered by the Americans forever.",opts:["what","it","which","one"],ans:3,exp:"one 作同位语 = a special number。one 复指前面的 number，后面 that 从句修饰 one。which 引导的定语从句不需要逗号+I think 这种结构。"},
  {id:81,q:"Will you see to ____ that my birds are looked after well while I'm away?",opts:["them","yourself","it","me"],ans:2,exp:"see to it that... = 确保/务必…，固定句型。it 是形式宾语，that 从句是真正宾语。"},
  {id:82,q:"Many teens don't get enough sleep because they have too much homework, which ____ them up at night.",opts:["makes","breaks","turns","keeps"],ans:3,exp:"keep sb. up = 使某人熬夜。keep them up at night = 让他们晚上不能睡觉。make up 是'编造/化妆'，break up 是'分手'。"},
  {id:83,q:"—Ms Lin looks rather a kind lady. —But in fact she is cold and hard on us. You ____ believe it!",opts:["shouldn't","wouldn't","mustn't","needn't"],ans:1,exp:"You wouldn't believe it! = 你不会相信的！would 表'愿意/会'，否定的 wouldn't 表'不会相信'，惊叹语气。shouldn't 是'不应该'，不表意愿。"},
  {id:84,q:"The program is like a window on the world ____ you sit by it and fix your attention on what it shows.",opts:["if","as","while","unless"],ans:0,exp:"if = 如果。如果你坐在它前面专注于它展示的内容，这个节目就像一扇世界的窗户。if 引导条件状语从句。"},
  {id:85,q:"____ the search engine just gave me some brief introductions rather than the whole content.",opts:["Luckily","Mostly","Funnily","Disappointingly"],ans:3,exp:"Disappointingly = 令人失望的是。只给了简介而非全文 → 失望。需要副词修饰整个句子。"},
  {id:86,q:"—Did you know any French before you arrived in Washington? —Never ____ it, actually.",opts:["had I learned","have I learned","I learned","was I learning"],ans:0,exp:"Never 开头倒装。在到达华盛顿之前 → 过去的过去 → 过去完成时 had I learned。before 从句是过去，学法语在 before 之前。"},
  {id:87,q:"In fact, more and more people ____ to live a greener, healthier and more environmentally friendly life.",opts:["chose","choose","are choosing","have chosen"],ans:2,exp:"more and more people are choosing = 越来越多人在选择。进行时表趋势/变化，强调当前正在发生的社会潮流。"},
  {id:88,q:"Boiled rice ____ just about everything.",opts:["is served with","will serve","serves with","is served"],ans:0,exp:"is served with = 和…一起上桌。米饭是被'配上'各种菜的，被动语态。serve...with... = 用…配…上桌。"},
  {id:89,q:"The professor seated himself in a chair, ____ for answering questions.",opts:["had prepared","being prepared","preparing","prepared"],ans:3,exp:"prepared for... = 准备好了…。过去分词作伴随状语，表状态。'准备好回答问题'是一种状态，不是正在准备的动作。"},
  {id:90,q:"In Scandinavian countries it is common ____ for the husband to stay at home to look after the baby.",opts:["use","sense","practice","idea"],ans:2,exp:"common practice = 常见做法/惯例。丈夫在家带娃是北欧国家的普遍做法。practice 在此 = 惯常做法、习俗。"},
  {id:91,q:"—Why was our foreign teacher unhappy yesterday? —News about the tsunami ____ an attack of homesickness.",opts:["set for","set out","set about","set off"],ans:3,exp:"set off = 引发/触发。海啸新闻引发了思乡之情。set out 是'出发'，set about 是'着手做'，set for 不是固定搭配。"},
  {id:92,q:"—Oh, I didn't expect it was so early! I ____ to go out for dinner with my friends first.",opts:["was planning","am planning","have been planning","have planned"],ans:0,exp:"was planning = 之前一直计划着。说话者之前计划先出去吃饭，现在得知时间太早计划被打乱。过去进行时描述'本打算'。"},
  {id:93,q:"____ abroad for a tour can be a great honor for an ordinary person like me.",opts:["Taken","Taking","Being taken","Having been taken"],ans:2,exp:"Being taken abroad = 被带去国外。被动 + 动名词作主语。像我这样的普通人被带去国外旅游是很大的荣幸。"},
  {id:94,q:"—Did your classmate accept your invitation? —No, he ____ refused.",opts:["as far as","as well as","as soon as","as good as"],ans:3,exp:"as good as = 几乎/等于。He as good as refused = 他等于拒绝了（虽然可能没明说）。和 as well as（也）意思完全不同。"},
  {id:95,q:"I spent the whole day repairing the motorbike. The work was ____ simple.",opts:["nothing but","anything but","something of","all except"],ans:1,exp:"anything but = 绝不/一点也不。花了一整天 → 这工作一点也不简单。nothing but 是'只不过是'（反义），不要混淆。"},
  {id:96,q:"—Not getting that job was a big let-down. —Don't worry. Something better will ____.",opts:["come along","take on","go by","fall behind"],ans:0,exp:"come along = 出现/到来。更好的机会会出现的。安慰别人的常用语：Something better will come along."},
  {id:97,q:"____ the help of experienced instructors, this training ____ to be very efficient.",opts:["By; has proved","With; has proved","Under; is proving","With; is proved"],ans:1,exp:"with the help of = 在…的帮助下。prove to be = 证明是（主动语态，不用被动！）。has proved to be very efficient = 已被证明非常高效。"},
  {id:98,q:"To get as much firsthand information as possible, inspectors will hold workshops, ____?",opts:["isn't it","won't it","aren't they","won't they"],ans:3,exp:"反意疑问句和主句一致：inspectors will hold... → won't they? 主语 they 指代 inspectors，助动词 will 保持一致。"},
  {id:99,q:"It's a bad practice to ____ children much money as a New Year gift.",opts:["promise","permit","admit","allow"],ans:3,exp:"allow sb. sth. = 给予某人某物（双宾语）。allow children much money = 给孩子们很多钱。promise 是'承诺'，permit 是'允许做某事'。"},
  {id:100,q:"By the time you arrive home, I ____, so please don't make any noise when you come in.",opts:["shall have been sleeping","shall have slept","shall sleep","shall be sleeping"],ans:3,exp:"到你到家时我将正在睡觉 → 将来进行时 shall be sleeping。强调'那一刻正在睡'，不是'已经睡完了'(shall have slept)。"}
];

// ========== 模块4：阅读30种关键句型 ==========
const KEY_PATTERNS = [
  {id:1,pattern:"to have not…(as) to see…",meaning:"不定式含否定意味",example:"He had not the good breeding to see that simplicity and naturalness are the truest marks of distinction."},
  {id:2,pattern:"may as well not…as…",meaning:"与其……不如不……",example:"One may as well not know a thing at all as know it but imperfectly."},
  {id:3,pattern:"复杂宾补结构 (make it possible to…)",meaning:"make + it + adj + to do",example:"The development of sensitive equipment has made it possible to measure the acuity of hearing."},
  {id:4,pattern:"have only to…do",meaning:"只须……就能……",example:"We have only to turn to that extraordinary discovery made by Edison to see the significance of it."},
  {id:5,pattern:"that's all there is to it",meaning:"也不过如此而已",example:"If I'm touched, I'm touched—that's all there is to it."},
  {id:6,pattern:"not (no)…unless…",meaning:"除非……否则不……",example:"No increase in output can be expected unless a new assembly line is installed."},
  {id:7,pattern:"if at all",meaning:"即使……也（条件不充分）",example:"I can see only with great difficulty, if at all."},
  {id:8,pattern:"not…any more than…",meaning:"不能……正如不能……",example:"One cannot learn to sketch by reading about it any more than one can learn to swim while standing by the pool."},
  {id:9,pattern:"Every…not / All…not",meaning:"不见得每个/所有……都是……",example:"Every man is not polite, and all are not born gentlemen."},
  {id:10,pattern:"Be that as it may",meaning:"虽然如此，尽管这样",example:"Be that as it may, the nerve poison does its business with man far more quickly than the blood poison."},
  {id:11,pattern:"better…than…",meaning:"宁可……也不……",example:"Better my life should be ended by their hate, than that hated life should be prolonged to live without your love."},
  {id:12,pattern:"range from…to…",meaning:"范围从……到……",example:"Computer applications range from an assembly line completely run by computers to a children toy responding to remote signals."},
  {id:13,pattern:"It follows that…",meaning:"由此可见/因此",example:"It follows that the housewife will also expect to be able to have more leisure in her life."},
  {id:14,pattern:"as it were",meaning:"好象/可以说（插入语）",example:"A piece of iron near a magnet, feels, as it were, the threads of this attachment."},
  {id:15,pattern:"to be doing…when…",meaning:"正在做……时突然……",example:"She and a friend were walking home at about 10 o'clock, when a 'very big, very tall man' accosted them."},
  {id:16,pattern:"so much that…",meaning:"如此……以至于……",example:"It delighted him so much that he could never have enough of it."},
  {id:17,pattern:"the way…",meaning:"以……的方式",example:"I always thought she discussed things the way they ought to be discussed."},
  {id:18,pattern:"when (特殊用法)",meaning:"when 引导从句不总译为'当…时'",example:"Anything is better than not to write clearly. This is a risk well worth taking when you reflect how much better it is to be bold."},
  {id:19,pattern:"not…because…",meaning:"否定可前可后（歧义结构）",example:"In 1600 the earth was not the center of the universe because the majority then supposed it was."},
  {id:20,pattern:"make use of / take notice of 被动分隔",meaning:"动词短语被动语态被分隔",example:"Use is made of solar energy in heating houses."},
  {id:21,pattern:"so…that / such…that 双重使用",meaning:"同一句中两处使用结果状语",example:"This matter has come to such a pass that we must turn bullies, or superiority so far beyond us that we can hardly say it will ever be ours."},
  {id:22,pattern:"by doing…",meaning:"通过（做）……",example:"The hippos, by depositing dung in the water, fed the fish that support the storks."},
  {id:23,pattern:"too…to",meaning:"太……而不能……",example:"I had been too preoccupied with petty concerns to respond to the splendor of it all."},
  {id:24,pattern:"what…of",meaning:"对……的评价",example:"I can not say of myself what Johnson said of Pope: He never passed a fault unamended."},
  {id:25,pattern:"It occurred to sb. that…",meaning:"某人突然想到……",example:"It occurred to me that if I had continued to maintain eye contact, I would have been rude and aggressive."},
  {id:26,pattern:"形容词表语倒装",meaning:"No less obvious is the fact that…",example:"No less obvious is the fact there are great numbers of people who cannot get pleasure out of experiences."},
  {id:27,pattern:"The chances are that…",meaning:"有可能……",example:"The chances are you will never attempt that speed with poetry."},
  {id:28,pattern:"not think/believe 否定转移",meaning:"I don't think + 从句 (否定落在从句)",example:"I do not think anyone writes so well that he cannot learn much from it."},
  {id:29,pattern:"It dawned on sb. that…",meaning:"某人突然明白……",example:"It dawned on me that I had been wrong all along."},
  {id:30,pattern:"复合定语从句",meaning:"定语从句中含有另一从句",example:"Anyone must realize who reflects upon the manner in which they reach public office."}
];
