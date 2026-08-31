export type LanguageType = "en" | "hi" | "bhojpuri" | "hinglish";

export interface I18nDictionary {
  brand: string;
  brandTag: string;
  navUnit: string;
  navSoundboard: string;
  navPitch: string;
  navPledge: string;
  navLang: string;
  liveFeed: string;
  heroBadge: string;
  heroTitleLine1: string;
  heroTitleStartup: string;
  heroTitleLine2: string;
  heroSubtitle: string;
  heroCalculateBtn: string;
  heroMultiplierTag1: string;
  heroMultiplierTag2: string;
  heroMultiplierTag3: string;
  formTitle: string;
  formSubtitle: string;
  presetsLabel: string;
  presetBerozgarRaja: string;
  presetCorporateUdhaar: string;
  presetIas: string;
  presetBpsc: string;
  presetChacha: string;
  presetInfluencer: string;
  sectionProfile: string;
  sectionCareer: string;
  sectionAssets: string;
  sectionLooks: string;
  labelName: string;
  labelAge: string;
  labelDistrict: string;
  labelProfession: string;
  labelMonthlyIncome: string;
  labelFamilyExpectation: string;
  labelAncestralProperty: string;
  labelKhetBigha: string;
  labelInstaFollowers: string;
  labelReelPersona: string;
  labelHairline: string;
  labelComplexion: string;
  labelBodyType: string;
  labelManglik: string;
  labelKhaini: string;
  labelEnglish: string;
  labelPolitical: string;
  labelSanskari: string;
  labelVehiclePref: string;
  btnCalculate: string;
  btnCalculating: string;
  resultsTitle: string;
  resultsAssetClass: string;
  resultsTotalValuation: string;
  resultsUdhaarValuation: string;
  resultsScorpioEquiv: string;
  resultsBriefcaseEquiv: string;
  resultsHeartAttackRisk: string;
  resultsPerksTitle: string;
  resultsForeignTrip: string;
  resultsSaaliProtocol: string;
  resultsDulhanQuota: string;
  resultsSpecialGifts: string;
  breakdownTitle: string;
  itemCashBriefcase: string;
  itemVehicle: string;
  itemGold: string;
  itemElectronics: string;
  itemFurniture: string;
  itemBaraatBhoj: string;
  itemBandBaaja: string;
  btnCertificate: string;
  btnNegotiate: string;
  btnEmiPlanner: string;
  btnShare: string;
  btnModify: string;
  btnCopied: string;
  quoteTitle: string;
  quoteNext: string;
  card1Title: string;
  card1Desc: string;
  card1Btn: string;
  card2Title: string;
  card2Desc: string;
  card2Btn: string;
  card3Title: string;
  card3Desc: string;
  card3Btn: string;
  // Sarcastic validation messages
  validationErrorTitle: string;
  validationErrorSubtitle: string;
  errorNameEmpty: string;
  errorNameTooShort: string;
  errorAgeTooYoung: string;
  errorAgeTooOld: string;
  errorIncomeNegative: string;
  errorIncomeTooHigh: string;
  errorKhetNegative: string;
  errorKhetTooHigh: string;
  errorInstaNegative: string;
  errorPledgeNameEmpty: string;
  errorPledgeNameTooShort: string;
  validationFixedBadge: string;
}

