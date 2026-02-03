
// Knowledge Base - The raw data
const DATA = {
    profile: {
        name: "Alessandro Calabrò",
        role: "SAP BTP Consultant & Frontend Developer",
        age: 30, // Born 1995
        location: "Roma",
        companies: ["Mashfrog Group", "Abstract", "Indra/Minsait"],
        education: "Laurea in Sociologia (Sapienza) & Diploma Scientifico",
        email: "alessandro.calabro@example.com" // Placeholder
    },
    work_deep_dive: {
        mashfrog: "In **Mashfrog Group** (2024-Oggi), Alessandro ricopre il ruolo di **SAP BTP Consultant**. Si dedica allo sviluppo di applicazioni Enterprise innovative (utilizzando UI5, SAP Build, AppGyver) e supporta il PMO nelle attività di gestione risorse, reporting e analisi dati.",
        abstract: "Presso **Abstract** (2023-2024), ha operato come consulente per **Luxottica**. Ha progettato e sviluppato applicazioni custom per l'ottimizzazione della gestione degli ordini di acquisto, sfruttando le potenzialità di SAP Build e SAP UI5.",
        indra: "In **Indra/Minsait** (2020-2023) ha collaborato con **Enel Green Power**. Ha maturato una significativa esperienza su **SAP Fiori**, gestendo il ciclo di vita dei contratti di vendita e i flussi approvativi degli ordini."
    },
    tech_stack: {
        sap: "**SAP Ecosystem**: Esperto in SAP Fiori, SAP UI5, SAP Build Apps (AppGyver) e SAP BTP. Specializzato nella creazione di interfacce utente intuitive per processi aziendali complessi.",
        frontend: "**Web Development**: Solida conoscenza di JavaScript (ES6+), TypeScript, HTML5, CSS3. Esperienza con framework moderni come React, Angular e strumenti di versionamento come Git.",
        tools: "**Tools & Methodologies**: Agile/Scrum, Git, VS Code, SAP Business Application Studio."
    },
    projects: {
        overview: "Alessandro ha lavorato su diversi progetti personali e professionali interessanti. Tra i i più recenti ci sono **Card Invest**, **CAL Service** e ovviamente questo **Portfolio Interattivo**.",
        card_invest: "**Card Invest**: Una web app avanzata per il tracciamento e l'analisi degli investimenti in carte collezionabili, dotata di dashboard analitiche.",
        cal_service: "**CAL Service**: Un portale moderno 'mobile-first' per servizi di manutenzione (idraulica, elettrica), focalizzato sulla lead generation e UX premium.",
        chatbot: "**Portfolio Chatbot**: L'assistente con cui stai parlando! Un esempio pratico di React e logica conversazionale custom."
    },
    personal: {
        fun_facts: "Classe '95. Una curiosità: ha frequentato le scuole elementari nelle **Filippine**, un'esperienza che gli ha aperto la mente sin da piccolo. Condivide la vita con Martina da oltre 13 anni.",
        hobbies: "Nel tempo libero si dedica al **CrossFit** 🏋️‍♂️ con costanza, ama viaggiare (con mete recenti come Giappone e Madagascar) e coltiva la passione per il collezionismo (TCG).",
        juve: "Segue con passione il calcio ed è un sostenitore della **Juventus**."
    }
};

