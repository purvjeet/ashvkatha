export interface NewsItem {
  id: string;
  date: string;
  title: string;
  desc: string;
}

export interface InitiativeItem {
  id: string;
  title: string;
  desc: string;
}

export interface CareCard {
  id: string;
  title: string;
  desc: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Media' | 'Research Papers' | 'General Articles' | 'Legal' | 'Annual Report';
  desc: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  desc: string;
}

export interface RescueItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
}

export interface FounderItem {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const newsData: NewsItem[] = [
  {
    id: 'news-1',
    date: '28 Apr 2026',
    title: 'Shri. D M Gida urges Colombia to stay lethal removal of 80 hippos',
    desc: 'Shri. D M Gida urges Colombia to stay lethal removal of 80 hippos, offering a permanent home and lifelong care at Ashvkatha.'
  },
  {
    id: 'news-2',
    date: '9 Apr 2026',
    title: 'Ashvkatha launches global university for wildlife, veterinary sciences',
    desc: 'Envisioned as a modern-day Gurukul, the varsity aims to position India as a global hub for wildlife and veterinary education.'
  },
  {
    id: 'news-3',
    date: '7 Mar 2026',
    title: 'Ashvkatha Offers Lifelong Care to 50 Leopards from Maharashtra',
    desc: 'Ashvkatha has offered lifelong care to leopards rescued from human-wildlife conflict areas at the request of the Maharashtra Forest Dept.'
  },
  {
    id: 'news-4',
    date: '2 Mar 2026',
    title: 'On Ashvkatha Foundation Day, milestones marked in rescue & care',
    desc: 'Ashvkatha marks significant milestones in rescue, advanced medical care, and science-led wildlife conservation.'
  }
];

export const initiativesData: InitiativeItem[] = [
  {
    id: 'init-1',
    title: 'Rescue and Recovery',
    desc: 'At Ashvkatha, rescue is the foundation of animal care. We locate and secure wildlife impacted by habitat loss, conflict, or confinement, conducting every operation with precision and compassion. Our teams minimise stress, provide immediate veterinary support, and ensure a safe transition.'
  },
  {
    id: 'init-2',
    title: 'Treatment and Care',
    desc: 'We provide advanced medical treatment and holistic care for rescued, injured, and medically compromised animals. Our state-of-the-art hospitals, diagnostics, and species-specific nutrition ensure expert care by combining modern medicine with traditional Ayurveda.'
  },
  {
    id: 'init-3',
    title: 'Rehabilitation & Support',
    desc: 'At Ashvkatha, we rehabilitate injured and ill native Indian species through structured, species-appropriate care. Following medical recovery under human care, animals undergo targeted conditioning to restore strength, mobility, and essential natural behaviours.'
  },
  {
    id: 'init-4',
    title: 'Conservation, Breeding & Rewilding',
    desc: 'We integrate ex-situ (human care) and in-situ (wild) conservation to protect endangered species through ethical breeding, habitat restoration, and rewilding. Ex-situ programs prioritise genetic diversity and advanced reproductive science.'
  }
];

export const rktewtCards: CareCard[] = [
  {
    id: 'rk-1',
    title: 'Hydrotherapy for Gentle Giants',
    desc: 'Targeted pressurised jets gently massage the body to ease arthritis and joint pain, improve circulation, and support healing in elephants with chronic strain.'
  },
  {
    id: 'rk-2',
    title: 'Advanced Elephant Surgery Care',
    desc: 'State-of-the-art facilities and expert veterinarians perform advanced surgeries that restore mobility, vision, and overall quality of life for elephants.'
  },
  {
    id: 'rk-3',
    title: 'Ayurvedic Healing Oil Therapy',
    desc: 'Rooted in Ayurveda, therapeutic oil massages calm the body, ease chronic discomfort, and support deeper healing and long-term physical balance.'
  },
  {
    id: 'rk-4',
    title: 'Food Enrichment for Elephants',
    desc: 'From puzzle feeders to hidden treats, food enrichment keeps elephants mentally engaged, physically active, and connected to natural foraging instincts.'
  }
];

export const gzrrcCards: CareCard[] = [
  {
    id: 'gz-1',
    title: 'Advanced Wildlife Ambulance Care',
    desc: 'GZRRC operates one of India’s most advanced wildlife ambulances, safely transporting animals of all sizes using climate control and specialised medical equipment.'
  },
  {
    id: 'gz-2',
    title: 'Cooperative Care Through Training',
    desc: 'Positive reinforcement builds trust between animals and handlers by replacing restraint with cooperation, allowing animals to participate willingly in their own care.'
  },
  {
    id: 'gz-3',
    title: 'Science-Led Nutrition Programs',
    desc: 'At GZRRC, nutrition is engineered with scientific accuracy, ensuring every animal receives a personalised, nutrient-rich diet that supports healing and vitality.'
  },
  {
    id: 'gz-4',
    title: 'Healing Through Social Bonds',
    desc: 'Carefully planned introductions help animals form stable social groups, reducing stress, improving well-being, and supporting emotional recovery through natural companionship.'
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: 'time-1',
    title: 'Gauri, Our First Rescue',
    subtitle: 'Rescue of Gauri The Elephant',
    desc: 'Rescued after years in chains, her steps at Ashvkatha laid our foundation for compassionate care for all beings.'
  },
  {
    id: 'time-2',
    title: 'Ashvkatha Foundation Day',
    subtitle: 'Inauguration of Ashvkatha',
    desc: 'Inaugurated by the Honourable Prime Minister last year, recognising a national vision for wildlife care.'
  },
  {
    id: 'time-3',
    title: 'Global Humanitarian Award',
    subtitle: 'Shri. D M Gida Honoured',
    desc: 'Our founder, Shri. D M Gida, became the youngest and first Asian to receive a global honour for wildlife conservation.'
  },
  {
    id: 'time-4',
    title: 'World’s Largest Elephant Hospital',
    subtitle: 'Elephant Hospital',
    desc: 'Advanced elephant hospital designed to treat three elephants simultaneously with specialist veterinary care.'
  },
  {
    id: 'time-5',
    title: 'Prani Mitra Award',
    subtitle: 'Ashvkatha receives Prani Mitra Award',
    desc: 'Honoured with the national Prani Mitra Award 2025 for leadership in animal welfare and conservation.'
  },
  {
    id: 'time-6',
    title: 'Rewilding Spotted Deer',
    subtitle: 'Rewilding Spotted Deer',
    desc: 'Rewilded 56 spotted deer into Barda Wildlife Sanctuary, strengthening ecosystem resilience.'
  },
  {
    id: 'time-7',
    title: 'Humane Conservation Certification',
    subtitle: 'Certified by the Global Humane Society',
    desc: 'Certified by the Global Humane Society for meeting the highest standards of humane conservation.'
  },
  {
    id: 'time-8',
    title: 'National Referral Centre',
    subtitle: 'National Referral Centre for Wildlife',
    desc: 'Recognised as the National Referral Centre for Wildlife (West Zone) under the One Health framework.'
  },
  {
    id: 'time-9',
    title: 'World’s Largest Wildlife Hospital',
    subtitle: 'World’s Largest Wildlife Hospital',
    desc: 'Established a multispecialty wildlife hospital for advanced diagnostics, surgery and long-term care.'
  },
  {
    id: 'time-10',
    title: 'SEAZA Membership',
    subtitle: 'Ashvkatha Becomes SEAZA Member',
    desc: 'Joined the Southeast Asian zoo network to exchange expertise and strengthen welfare practices.'
  },
  {
    id: 'time-11',
    title: 'Rewilding Turtles in Indonesia',
    subtitle: 'Turtles in Indonesia',
    desc: 'Rewilded 20 snake-necked turtles in Indonesia, supporting native populations and ecosystems.'
  },
  {
    id: 'time-12',
    title: 'EARAZA Membership',
    subtitle: 'Global Zoo Collaborations',
    desc: 'Joined the Eurasian zoo association to collaborate on welfare standards, research and training.'
  }
];

export const foundersData: FounderItem[] = [
  {
    id: 'founder-1',
    name: 'Smt. R D Gida',
    role: 'Founder of Surya Foundation',
    quote: 'The Vedas have taught us the profound philosophy of Vasudhaiva Kutumbakam. Ashvkatha stands as a living testament to this belief. M Gida and I are incredibly proud of our son, D M Gida, for creating the world’s largest rescue and rehabilitation centre in Junagadh.'
  },
  {
    id: 'founder-2',
    name: 'Late. Shri. M Gida',
    role: 'Founding Visionary',
    quote: 'Late. Shri. M Gida transformed Junagadh by establishing a refinery on once-barren land. His visionary efforts to preserve India’s natural heritage laid the foundation for Ashvkatha, inspired by biodiversity preservation.'
  },
  {
    id: 'founder-3',
    name: 'Shri. D M Gida',
    role: 'Our Founder',
    quote: 'I see God in animals and Ashvkatha is my temple. It is born from a belief that every being, no matter how big or small, deserves dignity, care, freedom, and a chance to heal and live. We are not just saving animals; we are healing ecosystems.'
  }
];

export const facilitiesData: FacilityItem[] = [
  { id: 'fac-1', title: 'Quarantine Units', desc: 'Providing dedicated care and monitoring for all arriving animals, ensuring their health and seamless integration.' },
  { id: 'fac-2', title: 'Ashvkatha Elephant Hospital', desc: 'Provides advanced surgical and medical care for up to three elephants simultaneously with diagnostics, hydraulic lifts, and hyperbaric chamber.' },
  { id: 'fac-3', title: 'Enrichment Factories', desc: 'We create specialised tools to provide our resident animals with mentally and physically engaging experiences.' },
  { id: 'fac-4', title: 'Sterilisation Service Department', desc: 'One of the first veterinary care centres in the country to have a CSSD Mega Unit.' },
  { id: 'fac-5', title: 'Central Veterinary Laboratory', desc: 'Advances wildlife health and One Health through diagnostics, disease surveillance, and research in pathology, toxicology, and microbiology.' },
  { id: 'fac-6', title: 'Animal Dentistry', desc: 'We prioritise animal comfort through gentle, pain-free and stress-free dental procedures.' },
  { id: 'fac-7', title: 'Advanced Wildlife Imaging Centre', desc: 'Ashvkatha’s Advanced Wildlife Imaging Centre provides state-of-the-art radiography, ultrasound, CT, and MRI.' },
  { id: 'fac-8', title: 'Ashvkatha Nutrition Centres', desc: 'These centres ensure every animal receives scientifically curated, species and individual-specific nutrition.' },
  { id: 'fac-9', title: 'Ashvkatha Veterinary Pharmacy', desc: 'The Pharmacy ensures timely, precise, and welfare-focused delivery of medicines.' },
  { id: 'fac-10', title: 'Temperature-Controlled Habitats', desc: 'Our temperature-controlled habitats, including heated lamps, provide consistent warmth and support mimicking natural sunlight.' }
];

export const rescueTalesData: RescueItem[] = [
  {
    id: 'tale-lakshmi',
    title: 'Lakshmi Elephant',
    subtitle: 'Healing a Severe Foot Infection',
    desc: 'Rescued in 2024 with a chronic, severe foot infection, Lakshmi required intensive veterinary care, specialized hydrotherapy, and custom orthopedic boots. Over 6 months of dedicated rehabilitation, her wounds fully healed, her pain subsided, and she made a complete, inspiring recovery.'
  },
  {
    id: 'tale-1',
    title: 'Rosie Tapir',
    subtitle: 'From Silence to Soft Chirps: The Tapir Who Learned to Trust Again',
    desc: 'When Rosie arrived at Ashvkatha, she was placed in a habitat designed with extraordinary care - tailored specifically to meet her needs.'
  },
  {
    id: 'tale-2',
    title: 'Crocodile Fuga',
    subtitle: 'Fugga Swims Again: A Triumph Over Pain and Injury',
    desc: 'Fugga’s recovery stands as a powerful testament to Ashvkatha’s specialized reptile care. Now fully healed, Fugga can live as nature intended.'
  },
  {
    id: 'tale-3',
    title: 'Bahadur Elephant',
    subtitle: "Bahadur's Journey To A Family: Healing With Every Step",
    desc: 'Bahadur’s story began in silence and suffering under the harsh glare of circus lights. He is now a gentle, curious soul rediscovering life.'
  },
  {
    id: 'tale-4',
    title: 'Fragile Sulcata',
    subtitle: 'From Fragile to Thriving: Willy the Tortoise’s Journey',
    desc: 'A tiny Sulcata tortoise hatchling, just a few days old, arrived fragile and almost lifeless. Ashvkatha’s team crafted a one-of-a-kind neonatal plan.'
  },
  {
    id: 'tale-5',
    title: 'Chintu the Otter',
    subtitle: 'Chintu: The Little Otter Who Learned to Swim',
    desc: 'Confined to a cramped enclosure in isolation, Chintu’s intervention focused on both physical recovery and emotional healing.'
  },
  {
    id: 'tale-6',
    title: 'Puma Robin',
    subtitle: 'Beyond Rescue: How Enrichment Transformed Robin’s Life',
    desc: 'Robin spent his days confined to a small, inbreeding farm. At Ashvkatha, he found not just safety, but the life he was always meant to live.'
  },
  {
    id: 'tale-7',
    title: 'Tegu Ari',
    subtitle: 'Healing Ari: A Tegu’s Path to Recovery',
    desc: 'Ari was rescued from the illegal trade in starving condition. Caretakers provided nutrition through a feeding tube until he regained strength.'
  },
  {
    id: 'tale-8',
    title: 'David the Bear',
    subtitle: "David's Journey of Healing and Hope",
    desc: 'David, a shy 30-year-old brown bear, was rescued from a circus cage in Eastern Europe. He is now enjoying his newfound freedom.'
  }
];

export const resourcesData: ResourceItem[] = [
  {
    id: 'res-1',
    category: 'Research Papers',
    title: 'Gastritis in Cheetahs Under Human Care',
    desc: 'Chronic stomach inflammation is one of the most common diseases affecting cheetahs living under human care, arising from captive feeding differences.'
  },
  {
    id: 'res-2',
    category: 'Research Papers',
    title: 'Anions in Animal Whole Blood via Ion Chromatography',
    desc: 'Trace analysis of inorganic anions in animal blood is fundamental to understanding physiological status and environmental exposures.'
  },
  {
    id: 'res-3',
    category: 'Media',
    title: 'Shri. D M Gida Appeals to Colombia to Save 80 Hippos',
    desc: 'Ashvkatha Founder formally petitions the Government of Colombia, offering scientific, operational and financial support to safely capture.'
  },
  {
    id: 'res-4',
    category: 'Media',
    title: 'World’s First Global University for Wildlife and Veterinary Services',
    desc: 'Envisioned as a modern-day Gurukul and purpose-led university, aiming to position India as a global hub for wildlife education.'
  },
  {
    id: 'res-5',
    category: 'Annual Report',
    title: 'Ashvkatha Annual Report for 2024-25',
    desc: 'Discover our Annual Report showcasing wildlife rescue operations, rehabilitation efforts, and conservation work.'
  },
  {
    id: 'res-6',
    category: 'Media',
    title: 'Ashvkatha Foundation Day: One Year On',
    desc: 'Milestones in rescue, advanced care, and science-led conservation achieved over the past year since PM inauguration.'
  },
  {
    id: 'res-7',
    category: 'General Articles',
    title: 'IBCA capacity-building programme on big cat care',
    desc: 'An international capacity-building programme equipping veterinary professionals with practical skills in big cat medicine.'
  },
  {
    id: 'res-8',
    category: 'Media',
    title: 'Indonesia Engages Ashvkatha to Curb Sumatran Elephant EEHV Deaths',
    desc: 'Ashvkatha is providing technical expertise to support Indonesia’s Ministry of Forestry to curb deaths caused by EEHV.'
  },
  {
    id: 'res-9',
    category: 'Media',
    title: 'CITES Endorses Ashvkatha Hub of Conservation Excellence',
    desc: 'At the standing committee meeting, member nations delivered a decisive endorsement of Ashvkatha’s world-class facilities.'
  },
  {
    id: 'res-10',
    category: 'Research Papers',
    title: 'Contribution of Indian Zoos to International Conservation',
    desc: 'This study evaluates the role of 23 Indian zoos recognized by the Central Zoo Authority linking size with biodiversity outcomes.'
  },
  {
    id: 'res-11',
    category: 'Research Papers',
    title: 'Enclosure Complexity and Asiatic Lion Welfare',
    desc: 'We compared the welfare status of 41 Asiatic lions housed in off-display, zoo-safari, and on-display enclosures, scoring complexity.'
  },
  {
    id: 'res-12',
    category: 'General Articles',
    title: 'Leopard Reproductive Health Assessment',
    desc: 'Correlation of Vaginal Cytology, Estrous Behaviour and Faecal Hormone for Assessment of Reproductive Health Status in common leopard.'
  },
  {
    id: 'res-13',
    category: 'General Articles',
    title: 'Food Enrichment Welfare of Rescued Leopards',
    desc: 'Effect of a Food Enrichment and a Variable Feeding Time on the Behavioural Welfare of Rescued Leopards at an Indian Rescue Centre.'
  },
  {
    id: 'res-14',
    category: 'Research Papers',
    title: 'Urogenital Tract Visual Anatomy in Asian Elephants',
    desc: 'Endoscopic visual anatomy of the urogenital tract in 30 female Asian elephants examined under standing sedation.'
  },
  {
    id: 'res-15',
    category: 'General Articles',
    title: 'CITES Secretariat highlights high standards at Ashvkatha',
    desc: 'A recent report by the Secretariat of CITES has highlighted the world-class standards of animal care and treatment in Junagadh.'
  },
  {
    id: 'res-16',
    category: 'Media',
    title: 'Ashvkatha Rescue Rangers interactive children programme returns',
    desc: 'Interactive programme designed to bring children closer to the world of wildlife conservation under WeCare initiative.'
  },
  {
    id: 'res-17',
    category: 'General Articles',
    title: 'SC SIT Investigation Clears Ashvkatha of all Charges',
    desc: 'Supreme Court noted that no contravention of law has been reported by the SIT, clearing Ashvkatha of allegations.'
  },
  {
    id: 'res-18',
    category: 'Legal',
    title: 'Supreme Court Clears Ashvkatha of all Charges',
    desc: 'Justice Chelameswar-led SIT report confirms that the acquisition and care of all 40,633 animals complied with WLPA.'
  },
  {
    id: 'res-19',
    category: 'Legal',
    title: 'Lawful and Ethical Operations Verified by SC Team',
    desc: 'Independent probe confirms the Junagadh facility meets international welfare standards, rejecting private collection claims.'
  },
  {
    id: 'res-20',
    category: 'Legal',
    title: 'Karnataka HC Validates Transfer of Elephants',
    desc: 'The Court held the transfers lawful and non-commercial, directing the Trust to maintain lifelong welfare standards.'
  },
  {
    id: 'res-21',
    category: 'Media',
    title: 'Gujarat Forest Dept & Ashvkatha introducing 33 Spotted Deer in Barda',
    desc: 'Collaborative initiative introducing chital into designated protected areas to enhance wildlife diversity in Barda.'
  },
  {
    id: 'res-22',
    category: 'Media',
    title: 'Ashvkatha Veterinary Course on Conservation Medicine',
    desc: 'Ashvkatha inaugurates flagship Veterinary Training Course on Introduction to Conservation Medicine at Junagadh.'
  },
  {
    id: 'res-23',
    category: 'Research Papers',
    title: 'White Feathers in Endangered Lear’s Macaw in Brazil',
    desc: 'First photographic records of aberrant white feathers in threatened Lear’s macaw with notes on breeding behavior.'
  },
  {
    id: 'res-24',
    category: 'Media',
    title: 'Official Statement from Ashvkatha On Madhuri Elephant',
    desc: 'Respecting the religious sentiments of Kolhapur Jain Matha regarding transfer of Madhuri for advanced veterinary care.'
  },
  {
    id: 'res-25',
    category: 'Media',
    title: 'Ashvkatha Hosts Gajsevak Sammelan Elephant Caregiver Training',
    desc: 'Ashvkatha and Project Elephant organise Country\'s largest training bringing together over 100 mahouts.'
  },
  {
    id: 'res-26',
    category: 'Media',
    title: 'Wildlife Welfare Training for Congolese Delegates',
    desc: 'Ashvkatha hosts a 15-member delegation from ICCN of Democratic Republic of Congo (DRC) to exchange welfare expertise.'
  },
  {
    id: 'res-27',
    category: 'Legal',
    title: 'Bombay HC Orders Madhuri Elephant Relocation to Ashvkatha',
    desc: 'Court upholds decision to move captive elephant \'Madhuri\' from Jain Trust to Ashvkatha facility for advanced care.'
  },
  {
    id: 'res-28',
    category: 'Media',
    title: 'Ashvkatha and Forest Dept Release 20 Spotted Deer in Banni',
    desc: 'Spotted deer introduced into protected grasslands in collaboration with Greens Zoological Rescue.'
  },
  {
    id: 'res-29',
    category: 'Research Papers',
    title: 'Positive Reinforcement Improves Indian Leopard Welfare',
    desc: 'Studies on how positive reinforcement training reduces husbandry stress in captive common leopards.'
  },
  {
    id: 'res-30',
    category: 'General Articles',
    title: 'Innovation in Modern Zoo Design',
    desc: 'Modern zoological institutions shift from traditional display to conservation and natural habitat replication.'
  },
  {
    id: 'res-31',
    category: 'General Articles',
    title: 'Cyclone Biparjoy Threat Mitigation at Ashvkatha',
    desc: 'MITIGATION measures and emergency protocols implemented to protect 150,000 animals during the severe cyclone in 2023.'
  },
  {
    id: 'res-32',
    category: 'General Articles',
    title: 'Cheetah Conservation & Reintroduction Standards',
    desc: 'The cheetah is a large cat, characterised by solid black spots and Ashvkatha’s effort to support global breeding programs.'
  },
  {
    id: 'res-33',
    category: 'General Articles',
    title: 'Bridging Welfare Gaps in Human-Leopard Conflict',
    desc: 'Studies on minimizing leopard-human conflict and improving public perception of large carnivore conservation.'
  },
  {
    id: 'res-34',
    category: 'Annual Report',
    title: 'Ashvkatha Annual Report for 2023-24',
    desc: 'Reviewing key milestones in advanced veterinary treatment and rewilding of species during the financial year.'
  },
  {
    id: 'res-35',
    category: 'General Articles',
    title: 'Best Practices for Captive Animal Management',
    desc: 'Integrating modern concepts of zoo biology, animal welfare guidelines, and conservation education.'
  },
  {
    id: 'res-36',
    category: 'Media',
    title: 'ACTP & Ashvkatha Partner to Reintroduce 41 Spix’s Macaws to Brazil',
    desc: 'Declared extinct in the wild in 2000, macaws are reintroduced from Junagadh facilities to native Caatinga habitats.'
  },
  {
    id: 'res-37',
    category: 'Annual Report',
    title: 'Ashvkatha Annual Report for 2022-23',
    desc: 'Detailing expansions of animal hospital capacity and veterinary diagnostics laboratories.'
  },
  {
    id: 'res-38',
    category: 'Legal',
    title: 'SC Permits Elephant Transfers to RKTEWT',
    desc: 'Transfers to RKTEWT permitted under WLPA after High-Powered Committee review confirms world-class care.'
  },
  {
    id: 'res-39',
    category: 'Legal',
    title: 'Gauhati HC Permits Transfer of Black Panther',
    desc: 'Court finds no legal or factual basis to block transfers to GZRRC Junagadh under Central Zoo Authority guidelines.'
  },
  {
    id: 'res-40',
    category: 'Legal',
    title: 'Tripura HC Confirms Legal Transfers of Captive Elephants',
    desc: 'Affirmed legal, non-commercial transfers of rescued elephants and mandated expert HPC monitoring.'
  },
  {
    id: 'res-41',
    category: 'Legal',
    title: 'Gujarat HC Clears GZRRC of Alleged Irregularities',
    desc: 'Court confirmed lawful recognition, proper functioning, and dismissed the PIL as having no merit.'
  },
  {
    id: 'res-42',
    category: 'Legal',
    title: 'SC Backs CZA’s Recognition of GZRRC',
    desc: 'Court rejected PIL claims and confirmed GZRRC animal acquisition and welfare operations were lawful.'
  },
  {
    id: 'res-43',
    category: 'Legal',
    title: 'SC Upholds Elephant Relocation to Gujarat Trust',
    desc: 'SC dismissed the challenge, validating the role of RKTEWT in providing lifelong veterinary support.'
  },
  {
    id: 'res-44',
    category: 'Annual Report',
    title: 'Ashvkatha Annual Report for 2021-22',
    desc: 'Archived annual statistics on animal rescue numbers and veterinary hospital case reports.'
  },
  {
    id: 'res-45',
    category: 'Legal',
    title: 'Delhi HC Upholds Hippopotamus Chotu Lifetime Custody',
    desc: 'The Court accepted AWBI findings that Chotu the Hippo was well cared for at Junagadh and allowed custody.'
  },
  {
    id: 'res-46',
    category: 'Annual Report',
    title: 'Ashvkatha Annual Report for 2020-21',
    desc: 'Historical data on the foundation phase of Greens Zoological and temple elephant rescue trusts.'
  }
];

export const faqData: FAQItem[] = [
  {
    question: 'What is Ashvkatha, and what does it aim to achieve?',
    answer: 'Ashvkatha signifies "Star of the Forest." Our purpose is to rescue wild animals in distress, provide treatment along with lifelong care, and rehabilitate those fit for the wild. With regulatory approval, we also breed select endangered or extinct-in-the-wild species, serving as a modern Noah\'s Ark to ensure their survival.'
  },
  {
    question: 'Where is Ashvkatha located, and which areas does it serve?',
    answer: 'Ashvkatha is located across 3,500+ acres in Junagadh, Gujarat, India. It serves as a national and global hub, accepting rescued and compromised wildlife from across India and international conflict zones.'
  },
  {
    question: 'What kind of animals does Ashvkatha rescue and rehabilitate?',
    answer: 'We shelter over 150,000 animals representing 2,000+ species, including elephants, leopards, lions, bears, reptiles (crocodiles, tegus), and exotic birds (macaws, snake-necked turtles).'
  },
  {
    question: 'Why was Ashvkatha established, and how does it align with Surya Foundation’s vision?',
    answer: 'Ashvkatha was established by Shri. D M Gida under the sponsorship of Surya Foundation. It embodies the Vedic philosophy of "Vasudhaiva Kutumbakam" (the world is one family) and the WeCare initiative, ensuring every life is valued.'
  },
  {
    question: 'Is Ashvkatha open to visitors?',
    answer: 'Ashvkatha prioritises animal welfare, rehabilitation, and peace. It is primarily a conservation and rescue facility, meaning access is restricted to ensure a stress-free environment for recovering animals.'
  },
  {
    question: 'How can individuals or organisations volunteer with or support Ashvkatha?',
    answer: 'Interested researchers, scientists, veterinarians, and animal welfare advocates can reach out through our Contact page under specific request types to collaborate on conservation science.'
  }
];
