import image1 from './assets/rabih-shasha-zRFfmZUooBs-unsplash.jpg'
import image2 from './assets/tom-jur-9SEVZePS-9s-unsplash.jpg'
import image3 from './assets/isabella-smith-sNGImLlEZB8-unsplash.jpg'
import image4 from './assets/luke-mckeown-nlyWZtWTzCo-unsplash.jpg'
import image5 from './assets/spencer-watson-ioy3bN5Irew-unsplash.jpg'
import image6 from './assets/lindsay-thompson-vP5UKNVq7vQ-unsplash.jpg'
import image7 from './assets/dan-palen-5QjddVYkjd0-unsplash.jpg'
import image8 from './assets/harshil-gudka-noelDNmA2_U-unsplash.jpg'
import image9 from './assets/redd-f-gdQnsMbhkUs-unsplash.jpg'
import image10 from './assets/michael-denning-LXomcUwf4vQ-unsplash.jpg'
import image11 from './assets/RCI_Cozumel_092017_Brand_JDLutes_Whale_Shark_00714_RET_CMYK.jpg'
import image12 from './assets/RCI_Iceland_072019_RCCLMedia_Blue_Lagoon_Reykjavik_A7S08557_RET.jpg'
import image13 from './assets/RCI_Bermuda_RCCLMedia_Kings_Wharf_S6A1005_RET_CMYK.jpg'
import image14 from './assets/RCI_Jamaica_052015_Shorex_HorseRideBeach_001_RET.jpg'
import image15 from './assets/MP_2021_1019_GN_Mazatlan_AngelFlores_0038_AS_RGB.jpg'
import image16 from './assets/SA_15_DM_FUKUOKA_DAZAIFU_TENMANGU_11852.jpg'
import image17 from './assets/sebastien-uwagwk2FywU-unsplash.jpg'
import image18 from './assets/christoph-schulz-jG3I8b5iyHI-unsplash.jpg'
import image19 from './assets/kino-apdbXDriykI-unsplash.jpg'
import image20 from './assets/craig-stevenson-Lrfeth2WaOo-unsplash.jpg'
import image21 from './assets/Africa-AddoElephantPark.jpg'
import image22 from './assets/sherard-campbell-OmF9_5i2muo-unsplash.jpg'
import image23 from './assets/2016_0330_Hawaii_Waikiki_dreamstime_11833955.jpg'
import image24 from './assets/PCL_XP_Discovery_Princess_Haines_Alaska_USA_Ship_Aerial_Drone_CTrantina_062322_0043_RGB.jpg'
import image25 from './assets/HAP_2019_Alaska_Rail_12_RGB.jpg'
import image26 from './assets/ACROPOLIS_10535.jpg'
import image27 from './assets/manuel-cosentino-n--CMLApjfI-unsplash.jpg'



