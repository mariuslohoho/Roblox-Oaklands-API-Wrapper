import { CurrencyValue, LimitedValue } from "./DataTypes";

export type ClassicStoreItemsName =
  | "GravityCoil"
  | "SpeedCoil"
  | "TobascoSauce" //Epicsause
  | "BloxyCola"
  | "ClassicBillboard"
  | "TeamFlag"
  | "ClassicJeepVehiclePad"
  | "GiftOfEmotion"
  | "CannedBeans"
  | "BabyDucky"
  | "ClassicMoai"
  | "RocketLauncher" //Confetti launcher
  | "Slingshot"
  | "Oakpiece"
  | "SubspaceTripmine"
  | "WitchesBrew"
  | "StudGift" //Gift of Universal Surfaces
  | "VinylStud"
  | "HealingCoil"
  | "LinkedSword"
  // Not confirmed names
  | "Trowel"
  | "TrappedBeans";

export type ClassicStoreAPIResponseBody = {
  reset_time: string;
  items: ClassicStoreItemsName[];
};

export type ClassicStoreItemsData = {
  name: string;
  ImageUrl: string;
  Cost: CurrencyValue;
  Description: string;
  Limited?: LimitedValue;
};

export const ClassicShopItems: Partial<{
  [item in ClassicStoreItemsName]: ClassicStoreItemsData;
}> = {
  GravityCoil: {
    name: "Gravity Coil",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/6/6e/Gravity_Coil.png",
    Cost: {
      Currency: "Cash",
      Amount: 8008,
    },
    Description: "Can be used to reach heights never seen before.",
  },
  HealingCoil: {
    name: "Healing Coil",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/2/2a/Healing_Coil.png",
    Cost: {
      Currency: "Cash",
      Amount: 5117,
    },
    Description: "Can be used to heal numbers never seen before.",
  },
  SpeedCoil: {
    name: "Speed Coil",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/8/86/Speed_Coil.webp",
    Cost: {
      Currency: "Cash",
      Amount: 8008,
    },
    Description: "Can be used to reach speeds never seen before!",
  },
  RocketLauncher: {
    name: "Confetti Launcher",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/8/84/Rocket_launcher.png",
    Cost: {
      Currency: "Cash",
      Amount: 9999,
    },
    Description: "DAVID BAZOOKA! TO THE MOONNNNNNN.",
  },
  LinkedSword: {
    name: "Linked Sword",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/2/2e/Linked_Sword.png",
    Cost: {
      Currency: "Cash",
      Amount: 1337,
    },
    Description: "With blood and iron.",
  },
  TobascoSauce: {
    name: "Epicsause",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/d/d2/Epicsauce.png",
    Cost: {
      Currency: "Cash",
      Amount: 404,
    },
    Description: "Ultimate EPIC juice Brand Epicsauce. Extremely hot.",
  },
  WitchesBrew: {
    name: "Witches Brew",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/d/da/Whitches_Brew.png",
    Cost: {
      Currency: "Cash",
      Amount: 404,
    },
    Description:
      "Do the Brew! Shipped direct from the Haunted Hill soda company.\nWarning: may cause freakish deformities. Warning: may contain actual witches.",
  },

  BloxyCola: {
    name: "Bloxy Cola",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/a/ae/Bloxi_cola.png",
    Cost: {
      Currency: "Cash",
      Amount: 737,
    },
    Description: "Warning: Bloxy Cola may be habit-forming.",
  },

  SubspaceTripmine: {
    name: "Subspace Tripmine",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/7/7c/Subspacetripminereal.png",
    Cost: {
      Currency: "Cash",
      Amount: 1010,
    },
    Description:
      "A hidden deathtrap, waiting to be USED! Powered by purple goop >:D",
  },
  Trowel: {
    name: "Trowel",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/b/b7/Trowel.png",
    Cost: {
      Currency: "Cash",
      Amount: 777,
    },
    Description:
      "Defend your area with a thing of bricks, while supplies last!",
  },
  Slingshot: {
    name: "Slingshot",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/3/3f/Slingshot.png",
    Cost: {
      Currency: "Cash",
      Amount: 727,
    },
    Description: "Fire a bunch of marbles at your worst enemies!",
  },
  ClassicBillboard: {
    name: "Classic Billboard",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/6/67/Classic_Billboard.png",
    Cost: {
      Currency: "Cash",
      Amount: 1270,
    },
    Description:
      "Wowzers! A brand new happy home for happy people? For only 50 tix!?",
  },
  TeamFlag: {
    name: "Team Flag",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/9/95/Team_Flag_Boxed.png",
    Cost: {
      Currency: "Cash",
      Amount: 3000,
    },
    Description:
      "Allows you to play capture the flag, a fun way to challenge your enemies. Joining a flag team will forcefully enable PVP for you, allowing you to use any PVP weapons you desire. Take flags from enemy teams and return them back to yours to earn points! Make sure to buy more than one flag post.",
  },
  ClassicJeepVehiclePad: {
    name: "Classic Joop",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/f/f8/Classic_Joop_Boxed.png",
    Cost: {
      Currency: "Cash",
      Amount: 86000,
    },
    Description:
      "A portal from above sent this mysterious joop down to this store. So powerful, yet so.. weird...",
  },
  VinylStud: {
    name: "Stud Vinyl",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/a/a1/Stud_vinyl.png",
    Cost: {
      Currency: "Cash",
      Amount: 4444,
    },
    Description: "Huh... I wonder if this thing will ever work?",
  },
  StudGift: {
    name: "Gift Of Universal Surfaces",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/7/75/Giftofuniversalsurfacesbox.png",
    Cost: {
      Currency: "Cash",
      Amount: 390,
    },
    Description:
      "Wow, the Universable part of surfaces. Impressive, i love gifts!",
  },
  Oakpiece: {
    name: "THE OAK PIECE",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/b/b7/THE_OAK_PIECE.png",
    Cost: {
      Currency: "Cash",
      Amount: 8994,
    },
    Description: "IT'S REAL.",
  },
  TrappedBeans: {
    name: "Trapped Beans",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/9/9f/Beans.png",
    Cost: {
      Currency: "Cash",
      Amount: 4891,
    },
    Description: ":) little do they know... I'M SECRETLY A BOMB!",
  },
  CannedBeans: {
    name: "Canned Beans",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/9/9f/Beans.png",
    Cost: {
      Currency: "Cash",
      Amount: 4891,
    },
    Description: ":) little do they know... I'M NOT A BOMB!",
  },
  BabyDucky: {
    name: "Baby Ducky",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/6/67/Baby_Ducky.png",
    Cost: {
      Currency: "Cash",
      Amount: 125,
    },
    Description:
      "Quack! Quack Quack! QUACKKKKK!!!! QUAAAAAAAAAAAAAAAAAAACCCCCCCCCCCCCKKKKKKKKKKKKKKK",
  },
  ClassicMoai: {
    name: "Classic Moai",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/6/6a/Classic_Moai.png",
    Cost: {
      Currency: "Cash",
      Amount: 1250,
    },
    Description:
      "Ooga ooga ooga chaga ooga ooga ooga chaga ooga ooga ooga chaga.. but retro..",
  },
  GiftOfEmotion: {
    name: "Gift of Emotion",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/0/0d/Gift_of_Emotions.png",
    Cost: {
      Currency: "Cash",
      Amount: 1200,
    },
    Description:
      "Experience a rollercoaster of emotions with this thoughtful gift.",
    Limited: {
      Limited: true,
      Obtainable: false,
      LastObtainable: "Christmas 2023",
    },
  },
};
