
// Knowledge Base - The raw data
const DATA = {
    profile: {
        name: "Alessandro Calabrò",
        role: "SAP BTP Consultant & Frontend Developer",
        age: 30, // Born 1995
        location: "Roma",
        companies: ["Mashfrog Group", "Abstract", "Indra/Minsait"],
        education: "Sociologia alla Sapienza & Diploma Scientifico",
        email: "alessandro.calabro@example.com" // Placeholder/Privacy
    },
    work_deep_dive: {
        mashfrog: "In **Mashfrog Group** (2024-Oggi), Alessandro è un **SAP BTP Consultant**. Si occupa di sviluppo app Enterprise (UI5, Build, AppGyver) e supporta il PMO nella gestione risorse e reporting. Un vero jolly! 🃏",
        abstract: "Da **Abstract** (2023-2024), ha lavorato per **Luxottica**. Ha creato app per la gestione ordini di acquisto usando SAP Build e UI5. Frontend puro e duro.",
        indra: "In **Indra/Minsait** (2020-2023) ha lavorato per **Enel Green Power**. Qui si è fatto le ossa su SAP Fiori, gestendo contratti di vendita e approvazioni ordini. Roba seria."
    },
    tech_stack: {
        sap: "Il suo pane quotidiano: **SAP Fiori, SAP UI5, SAP Build, AppGyver, BTP**. Se c'è 'SAP' nel nome, probabilmente lo sa usare.",
        frontend: "Lato web classico se la cava alla grande con **JavaScript, TypeScript, HTML5, CSS** e framework come **Angular 2+**. E ovviamente sa centrare un div.",
        tools: "Usa **Git** per il versionamento e la suite Office per tutto il resto."
    },
    personal: {
        fun_facts: "Curiosità? Nasce il **18/07/1995**. Ha fatto le scuole elementari nelle **Filippine** (sì, davvero!). È fidanzato con Martina da 13 anni (un santo o un eroe, decidi tu).",
        hobbies: "Nel tempo libero fa **CrossFit** 🏋️‍♂️, viaggia (Giappone e Madagascar recenti) e colleziona **carte Pokémon**.",
        juve: "Purtroppo (o per fortuna?) è un tifoso della **Juventus**. 🦓"
    }
};

