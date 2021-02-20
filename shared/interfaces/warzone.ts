export interface Warzone {
  title: string,
  platform: string,
  username: string,
  type: string,
  level: number,
  maxLevel: number,
  levelXpRemainder: number,
  levelXpGained: number,
  prestige: number,
  prestigeId: number,
  maxPrestige: number,
  totalXp: number,
  paragonRank: number,
  paragonId: number,
  s: number,
  p: number,
  lifetime: lifetime,
  weekly: weekly
}

interface lifetime {
  all: all,
  mode: mode
}

interface weekly {
  all: all,
  mode: mode
}

interface all {
  properties: properties
}

interface properties {
  recordLongestWinStreak: number,
  recordXpInAMatch: number,
  accuracy: number,
  losses: number,
  totalGamesPlayed: number,
  score: number,
  winLossRatio: number,
  totalShots: number,
  bestScoreXp: number,
  gamesPlayed: number,
  bestSquardKills: number,
  bestSguardWave: number,
  bestConfirmed: number,
  deaths: number,
  wins: number,
  bestSquardCrates: number,
  kdRatio: number,
  bestAssists: number,
  bestFieldgoals: number,
  bestScore: number,
  recordDeathsInAMatch: number,
  scorePerGame: number,
  bestSPM: number,
  bestKillChains: number,
  recordKillsInAMatch: number,
  suicides: number,
  wlRatio: number,
  currentWinStreak: number,
  bestMatchBonusXp: number,
  bestMatchXp: number,
  bestSguardWeaponLevel: number,
  bestKD: number,
  kills: number,
  bestKillsAsInfected: number,
  bestReturns: number,
  bestStabs: number,
  bestKillsAsSurvivor: number,
  timePlayedTotal: number,
  bestDestructions: number,
  headshots: number,
  bestRescues: number,
  assists: number,
  ties: number,
  recordKillStreak: number,
  bestPlants: number,
  misses: number,
  bestDamage: number,
  bestSetbacks: number,
  bestTouchdowns: number,
  scorePerMinute: number,
  bestDeaths: number,
  bestMedalXp: number,
  bestDefends: number,
  bestSquardRevives: number,
  bestKills: number,
  bestDefuses: number,
  bestCaptures: number,
  hits: number,
  bestKillStreak: number,
  bestDenied: number
}

interface mode {
  gun: mode_properties,
  dom: mode_properties,
  war: mode_properties,
  hq: mode_properties,
  hc_dom: mode_properties,
  hc_conf: mode_properties,
  koth: mode_properties,
  conf: mode_properties,
  hc_hq: mode_properties,
  arena: mode_properties,
  br_dmz: mode_properties,
  br: mode_properties,
  sd: mode_properties,
  grnd: mode_properties,
  cyber: mode_properties,
  hc_war: mode_properties,
  br_all: mode_properties,
  hc_sd: mode_properties,
  arm: mode_properties,
  hc_cyber: mode_properties,
  infect: mode_properties,
  br_brtrios: mode_properties,
  brtdm_rmbl: mode_properties,
  br_brduos: mode_properties
}

interface mode_properties {
  properties: mode_details
}

interface mode_details {
  kills: number,
  score: number,
  timePlayed: number,
  damage: number,
  kdRatio: number,
  assists: number,
  scorePerMinute: number,
  deaths: number
}