const travelData = [
  {
    id: 1,
    title: 'The Caribbean',
    description: 'You can island hop from paradise to paradise! The warm turquoise waters and the fun in the sun are calling you! Maybe you would like to swim in grottos of the Virgin Islands, or hike the mountains in St. Lucia, float away on the golden sandy beaches of the many cruise lines private islands, visit San Juan with its colorful Spanish heritage, or bask under a waterfall in Jamaica. The beautiful ports of St. Thomas, St, Maarten, Antigua, Aruba, Barbados, and Grand Cayman, to name a few, await you!',
    photo:  [image1, image2, image14],
    credit: {
      name: 'Rabih Shasha',
      link: 'https://unsplash.com/photos/zRFfmZUooBs'
    },
  },
  {
    id: 2,
    title: 'Africa',
    description: 'Unforgettable adventures await in this majestic and wild continent! Beautiful scenery is the backdrop for activities available. See Addo Elephant National Park near Port Elizabeth, take a safari journey out of Richard\'s Bay, or hang out with African penguins at Cape Town\'s Boulder Beach, just to name a few of the excursions!',
    photo: [image21, image20],
    credit: {
      name: 'Tom Jur',
      link: 'https://unsplash.com/photos/9SEVZePS-9s'
    },
  },
  {
    id: 3,
    title: 'The Bahamas',
    description: 'This colorful destination offers relaxation and beach experiences that you\'ll remember forever! Many of the major cruise lines have their own private islands of fun. You can snorkel in a secluded lagoon, kayak along the coastlines, swim with dolphins, sea turtles and even pigs, stroll watercolor streets for some duty-free shopping, and soar across the sky on ziplines!',
    photo: [image3, image22],
    credit: {
      name: 'Isabella Smith',
      link: 'https://unsplash.com/photos/sNGImLlEZB8'
    },
  },
  {
    id: 4,
    title: 'Hawaii',
    description: 'This tropical paradise has everything you may want. Here are some of the fantastic things that you can experience: the United States only royal palace, fun nightlife of Honolulu, Pearl Harbour and the Arizona Memorial, the idyllic beauty of palm tree lined beaches, lush rainforests and waterfalls, rugged volcanic landscapes, black sand beaches, the traditional dance (hula)-music-food of an authentic luau, and the warm people of the Polynesian islands. Paradise comes alive with the rhythm of the gentle breezes.  Many cruise lines offer Hawaiian island hopping so you can experience all that these blissful islands can offer!',
    photo: [image23, image4],
    credit: {
      name: 'Luke Mckeown',
      link: 'https://unsplash.com/photos/nlyWZtWTzCo'
    },
  },
  {
    id: 5,
    title: 'Mexico',
    description: 'While boasting that it has approximately 300+ days of sunshine per year, this beautiful land offers something for everyone. If you want to relax on a secluded beach, do some whale watching or parasailing, stroll through the local markets or take a catamaran cruise through "El Arco (The Arch) a magnificent rock formation in the royal blue ocean near Cabo San Lucas, you can do it all. How about doing an off-road excursion in a dune buggy, or swim with dolphins and horseback ride? You are just a margarita, mariachi band, and gorgeous sunset away!',
    photo: [image5, image11, image15],
    credit: {
      name: 'Spencer Watson',
      link: 'https://unsplash.com/photos/ioy3bN5Irew'
    },
  },
  {
    id: 6,
    title: 'Europe',
    description: ' You can cruise to so many iconic destinations in Europe that I cannot mention them all here! From the fjords of Norway to the crystal blue waters of the Mediterranean, each cruise journey provides popular ports and hidden gems. History is preserved in the landmark ruins of ancient Rome, Athens, Barcelona, Reykjavik, and St Petersburg. Natural wonders will take your breath away in Scandinavia, and Iceland.  Guests can visit world renown museums in Italy, savor unique wines from France, watch a stunning sunset in Santorini, attend a bull fight in Spain, tour castles of England and Ireland, and watch the windmills of the Netherlands move in the winds.',
    photo: [image12, image6],
    credit: {
      name: 'Lindsay Thompson',
      link: 'https://unsplash.com/photos/vP5UKNVq7vQ'
    },
  },
  {
    id: 7,
    title: 'Alaska',
    description: 'Whether it\'s for magnificent landscapes, majestic wildlife, or living history, cruising to Alaska is an experience of a lifetime! Slowly cruising into Glacier Bay, or sightseeing in Denali National Park, or exploring the Gold Rush history in the Yukon, your adventures abound! Don\'t forget to do excursions like kayaking, dog sledding, lumberjack shows, panning for gold, fishing, and railroad and helicopter sightseeing.',
    photo: [image25, image24, image7],
    credit: {
      name: 'Dan Palen',
      link: 'https://unsplash.com/photos/5QjddVYkjd0'
    },
  },
  {
    id: 8,
    title: 'The Mediterranean',
    description: 'From the rocky coves of the French Riviera to the sandy shores of Greece, the Mediterranean offers a wide range of beach destinations to suit any taste. These beaches offer visitors a chance to enjoy a variety of water activities, including swimming, snorkeling, and sailing, as well as a vibrant cultural scene, with historic landmarks, museums, and local festivals.',
    photo: [image26, image8],
    credit: {
      name: 'Harshil Gudka',
      link: 'https://unsplash.com/photos/noelDNmA2_U'
    },

  },
  {
    id: 9,
    title: 'New England / Canada',
    description: 'Seaside vistas and historic cities await you at these timeless destinations. Boston and Newport bring the past to life with their awe-inspiring landmarks, colonial or gilded age mansions, and legendary battle sites. You will see colorful fall foliage, quaint towns, beautiful rocky beaches, and eat succulent seafood. Some excursions will include Arcadia National Park, nightlife of Quebec, or the colorful countryside of Prince Edward Island.',
    photo: [image10, image9],
    credit: {
      name: 'Redd F',
      link: 'https://unsplash.com/photos/gdQnsMbhkUs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
  },
  {
    id: 10,
    title: 'Japan/Asia',
    description: 'You will be captivated by both its modern cityscapes and ancient heritage. Enjoy colorful festivals like the Gion Festival and the Kumano Fireworks Festival, or meander through ancient temples, stand on the Great Wall of China, and treasure the warmth of the Balinese people. The lands of cherry blossoms, and MT Fuji awaits! Hong Kong, Thailand, Bali, are just some of the places to see...',
    photo: [image16, image27],
    credit: {
      name: 'Michael Denning',
      link: 'https://unsplash.com/photos/LXomcUwf4vQ'
    },
  },
  {
    id: 11,
    title: 'Bermuda',
    description:  'Amazing... That\'s how you can describe this beautiful island. Turquoise water, pink sandy beaches, orange sunsets are some of the magnificent sceneries that await you. You can dive with tropical fish, sightsee through colonial landmarks, and stroll along the beautiful Horseshoe Bay beaches. Excursions like riding a catamaran, golfing award-winning courses, snorkeling a coral reef and visiting art museums are perfect to do in this fun filled little getaway!',
    photo: [image13, image19],
    credit: {
      name: 'Michael Denning',
      link: 'https://unsplash.com/photos/LXomcUwf4vQ'
    },
  },
  {
    id: 12,
    title: 'Middle East',
    description: 'Some of the European cruises will take you to see many of the wonders of the middle east areas. In Egypt, you can sightsee at the Sphynx and the Great Pyramids of Giza.  Maybe you\'d like to explore the bazaars, palaces and mosques of Turkey, or swim at the beaches or tour historic sites in Israel. History and culture abound!',
    photo: [image17, image18],
    credit: {
      name: 'Michael Denning',
      link: 'https://unsplash.com/photos/LXomcUwf4vQ'
    },
  },
]

export default travelData;

