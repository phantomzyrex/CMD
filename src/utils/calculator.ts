import {
  CandidateFormState,
  ValuationBreakdown,
  ProfessionType,
  DistrictType,
  FamilyExpectationType,
  AncestralPropertyType,
  ReelPersonaType,
  ValuationImpactItem
} from "../types";

export const PROFESSION_CONFIG: Record<
  ProfessionType,
  { label: string; baseCash: number; defaultVehicle: string; vehicleValue: number; tier: string; badgeColor: string; description: string }
> = {
  upsc_ias_ips: {
    label: "UPSC CSE Topper / IAS / IPS",
    baseCash: 12500000, // 1.25 Cr
    defaultVehicle: "Toyota Fortuner Legender 4x4 (White)",
    vehicleValue: 4800000,
    tier: "DIAMOND IAS GRADE (Samaj Ka Kohinoor)",
    badgeColor: "bg-black text-orange-500 border-2 border-black shadow-[4px_4px_0px_0px_rgba(234,88,12,1)]",
    description: "Sasurji khet bech ke bhi rishta pakka karenge! DM Sahab ka aukaat unmatched hai."
  },
  bpsc_pcs: {
    label: "BPSC / State PCS / SDM / DSP",
    baseCash: 5500000, // 55 Lakhs
    defaultVehicle: "Mahindra Scorpio Classic S11 (Black Z-Plus)",
    vehicleValue: 2200000,
    tier: "GOLDEN PCS BABU (Laal Batti Aspirant)",
    badgeColor: "bg-black text-orange-400 border-2 border-black shadow-[4px_4px_0px_0px_rgba(234,88,12,1)]",
    description: "Block Development Officer ban gaye toh 10 gaon me danka bajega!"
  },
  chacha_vidhayak: {
    label: "Chacha Vidhayak Hain (Bahubali Clan)",
    baseCash: 4500000,
    defaultVehicle: "Scorpio Classic with 6 Sirens & VIP Number",
    vehicleValue: 2400000,
    tier: "BAHUBALI VIP ROYALTY (Kanoon Apni Jeb Me)",
    badgeColor: "bg-black text-orange-500 border-2 border-black shadow-[4px_4px_0px_0px_rgba(234,88,12,1)]",
    description: "Dahej mangte nahi, order bhejte hain! Sasurji haath jod ke aayenge."
  },
  ssc_cgl_inspector: {
    label: "SSC CGL / Income Tax / Excise Inspector",
    baseCash: 3500000, // 35 Lakhs
    defaultVehicle: "Hyundai Creta SX (O) Sunroof Model",
    vehicleValue: 1800000,
    tier: "SILVER SARKARI BABUA (Mukherjee Nagar Pride)",
    badgeColor: "bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(234,88,12,1)]",
    description: "5 saal room me maggi khaye the, ab uska return on investment lene ka time!"
  },
  bank_po: {
    label: "Bank PO / SBI / PSU Officer",
    baseCash: 2500000,
    defaultVehicle: "Maruti Brezza ZXi+ Automatic",
    vehicleValue: 1350000,
    tier: "BRONZE SARKARI CASHIER (Loan Sanctioner)",
    badgeColor: "bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(234,88,12,1)]",
    description: "Har 3 saal me transfer hoga, par pension aur medical claim secure hai."
  },
  railway_loco_ntpc: {
    label: "Railway Loco Pilot / JE / NTPC",
    baseCash: 1800000,
    defaultVehicle: "Maruti Suzuki Swift VXi (Red)",
    vehicleValue: 850000,
    tier: "RAILWAY RELIABLE (Track Par Life Set)",
    badgeColor: "bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(234,88,12,1)]",
    description: "Free railway pass + Quarter allotment = Sasurji ki aankhon ka taara."
  },
  govt_teacher: {
    label: "Govt School Teacher (BPSC TRE / Niyojit)",
    baseCash: 1500000,
    defaultVehicle: "TVS Apache RTR 160 4V",
    vehicleValue: 160000,
    tier: "GURUJI GRADE (Attendance Puncher)",
    badgeColor: "bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(234,88,12,1)]",
    description: "Subah 9 baje school, dopahar me dahi-chuda, shaam me coaching."
  },
  faang_it_dev: {
    label: "FAANG / Remote Software Engineer ($$$)",
    baseCash: 1200000,
    defaultVehicle: "Tata Nexon EV (Green Number Plate)",
    vehicleValue: 1650000,
    tier: "PRIVATE IT SKEPTICISM (WFH Keyboard Babu)",
    badgeColor: "bg-black text-orange-400 border-2 border-black shadow-[4px_4px_0px_0px_rgba(234,88,12,1)]",
    description: "Sasurji says: 'US ka client band hua toh kal hi layoff! Sarkari peon is safer than your 40 LPA!'"
  },
  private_corporate: {
    label: "Private Corporate Sales / BPO",
    baseCash: 600000,
    defaultVehicle: "Hero Glamour 125cc",
    vehicleValue: 105000,
    tier: "TARGET CHASER (Excel Sheet Warrior)",
    badgeColor: "bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(234,88,12,1)]",
    description: "Monthly target poora nahi hua toh dahej ki EMI kaise bharega?"
  },
  startup_founder: {
    label: "Startup Founder / 'CEO of Early Stage AI'",
    baseCash: 250000,
    defaultVehicle: "Second-hand Alto 800 (CNG Fitted)",
    vehicleValue: 220000,
    tier: "VENTURE CAPITALIST JOKER (Seed Round Bhikhari)",
    badgeColor: "bg-black text-orange-500 border-2 border-black shadow-[4px_4px_0px_0px_rgba(234,88,12,1)]",
    description: "Sasurji says: 'Burn rate ki baatein karke hamari beti ka pet jalayega!'"
  },
  unemployed_aspirant: {
    label: "Full-Time Aspirant (10 Years In Preparation)",
    baseCash: 50000,
    defaultVehicle: "Atlas Goldline Cycle + VIP VIP Attache",
    vehicleValue: 8000,
    tier: "FOUNDATION BATCH PERMANENT RESIDENT",
    badgeColor: "bg-black text-slate-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    description: "Sasurji says: 'Tumko ek katori rasgulla aur shaadi ka card mil jaye, wahi bada dahej hai!'"
  }
};