// Advanced Phrase Matching
const INTENTS = [
    // GREETINGS & BASICS
    {
        id: 'greeting',
        regex: /^(ciao|salve|buongiorno|buonasera|hey|hi|hello|start|inizio)/i,
        responses: [
            "Benvenuto/a! 👋 Sono l'assistente virtuale di Alessandro. Posso illustrarti il suo percorso professionale, le sue competenze tecniche o i suoi progetti.",
            "Buongiorno! Sono qui per offrirti una panoramica completa sul profilo di Alessandro Calabrò. Come posso esserti utile?"
        ]
    },
    {
        id: 'identity',
        regex: /(chi sei|chi e alessandro|presentati|parlami di te|profilo|chi è)/i,
        responses: [
            "Alessandro Calabrò è un **SAP BTP Consultant** e **Frontend Developer** basato a Roma. Unisce competenze tecniche solide in ambito SAP a una passione per lo sviluppo web moderno.",
            "Sono l'assistente digitale del portfolio. Alessandro è un professionista classe '95 specializzato in soluzioni SAP e sviluppo Frontend, con un background in Sociologia che arricchisce la sua visione dei processi."
        ]
    },

    // WORK & EXPERIENCE
    {
        id: 'work_general',
        regex: /(lavoro|esperienz|carriera|curriculum|cv|cosa fa|dove lavora|impiego|ruolo)/i,
        responses: [
            "Alessandro vanta un percorso professionale in ascesa nel mondo della consulenza IT. Attualmente è in **Mashfrog Group**, dopo esperienze significative in **Abstract** (Luxottica) e **Indra** (Enel Green Power).",
            "Il suo focus principale è lo sviluppo Frontend in ambiente SAP (UI5, Fiori, Build). Attualmente opera come Consultant presso Mashfrog Group. Vuoi approfondire un'esperienza specifica?"
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
            DATA.tech_stack.sap,
            "Nel mondo SAP, Alessandro ha competenze verticali su **Fiori** e **UI5**, estendendosi fino alla **Business Technology Platform (BTP)** e strumenti low-code come **SAP Build Apps**."
        ]
    },
    {
        id: 'skills_web',
        regex: /(javascript|js|typescript|angular|css|html|react|web|sviluppo|code|codice|stack)/i,
        responses: [
            DATA.tech_stack.frontend,
            "Il suo background tecnico include una forte padronanza dello stack web standard: **JavaScript/TypeScript**, **HTML5/CSS3** e librerie come **React**."
        ]
    },

    // PROJECTS (NEW)
    {
        id: 'projects_general',
        regex: /(progett|poprtfolio|lavori|realizzazioni|app|siti)/i,
        responses: [
            DATA.projects.overview + " Chiedimi pure dettagli su uno di questi!",
            "Oltre al lavoro di consulenza, Alessandro sviluppa progetti per affinare le sue skill. **Card Invest** e questo **Chatbot** sono ottimi esempi."
        ]
    },
    {
        id: 'project_cardinvest',
        regex: /(card|invest|pokemon|carte)/i,
        responses: [DATA.projects.card_invest]
    },
    {
        id: 'project_calservice',
        regex: /(cal|service|idraulico|sito)/i,
        responses: [DATA.projects.cal_service]
    },

    // PERSONAL & HOBBIES
    {
        id: 'hobbies',
        regex: /(hobby|passioni|tempo libero|cosa gli piace|interessi)/i,
        responses: [DATA.personal.hobbies]
    },
    {
        id: 'travel',
        regex: /(viaggi|giappone|madagascar|mondo|vacanze)/i,
        responses: [
            "Il viaggio è una componente fondamentale. Di recente ha esplorato il **Giappone** e il **Madagascar**, esperienze che uniscono cultura e avventura. ✈️"
        ]
    },
    {
        id: 'sport',
        regex: /(sport|crossfit|palestra|allenamento)/i,
        responses: [
            "Per mantenere l'equilibrio tra mente e corpo, Alessandro pratica **CrossFit** con dedizione. Un modo efficace per scaricare lo stress da codice!"
        ]
    },
    {
        id: 'football',
        regex: /(calcio|squadra|tifa|tifoso|juve|juventus)/i,
        responses: [DATA.personal.juve]
    },

    // EDUCATION & CONTACT
    {
        id: 'education',
        regex: /(studio|scuola|universit|laurea|diploma|formazione)/i,
        responses: [
            `🎓 ${DATA.profile.education}. Un percorso che unisce logica scientifica e comprensione delle dinamiche sociali.`
        ]
    },
    {
        id: 'contact',
        regex: /(contatt|email|telefono|chiamare|scrivere|linkedin)/i,
        responses: [
            "Puoi trovare Alessandro su **LinkedIn** per connessioni professionali. È sempre disponibile per discutere di nuove opportunità o progetti innovativi."
        ]
    },

    // FOLLOW UP & GENERIC
    {
        id: 'thanks',
        regex: /(grazie|grande|bravo|ottimo|top|gentile|complimenti)/i,
        responses: [
            "Grazie a te! È un piacere mostrarti il mio portfolio.",
            "Felice di essere stato utile.",
            "Grazie! Se hai altre domande su Alessandro, sono qui."
        ]
    },
    {
        id: 'insults',
        regex: /(stupido|scemo|inutile|bot|cattivo|brutto)/i,
        responses: [
            "Il mio obiettivo è fornire informazioni utili in modo professionale. Se c'è qualcosa che posso migliorare, fammelo sapere.",
            "Capisco la frustrazione, ma sono qui per aiutarti a conoscere meglio il profilo di Alessandro."
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

    // 2. Context-Aware Fallback
    if (context.lastIntent) {
        if (context.lastIntent.startsWith('work')) {
            return {
                text: "Stavamo parlando delle esperienze professionali. Ti interessano dettagli su Mashfrog, Abstract o Indra/Minsait?",
                context: context
            };
        }
        if (context.lastIntent === 'projects_general') {
            return {
                text: "Vuoi sapere di più su Card Invest o su come è stato costruito questo sito?",
                context: context
            };
        }
    }

    // 3. Generic Fallbacks (Professional)
    const fallbacks = [
        "Interessante. Posso darti maggiori dettagli sulle competenze tecniche di Alessandro o sui suoi progetti recenti?",
        "Non sono sicuro di aver colto il punto. Prova a chiedermi 'Cosa fa Alessandro?' o 'Quali sono le sue skill?'.",
        "Al momento non ho questa informazione nel mio database, ma posso parlarti della sua esperienza in ambito SAP o dei suoi hobby."
    ];

    return {
        text: pick(fallbacks),
        context: context
    };
};