export const TRANSLATIONS: Record<LanguageType, I18nDictionary> = {
  en: {
    brand: "CalculateMyDahej.com",
    brandTag: "VENTURES LTD",
    navUnit: "UNIT:",
    navSoundboard: "Audio SFX",
    navPitch: "Shark Pitch",
    navPledge: "PLEDGE",
    navLang: "LANGUAGE:",
    liveFeed: "🔥 UPSC AIR 1: ₹3.2 Cr • 🚗 SCORPIO S11 WAITING LIST: 8 MONTHS • 📉 PRIVATE SDE IN UDHAAR VS SARKARI BABU • 👑 BEROZGAR RAJA BABU SURGE",
    heroBadge: "BIHARI YUVA MATRIMONIAL FINTECH ENGINE",
    heroTitleLine1: "SHADI NAHI,",
    heroTitleStartup: "STARTUP",
    heroTitleLine2: "HAI.",
    heroSubtitle: '"Because every UPSC rank has a valuation and every government clerk is a blue-chip matrimonial asset."',
    heroCalculateBtn: "CALCULATE EXIT VALUATION (FREE)",
    heroMultiplierTag1: "BPSC & UPSC Multipliers",
    heroMultiplierTag2: "Certified by Bihari Yuva",
    heroMultiplierTag3: "100% Satirical Parody",
    formTitle: "Groom Asset Valuation Form",
    formSubtitle: '"Aise kaise chalega bhaiya?!" Calculate humorous matrimonial exit valuation & market multiplier.',
    presetsLabel: "Satish Ray Presets:",
    presetBerozgarRaja: "👑 Berozgar Raja Babu",
    presetCorporateUdhaar: "📉 Corporate SDE (Udhaar)",
    presetIas: "⭐ IAS Unicorn",
    presetBpsc: "👮 SDM / DSP",
    presetChacha: "🚩 Vidhayak Kin",
    presetInfluencer: "🔥 Reel Star",
    sectionProfile: "1. Candidate Dossier & Regional Hub",
    sectionCareer: "2. Career, Government Rank & Salary",
    sectionAssets: "3. Ancestral Khet, Haveli & Social Capital",
    sectionLooks: "4. Physical Attributes & Cultural Pedigree",
    labelName: "Full Name (Candidate):",
    labelAge: "Age (Years):",
    labelDistrict: "Regional District (Market Hub):",
    labelProfession: "Profession / Government Cadre:",
    labelMonthlyIncome: "Monthly In-Hand Income:",
    labelFamilyExpectation: "Family's Matrimonial Demands (The Hypocrisy Index):",
    labelAncestralProperty: "Ancestral Holding & Land Class:",
    labelKhetBigha: "Agricultural Land (In Bighas):",
    labelInstaFollowers: "Instagram Followers Count:",
    labelReelPersona: "Reel Persona & Content Strategy:",
    labelHairline: "Hairline & Scalp Index:",
    labelComplexion: "Complexion Tone:",
    labelBodyType: "Body Physique:",
    labelManglik: "Kundali Manglik Dosh",
    labelKhaini: "Khaini / Gutkha Habit",
    labelEnglish: "Shashi Tharoor Fluent English",
    labelPolitical: "Chai Tapri Political Debater",
    labelSanskari: "100% Pure Sanskari Vegetarian",
    labelVehiclePref: "Preferred Dowry Vehicle:",
    btnCalculate: "CALCULATE DAHEJ VALUATION NOW",
    btnCalculating: "RUNNING BIHARI YUVA VALUATION ALGORITHM...",
    resultsTitle: "Valuation Dossier:",
    resultsAssetClass: "Asset Class",
    resultsTotalValuation: "Total Estimated Dahej Market Valuation",
    resultsUdhaarValuation: "⚠️ Sasurji's Udhaar & Recovery Invoice (Negative Dahej)",
    resultsScorpioEquiv: "Scorpio Classic S11s",
    resultsBriefcaseEquiv: "VIP Briefcases of unsoiled cash!",
    resultsHeartAttackRisk: "Sasurji Heart Attack Risk:",
    resultsPerksTitle: "👑 Satish Ray's Exclusive VIP Demands & Special Perks",
    resultsForeignTrip: "Foreign Honeymoon Package:",
    resultsSaaliProtocol: "Saali Welcoming Protocol:",
    resultsDulhanQuota: "Bahu / Dulhan Quota:",
    resultsSpecialGifts: "Exclusive Dowry Perks & Demands:",
    breakdownTitle: "Itemized Dowry Breakdown (The Demands Rate-Card)",
    itemCashBriefcase: "1. Cash In Suitcase",
    itemVehicle: "2. Vehicle Segment",
    itemGold: "3. Gold Jewellery",
    itemElectronics: "4. Electronics Package",
    itemFurniture: "5. Furniture & Godrej",
    itemBaraatBhoj: "6. Baraat Bhoj & Catering",
    itemBandBaaja: "7. Band Baaja & DJ Rath",
    btnCertificate: "Official Certificate",
    btnNegotiate: "Negotiate with Sasurji (AI)",
    btnEmiPlanner: "Sasurji EMI Planner",
    btnShare: "Share",
    btnModify: "Modify",
    btnCopied: "Copied!",
    quoteTitle: "Bihari Yuva Wisdom of the Day (Click for Next)",
    quoteNext: "Next Quote →",
    card1Title: "AI Sasurji Bargaining Arena",
    card1Desc: "Negotiate your demands directly with an AI-powered skeptical father-in-law who analyzes salary slips & emotional blackmail.",
    card1Btn: "Start Negotiation →",
    card2Title: "Bihari Shark Tank Pitch Deck",
    card2Desc: "Browse Satish Ray's 5-slide venture pitch on how CMD plans to digitize the ₹1.5 Lakh Crore unorganized VIP suitcase market.",
    card2Btn: "View Slide Deck →",
    card3Title: "National Anti-Dowry Pledge",
    card3Desc: "Join 48,000+ conscious youths pledging for equality, zero dowry demands, and self-respect in marriage.",
    card3Btn: "Take Free Pledge →",
    validationErrorTitle: "⚠️ SASURJI REJECTED THIS FORM!",
    validationErrorSubtitle: "Please fix the matrimonial irregularities highlighted below before calculating valuation.",
    errorNameEmpty: "Hold up Raja Babu! Who will Sasurji register the Scorpio to with no name? Enter candidate name first!",
    errorNameTooShort: "Too short! Sasurji will suspect you're a fake groom. Enter a full respectable name (min 3 characters)!",
    errorAgeTooYoung: "Slow down kiddo! Minimum legal marriage age is 21. Sasurji calls the police, not the pandit!",
    errorAgeTooOld: "At 55+, Sasurji negotiates retirement pensions, not Fortuners! Please enter a realistic age (21-55).",
    errorIncomeNegative: "Negative salary?! Are you planning to pay Sasurji a monthly penalty? Enter zero or positive earnings!",
    errorIncomeTooHigh: "Earning ₹50L+/month? Why ask Sasurji for a Scorpio, buy the whole showroom yourself!",
    errorKhetNegative: "Digging underground for dowry? Farm land cannot be negative bighas!",
    errorKhetTooHigh: "500+ Bighas?! Zamindari was abolished in 1950! Enter realistic land holdings.",
    errorInstaNegative: "Negative followers?! Did Sasurji and all relatives block your profile?",
    errorPledgeNameEmpty: "Want to be an anti-dowry champion anonymously? Enter your proud name first!",
    errorPledgeNameTooShort: "A pledge needs a real name! Enter at least 3 characters.",
    validationFixedBadge: "Sasurji is impressed! Clean data. 👍"
  },
  hi: {
    brand: "CalculateMyDahej.com",
    brandTag: "प्राइवेट लिमिटेड",
    navUnit: "मुद्रा इकाई:",
    navSoundboard: "ध्वनि प्रभाव",
    navPitch: "शार्क पिच",
    navPledge: "शपथ लें",
    navLang: "भाषा चुनें:",
    liveFeed: "🔥 यूपीएससी AIR 1: ₹3.2 करोड़ • 🚗 स्कॉर्पियो S11 वेटिंग लिस्ट: 8 महीने • 📉 प्राइवेट SDE उधार खाते में • 👑 बेरोजगार राजा बाबू का जलवा",
    heroBadge: "बिहारी युवा वैवाहिक फिनटेक कैलकुलेटर",
    heroTitleLine1: "शादी नहीं,",
    heroTitleStartup: "स्टार्टअप",
    heroTitleLine2: "है।",
    heroSubtitle: '"क्योंकि हर सरकारी बाबू समाज का ब्लू-चिप शेयर है और हर यूपीएससी रैंक का अपना वैल्यूएशन है।"',
    heroCalculateBtn: "दहेज वैल्यूएशन निकालें (मुफ़्त)",
    heroMultiplierTag1: "बीपीएससी और यूपीएससी गुणक",
    heroMultiplierTag2: "बिहारी युवा द्वारा प्रमाणित",
    heroMultiplierTag3: "100% व्यंग्यात्मक पैरोडी",
    formTitle: "वर संपत्ति मूल्यांकन फॉर्म",
    formSubtitle: '"ऐसे कैसे चलेगा भैया?!" जानिए अपनी शादी का हास्यप्रद बाज़ार मूल्य और ससुराल से मिलने वाले उपहार।',
    presetsLabel: "सतीश रे के स्पेशल प्रीसेट:",
    presetBerozgarRaja: "👑 बेरोजगार राजा बाबू",
    presetCorporateUdhaar: "📉 कॉर्पोरेट SDE (उधार खाता)",
    presetIas: "⭐ आईएएस यूनिकॉर्न",
    presetBpsc: "👮 एसडीएम / डीएसपी",
    presetChacha: "🚩 चाचा विधायक हैं",
    presetInfluencer: "🔥 रील स्टार",
    sectionProfile: "1. उम्मीदवार का परिचय और ज़िला",
    sectionCareer: "2. पेशा, सरकारी पद और मासिक वेतन",
    sectionAssets: "3. पुश्तैनी खेत, हवेली और सामाजिक रसूख",
    sectionLooks: "4. शारीरिक लक्षण और संस्कारी आदतें",
    labelName: "उम्मीदवार का पूरा नाम:",
    labelAge: "उम्र (वर्ष):",
    labelDistrict: "ज़िला (क्षेत्रीय मार्केट हब):",
    labelProfession: "पेशा / सरकारी पद / परीक्षा:",
    labelMonthlyIncome: "मासिक इन-हैंड आय (रुपये):",
    labelFamilyExpectation: "परिवार की दहेज की मांग (दोगलापन इंडेक्स):",
    labelAncestralProperty: "पुश्तैनी ज़मीन और संपत्ति का प्रकार:",
    labelKhetBigha: "पुश्तैनी कृषि भूमि (बीघा में):",
    labelInstaFollowers: "इंस्टाग्राम फॉलोअर्स की संख्या:",
    labelReelPersona: "रील अवतार और वीडियो का प्रकार:",
    labelHairline: "सिर के बाल और हेयरलाइन की स्थिति:",
    labelComplexion: "रंग-रूप / त्वचा की रंगत:",
    labelBodyType: "शारीरिक बनावट:",
    labelManglik: "कुंडली में मांगलिक दोष",
    labelKhaini: "खैनी / गुटखा मलने की आदत",
    labelEnglish: "शशि थरूर जैसी फर्राटेदार अंग्रेज़ी",
    labelPolitical: "चाय की टपरी पर राजनीति बहस",
    labelSanskari: "100% संस्कारी शाकाहारी",
    labelVehiclePref: "ससुराल से मनपसंद गाड़ी:",
    btnCalculate: "दहेज मूल्यांकन अभी निकालें",
    btnCalculating: "बिहारी युवा एल्गोरिदम चल रहा है...",
    resultsTitle: "दहेज मूल्यांकन रिपोर्ट:",
    resultsAssetClass: "एसेट श्रेणी",
    resultsTotalValuation: "कुल अनुमानित दहेज मूल्यांकन",
    resultsUdhaarValuation: "⚠️ ससुर जी का उधार और वसूली बिल (उल्टा कर्ज़)",
    resultsScorpioEquiv: "स्कॉर्पियो क्लासिक S11 गाड़ियाँ",
    resultsBriefcaseEquiv: "वीआईपी अटैची भरे ₹500 के कड़क नोट!",
    resultsHeartAttackRisk: "ससुर जी के दिल के दौरे का ख़तरा:",
    resultsPerksTitle: "👑 सतीश रे स्पेशल वीआईपी मांगें और शाही सुविधाएं",
    resultsForeignTrip: "विदेश हनीमून पैकेज:",
    resultsSaaliProtocol: "साली स्वागत और जूता चुराई प्रोटोकॉल:",
    resultsDulhanQuota: "संस्कारी दुल्हन कोटा:",
    resultsSpecialGifts: "विशेष दहेज भत्ते और उपहार:",
    breakdownTitle: "मदवार दहेज का रेट कार्ड (विस्तृत सूची)",
    itemCashBriefcase: "1. अटैची में कड़क कैश",
    itemVehicle: "2. ससुराल से गाड़ी",
    itemGold: "3. खरा सोना और ज़ेवरात",
    itemElectronics: "4. इलेक्ट्रॉनिक्स पैकेज",
    itemFurniture: "5. शीशम फर्नीचर व गोदरेज",
    itemBaraatBhoj: "6. 500 बारातियों का शाही भोज",
    itemBandBaaja: "7. 15-पीस ब्रास बैंड व नागिन डीजे",
    btnCertificate: "ऑफिशियल सर्टिफिकेट",
    btnNegotiate: "ससुर जी से मोलभाव (AI)",
    btnEmiPlanner: "ससुर जी ईएमआई कैलकुलेटर",
    btnShare: "शेयर करें",
    btnModify: "संशोधन करें",
    btnCopied: "कॉपी हो गया!",
    quoteTitle: "बिहारी युवा का आज का सुविचार (अगला देखने के लिए क्लिक करें)",
    quoteNext: "अगला सुविचार →",
    card1Title: "एआई ससुर जी मोलभाव अखाड़ा",
    card1Desc: "सीधे एआई ससुर जी से मोलभाव करें जो आपकी सैलरी स्लिप और खानदान का कच्चा-चिट्ठा खोलकर रखेंगे।",
    card1Btn: "बातचीत शुरू करें →",
    card2Title: "बिहारी शार्क टैंक पिच डेक",
    card2Desc: "सतीश रे की 5 स्लाइड वाली पिच देखें कि कैसे यह मंच 1.5 लाख करोड़ के अनऑर्गनाइज्ड अटैची बाज़ार को डिजिटाइज़ करेगा।",
    card2Btn: "स्लाइड्स देखें →",
    card3Title: "राष्ट्रीय दहेज-मुक्त भारत संकल्प",
    card3Desc: "दहेज के ख़िलाफ़ आवाज़ उठाने और बराबरी का विवाह अपनाने वाले 48,000+ युवाओं में शामिल हों।",
    card3Btn: "मुफ़्त शपथ लें →",
    validationErrorTitle: "⚠️ ससुर जी ने यह फॉर्म खारिज कर दिया!",
    validationErrorSubtitle: "दहेज मूल्यांकन से पहले कृपया नीचे दिए गए हास्यप्रद दोषों को ठीक करें।",
    errorNameEmpty: "अरे राजा बाबू! बिना नाम के ससुर जी किसके नाम पर स्कॉर्पियो की आरसी बनवाएंगे? पहले नाम दर्ज करें!",
    errorNameTooShort: "इतना छोटा नाम? ससुर जी को संदेह हो जाएगा कि नकली दूल्हा है! पूरा नाम लिखें (कम से कम 3 अक्षर)!",
    errorAgeTooYoung: "अरे छोटू! पहले बाल विवाह कानून (21+) का पालन करें। जेल जाना है क्या बिना दहेज के? अभी पोगो देखिए!",
    errorAgeTooOld: "55+ की उम्र में दहेज नहीं, पेंशन और पोते-पोतियों के खेल की बात होती है! ससुर जी बोलेंगे 'राम राम'!",
    errorIncomeNegative: "माइनस में सैलरी?! ससुर जी को उलटा मासिक किश्त दोगे क्या? कर्ज चुकाने के लिए यह फॉर्म नहीं बना!",
    errorIncomeTooHigh: "50 लाख+ महीना कमा रहे हैं तो ससुर जी से क्यों मांग रहे हैं? पूरा शोरूम ही खरीद लीजिए!",
    errorKhetNegative: "जमीन पाताल में खोद के दहेज लेंगे क्या? खेत नेगेटिव में नहीं होता भैया!",
    errorKhetTooHigh: "500+ बीघा?! पूरा बिहार आपके ही पिताजी का है क्या? जमींदारी 1950 में ही समाप्त हो गई थी!",
    errorInstaNegative: "माइनस में फॉलोवर्स?! ससुर जी ने इंस्टाग्राम पर ब्लॉक कर दिया क्या?",
    errorPledgeNameEmpty: "बिना नाम लिखे दहेज-मुक्त नायक बनेंगे? पहले अपना शुभ नाम दर्ज करें!",
    errorPledgeNameTooShort: "संकल्प पत्र पर सही नाम लिखें! कम से कम 3 अक्षर जरूरी हैं।",
    validationFixedBadge: "शाबाश! अब ससुर जी संतुष्ट हैं। 👍"
  },
  bhojpuri: {
    brand: "CalculateMyDahej.com",
    brandTag: "प्राइवेट लिमिटेड",
    navUnit: "इकाई:",
    navSoundboard: "आवाज़ सन्दूक",
    navPitch: "शार्क पिच",
    navPledge: "संकल्प लीं",
    navLang: "भाषा:",
    liveFeed: "🔥 यूपीएससी AIR 1: ₹3.2 करोड़ • 🚗 स्कॉर्पियो S11 खातिर 8 महीना के लाइन • 📉 प्राइवेट सॉफ्टवेयर इंजीनियर उधार खाता में • 👑 बेरोजगार राजा बाबू के जलवा",
    heroBadge: "बिहारी लइका वैवाहिक फिनटेक इंजन",
    heroTitleLine1: "शादी नाहीं,",
    heroTitleStartup: "स्टार्टअप",
    heroTitleLine2: "बाटे।",
    heroSubtitle: '"का हो बबुआ! यूपीएससी निकलल तऽ ससुर जी के खेत बिकाई, नाहीं तऽ कढ़ाही में रसगुल्ला ना मिली!"',
    heroCalculateBtn: "दहेज के भाव निकालीं (फ्री बा)",
    heroMultiplierTag1: "बीपीएससी अउर यूपीएससी गुणक",
    heroMultiplierTag2: "बिहारी लइका द्वारा प्रमाणित",
    heroMultiplierTag3: "100% हास्य अउर मौज",
    formTitle: "दूल्हा संपत्ति मूल्यांकन फॉर्म",
    formSubtitle: '"अईसे कईसे चली भैया?!" आपन औकात अउर ससुराल से मिले वाला सब सामान के हिसाब जानीं।',
    presetsLabel: "सतीश रे के खास प्रीसेट:",
    presetBerozgarRaja: "👑 बेरोजगार राजा बाबू",
    presetCorporateUdhaar: "📉 प्राइवेट आईटी (उधार खाता)",
    presetIas: "⭐ डीएम साहब (IAS)",
    presetBpsc: "👮 डीएसपी / दारोगा बाबू",
    presetChacha: "🚩 चाचा विधायक बाड़न",
    presetInfluencer: "🔥 रील बनावे वाला",
    sectionProfile: "1. लइका के नाम अउर ज़िला",
    sectionCareer: "2. नौकरी, सरकारी पद अउर दरमाहा",
    sectionAssets: "3. पुश्तैनी खेत, दलान अउर दबंगई",
    sectionLooks: "4. देह-सूरत, बाल अउर संस्कारी आदत",
    labelName: "लइका के पूरा नाम:",
    labelAge: "उमिर (साल):",
    labelDistrict: "ज़िला (कहाँ शादी करे के बा):",
    labelProfession: "का काम करे लें / कवन परीक्षा निकलल बा:",
    labelMonthlyIncome: "महीना के दरमाहा (हाथ में कितना आवेला):",
    labelFamilyExpectation: "परिवार के दहेज के मांग (दोगलापन):",
    labelAncestralProperty: "घर-दुआर अउर पुश्तैनी ज़मीन:",
    labelKhetBigha: "पुश्तैनी खेत (बीघा में):",
    labelInstaFollowers: "इंस्टाग्राम पर कऽ गो फॉलोअर बाड़न:",
    labelReelPersona: "रील बनावे के अंदाज़:",
    labelHairline: "माथा पर कतेक बाल बचल बा:",
    labelComplexion: "रंग-रूप / चेहरा के रंगत:",
    labelBodyType: "शरीर के बनावट:",
    labelManglik: "कुंडली में मांगलिक दोष बा",
    labelKhaini: "खैनी-सुपारी मले के आदत",
    labelEnglish: "फर्राटेदार अंग्रेज़ी बोले लें",
    labelPolitical: "चाय के दुकान पर राजनीति झाड़े लें",
    labelSanskari: "100% संस्कारी शाकाहारी",
    labelVehiclePref: "ससुराल से कवन गाड़ी चाहीं:",
    btnCalculate: "दहेज के भाव अभी निकालीं",
    btnCalculating: "बिहारी युवा कंप्यूटर हिसाब लगावत बा...",
    resultsTitle: "दहेज मूल्यांकन पर्चा:",
    resultsAssetClass: "औकात श्रेणी",
    resultsTotalValuation: "कुल दहेज के अनुमानित बाज़ार भाव",
    resultsUdhaarValuation: "⚠️ ससुर जी के उधार पर्चा (उल्टा दूल्हा के देवे के पड़ी)",
    resultsScorpioEquiv: "काला स्कॉर्पियो क्लासिक गाड़ी",
    resultsBriefcaseEquiv: "वीआईपी अटैची भरल कड़क नोट!",
    resultsHeartAttackRisk: "ससुर जी के दिल के दौरा के ख़तरा:",
    resultsPerksTitle: "👑 सतीश रे स्पेशल वीआईपी मांग अउर शाही खातिरदारी",
    resultsForeignTrip: "विदेश हनीमून पैकेज:",
    resultsSaaliProtocol: "साली स्वागत अउर जूता चुराई प्रोटोकॉल:",
    resultsDulhanQuota: "संस्कारी दुल्हन कोटा:",
    resultsSpecialGifts: "खास दहेज के भत्ता अउर सामान:",
    breakdownTitle: "ससुराल से मिले वाला सामान के पूरा रेट कार्ड",
    itemCashBriefcase: "1. अटैची में कड़क रुपया",
    itemVehicle: "2. ससुराल से गाड़ी",
    itemGold: "3. 24 कैरेट खरा सोना",
    itemElectronics: "4. टीवी, फ्रिज अउर एसी",
    itemFurniture: "5. शीशम के पलंग अउर गोदरेज",
    itemBaraatBhoj: "6. 500 बराती के चंपारण मटन भोज",
    itemBandBaaja: "7. 15-गो बाजा अउर नागिन डीजे",
    btnCertificate: "सरकारी सर्टिफिकेट",
    btnNegotiate: "ससुर जी से बतकही (AI)",
    btnEmiPlanner: "ससुर जी ईएमआई खाता",
    btnShare: "शेयर करीं",
    btnModify: "बदलीं",
    btnCopied: "कॉपी हो गईल!",
    quoteTitle: "बिहारी लइका के आज के विचार (अगिला देखे खातिर दबाईं)",
    quoteNext: "अगिला विचार →",
    card1Title: "एआई ससुर जी से पंचायत",
    card1Desc: "ससुर जी से सोझे बतकही करीं, उ पहिले सैलरी स्लिप देखिहें तब बात आगे बढ़ाईहें।",
    card1Btn: "बातचीत शुरू करीं →",
    card2Title: "बिहारी शार्क टैंक पिच",
    card2Desc: "सतीश रे के 5 स्लाइड वाला बिज़नेस प्लान देखीं कि कइसे 1.5 लाख करोड़ के अटैची बाज़ार डिजिटाइज़ होई।",
    card2Btn: "स्लाइड्स देखीं →",
    card3Title: "दहेज-मुक्त बिहार के संकल्प",
    card3Desc: "दहेज ना लेवे अउर आपन सम्मान बचावे खातिर 48,000+ लइका-लड़की लोग से जुड़ीं।",
    card3Btn: "मुफ़्त संकल्प लीं →",
    validationErrorTitle: "⚠️ ससुर जी ई फॉर्म रिजेक्ट कऽ दिहलन!",
    validationErrorSubtitle: "दहेज निकाले से पहिले नीचे लिखल गड़बड़ी के ठीक करीं महाराज!",
    errorNameEmpty: "ए राजा बाबू! बिना नाम के ससुर जी कवन नामे स्कॉर्पियो के आरसी बनवइहें? पहिले नाम लिखीं!",
    errorNameTooShort: "एतना छोट नाम? ससुर जी के शक हो जाई कि फर्जी दूल्हा बा! पूरा नाम लिखीं (कम से कम 3 अक्षर)।",
    errorAgeTooYoung: "अरे छोटू! पहिले बाल विवाह कानून पढ़ा (21+). जेल जाए के बा का बिना दहेज़ के? जा के पोगा देखा!",
    errorAgeTooOld: "55+ में दहेज़ ना, पेंशन आ पोता-पोती खिलावे के बात होला! ससुर जी कहिहें 'राम राम'!",
    errorIncomeNegative: "माइनस में पगार?! ससुर जी के उलटे महीना-महीना ब्याज देब का? कर्जा चुकावे खातिर ई फॉर्म ना हटे!",
    errorIncomeTooHigh: "50 लाख से बेसी कमात बानी त ससुर जी से काहे गाड़ी मांगत बानी? पूरा शो-रूम कीन लीं!",
    errorKhetNegative: "जमीन पाताल में खोद के दहेज़ लेब का? खेत माइनस में ना होला भैया!",
    errorKhetTooHigh: "500+ बीघा?! पूरा बिहारे रउवे बाबूजी के ह का? जमींदारी 1950 में खतम हो गइल रहे!",
    errorInstaNegative: "माइनस में फॉलोवर्स?! ससुर जी इंस्टाग्राम पर ब्लॉक मार दिहलन का?",
    errorPledgeNameEmpty: "बिना नाम लिखले दहेज़-मुक्त हीरो बनब? पहिले आपन नाम लिखीं!",
    errorPledgeNameTooShort: "संकल्प खातिर सही नाम चाहीं! कम से कम 3 अक्षर लिखीं।",
    validationFixedBadge: "शाबाश बबुआ! अब ससुर जी राजी बाड़न। 👍"
  },
  hinglish: {
    brand: "CalculateMyDahej.com",
    brandTag: "VENTURES LTD",
    navUnit: "UNIT:",
    navSoundboard: "Audio SFX",
    navPitch: "Shark Pitch",
    navPledge: "PLEDGE",
    navLang: "LANGUAGE:",
    liveFeed: "🔥 UPSC AIR 1: ₹3.2 Cr • 🚗 SCORPIO S11 WAITING LIST: 8 MONTHS • 📉 PRIVATE SDE IN UDHAAR VS SARKARI BABU • 👑 BEROZGAR RAJA BABU SURGE",
    heroBadge: "BIHARI YUVA MATRIMONIAL FINTECH ENGINE",
    heroTitleLine1: "SHADI NAHI,",
    heroTitleStartup: "STARTUP",
    heroTitleLine2: "HAI.",
    heroSubtitle: '"Because every UPSC rank has a valuation and every government clerk is a blue-chip matrimonial asset."',
    heroCalculateBtn: "CALCULATE EXIT VALUATION (FREE)",
    heroMultiplierTag1: "BPSC & UPSC Multipliers",
    heroMultiplierTag2: "Certified by Bihari Yuva",
    heroMultiplierTag3: "100% Satirical Parody",
    formTitle: "Groom Asset Valuation Form",
    formSubtitle: '"Aise kaise chalega bhaiya?!" Calculate humorous matrimonial exit valuation & market multiplier.',
    presetsLabel: "Satish Ray Special Presets:",
    presetBerozgarRaja: "👑 Berozgar Raja Babu",
    presetCorporateUdhaar: "📉 Corporate SDE (Udhaar Khata)",
    presetIas: "⭐ IAS Unicorn",
    presetBpsc: "👮 SDM / DSP",
    presetChacha: "🚩 Chacha Vidhayak Hain",
    presetInfluencer: "🔥 Viral Reel Star",
    sectionProfile: "1. Candidate Profile & District Hub",
    sectionCareer: "2. Profession, Sarkari Naukri & Salary",
    sectionAssets: "3. Ancestral Khet, Haveli & Bahubali Links",
    sectionLooks: "4. Physical Traits & Cultural Swag",
    labelName: "Full Name (Candidate):",
    labelAge: "Age (Years):",
    labelDistrict: "Regional District (Market Hub):",
    labelProfession: "Profession / Sarkari Rank:",
    labelMonthlyIncome: "Monthly In-Hand Salary (INR):",
    labelFamilyExpectation: "Family's Dowry Demands (Doglapan Index):",
    labelAncestralProperty: "Ancestral Holding & Land Class:",
    labelKhetBigha: "Agricultural Land (In Bighas):",
    labelInstaFollowers: "Instagram Followers Count:",
    labelReelPersona: "Reel Persona & Content Strategy:",
    labelHairline: "Hairline & Scalp Health:",
    labelComplexion: "Complexion Tone:",
    labelBodyType: "Body Physique:",
    labelManglik: "Kundali Manglik Dosh",
    labelKhaini: "Khaini / Gutkha Habit",
    labelEnglish: "Shashi Tharoor Fluent English",
    labelPolitical: "Chai Tapri Political Debater",
    labelSanskari: "100% Pure Sanskari Vegetarian",
    labelVehiclePref: "Demanded Vehicle from Sasural:",
    btnCalculate: "CALCULATE DAHEJ VALUATION NOW",
    btnCalculating: "RUNNING BIHARI YUVA VALUATION ALGORITHM...",
    resultsTitle: "Valuation Dossier:",
    resultsAssetClass: "Asset Class",
    resultsTotalValuation: "Total Estimated Dahej Market Valuation",
    resultsUdhaarValuation: "⚠️ Sasurji's Udhaar & Recovery Invoice (Negative Dahej)",
    resultsScorpioEquiv: "Scorpio Classic S11s",
    resultsBriefcaseEquiv: "VIP Briefcases of unsoiled ₹500 cash!",
    resultsHeartAttackRisk: "Sasurji Heart Attack Risk:",
    resultsPerksTitle: "👑 Satish Ray's Exclusive VIP Demands & Special Perks",
    resultsForeignTrip: "Foreign Honeymoon Package:",
    resultsSaaliProtocol: "Saali Welcoming Protocol:",
    resultsDulhanQuota: "Bahu / Dulhan Quota:",
    resultsSpecialGifts: "Exclusive Dowry Perks & Demands:",
    breakdownTitle: "Itemized Dowry Breakdown (The Demands Rate-Card)",
    itemCashBriefcase: "1. Cash In Suitcase",
    itemVehicle: "2. Vehicle Segment",
    itemGold: "3. 24K Pure Gold",
    itemElectronics: "4. Electronics Package",
    itemFurniture: "5. Furniture & Godrej",
    itemBaraatBhoj: "6. 500 Barati Champaran Bhoj",
    itemBandBaaja: "7. 15-Piece Band & Naagin DJ",
    btnCertificate: "Official Certificate",
    btnNegotiate: "Negotiate with Sasurji (AI)",
    btnEmiPlanner: "Sasurji EMI Planner",
    btnShare: "Share",
    btnModify: "Modify",
    btnCopied: "Copied!",
    quoteTitle: "Bihari Yuva Wisdom of the Day (Click for Next)",
    quoteNext: "Next Quote →",
    card1Title: "AI Sasurji Bargaining Arena",
    card1Desc: "Negotiate your demands directly with an AI-powered skeptical father-in-law who analyzes salary slips & emotional blackmail.",
    card1Btn: "Start Negotiation →",
    card2Title: "Bihari Shark Tank Pitch Deck",
    card2Desc: "Browse Satish Ray's 5-slide venture pitch on how CMD plans to digitize the ₹1.5 Lakh Crore unorganized VIP suitcase market.",
    card2Btn: "View Slide Deck →",
    card3Title: "National Anti-Dowry Pledge",
    card3Desc: "Join 48,000+ conscious youths pledging for equality, zero dowry demands, and self-respect in marriage.",
    card3Btn: "Take Free Pledge →",
    validationErrorTitle: "⚠️ SASURJI REJECTED THIS FORM!",
    validationErrorSubtitle: "Arey bhaiya! Pehle neeche diye gaye ghotalon ko theek karo, tabhi exit valuation calculate hoga.",
    errorNameEmpty: "Arey Raja Babu! Bina naam ke Sasurji kiske naam pe Scorpio register karwayenge? Naam daalo pehle!",
    errorNameTooShort: "Itna chhota naam? Sasurji ko shaq ho jayega ki nakli dulha hai! Poora izzatdar naam likho (min 3 chars).",
    errorAgeTooYoung: "Arey Chhotu! Pehle Bal Vivah kanoon padho (21+). Jail jaana hai ka bina dahej ke? Pogo dekho abhi!",
    errorAgeTooOld: "55+ mein dahej nahi, pension aur arthi ka insurance discuss hota hai! Sasurji bolenge 'Ram Ram'!",
    errorIncomeNegative: "Negative salary?! Sasurji ko ulta monthly kist doge kya? Karza chukane ke liye yeh calculator nahi bana!",
    errorIncomeTooHigh: "50 Lakh+ mahina kama rahe ho toh Sasurji se kyun Scorpio maang rahe ho? Poora showroom khareed lo!",
    errorKhetNegative: "Zameen underground mein khod ke dahej loge ka? Khet negative mein nahi hota bhaiya!",
    errorKhetTooHigh: "500+ Bigha?! Poora Bihar tumhare hi baap ka hai ka? Jamindari 1950 mein hi khatam ho gayi thi!",
    errorInstaNegative: "Negative followers?! Sasurji ne Instagram pe block maar diya kya?",
    errorPledgeNameEmpty: "Bina naam likhe anti-dowry hero banoge? Pehle apna shubh naam daalo!",
    errorPledgeNameTooShort: "Pledge lene ke liye poora naam likho bhaiya (kam se kam 3 akshar)!",
    validationFixedBadge: "Wah Raja Babu! Data ekdum solid hai. Sasurji is happy! 👍"
  }
};