export const DISTRICT_MULTIPLIERS: Record<DistrictType, { label: string; multiplier: number; remark: string }> = {
  patna: { label: "Patna (Capital Zone)", multiplier: 1.30, remark: "Boring Road & Kankarbagh demand index peak par hai!" },
  darbhanga: { label: "Darbhanga (Mithilanchal Hub)", multiplier: 1.18, remark: "Makhana, Paan aur Dahej ka authentic Mithila standard." },
  muzaffarpur: { label: "Muzaffarpur (Shahi Litchi Region)", multiplier: 1.20, remark: "Smart city tag + Shahi Litchi multiplier applied." },
  gaya: { label: "Gaya (Historic & Religious Hub)", multiplier: 1.12, remark: "Pinda-daan se pehle rishta-daan index normal hai." },
  bhagalpur: { label: "Bhagalpur (Silk City)", multiplier: 1.14, remark: "Resham sarees + Cash briefcase demand solid." },
  gorakhpur: { label: "Gorakhpur (Purvanchal Epicenter)", multiplier: 1.25, remark: "Bulldozer brand value bonus included!" },
  varanasi: { label: "Varanasi / Banaras (Ghats & Politics)", multiplier: 1.22, remark: "Banarasi Paan + VIP protocol multiplier." },
  delhi_ncr_nri: { label: "Delhi NCR / Noida (Bihari NRI Techie)", multiplier: 1.35, remark: "High cost of living + Gurgaon society wedding benchmark." },
  dehat_gaon: { label: "Gramin Dehat (Pustaani Gaon)", multiplier: 1.00, remark: "Pure grassroots village rate card." }
};

export const FAMILY_EXPECTATION_CONFIG: Record<
  FamilyExpectationType,
  { label: string; amount: number; comment: string; catchphrase: string }
> = {
  humko_kuch_nahi_chahiye: {
    label: "“Humko kuch nahi chahiye, bas ladki Fortuner me aaye” (Hypocrisy Max)",
    amount: 2200000,
    comment: "Classic Bihari Sasural dialogue: Words say ₹0, eyes demand ₹22 Lakhs SUV + 25 tola sona!",
    catchphrase: "Aise kaise chalega bhaiya?!"
  },
  padosi_competition: {
    label: "“Padosi ke Sharmaji se ₹25 Lakh zyada chahiye” (Samaj Me Izzat)",
    amount: 2500000,
    comment: "Competitive Fufa-ji index: Sharmaji got Creta, so we strictly need Fortuner + DJ Rath!",
    catchphrase: "Sharmaji ka beta se kam me baat nahi banegi!"
  },
  fufaji_prestige: {
    label: "“Fufa-ji & Mausa-ji VIP Protocol & Gold Rings Quota”",
    amount: 1500000,
    comment: "18 distant uncles demanding AC suites, safari suits, and 2-tola gold rings each.",
    catchphrase: "Fufa-ji ka gussa shant karne ka special fund!"
  },
  chacha_vidhayak_ego: {
    label: "“Chacha Vidhayak Hain — 50 Scorpios VIP Barat Protocol”",
    amount: 3500000,
    comment: "Bahubali clan surcharge: Highway blockade, 6 sirens, and police pilot car escort.",
    catchphrase: "Chacha Bhatija Protocol Active!"
  },
  kewal_aashirwad_aur_scorpio: {
    label: "“Kewal aashirwad chahiye... aur 1 Scorpio Classic S11 (Black)”",
    amount: 1800000,
    comment: "Groom claims simplicity, but hands over Mahindra brochure at first meeting.",
    catchphrase: "Scorpio mil jaye toh samaj samjhauta kar leta hai!"
  },
  zero_expectation: {
    label: "“True Zero Dahej (Dulha stands on own feet, Dadi is weeping)”",
    amount: 0,
    comment: "Modern rational couple rejecting regressiveness. Real self-respect in action!",
    catchphrase: "Beti padhao, aage badhao — Dahej mat lo!"
  }
};

