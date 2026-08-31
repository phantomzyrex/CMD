export type LanguageType = "en" | "hi" | "bhojpuri" | "hinglish";

export type ProfessionType =
  | "upsc_ias_ips"
  | "bpsc_pcs"
  | "ssc_cgl_inspector"
  | "bank_po"
  | "railway_loco_ntpc"
  | "govt_teacher"
  | "faang_it_dev"
  | "private_corporate"
  | "startup_founder"
  | "unemployed_aspirant"
  | "chacha_vidhayak";

export type DistrictType =
  | "patna"
  | "darbhanga"
  | "muzaffarpur"
  | "gaya"
  | "bhagalpur"
  | "gorakhpur"
  | "varanasi"
  | "delhi_ncr_nri"
  | "dehat_gaon";

export type HairlineType = "thick_bollywood" | "receding_stress" | "bald_topi_mandate";
export type ComplexionType = "milky_white" | "wheatish_hero" | "sun_kissed_ganga";
export type BodyType = "gym_sixpack" | "fit_normal" | "family_pack_tond" | "bihari_pehelwan";

export type FamilyExpectationType =
  | "humko_kuch_nahi_chahiye"
  | "padosi_competition"
  | "fufaji_prestige"
  | "chacha_vidhayak_ego"
  | "kewal_aashirwad_aur_scorpio"
  | "zero_expectation";

export type AncestralPropertyType =
  | "highway_plot"
  | "pustaani_khet"
  | "ancestral_haveli"
  | "litigated_chacha_land"
  | "patna_flat"
  | "village_dalaan"
  | "none";

export type ReelPersonaType =
  | "bhojpuri_viral_dancer"
  | "studygram_upsc_notes"
  | "gym_flex_protein"
  | "slowmo_gangster_walk"
  | "tech_vlogger_gadgets"
  | "sanskari_private_account";

export interface CandidateFormState {
  name: string;
  age: number;
  district: DistrictType;
  profession: ProfessionType;
  monthlyIncome: number; // in INR
  familyExpectation: FamilyExpectationType;
  ancestralProperty: AncestralPropertyType;
  propertyType: "highway_plot" | "pustaani_khet" | "patna_flat" | "village_dalaan" | "none";
  khetBigha: number;
  instagramFollowers: number;
  reelPersona: ReelPersonaType;
  hairline: HairlineType;
  complexion: ComplexionType;
  bodyType: BodyType;
  isManglik: boolean;
  hasKhainiHabit: boolean;
  isEnglishFluent: boolean;
  isPoliticalDebater: boolean;
  isVegetarianSanskari: boolean;
  customVehiclePreference: "fortuner" | "scorpio_classic" | "creta" | "swift" | "apache" | "splendor" | "atlas_cycle";
}

export interface ValuationImpactItem {
  label: string;
  amount: number;
  comment: string;
}

export interface ValuationBreakdown {
  cashInBriefcase: number;
  vehicleName: string;
  vehicleValue: number;
  goldTola: number;
  goldValue: number;
  electronicsValue: number;
  furnitureValue: number;
  cateringValue: number;
  bandBaajaValue: number;
  total: number;
  isUdhaarMode: boolean;
  isBerozgarRajaBabu: boolean;
  udhaarBreakdownNote?: string;
  tierTitle: string;
  tierBadgeColor: string;
  sasurjiRiskLevel: "Low" | "Medium" | "High" | "Extreme / Kangaali Risk";
  scorpioEquivalent: number;
  signatureCatchphrase: string;
  satiricalVerdict: string;
  familyExpectationImpact: ValuationImpactItem;
  ancestralPropertyImpact: ValuationImpactItem;
  instagramImpact: ValuationImpactItem;
  humorousHighlights: string[];
  foreignTrip: {
    title: string;
    desc: string;
    isLuxury: boolean;
  };
  saaliProtocol: {
    title: string;
    desc: string;
    count: number;
  };
  dulhanQuota: {
    title: string;
    desc: string;
  };
  specialPerksList: string[];
}

export interface SasurjiMessage {
  id: string;
  role: "user" | "sasurji";
  content: string;
  timestamp: string;
  counterOffer?: number;
  sentiment?: "insulted" | "considering" | "pleased" | "stubborn";
}

export interface PitchSlide {
  title: string;
  subtitle: string;
  bullets: string[];
  hilariousStat: string;
  emoji: string;
}


