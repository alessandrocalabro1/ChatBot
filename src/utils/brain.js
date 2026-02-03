
// Knowledge Base - The raw data
const DATA = {
    profile: {
        name: "Alessandro Calabrò",
        role: "SAP BTP Consultant & Frontend Developer",
        age: 30, // Born 1995
        location: "Roma",
        companies: ["Mashfrog Group", "Abstract", "Indra/Minsait"],
        education: "Laurea in Sociologia (Sapienza Università di Roma) & Diploma Scientifico",
        email: "alessandro.calabro@example.com"
    },
    work_deep_dive: {
        mashfrog: "Attualmente, presso **Mashfrog Group** (dal 2024), Alessandro ricopre la posizione di **SAP BTP Consultant**. Il suo focus principale è lo sviluppo di applicativi Enterprise sfruttando tecnologie come **SAP UI5**, **SAP Build** e **AppGyver**. Parallelamente, supporta il PMO in attività strategiche quali la gestione delle risorse, la reportistica avanzata e l'analisi dei dati, dimostrando versatilità e visione d'insieme.",
        abstract: "Durante la sua esperienza in **Abstract** (2023-2024), ha operato come consulente per un cliente di rilievo internazionale: **Luxottica**. In questo contesto, ha progettato e sviluppato soluzioni custom per l'ottimizzazione del ciclo passivo (gestione ordini di acquisto), massimizzando le potenzialità della **SAP Business Technology Platform**.",
        indra: "Nel periodo 2020-2023, presso **Indra/Minsait**, ha lavorato a stretto contatto con **Enel Green Power**. Qui ha consolidato le sue competenze su **SAP Fiori**, gestendo processi critici legati al ciclo di vita dei contratti di vendita e ai flussi approvativi degli ordini, garantendo efficienza operativa."
    },
    tech_stack: {
        sap: "In ambito **SAP**, Alessandro possiede una competenza verticale e consolidata. È esperto in **SAP Fiori**, **SAP UI5**, **SAP Build Apps (ex AppGyver)** e **SAP BTP**. La sua specializzazione risiede nella creazione di interfacce utente intuitive e scalabili per complessi processi aziendali.",
        frontend: "Sul fronte **Web Development**, domina lo stack moderno: padronanza di **JavaScript (ES6+)** e **TypeScript**, unite a una profonda conoscenza di **HTML5** e **CSS3**. Ha esperienza con framework reattivi come **React** e **Angular**, e utilizza metodologie di sviluppo basate su componenti.",
        tools: "Il suo workflow include l'uso avanzato di **Git** per il version control, **VS Code** e **SAP Business Application Studio** come ambienti di sviluppo primari."
    },
    personal: {
        summary: "Nato il 18 Luglio 1995, Alessandro unisce un background multiculturale e umanistico alle competenze tecniche. Ha frequentato le scuole elementari nelle **Filippine**, un'esperienza formativa significativa. Convive con la sua compagna, Martina, da oltre 13 anni.",
        hobbies: "Nel tempo libero, Alessandro si dedica al **CrossFit** 🏋️‍♂️ per disciplina e fitness. È un viaggiatore appassionato (con recenti esplorazioni in Giappone e Madagascar) e coltiva un interesse per il collezionismo di **carte Pokémon**, combinando così dinamismo fisico e passioni 'nerd'.",
        juve: "Calcisticamente, è un sostenitore della **Juventus**."
    }
};