export const ANCESTRAL_PROPERTY_CONFIG: Record<
  AncestralPropertyType,
  { label: string; amount: number; comment: string }
> = {
  highway_plot: {
    label: "National Highway 4-Lane Touching Commercial Plot",
    amount: 3000000,
    comment: "Highway frontage gives +₹30 Lakhs instant leverage. Sasurji is already dreaming of a petrol pump!"
  },
  pustaani_khet: {
    label: "Pustaani Khet in Gaon (Per Bigha Rate Multiplier)",
    amount: 1500000,
    comment: "Rich alluvial Gangetic soil with tubewell, borewell, and Mahindra tractor rights."
  },
  ancestral_haveli: {
    label: "120-Year-Old Pustaani Haveli with 40-Year Peepal Tree & Dalaan",
    amount: 2000000,
    comment: "Grand ancestral lineage! Dalaan can host 400 baratis for dahi-chuda feast."
  },
  litigated_chacha_land: {
    label: "Litigated 10 Bigha (Chacha ne High Court me Stay le rakha hai)",
    amount: -500000,
    comment: "Legal dispute penalty: 14 dates in Patna High Court required before any ploughing."
  },
  patna_flat: {
    label: "3BHK Flat in Patna (Boring Road / Kankarbagh)",
    amount: 1800000,
    comment: "Urban capital prestige. Kids can study in coaching hubs right downstairs."
  },
  village_dalaan: {
    label: "Pukka Makaan with Baithka & Buffalo Shed in Gaon",
    amount: 800000,
    comment: "Pure rustic authority with 4 Murrah buffaloes providing 40L milk daily."
  },
  none: {
    label: "Zero Ancestral Property (Living on Rent in Mukherjee Nagar)",
    amount: 0,
    comment: "No land safety net. Groom must rely 100% on cracking government exams!"
  }
};

export const REEL_PERSONA_CONFIG: Record<
  ReelPersonaType,
  { label: string; bonusFactor: number; comment: string; catchphrase: string }
> = {
  bhojpuri_viral_dancer: {
    label: "Viral Bhojpuri / Bollywood Reel Dancer (Hook Step Specialist)",
    bonusFactor: 500000,
    comment: "Has 15 trending reels on Pawan Singh / Khesari Lal. Baratis will force Naagin dance at mandap!",
    catchphrase: "Kamariya kare lapa lap!"
  },
  studygram_upsc_notes: {
    label: "Study-Gram Aesthetic Notes & Highlighting Reels (LBSNAA Dreams)",
    bonusFactor: 400000,
    comment: "10-hour study timelapse with lo-fi beats. Sasurji believes ladka is 99% selected in IAS!",
    catchphrase: "IAS babu ban ke dikhayenge!"
  },
  gym_flex_protein: {
    label: "Gym Mirror Flexing & Protein Shake Influencer",
    bonusFactor: 300000,
    comment: "Chest 44 inches, biceps 16 inches. Sasurji gets free family security guard.",
    catchphrase: "Dole-shole dekh ke ladki wale fida!"
  },
  slowmo_gangster_walk: {
    label: "Chai Tapri Slow-Mo 'Kaa Ho Babua' Gangster Walking Reel Specialist",
    bonusFactor: 450000,
    comment: "Walks in front of Scorpio with black sunglasses and background gun-fire sound effect.",
    catchphrase: "Kaa ho babua, aukaat dekhe?"
  },
  tech_vlogger_gadgets: {
    label: "Tech Unboxer & Gadget Reviewer",
    bonusFactor: 200000,
    comment: "Will review the Sasurji-gifted Sony Bravia TV live on YouTube from mandap.",
    catchphrase: "Unboxing my wedding gifts live!"
  },
  sanskari_private_account: {
    label: "100% Sanskari Private Account (DP is Lord Shiva / Ganga Ghat)",
    bonusFactor: 350000,
    comment: "Zero reels, zero cringe. Relatives certify: 'Ladka seedha gai hai (cow)!'",
    catchphrase: "Sanskari dulha ka solid demand!"
  }
};

export const VEHICLE_DETAILS = {
  fortuner: { name: "Toyota Fortuner Legender 4x4", value: 4800000 },
  scorpio_classic: { name: "Mahindra Scorpio Classic S11 (Black Tints)", value: 2200000 },
  creta: { name: "Hyundai Creta SX (O) Sunroof", value: 1800000 },
  swift: { name: "Maruti Suzuki Swift Dzire VXi", value: 850000 },
  apache: { name: "TVS Apache RTR 160 4V", value: 160000 },
  splendor: { name: "Hero Splendor Plus (i3S Black Edition)", value: 88000 },
  atlas_cycle: { name: "Atlas 24-inch Desi Heavy Cycle + VIP Bag", value: 6500 },
};

