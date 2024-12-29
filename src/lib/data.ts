export interface RandomCausesOfDeath {
  title: string;
  oddsOfDying: string;
  oneIn: number;
  source: string;
}

export const causesOfDeath: RandomCausesOfDeath[] = [
  {
    title: "Lightning Strikes",
    oddsOfDying: "1 in 12,000,000",
    oneIn: 12_000_000,
    source: "https://www.weather.gov/safety/lightning-odds",
  },
  {
    title: "Food Positioning",
    oddsOfDying: "1 in 160,000",
    oneIn: 160000,
    source:
      "https://www.fda.gov/food/consumers/what-you-need-know-about-foodborne-illnesses",
  },
  {
    title: "Drowning in Bath",
    oddsOfDying: "1 in 685,000",
    oneIn: 685_000,
    source: "https://www.cdc.gov/nchs/products/databriefs/db413.htm",
  },
  {
    title: "Firearms Accidents",
    oddsOfDying: "1 in 678,000",
    oneIn: 678_000,
    source:
      "https://www.cdc.gov/firearm-violence/data-research/facts-stats/index.html",
  },
  {
    title: "Nutritional Deficiencies",
    oddsOfDying: "1 in 150,000",
    oneIn: 150_000,
    source:
      "https://www.cdc.gov/firearm-violence/data-research/facts-stats/index.html",
  },
  {
    title: "Car Accidents",
    oddsOfDying: "1 in 7,762",
    oneIn: 7_762,
    source: "https://www.weather.gov/safety/lightning-odds",
  },
];

export const planeAccidentOdds = "1 in 20,000,000";
export const faaSource =
  "https://assets.performance.gov/APG/files/2023/june/FY2023_June_DOT_Progress_Aviation_Safety.pdf";

export const aviationFacts = [
  "Air travel is the safest mode of long-distance transportation.",
  "The chance of being involved in a fatal accident on a commercial flight is about 1 in 11 million.",
  "You're more likely to be struck by lightning than die in a plane crash.",
  "Modern aircraft can fly safely with only one engine.",
  "Turbulence has never caused a plane to crash.",
  "Pilots and co-pilots eat different meals to reduce the risk of food poisoning affecting both.",
  "Airplane air is actually cleaner than the air in most office buildings.",
  "The safest part of your journey is when you're in the air.",
  "Commercial airplanes are designed to withstand much more stress than they ever experience in normal flight.",
  "There are over 100,000 flights every day, and the vast majority have no issues at all.",
];