// Advanced Phrase Matching
const INTENTS = [
    // GREETINGS & BASICS
    {
        id: 'greeting',
        regex: /^(ciao|salve|buongiorno|buonasera|hey|hi|hello|start|inizio)/i,
        responses: [
            "Salve. Sono un'assistente virtuale basata su LLM (Large Language Model) addestrata sul profilo professionale di Alessandro Calabrò. Come posso assisterti oggi? Posso fornirti dettagli su esperienze lavorative, stack tecnologico o background personale.",
            "Buongiorno. Sono qui per analizzare e presentare i dati relativi al profilo di Alessandro Calabrò. Desideri una panoramica delle sue competenze SAP o preferisci approfondire il suo percorso di carriera?"
        ]
    },
    {
        id: 'identity',
        regex: /(chi sei|chi e alessandro|presentati|parlami di te|profilo|chi è|descrizione)/i,
        responses: [
            "Alessandro Calabrò è un professionista IT specializzato come **SAP BTP Consultant** e **Frontend Developer**. Basato a Roma, classe 1995, combina competenze tecniche avanzate nello sviluppo di interfacce enterprise con un background accademico in Sociologia. Attualmente opera in Mashfrog Group.",
            "Analizzando il database disponibile: Alessandro è uno sviluppatore esperto nell'ecosistema SAP (Fiori/UI5) e nelle tecnologie Web moderne. Si distingue per la capacità di unire logica di sviluppo e sensibilità verso l'esperienza utente."
        ]
    },

    // WORK & EXPERIENCE
    {
        id: 'work_general',
        regex: /(lavoro|esperienz|carriera|curriculum|cv|cosa fa|dove lavora|impiego|ruolo|lavori)/i,
        responses: [
            "La carriera di Alessandro si è sviluppata attraverso ruoli di crescente responsabilità in società di consulenza di primo piano. Attualmente in forza a **Mashfrog Group**, ha precedentemente collaborato con **Abstract** e **Indra/Minsait**. Posso elaborare ulteriori dettagli su ciascuna di queste esperienze, se lo desideri.",
            "Alessandro opera nel settore della consulenza IT. Il suo percorso include:\n- **Mashfrog Group** (Attuale)\n- **Abstract** (Progetti Luxottica)\n- **Indra/Minsait** (Progetti Enel Green Power)\nDesideri approfondire un ruolo specifico?"
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
            "L'expertise di Alessandro in ambito SAP è estesa. Copre l'intero ciclo di sviluppo su **Business Technology Platform**, con focus specifico su UX/UI tramite **Fiori** e **UI5**, nonché soluzioni Low-Code con **SAP Build**."
        ]
    },
    {
        id: 'skills_web',
        regex: /(javascript|js|typescript|angular|css|html|react|web|sviluppo|code|codice|stack)/i,
        responses: [
            DATA.tech_stack.frontend,
            "In termini di sviluppo Web puro, Alessandro dimostra profonda conoscenza di **JavaScript** e **TypeScript**, manipolazione DOM avanzata e design responsivo con **HTML5/CSS3**. È competente nell'utilizzo di librerie moderne come **React**."
        ]
    },

    // PERSONAL & HOBBIES
    {
        id: 'hobbies',
        regex: /(hobby|passioni|tempo libero|cosa gli piace|interessi|personal|vita)/i,
        responses: [
            "Dall'analisi dei dati personali emerge un profilo dinamico. " + DATA.personal.hobbies,
            DATA.personal.summary + " Tra i suoi interessi principali figurano il **CrossFit**, i viaggi internazionali e il collezionismo."
        ]
    },
    {
        id: 'travel',
        regex: /(viaggi|giappone|madagascar|mondo|vacanze)/i,
        responses: [
            "Il viaggio rappresenta una componente chiave del suo sviluppo personale. Le recenti spedizioni in **Giappone** e **Madagascar** testimoniano un forte interesse per culture diverse e ambienti naturali."
        ]
    },
    {
        id: 'sport',
        regex: /(sport|crossfit|palestra|allenamento)/i,
        responses: [
            "Alessandro pratica **CrossFit** con regolarità. Questa disciplina riflette la sua attitudine alla costanza e al superamento dei propri limiti."
        ]
    },
    {
        id: 'football',
        regex: /(calcio|squadra|tifa|tifoso|juve|juventus)/i,
        responses: [DATA.personal.juve]
    },

    // EDUCATION
    {
        id: 'education',
        regex: /(studio|scuola|universit|laurea|diploma|formazione)/i,
        responses: [
            `Il background formativo è ibrido: possiede una **${DATA.profile.education}**. Questa combinazione gli fornisce strumenti unici per l'analisi dei processi organizzativi e l'approccio logico-matematico.`
        ]
    },

    // CONTACT
    {
        id: 'contact',
        regex: /(contatt|email|telefono|chiamare|scrivere|linkedin)/i,
        responses: [
            "Per opportunità professionali o collaborazioni, il canale preferenziale è **LinkedIn**. Per ragioni di privacy, non divulgo contatti telefonici diretti in questa chat."
        ]
    },

    // FOLLOW UP & GENERIC
    {
        id: 'thanks',
        regex: /(grazie|grande|bravo|ottimo|top|gentile|complimenti)/i,
        responses: [
            "È stato un piacere assisterti. Rimango a disposizione per ulteriori query sul profilo di Alessandro.",
            "Grazie a te. Se necessiti di altre informazioni specifiche, non esitare a chiedere."
        ]
    },
    {
        id: 'insults',
        regex: /(stupido|scemo|inutile|bot|cattivo|brutto)/i,
        responses: [
            "Come modello di linguaggio AI, non provo emozioni, ma il mio obiettivo è fornire informazioni accurate e professionali. Ti invito a formulare una nuova richiesta.",
            "Mi dispiace se la risposta non ha soddisfatto le tue aspettative. Posso provare a riformulare o fornirti dati diversi riguardo al profilo di Alessandro."
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
                text: "Stavamo analizzando il percorso professionale. Desideri dettagli operativi sulle tecnologie utilizzate in questi ruoli?",
                context: context
            };
        }
    }

    // 3. Generic Fallbacks (AI Persona)
    const fallbacks = [
        "Mi scuso, ma non ho informazioni specifiche su questo punto nel mio database attuale. Posso però fornirti dettagli esaustivi su **Esperienza Lavorativa**, **Stack Tecnologico** o **Formazione**.",
        "Potresti riformulare la domanda? Sono addestrato per rispondere a quesiti riguardanti il profilo professionale e le competenze di Alessandro Calabrò.",
        "Interessante. Tuttavia, questa richiesta esula dal mio contesto principale. Posso reindirizzare la conversazione sulle competenze SAP o sullo sviluppo Frontend?"
    ];

    return {
        text: pick(fallbacks),
        context: context
    };
};