export function calculateDahejValuation(state: CandidateFormState): ValuationBreakdown {
  const safeState = {
    ...state,
    monthlyIncome: typeof state.monthlyIncome === "number" && !isNaN(state.monthlyIncome) ? state.monthlyIncome : 0,
    instagramFollowers: typeof state.instagramFollowers === "number" && !isNaN(state.instagramFollowers) ? state.instagramFollowers : 0,
    khetBigha: typeof state.khetBigha === "number" && !isNaN(state.khetBigha) ? state.khetBigha : 0
  };

  const prof = PROFESSION_CONFIG[safeState.profession] || PROFESSION_CONFIG.upsc_ias_ips;
  const dist = DISTRICT_MULTIPLIERS[safeState.district] || DISTRICT_MULTIPLIERS.patna;
  const familyExp = FAMILY_EXPECTATION_CONFIG[safeState.familyExpectation] || FAMILY_EXPECTATION_CONFIG.humko_kuch_nahi_chahiye;
  const ancestralProp = ANCESTRAL_PROPERTY_CONFIG[safeState.ancestralProperty] || ANCESTRAL_PROPERTY_CONFIG.pustaani_khet;
  const reelPersona = REEL_PERSONA_CONFIG[safeState.reelPersona] || REEL_PERSONA_CONFIG.studygram_upsc_notes;

  // Check for Satish Ray archetype 1: BEROZGAR RAJA BABU
  const isBerozgar = safeState.profession === "unemployed_aspirant" || safeState.monthlyIncome <= 10000;
  const hasStrongOtherThings =
    safeState.hairline === "thick_bollywood" ||
    safeState.bodyType === "gym_sixpack" ||
    safeState.bodyType === "bihari_pehelwan" ||
    safeState.isEnglishFluent ||
    safeState.ancestralProperty === "pustaani_khet" ||
    safeState.ancestralProperty === "ancestral_haveli" ||
    safeState.ancestralProperty === "highway_plot" ||
    safeState.instagramFollowers >= 40000 ||
    safeState.familyExpectation === "chacha_vidhayak_ego" ||
    safeState.isPoliticalDebater;

  // Check for Satish Ray archetype 2: CORPORATE MAJDOOR IN UDHAAR
  const isHighSalaryCorporate =
    (safeState.profession === "faang_it_dev" ||
      safeState.profession === "private_corporate" ||
      safeState.profession === "startup_founder") &&
    safeState.monthlyIncome >= 120000;
  const lacksOtherThings =
    (safeState.hairline === "receding_stress" || safeState.hairline === "bald_topi_mandate") &&
    (safeState.ancestralProperty === "none" || safeState.ancestralProperty === "litigated_chacha_land" || safeState.khetBigha <= 2) &&
    (safeState.bodyType === "family_pack_tond" || !safeState.isPoliticalDebater || safeState.instagramFollowers < 5000);

  if (isBerozgar && hasStrongOtherThings) {
    // 👑 SATISH RAY'S BEROZGAR RAJA BABU MODE
    const cashInBriefcase = 18500000; // 1.85 Cr
    const vehicleName = "Mahindra Scorpio Classic S11 (Black VIP Z-Plus) + Toyota Fortuner";
    const vehicleValue = 5200000;
    const goldTola = 100; // 100 tolas
    const goldValue = goldTola * 75000; // 75 Lakhs
    const electronicsValue = 1200000;
    const furnitureValue = 900000;
    const cateringValue = 1800000;
    const bandBaajaValue = 600000;
    const total = cashInBriefcase + vehicleValue + goldValue + electronicsValue + furnitureValue + cateringValue + bandBaajaValue;

    return {
      cashInBriefcase,
      vehicleName,
      vehicleValue,
      goldTola,
      goldValue,
      electronicsValue,
      furnitureValue,
      cateringValue,
      bandBaajaValue,
      total,
      isUdhaarMode: false,
      isBerozgarRajaBabu: true,
      tierTitle: "👑 BEROZGAR RAJA BABU (Satish Ray Special)",
      tierBadgeColor: "bg-black text-amber-400 border-2 border-black shadow-[4px_4px_0px_0px_rgba(251,191,36,1)]",
      sasurjiRiskLevel: "Extreme / Kangaali Risk",
      scorpioEquivalent: Number((total / 2200000).toFixed(2)),
      signatureCatchphrase: "“Launda berozgar hai toh kya hua? Swag, zameen aur khandaan poore jile me sabse aage hai!”",
      satiricalVerdict: "Berozgar Raja Babu Status: Zero corporate stress, thick Bollywood hair, 24x7 chai pe charcha. Sasurji is gladly mortgaging his village lands to welcome you!",
      familyExpectationImpact: {
        label: "Berozgar Swag Protocol (No Corporate Servitude)",
        amount: 3500000,
        comment: "Zero job = 100% time dedicated to village politics, Dalaan meetings, and commanding respect!"
      },
      ancestralPropertyImpact: {
        label: "Pustaani Haveli & Gangetic Alluvial Soil Rights",
        amount: 3000000,
        comment: "Sasurji is mesmerized by the ancestral dalaan and free buffalo milk supply!"
      },
      instagramImpact: {
        label: `${safeState.instagramFollowers.toLocaleString()} Followers • ${reelPersona.label}`,
        amount: 1500000,
        comment: "Viral local stardom multiplier applied by Sasurji's recommendation committee."
      },
      humorousHighlights: [
        "100 Tolas Hallmarked 24K Pure Gold Jewellery Set",
        "Dual Vehicle Package: Fortuner Legender 4x4 + Scorpio Classic Black",
        "7-Star Switzerland & Dubai All-Expense Paid Honeymoon Package",
        "VIP Sasural Hospitality with 2 Dedicated Saalis showering rose petals"
      ],
      foreignTrip: {
        title: "👑 7-Star Switzerland & Dubai All-Expense Paid Luxury Honeymoon",
        desc: "Private helicopter tour over Swiss Alps + 5-star desert camel safari in Dubai sponsored 100% by Sasurji.",
        isLuxury: true
      },
      saaliProtocol: {
        title: "👑 2 Dedicated Shahi Saalis VIP Welcoming Protocol",
        desc: "2 enthusiastic Saalis singing traditional folk songs, serving fresh paan & carrying the gold thali at mandap.",
        count: 2
      },
      dulhanQuota: {
        title: "👑 Verified 100% Sundar, Sushil, Homely, Sanskari & Educated Virgin Bahu Quota",
        desc: "Sasurji guarantees: MA First Class, expert in Champaran cuisine, respects elders, and has zero corporate attitude."
      },
      specialPerksList: [
        "24x7 Chai Pe Charcha VIP Briefcase Fund (+₹25 Lakhs)",
        "Tailor-made Silk Kurta-Pyjama with Real Pearl Buttons",
        "Zero Corporate Layoff Stress Exemption Certificate",
        "100 Tolas Pure Hallmarked 24K Gold Kundan Jewellery Set",
        "Free petrol vouchers for Scorpio Classic for next 5 years"
      ]
    };
  }

  if (isHighSalaryCorporate && lacksOtherThings) {
    // 📉 SATISH RAY'S CORPORATE MAJDOOR UDHAAR MODE (Negative Dahej)
    const cashInBriefcase = -1500000; // -15 Lakhs recovery
    const vehicleName = "2nd Hand Atlas Cycle with rusted bell, loose chain & flat rear tire (Chor Bazaar Special)";
    const vehicleValue = -2500;
    const goldTola = 0;
    const goldValue = -5000; // Rusted brass ring
    const electronicsValue = -15000; // Old 14-inch B&W TV with foil antenna
    const furnitureValue = -10000; // Plastic folding cot with torn niwar
    const cateringValue = -25000; // Cold samosa & lukewarm cutting tea
    const bandBaajaValue = -5000; // Recorded sound on broken speaker
    const total = -3500000; // -₹35 Lakhs Udhaar!

    return {
      cashInBriefcase,
      vehicleName,
      vehicleValue,
      goldTola,
      goldValue,
      electronicsValue,
      furnitureValue,
      cateringValue,
      bandBaajaValue,
      total,
      isUdhaarMode: true,
      isBerozgarRajaBabu: false,
      udhaarBreakdownNote: "Sasurji Recovery Invoice: Layoff Anxiety Surcharge (-₹15L) + Sedentary Laptop Posture Penalty (-₹10L) + Halwai Samosa Recovery Fee!",
      tierTitle: "📉 CORPORATE MAJDOOR UDHAAR KHATA (Sasurji Debt Recovery)",
      tierBadgeColor: "bg-red-600 text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
      sasurjiRiskLevel: "Low",
      scorpioEquivalent: -1.59,
      signatureCatchphrase: "“40 LPA ka package hai par kal layoff hua toh? Pehle hamari beti ke naam 50 Lakh FD karao!”",
      satiricalVerdict: "Udhaar Khata Status: Private job has zero guarantee. Sasurji is demanding a ₹35 Lakhs debt recovery invoice from the groom before wedding!",
      familyExpectationImpact: {
        label: "Corporate Layoff Anxiety Surcharge",
        amount: -1500000,
        comment: "Sasurji says: 'US client contract cancelled toh kal hi berozgar! Sarkari peon is safer than your 40 LPA!'"
      },
      ancestralPropertyImpact: {
        label: "Zero Khet & Rental Room In Bangalore Penalty",
        amount: -1000000,
        comment: "No land security net. Paying ₹45,000 rent for 1BHK in Marathahalli with water tankers."
      },
      instagramImpact: {
        label: `${safeState.instagramFollowers.toLocaleString()} Followers • Zero Social Leverage`,
        amount: -500000,
        comment: "Receding hairline + laptop slouch penalty strictly applied by Sasurji."
      },
      humorousHighlights: [
        "Vehicle Given: 2nd Hand Atlas Cycle with rusted bell & loose chain",
        "Electronics: Old 14-inch Black & White TV with aluminium foil antenna",
        "Furniture: Plastic folding cot (Khatiya) with torn niwar + 1 broken chair",
        "Baraat Bhoj: Cold stale samosa, lukewarm cutting tea & 1 broken Marie biscuit"
      ],
      foreignTrip: {
        title: "Morning Walk to Local Municipal Drainage Park (Self-Funded)",
        desc: "Sasurji refuses passport visa: 'Local Chhat Ghat pe ghoom aao, budget khatam!'",
        isLuxury: false
      },
      saaliProtocol: {
        title: "⚠️ 2 Angry Saalis demanding ₹50,000 fine before letting you enter the lane",
        desc: "Saalis refuse to hand over shoes until groom signs a non-layoff indemnification bond.",
        count: 2
      },
      dulhanQuota: {
        title: "⚠️ High-Maintenance Bahu Reality Check",
        desc: "Sasurji warning: 'Beti will make you do bartan-dhona, Jhaadu & WFH laundry duties!'",
      },
      specialPerksList: [
        "2nd Hand Atlas Cycle with rusted bell, loose chain & flat rear tire",
        "Old 14-inch Black & White TV with aluminium foil antenna",
        "Plastic folding cot (Khatiya) with torn niwar + 1 broken plastic chair",
        "Cold stale samosa, lukewarm cutting tea & 1 broken Marie biscuit",
        "Sasurji sends IOU debt invoice for all food eaten at wedding"
      ]
    };
  }

  // Base cash calculation
  let baseCash = prof.baseCash;

  // Monthly income scaling (for private / business)
  if (safeState.monthlyIncome > 50000) {
    baseCash += (safeState.monthlyIncome - 50000) * 12 * 0.35;
  }

  // District multiplier
  baseCash = Math.round(baseCash * dist.multiplier);

  // Property bonus calculation
  let propertyBonus = ancestralProp.amount;
  if (safeState.ancestralProperty === "pustaani_khet") {
    propertyBonus = Math.min(safeState.khetBigha * 250000, 3500000);
  }

  // Instagram Followers & Reel Impact calculation
  const followersCount = Math.max(0, safeState.instagramFollowers || 0);
  let instaMultiplierAmount = 0;
  if (followersCount > 500000) {
    instaMultiplierAmount = 800000 + reelPersona.bonusFactor;
  } else if (followersCount > 100000) {
    instaMultiplierAmount = 500000 + reelPersona.bonusFactor;
  } else if (followersCount > 25000) {
    instaMultiplierAmount = 250000 + (reelPersona.bonusFactor * 0.7);
  } else if (followersCount > 5000) {
    instaMultiplierAmount = 100000 + (reelPersona.bonusFactor * 0.4);
  } else {
    instaMultiplierAmount = reelPersona.bonusFactor * 0.2;
  }

  // Family Expectation Surcharge
  const familyExpectationAmount = familyExp.amount;

  // Physical & personal adjustments
  let personalAdjustment = 0;

  // Hairline adjustment
  if (state.hairline === "thick_bollywood") personalAdjustment += 350000;
  if (state.hairline === "receding_stress") personalAdjustment -= 250000;
  if (state.hairline === "bald_topi_mandate") personalAdjustment -= 600000;

  // Complexion adjustment
  if (state.complexion === "milky_white") personalAdjustment += 300000;
  if (state.complexion === "wheatish_hero") personalAdjustment += 100000;
  if (state.complexion === "sun_kissed_ganga") personalAdjustment -= 50000;

  // Body Type
  if (state.bodyType === "gym_sixpack") personalAdjustment += 400000;
  if (state.bodyType === "bihari_pehelwan") personalAdjustment += 250000;
  if (state.bodyType === "family_pack_tond") personalAdjustment -= 200000;

  // Sarcastic multipliers
  if (state.isManglik) personalAdjustment -= 400000; // Manglik discount
  if (state.hasKhainiHabit) personalAdjustment -= 200000; // Khaini cleanup tax
  if (state.isEnglishFluent) personalAdjustment += 350000; // Shashi Tharoor premium
  if (state.isPoliticalDebater) personalAdjustment += 200000; // Chai tapri discussion power
  if (state.isVegetarianSanskari) personalAdjustment += 250000; // Sanskari bonus

  // Final Cash In Briefcase
  const cashInBriefcase = Math.max(
    25000,
    Math.round(baseCash + propertyBonus + familyExpectationAmount + instaMultiplierAmount + personalAdjustment)
  );

  // Vehicle selection
  const selectedVehicle = VEHICLE_DETAILS[state.customVehiclePreference] || {
    name: prof.defaultVehicle,
    value: prof.vehicleValue
  };

  // Gold Tola (1 tola ≈ 10g). Gold value ≈ ₹75,000 / tola
  let goldTola = 15;
  if (state.profession === "upsc_ias_ips") goldTola = 50;
  else if (state.profession === "bpsc_pcs" || state.profession === "chacha_vidhayak") goldTola = 35;
  else if (state.profession === "ssc_cgl_inspector" || state.profession === "bank_po") goldTola = 25;
  else if (state.profession === "railway_loco_ntpc" || state.profession === "govt_teacher") goldTola = 18;
  else if (state.profession === "unemployed_aspirant") goldTola = 2;

  const goldValue = goldTola * 75000;

  // Electronics Package
  let electronicsValue = 350000;
  if (state.profession === "upsc_ias_ips") electronicsValue = 850000;
  if (state.profession === "unemployed_aspirant") electronicsValue = 45000;

  // Furniture Package
  let furnitureValue = 300000;
  if (state.profession === "upsc_ias_ips") furnitureValue = 750000;
  if (state.profession === "unemployed_aspirant") furnitureValue = 35000;

  // Catering & Barat Bhoj (500-1000 Barati Champaran Mutton & Rasgulla)
  let cateringValue = 550000;
  if (state.profession === "upsc_ias_ips") cateringValue = 1500000;
  if (state.profession === "unemployed_aspirant") cateringValue = 90000;

  // Band Baaja & DJ Rath
  let bandBaajaValue = 180000;
  if (state.profession === "upsc_ias_ips") bandBaajaValue = 450000;
  if (state.profession === "unemployed_aspirant") bandBaajaValue = 25000;

  const total = cashInBriefcase + selectedVehicle.value + goldValue + electronicsValue + furnitureValue + cateringValue + bandBaajaValue;

  // Scorpio equivalence (1 Scorpio = ~₹22,00,000)
  const scorpioEquivalent = Number((total / 2200000).toFixed(2));

  let sasurjiRiskLevel: "Low" | "Medium" | "High" | "Extreme / Kangaali Risk" = "Medium";
  if (total > 15000000) sasurjiRiskLevel = "Extreme / Kangaali Risk";
  else if (total > 7500000) sasurjiRiskLevel = "High";
  else if (total > 3000000) sasurjiRiskLevel = "Medium";
  else sasurjiRiskLevel = "Low";

  // Pick signature catchphrase
  const catchphrases = [
    "“Aise kaise chalega bhaiya?!” — Bihari Yuva Anthem",
    "“Chacha Bhatija Protocol: Kanoon apni jeb me, dahej hamare briefcase me!”",
    "“Kaa ho babua, aukaat dekh ke chakkar aa gaya ki nahi?”",
    "“Launda IAS ban gaya, ab Sasurji ke pustaani khet bikenge!”",
    "“Hum dahej ke sakht khilaf hain, par Papa kehte hain Scorpio toh standard hai!”"
  ];
  const signatureCatchphrase = familyExp.catchphrase || catchphrases[Math.floor(Math.random() * catchphrases.length)];

  // Satirical Verdict
  let satiricalVerdict = "";
  if (state.profession === "upsc_ias_ips") {
    satiricalVerdict = "DM Sahab Status: Sasurji will mortgage 3 generations of ancestral harvest to book your wedding hall!";
  } else if (state.profession === "chacha_vidhayak") {
    satiricalVerdict = "Bahubali Protocol: Police escort will carry the dahej briefcase safely to your village dalaan.";
  } else if (state.profession === "unemployed_aspirant") {
    satiricalVerdict = "Aspirant Reality: You get free tea, 2 rasgullas, and a stern lecture to clear NTPC prelims first.";
  } else {
    satiricalVerdict = "Market Equilibrium: Balanced mix of government job security, Scorpio demand, and Fufa-ji tea disputes.";
  }

  const humorousHighlights = [
    `Family Expectation: "${familyExp.label.substring(0, 45)}..." (+₹${(familyExpectationAmount / 100000).toFixed(1)}L)`,
    `Ancestral Holding: ${ancestralProp.label.substring(0, 40)} (+₹${(propertyBonus / 100000).toFixed(1)}L)`,
    `Insta Influencer Metric: ${followersCount.toLocaleString()} Followers (${reelPersona.label.substring(0, 30)}) (+₹${(instaMultiplierAmount / 100000).toFixed(1)}L)`,
    `Vehicle Demanded: ${selectedVehicle.name} (Value: ₹${(selectedVehicle.value / 100000).toFixed(1)}L)`
  ];

  const familyExpectationImpact: ValuationImpactItem = {
    label: familyExp.label,
    amount: familyExpectationAmount,
    comment: familyExp.comment
  };

  const ancestralPropertyImpact: ValuationImpactItem = {
    label: ancestralProp.label,
    amount: propertyBonus,
    comment: ancestralProp.comment
  };

  const instagramImpact: ValuationImpactItem = {
    label: `${followersCount.toLocaleString()} Followers • ${reelPersona.label}`,
    amount: Math.round(instaMultiplierAmount),
    comment: `Instagram Reel Factor: ${reelPersona.comment}`
  };

  return {
    cashInBriefcase,
    vehicleName: selectedVehicle.name,
    vehicleValue: selectedVehicle.value,
    goldTola,
    goldValue,
    electronicsValue,
    furnitureValue,
    cateringValue,
    bandBaajaValue,
    total,
    isUdhaarMode: false,
    isBerozgarRajaBabu: false,
    tierTitle: prof.tier,
    tierBadgeColor: prof.badgeColor,
    sasurjiRiskLevel,
    scorpioEquivalent,
    signatureCatchphrase,
    satiricalVerdict,
    familyExpectationImpact,
    ancestralPropertyImpact,
    instagramImpact,
    humorousHighlights,
    foreignTrip: {
      title: "5-Star Maldives & Dubai Honeymoon Package",
      desc: "All-inclusive beach villa with private pool and business class flights.",
      isLuxury: true
    },
    saaliProtocol: {
      title: "2 Dedicated Saalis VIP Welcoming Protocol",
      desc: "Traditional welcoming squad with rose garlands and custom Juta Churai negotiation rights.",
      count: 2
    },
    dulhanQuota: {
      title: "Verified Sundar, Sushil & Sanskari Bahu Quota",
      desc: "Educated, cultured, and blessed with traditional family values."
    },
    specialPerksList: [
      "Custom Sherwani & Silk Pagdi Package",
      "55-inch Sony Bravia 4K TV & Split AC",
      "Sheesham King Bed & Triple Locker Godrej Almirah",
      "500 Barati Champaran Bhoj Protocol"
    ]
  };
}

