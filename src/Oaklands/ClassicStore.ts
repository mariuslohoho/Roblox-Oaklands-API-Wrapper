import { CurrencyValue } from "./DataTypes";

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
  // Not confirmed names
  | "HealingCoil"
  | "LinkedSword"
  | "Trowel"
  | "StudVinyl"
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
};

export const ClassicShopItems: Partial<{
  [item in ClassicStoreItemsName]: ClassicStoreItemsData;
}> = {
  GravityCoil: {
    name: "Gravity Coil",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/6/6e/Gravity_Coil.png/revision/latest/scale-to-width-down/200?cb=20230711193037",
    Cost: {
      Currency: "Cash",
      Amount: 8008,
    },
    Description: "Can be used to reach heights never seen before.",
  },
  HealingCoil: {
    name: "Healing Coil",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/2/2a/Healing_Coil.png/revision/latest/scale-to-width-down/200?cb=20230711193349",
    Cost: {
      Currency: "Cash",
      Amount: 5117,
    },
    Description: "Can be used to heal numbers never seen before.",
  },
  SpeedCoil: {
    name: "Speed Coil",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/8/86/Speed_Coil.webp/revision/latest/scale-to-width-down/200?cb=20230821234351",
    Cost: {
      Currency: "Cash",
      Amount: 8008,
    },
    Description: "Can be used to reach speeds never seen before!",
  },
  RocketLauncher: {
    name: "Confetti Launcher",
    ImageUrl:
      "https://static.wikia.nocookie.net/oaklands/images/8/84/Rocket_launcher.png/revision/latest/scale-to-width-down/200?cb=20230712121102",
    Cost: {
      Currency: "Cash",
      Amount: 9999,
    },
    Description: "DAVID BAZOOKA! TO THE MOONNNNNNN.",
  },
  LinkedSword: {
    name: "Linked Sword",
    ImageUrl: "",
    Cost: {
      Currency: "Cash",
      Amount: 1337,
    },
    Description: "With blood and iron.",
  },
  TobascoSauce: {
    name: "Epicsause",
    ImageUrl: "",
    Cost: {
      Currency: "Cash",
      Amount: 404,
    },
    Description: "Ultimate EPIC juice Brand Epicsauce. Extremely hot.",
  },
  WitchesBrew: {
    name: "Witches Brew",
    ImageUrl: "",
    Cost: {
      Currency: "Cash",
      Amount: 404,
    },
    Description:
      "Do the Brew! Shipped direct from the Haunted Hill soda company.\nWarning: may cause freakish deformities. Warning: may contain actual witches.",
  },

  BloxyCola: {
    name: "Bloxy Cola",
    ImageUrl: "",
    Cost: {
      Currency: "Cash",
      Amount: 737,
    },
    Description: "Warning: Bloxy Cola may be habit-forming.",
  },

  SubspaceTripmine: {
    name: "Subspace Tripmine",
    ImageUrl: "",
    Cost: {
      Currency: "Cash",
      Amount: 1010,
    },
    Description:
      "A hidden deathtrap, waiting to be USED! Powered by purple goop >:D",
  },
  Trowel: {
    name: "Trowel",
    ImageUrl: "",
    Cost: {
      Currency: "Cash",
      Amount: 777,
    },
    Description:
      "Defend your area with a thing of bricks, while supplies last!",
  },
  Slingshot: {
    name: "Slingshot",
    ImageUrl: "",
    Cost: {
      Currency: "Cash",
      Amount: 727,
    },
    Description: "Fire a bunch of marbles at your worst enemies!",
  },
  ClassicBillboard: {
    name: "Classic Billboard",
    ImageUrl: "",
    Cost: {
      Currency: "Cash",
      Amount: 1270,
    },
    Description:
      "Wowzers! A brand new happy home for happy people? For only 50 tix!?",
  },
  TeamFlag: {
    name: "Team Flag",
    ImageUrl: "",
    Cost: {
      Currency: "Cash",
      Amount: 3000,
    },
    Description:
      "Allows you to play capture the flag, a fun way to challenge your enemies. Joining a flag team will forcefully enable PVP for you, allowing you to use any PVP weapons you desire. Take flags from enemy teams and return them back to yours to earn points! Make sure to buy more than one flag post.",
  },
  ClassicJeepVehiclePad: {
    name: "Classic Joop",
    ImageUrl: "",
    Cost: {
      Currency: "Cash",
      Amount: 86000,
    },
    Description:
      "A portal from above sent this mysterious joop down to this store. So powerful, yet so.. weird...",
  },
  StudVinyl: {
    name: "Stud Vinyl",
    ImageUrl: "",
    Cost: {
      Currency: "Cash",
      Amount: 4444,
    },
    Description: "Huh... I wonder if this thing will ever work?",
  },
  StudGift: {
    name: "Gift Of Universal Surfaces",
    ImageUrl: "",
    Cost: {
      Currency: "Cash",
      Amount: 390,
    },
    Description:
      "Wow, the Universable part of surfaces. Impressive, i love gifts!",
  },
  Oakpiece: {
    name: "THE OAK PIECE",
    ImageUrl: "",
    Cost: {
      Currency: "Cash",
      Amount: 8994,
    },
    Description: "IT'S REAL.",
  },
  TrappedBeans: {
    name: "Trapped Beans",
    ImageUrl: "",
    Cost: {
      Currency: "Cash",
      Amount: 4891,
    },
    Description: ":) little do they know... I'M SECRETLY A BOMB!",
  },
  CannedBeans: {
    name: "Canned Beans",
    ImageUrl: "",
    Cost: {
      Currency: "Cash",
      Amount: 4891,
    },
    Description: ":) little do they know... I'M NOT A BOMB!",
  },
  BabyDucky: {
    name: "Baby Ducky",
    ImageUrl: "",
    Cost: {
      Currency: "Cash",
      Amount: 125,
    },
    Description:
      "Quack! Quack Quack! QUACKKKKK!!!! QUAAAAAAAAAAAAAAAAAAACCCCCCCCCCCCCKKKKKKKKKKKKKKK",
  },
  ClassicMoai: {
    name: "Classic Moai",
    ImageUrl: "",
    Cost: {
      Currency: "Cash",
      Amount: 1250,
    },
    Description:
      "Ooga ooga ooga chaga ooga ooga ooga chaga ooga ooga ooga chaga.. but retro..",
  },
};