// Advanced Phrase Matching
// We use regex for smarter matching (handling plurals, variations, etc.)
const INTENTS = [
    // GREETINGS & BASICS
    {
        id: 'greeting',
        regex: /^(ciao|salve|buongiorno|buonasera|hey|hi|hello|start|inizio)/i,
        responses: [
            "Ciao! 👋 Sono il clone digitale di Alessandro. Chiedimi del suo lavoro, delle sue skill o dei suoi hobby!",
            "Ehilà! Pronto a rispondere a tutte le tue curiosità su Alessandro Calabrò. Da dove iniziamo?"
        ]
    },
    {
        id: 'identity',
        regex: /(chi sei|chi e alessandro|presentati|parlami di te|profilo|chi è)/i,
        responses: [
            "Alessandro Calabrò, classe '95, è uno sviluppatore SAP Frontend e Consultant. Nato nelle Filippine (scolasticamente parlando), vive a Roma e trasforma il caffè in codice SAP UI5.",
            "Sono l'assistente di Alessandro! Lui è un SAP BTP Consultant con la passione per il frontend e... per i Pokémon. 🤓"
        ]
    },

    // WORK & EXPERIENCE
    {
        id: 'work_general',
        regex: /(lavoro|esperienz|carriera|curriculum|cv|cosa fa|dove lavora|impiego|ruolo)/i,
        responses: [
            "Alessandro ha una solida esperienza nel mondo SAP. Attualmente è in **Mashfrog Group**, ma ha lavorato anche in **Abstract** (Luxottica) e **Indra** (Enel). Vuoi dettagli su un'azienda specifica?",
            "Si occupa principalmente di sviluppo Frontend in ambiente SAP (UI5, Fiori, Build). Attualmente è Consultant in Mashfrog."
        ]
    },
    {
        id: 'work_mashfrog',
        regex: /(mashfrog|attuale|oggi|presente)/i,
        responses: [DATA.work_deep_dive.mashfrog]
    },
    {
        id: 'work_abstract',
        regex: /(abstract|luxottica)/i,
        responses: [DATA.work_deep_dive.abstract]
    },
    {
        id: 'work_indra',
        regex: /(indra|minsait|enel)/i,
        responses: [DATA.work_deep_dive.indra]
    },

    // SKILLS
    {
        id: 'skills_sap',
        regex: /(sap|ui5|fiori|btp|cloud|build|appgyver)/i,
        responses: [
            `In ambito SAP è ferratissimo: ${DATA.tech_stack.sap}. Ha lavorato su integrazioni complesse e app enterprise.`,
            "SAP è il suo regno. UI5, Fiori, BTP... se è frontend SAP, Alessandro c'è."
        ]
    },
    {
        id: 'skills_web',
        regex: /(javascript|js|typescript|angular|css|html|react|web|sviluppo|code|codice)/i,
        responses: [
            `Oltre a SAP, conosce bene lo stack web moderno: ${DATA.tech_stack.frontend}.`,
            "È un frontend developer versatile: JS, TS, Angular... gli piace creare interfacce pulite e reattive."
        ]
    },

    // PERSONAL & HOBBIES
    {
        id: 'hobbies',
        regex: /(hobby|passioni|tempo libero|cosa gli piace|interessi)/i,
        responses: [DATA.personal.hobbies]
    },
    {
        id: 'pokemon',
        regex: /(pokemon|carte|collezion)/i,
        responses: [
            "Sì! È un collezionista di carte Pokémon. 🎴 Se vuoi parlargli di Charizard, hai trovato l'argomento giusto."
        ]
    },
    {
        id: 'travel',
        regex: /(viaggi|giappone|madagascar|mondo|vacanze)/i,
        responses: [
            "Ama viaggiare! ✈️ Nel 2024 ha visitato il Giappone e il Madagascar. Mica male eh?"
        ]
    },
    {
        id: 'sport',
        regex: /(sport|crossfit|palestra|allenamento)/i,
        responses: [
            "Alessandro pratica CrossFit. 🏋️‍♂️ Quindi sì, probabilmente proverà a convincerti a farlo."
        ]
    },
    {
        id: 'football',
        regex: /(calcio|squadra|tifa|tifoso|juve|juventus)/i,
        responses: [
            DATA.personal.juve,
            "Il suo cuore è bianconero. Tifa Juventus! 🏳️🏴"
        ]
    },
    {
        id: 'dog',
        regex: /(cane|animale|reiner)/i,
        responses: [
            "Ha un cane di nome **Reiner**! 🐶 È il vero capo di casa."
        ]
    },
    {
        id: 'girlfriend',
        regex: /(fidanzata|moglie|relazione|martina|single)/i,
        responses: [
            "È fidanzatissimo con **Martina** da quasi 13 anni. Una storia leggendaria!"
        ]
    },

    // EDUCATION
    {
        id: 'education',
        regex: /(studio|scuola|universit|laurea|diploma|formazione|filippine)/i,
        responses: [
            `🎓 Laurea in Sociologia alla Sapienza (grande fan di Durkheim) e diploma scientifico.\nCuriosità: ha fatto elementari e medie nelle **Filippine** dalle suore! 🌏`
        ]
    },

    // CONTACT
    {
        id: 'contact',
        regex: /(contatt|email|telefono|chiamare|scrivere|linkedin)/i,
        responses: [
            "La privacy prima di tutto! Ma sono sicuro che se cerchi 'Alessandro Calabrò' su LinkedIn lo trovi subito. 😉"
        ]
    },

    // FOLLOW UP & GENERIC
    {
        id: 'more_info',
        regex: /(argomenta|spiega meglio|dettagli|dimmi di più|approfondisci|ancora|continua)/i,
        responses: [
            "Certamente! Su quale aspetto in particolare? Posso approfondire i progetti in Mashfrog, le tecnologie SAP usate o magari il suo viaggio in Giappone?",
            "Volentieri! Cosa ti incuriosisce di più? La sua carriera SAP o le sue passioni da 'nerd'?"
        ]
    },
    {
        id: 'thanks',
        regex: /(grazie|grande|bravo|ottimo|top|gentile)/i,
        responses: [
            "È un piacere! 😎",
            "Di nulla! Sono qui apposta.",
            "Grazie a te! Se serve altro, sono qui."
        ]
    },
    {
        id: 'insults',
        regex: /(stupido|scemo|inutile|bot|cattivo|brutto)/i,
        responses: [
            "Ehi, ho dei sentimenti anche io... anche se sono scritti in JavaScript. 😢",
            "Sono solo un chatbot in versione beta, abbi pietà! 🙏"
        ]
    }
];

// Helper to pick random response
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Main function
export const getBotResponse = (input, context = {}) => {
    const normalized = input.toLowerCase().trim();

    // 1. Check for Matches
    for (const intent of INTENTS) {
        if (intent.regex.test(normalized)) {
            return {
                text: pick(intent.responses),
                context: { lastIntent: intent.id }
            };
        }
    }

    // 2. Context-Aware Fallback (rudimentary)
    // If user asks "argomenta" but we missed it in regex above (unlikely) or just random text
    if (context.lastIntent) {
        if (context.lastIntent.startsWith('work')) {
            return {
                text: "Stavamo parlando di lavoro. Vuoi sapere nello specifico cosa ha fatto in Mashfrog o Abstract?",
                context: context
            };
        }
        if (context.lastIntent === 'hobbies') {
            return {
                text: "Riguardo agli hobby... sapevi che colleziona carte Pokémon rare?",
                context: context
            };
        }
    }

    // 3. Generic Fallbacks (Smart conversational filler)
    const fallbacks = [
        "Interessante! 🤔 Ma dimmi di più su cosa cerchi: Skill tecniche o vita vissuta?",
        "Non sono sicuro di aver capito (colpa del mio codice!), ma se chiedi di SAP o della Juventus vado sul sicuro!",
        "Mmh, questo esula dal mio database. Però posso dirti che Alessandro fa un ottimo tiramisù... no aspetta, quello non è nel JSON.",
        "Bip bip 🤖. Domanda complessa! Proviamo con: 'Esperienza lavorativa' o 'Hobby'?"
    ];

    return {
        text: pick(fallbacks),
        context: context // keep old context
    };
};
