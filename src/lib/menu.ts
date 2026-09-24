export type MenuItem = {
  name: string;
  description: string;
  price: number;
  note?: string;
  /** Path under /public, e.g. /images/menu/edamame-classic.jpg */
  image?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

const img = (slug: string) => `/images/menu/${slug}.jpg`;

/** Cene u RSD — jelonvik 2.pdf (sep 2026). */
export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters",
    subtitle: "Predjela",
    items: [
      {
        name: "Edamame Classic",
        description: "Blanširana mlada soja, morska so",
        price: 400,
        image: img("edamame-classic"),
      },
      {
        name: "Edamame Spicy",
        description: "Blanširana mlada soja, togeraši",
        price: 400,
        image: img("edamame-spicy"),
      },
      {
        name: "Chicken Gyoza",
        description:
          "Kineske pržene knedle sa piletinom i povrćem, servirane uz ponzu sos",
        price: 650,
        note: "5 kom.",
        image: img("chicken-gyoza"),
      },
      {
        name: "Duck Gyoza",
        description:
          "Kineske pržene knedle sa pačetinom i povrćem, servirane uz ponzu sos",
        price: 750,
        note: "5 kom.",
        image: img("duck-gyoza"),
      },
      {
        name: "Shrimp Gyoza",
        description:
          "Kineske pržene knedle sa škampima i povrćem, servirane uz ponzu sos",
        price: 900,
        note: "5 kom.",
        image: img("shrimp-gyoza"),
      },
      {
        name: "Spring Rolls",
        description: "Pržene rolnice punjene povrćem sa sweet-chilly sosom",
        price: 550,
        note: "5 kom.",
        image: img("vegetable-spring-rolls"),
      },
      {
        name: "Crispy Shrimps",
        description:
          "Panirani gambori u panko prezli sa sweet-chilly sosom i spicy majonezom",
        price: 1250,
        image: img("crispy-shrimps"),
      },
      {
        name: "Tuna Tataki",
        description:
          "Pikantna tanko sečena tuna servirana sa ponzu sosom i japanskim majonezom",
        price: 1800,
        image: img("tuna-tataki"),
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    subtitle: "Salate",
    items: [
      {
        name: "Goma Wakame",
        description:
          "Marinirane morske wakame alge sa pečenim susamom i limunom, krastavcem i susam sosom",
        price: 650,
        image: img("goma-wakame"),
      },
      {
        name: "Sweet Carrot",
        description: "Marinirana šargarepa u pirinčanom sirćetu sa belim lukom",
        price: 450,
        image: img("sweet-carrot"),
      },
      {
        name: "Thai Noodle Salad",
        description:
          "Pikantna salata sa nudlama, mangom, mariniranim klicama, kikirikijem i sezonskim povrćem",
        price: 950,
        image: img("thai-noodle-salad"),
      },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    subtitle: "Supe",
    items: [
      {
        name: "Shiro Miso",
        description: "Wakame alge, tofu, mladi luk, svetla miso pasta",
        price: 550,
        image: img("shiro-miso"),
      },
      {
        name: "Aka Miso",
        description: "Wakame alge, tofu, mladi luk, tamna miso pasta",
        price: 550,
        image: img("aka-miso"),
      },
      {
        name: "Tom Yum Shrimp",
        description:
          "Tajlandska ljuta supa sa kokosovim mlekom, pirinčem, škampima, povrćem i pečurkama",
        price: 700,
        image: img("tom-yum-shrimp"),
      },
      {
        name: "Tom Yum Chicken",
        description:
          "Tajlandska ljuta supa sa kokosovim mlekom, pirinčem, piletinom, povrćem i pečurkama",
        price: 600,
        image: img("tom-yum-chicken"),
      },
    ],
  },
  {
    id: "ramen",
    title: "Ramen",
    items: [
      {
        name: "Beef Ramen",
        description:
          "Japanska supa sa nudlama, junetinom, mariniranim jajetom, pečurkama, povrćem i nori algom",
        price: 1200,
        image: img("beef-ramen"),
      },
      {
        name: "Veggie Ramen",
        description:
          "Japanska supa sa nudlama, mariniranim jajetom, pečurkama, povrćem i nori algom",
        price: 850,
        image: img("vege-ramen"),
      },
    ],
  },
  {
    id: "bao",
    title: "Bao buns",
    items: [
      {
        name: "Spicy Beef Bao",
        description:
          "Kineske zemičke pripremljene na pari sa pikantnom junetinom, ajzberg salatom, krastavcem i sweet-chilly sosom",
        price: 900,
        image: img("spicy-beef-bao"),
      },
      {
        name: "Chicken Teriyaki Bao",
        description:
          "Kineske zemičke pripremljene na pari sa piletinom u terijaki sosu, japanskim majonezom, ajzberg salatom i krastavcem",
        price: 850,
        image: img("chicken-teriyaki-bao"),
      },
      {
        name: "Mango Shrimp Bao",
        description:
          "Kineske zemičke pripremljene na pari sa gamborima u panko prezli, mango salsom i sweet-chilly majonezom",
        price: 1000,
        image: img("mango-shrimp-bao"),
      },
    ],
  },
  {
    id: "udon",
    title: "Udon noodles",
    items: [
      {
        name: "Beef Udon",
        description:
          "Debele japanske nudle pripremljene sa govedinom i sezonskim povrćem",
        price: 1400,
        image: img("beef-udon"),
      },
      {
        name: "Chicken Udon",
        description:
          "Debele japanske nudle pripremljene sa piletinom i sezonskim povrćem",
        price: 1300,
        image: img("chicken-udon"),
      },
      {
        name: "Shrimp Udon",
        description:
          "Debele japanske nudle pripremljene sa škampima i sezonskim povrćem",
        price: 1500,
        image: img("shrimp-udon"),
      },
    ],
  },
  {
    id: "noodles",
    title: "Noodles",
    subtitle: "Pržene nudle",
    items: [
      {
        name: "Stir-Fried Chicken Noodles",
        description:
          "Kineske pržene nudle sa piletinom, sezonskim povrćem i oyster sosom",
        price: 1000,
        image: img("stir-fried-chicken-noodles"),
      },
      {
        name: "Stir-Fried Beef Noodles",
        description:
          "Kineske pržene nudle sa govedinom, sezonskim povrćem i oyster sosom",
        price: 1200,
        image: img("stir-fried-beef-noodles"),
      },
      {
        name: "Stir-Fried Shrimp Noodles",
        description:
          "Kineske pržene nudle sa škampima, sezonskim povrćem i oyster sosom",
        price: 1300,
        image: img("stir-fried-shrimp-noodles"),
      },
      {
        name: "Stir-Fried Tofu",
        description:
          "Kineske pržene nudle sa tofu sirom, sezonskim povrćem i oyster sosom",
        price: 900,
        image: img("stir-fried-tofu-noodles"),
      },
    ],
  },
  {
    id: "main-dishes",
    title: "Main dishes",
    subtitle: "Topla jela",
    items: [
      {
        name: "Tori Katsu",
        description:
          "Piletina u panko prezli na podlozi od jasmin pirinča, sezonskog povrća sa ton katsu sosom",
        price: 1150,
        image: img("tori-katsu"),
      },
      {
        name: "Chicken Teriyaki",
        description:
          "Pileći file sa povrćem glaziran u terijaki sosu, serviran na jasmin pirinču",
        price: 950,
        image: img("chicken-teriyaki"),
      },
      {
        name: "Thai Yellow Curry",
        description:
          "Tajlandski kari sa pilećim fileom, sezonskim povrćem, mangom, kokosovim mlekom, serviran uz jasmin pirinač",
        price: 1350,
        image: img("thai-yellow-curry"),
      },
      {
        name: "Beef Teriyaki",
        description:
          "Pržena junetina sa sezonskim povrćem u teriyaki sosu, servirana na jasmin pirinču",
        price: 1450,
        image: img("beef-teriyaki"),
      },
      {
        name: "Miso Beef",
        description:
          "Junetina sa lukom, pečurkama i bambusom u miso sosu, služena sa jasmin pirinčem",
        price: 1500,
        image: img("miso-beef"),
      },
      {
        name: "Korean Chilly Shrimps",
        description:
          "Prženi gambori sa povrćem u koreanskom ljutom sosu sa medom i đumbirom, služeni sa jasmin pirinčem",
        price: 1650,
        image: img("korean-chilly-shrimps"),
      },
      {
        name: "Teriyaki Tofu",
        description:
          "Prženi tofu sa sezonskim povrćem u teriyaki sosu, serviran na jasmin pirinču",
        price: 800,
        image: img("teriyaki-tofu"),
      },
    ],
  },
  {
    id: "hosomaki",
    title: "Hosomaki",
    subtitle: "Sushi · 6 pcs",
    items: [
      {
        name: "Kappa Maki",
        description: "Krastavac i susam",
        price: 400,
        image: img("kappa-maki"),
      },
      {
        name: "Sake Maki",
        description: "Losos",
        price: 750,
        image: img("sake-maki"),
      },
      {
        name: "Teka Maki",
        description: "Tuna",
        price: 850,
        image: img("tekka-maki"),
      },
      {
        name: "California Maki",
        description: "Surimi",
        price: 550,
        image: img("california-maki"),
      },
    ],
  },
  {
    id: "uramaki-classic",
    title: "Uramaki",
    subtitle: "6 pcs · Classic",
    items: [
      {
        name: "Philadelphia Roll",
        description: "Losos, krem sir, mladi luk, krastavac, susam",
        price: 1050,
        image: img("philadelphia-roll"),
      },
      {
        name: "California Roll",
        description: "Tobiko, surimi, krastavac, avokado, japanski majonez",
        price: 1050,
        image: img("california-roll"),
      },
      {
        name: "Avokado Sake",
        description: "Losos, avokado, susam",
        price: 1050,
        image: img("avocado-sake"),
      },
      {
        name: "Teka Avokado",
        description: "Tuna, avokado, susam",
        price: 1200,
        image: img("tekka-avocado"),
      },
    ],
  },
  {
    id: "fusion",
    title: "Fusion selection",
    subtitle: "6 pcs",
    items: [
      {
        name: "Ebi Haru Roll",
        description:
          "Mladi luk, krastavac, japanski majonez, gambori u panko prezli",
        price: 1400,
        image: img("ebi-haru-roll"),
      },
      {
        name: "Crispy Shrimp Roll",
        description:
          "Hrskavi luk, krem sir, krastavac, gambori u panko prezli",
        price: 1400,
        image: img("crispy-shrimp-roll"),
      },
      {
        name: "Truffle Sake Roll",
        description:
          "Krem sir, krastavac, gambori u panko prezli, losos, terijaki, truffle mayo, susam",
        price: 1500,
        image: img("truffle-sake-roll"),
      },
      {
        name: "Rainbow Roll",
        description: "Krastavac, avokado, losos, tuna, tobiko",
        price: 1500,
        image: img("rainbow-roll"),
      },
      {
        name: "Spicy Tuna Roll",
        description: "Pikantna tuna, krastavac, susam, wasabi mayo",
        price: 1400,
        image: img("spicy-tuna-roll"),
      },
      {
        name: "Spicy Ebi",
        description:
          "Krem sir, krastavac, dimljeni losos, tartar od gambora, susam sos",
        price: 1600,
        image: img("spicy-ebi"),
      },
      {
        name: "Seattle Roll",
        description:
          "Avokado, krastavac, krem sir, dimljeni losos, mladi luk, onion mayo",
        price: 1500,
        image: img("seattle-roll"),
      },
      {
        name: "Volcano Roll",
        description:
          "Krem sir, losos, surimi, mladi luk, tempura, japanski majonez, susam sos",
        price: 1600,
        image: img("volcano-roll"),
      },
      {
        name: "Dragon Roll",
        description:
          "Gambori u panko prezli, avokado, japanski majonez, tobiko, terijaki",
        price: 1500,
        image: img("dragon-roll"),
      },
      {
        name: "Mango Exotic",
        description:
          "Krem sir, krastavac, gambori u panko prezli, mango salsa, susam, terijaki, tobiko",
        price: 1500,
        image: img("mango-exotic"),
      },
    ],
  },
  {
    id: "futomaki",
    title: "Futomaki rolls",
    subtitle: "10 pcs",
    items: [
      {
        name: "Futomaki Classic",
        description: "Losos, tuna, krastavac, avokado, mladi luk",
        price: 1600,
        image: img("futomaki-classic"),
      },
      {
        name: "Futomaki Twist",
        description:
          "Krem sir, krastavac, surimi, gambori u panko prezli, japanski majonez, sweet-chilly",
        price: 1800,
        image: img("futomaki-twist"),
      },
    ],
  },
  {
    id: "set",
    title: "100% sushi selection",
    subtitle: "Set",
    items: [
      {
        name: "100% Sushi Selection",
        description:
          "Kappa Maki 6 pcs · Philadelphia 4 pcs · Crispy Shrimps 4 pcs · Seattle Roll 4 pcs · Futomaki Classic 6 pcs",
        price: 3500,
      },
    ],
  },
  {
    id: "desserts",
    title: "Japanese desserts",
    subtitle: "Deserti",
    items: [
      {
        name: "Mochi",
        description: "1 kom. · limun, mango, marakuja, kupina, kokos, mača",
        price: 250,
        note: "Po komadu, izbor ukusa",
      },
    ],
  },
];

export function formatPrice(price: number): string {
  return `${price.toLocaleString("sr-RS")} RSD`;
}