export const FUNNY_QUOTES = [
  "“Aise kaise chalega bhaiya?! Dahej lena paap hai, par agar Scorpio S11 mil rahi ho toh samaj samjhauta kar leta hai!”",
  "“Chacha Bhatija Protocol: Vidhayak ka phone ek baar chala gaya toh Sasurji cash briefcase seedha ghar pahuncha denge!”",
  "“Kaa ho babua! Mukherjee Nagar me 5 saal ka tapashya = 50 Lakh cash in VIP Suitcase.”",
  "“Private company ka 50 LPA < Sarkari Railway Group D ka ₹28,000 + Quarter!”",
  "“Sasurji ki pehli shart: Chacha Vidhayak ho ya na ho, zameen Highway facing honi chahiye!”",
  "“Shaadi me dulha jitna shant, dahej utna ashant!”",
  "“Computer science engineer ko Sasurji bolte hain: 'Arey beta, Cyber Cafe kholna hai kya?'”",
  "“Instagram par 1 Lakh follower hain par sarkari naukri nahi hai? Sasurji bolenge 'Reel bana ke roti sekega kya?'”"
];

export const BIHARI_STARTUP_PITCH_SLIDES: { title: string; subtitle: string; bullets: string[]; hilariousStat: string; emoji: string }[] = [
  {
    title: "1. The Problem Statement",
    subtitle: "Matrimonial Inefficiency in the Ganga Belt",
    bullets: [
      "Currently, dahej rate determination requires 14 Mausa-ji, 3 Fufa-ji, and 85 cups of cutting chai.",
      "Zero transparency in Scorpio vs Creta demand indexing.",
      "Groom's family always overvalues the B.Tech degree; Bride's father always cites crop failure."
    ],
    hilariousStat: "84% of wedding arguments happen over Rasgulla quota per barati.",
    emoji: "☕"
  },
  {
    title: "2. The Solution: CMD Platform",
    subtitle: "AI-Powered Proprietary 'Aukaat' Estimation Engine",
    bullets: [
      "Real-time dynamic pricing based on UPSC Rank, BPSC Cutoff, and Khet Bigha counts.",
      "Algorithmic hairline-loss depreciation model (-₹50k per square centimeter of scalp).",
      "Instant Sasurji Counter-Offer Negotiator with automated emotional blackmail defense."
    ],
    hilariousStat: "Processed over 4.2 Million sarcastic calculations across Bihar & UP.",
    emoji: "⚡"
  },
  {
    title: "3. Market Size & TAM",
    subtitle: "Total Addressable Matrimonial Economy",
    bullets: [
      "TAM: ₹1,50,000 Crore unorganized VIP Suitcase market.",
      "SAM: 45 Lakh government job aspirants in Mukherjee Nagar and Patna Boring Road.",
      "SOM: 100% of youth who say 'Hum dahej nahi lenge, par papa nahi maan rahe'!"
    ],
    hilariousStat: "Scorpio Classic S11 waiting list is directly correlated with BPSC results.",
    emoji: "📈"
  },
  {
    title: "4. Business & Monetization Model",
    subtitle: "FinTech + ShaadiTech Unit Economics",
    bullets: [
      "2.5% transaction commission on cash attache handovers.",
      "SaaS Subscription: 'Sasurji Pro' for spotting fake salary slips & rented Fortuners.",
      "Ancillary revenue from Champaran Mutton catering tie-ups."
    ],
    hilariousStat: "Projected ARR: 400 Scorpios and 12,000 Tola Sona by 2027.",
    emoji: "💼"
  },
  {
    title: "5. The Ask & Vision",
    subtitle: "Seed Round Pitch to Bihari Shark Tank",
    bullets: [
      "Seeking ₹100 Crores for 0.001% equity (Pre-money valuation of whole Bihar economy).",
      "Funds will be deployed into building AI Fufa-ji detection and automated Naagin dance synthesizers.",
      "Final Exit Strategy: Merge with Shaadi.com or get acquired by Patna Junction VIP Lounge."
    ],
    hilariousStat: "Status: Sharks are currently busy arguing over whose Chacha is bigger Vidhayak.",
    emoji: "🦈"
  }
];
