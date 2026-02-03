
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
    languages: {
        italian: "Italiano (Madrelingua)",
        english: "Inglese (Livello Professionale/B2+). Utilizzato quotidianamente per documentazione tecnica e progetti internazionali."
    },
    soft_skills: [
        "Problem Solving",
        "Team Working (approccio Agile/Scrum)",
        "Comunicazione Efficace (grazie al background sociologico)",
        "Adattabilità",
        "Gestione dello Stress"
    ],
    work_deep_dive: {
        mashfrog: "Attualmente, presso **Mashfrog Group** (dal 2024), Alessandro ricopre la posizione di **SAP BTP Consultant**. Il suo focus principale è lo sviluppo di applicativi Enterprise sfruttando tecnologie come **SAP UI5**, **SAP Build** e **AppGyver**. Parallelamente, supporta il PMO in attività strategiche quali la gestione delle risorse, la reportistica avanzata e l'analisi dei dati.",
        abstract: "Durante la sua esperienza in **Abstract** (2023-2024), ha operato come consulente per un cliente di rilievo internazionale: **Luxottica**. In questo contesto, ha progettato e sviluppato soluzioni custom per l'ottimizzazione del ciclo passivo (gestione ordini di acquisto), massimizzando le potenzialità della **SAP Business Technology Platform**.",
        indra: "Nel periodo 2020-2023, presso **Indra/Minsait**, ha lavorato a stretto contatto con **Enel Green Power**. Qui ha consolidato le sue competenze su **SAP Fiori**, gestendo processi critici legati al ciclo di vita dei contratti di vendita e i flussi approvativi degli ordini."
    },
    tech_stack: {
        sap: "In ambito **SAP**, Alessandro possiede una competenza verticale e consolidata. È esperto in **SAP Fiori**, **SAP UI5**, **SAP Build Apps (ex AppGyver)** e **SAP BTP**. La sua specializzazione risiede nella creazione di interfacce utente intuitive e scalabili per complessi processi aziendali.",
        frontend: "Sul fronte **Web Development**, domina lo stack moderno: padronanza di **JavaScript (ES6+)** e **TypeScript**, unite a una profonda conoscenza di **HTML5** e **CSS3**. Ha esperienza con framework reattivi come **React** e **Angular**, e utilizza metodologie di sviluppo basate su componenti.",
        tools: "Il suo workflow include l'uso avanzato di **Git** per il version control, **VS Code** e **SAP Business Application Studio** come ambienti di sviluppo primari."
    },
    personal: {
        summary: "Nato il 18 Luglio 1995, Alessandro unisce un background multiculturale e umanistico alle competenze tecniche. Ha frequentato le scuole elementari nelle **Filippine**, un'esperienza formativa significativa. Convive con la sua compagna, Martina, da oltre 13 anni.",
        hobbies: "Nel tempo libero, Alessandro si dedica al **CrossFit** 🏋️‍♂️ per disciplina e fitness. È un viaggiatore appassionato (con recenti esplorazioni in Giappone e Madagascar) e coltiva un interesse per il collezionismo di **carte Pokémon**.",
        juve: "Calcisticamente, è un sostenitore della **Juventus**."
    }
};

// Advanced Phrase Matching
const INTENTS = [
    // GREETINGS & BASICS
    {
        id: 'greeting',
        regex: /^(ciao|salve|buongiorno|buonasera|hey|hi|hello|start|inizio|benvenuto)/i,
        responses: [
            "Salve. Sono l'assistente AI del portfolio di Alessandro Calabrò. Sono programmato per fornirti dettagli sul suo profilo professionale, tecnico e personale. Come posso esserti utile?",
            "Benvenuto. Il mio database su Alessandro Calabrò è a tua disposizione. Puoi chiedermi delle sue esperienze lavorative, delle competenze SAP/Web o delle sue passioni."
        ]
    },
    {
        id: 'identity',
        regex: /(chi sei|chi e alessandro|presentati|parlami di te|profilo|chi è|descrizione|mi dici di lui)/i,
        responses: [
            "Alessandro Calabrò è un professionista IT specializzato come **SAP BTP Consultant** e **Frontend Developer**. Basato a Roma (classe 1995), si distingue per la capacità di unire competenze tecniche avanzate (SAP UI5, React) a una visione processuale e umanistica.",
            "È uno sviluppatore Full Stack focalizzato sull'ecosistema SAP. Attualmente Consultant in Mashfrog Group, Alessandro combina rigorosa logica di sviluppo con creatività nel problem solving."
        ]
    },

    // LANGUAGES (NEW)
    {
        id: 'languages_spoken',
        regex: /(parla inglese|conosce l'inglese|lingue|straniere|inglese|italiano|madrelingua)/i,
        responses: [
            `Alessandro è madrelingua **Italiano** e possiede un livello professionale di **Inglese** (B2+), che utilizza quotidianamente in contesti lavorativi internazionali e per la documentazione tecnica.`,
            "Confermo che Alessandro padroneggia l'Italiano e l'Inglese. L'esperienza nelle Filippine durante l'infanzia ha contribuito alla sua esposizione linguistica precoce."
        ]
    },
    {
        id: 'bot_languages',
        regex: /(tu parli inglese|sai l'inglese|rispondi in inglese|can you speak english|english please)/i,
        responses: [
            "I am currently optimized to process queries in Italian to accurately represent Alessandro's profile, but I can understand English context regarding his resume.",
            "Sebbene la mia interfaccia principale sia in Italiano, posso elaborare richieste in Inglese relative al profilo tecnico di Alessandro."
        ]
    },

    // SOFT SKILLS (NEW)
    {
        id: 'soft_skills',
        regex: /(soft skill|competenze trasversali|carattere|punti di forza|personalità|lavorare in team)/i,
        responses: [
            `Oltre alle hard skills, Alessandro eccelle in: **${DATA.soft_skills.join(", ")}**. La sua laurea in Sociologia gli conferisce un vantaggio unico nella comunicazione e nella gestione delle dinamiche di gruppo.`,
            "Punti di forza: Problem Solving creativo, estrema adattabilità e un'ottima capacità di lavorare in team (Agile). È un professionista che sa gestire lo stress con equilibrio."
        ]
    },

    // WORK & EXPERIENCE
    {
        id: 'work_general',
        regex: /(lavoro|esperienz|carriera|curriculum|cv|cosa fa|dove lavora|impiego|ruolo|lavori|aziende|background)/i,
        responses: [
            "Il percorso professionale di Alessandro dimostra una crescita costante:\n- **Mashfrog Group** (Attuale): SAP BTP Consultant\n- **Abstract**: Consulente per Luxottica\n- **Indra/Minsait**: Consulente per Enel Green Power\n\nDesideri dettagli su un progetto specifico?",
            "Alessandro ha costruito la sua carriera in grandi realtà di consulenza (Mashfrog, Abstract, Indra) lavorando per clienti Enterprise come Luxottica ed Enel. È specializzato nella trasformazione digitale dei processi aziendali."
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
        regex: /(sap|ui5|fiori|btp|cloud|build|appgyver|business technology platform)/i,
        responses: [
            DATA.tech_stack.sap,
            "L'expertise SAP è il suo core business: dalla creazione di interfacce Fiori/UI5 alla logica di backend su BTP. Ha anche forte esperienza nel low-code con SAP Build Apps."
        ]
    },
    {
        id: 'skills_web',
        regex: /(javascript|js|typescript|angular|css|html|react|web|sviluppo|code|codice|stack|tecnologie)/i,
        responses: [
            DATA.tech_stack.frontend,
            "Non solo SAP: Alessandro è un Frontend Developer completo. JavaScript, TypeScript, React e una cura maniacale per il CSS sono parte integrante del suo skillset."
        ]
    },

    // PERSONAL & HOBBIES
    {
        id: 'hobbies',
        regex: /(hobby|passioni|tempo libero|cosa gli piace|interessi|personal|vita|filippine|curiosit)/i,
        responses: [
            "Il profilo personale di Alessandro è ricco di sfaccettature. " + DATA.personal.hobbies,
            DATA.personal.summary + " È una persona curiosa e dinamica."
        ]
    },
    // Keep specialized hobby intents for better matching
    {
        id: 'travel',
        regex: /(viaggi|giappone|madagascar|mondo|vacanze|estero)/i,
        responses: [
            "Viaggiare è essenziale per lui. Le esperienze in **Giappone** e **Madagascar** nel 2024 confermano la sua apertura verso nuove culture e prospettive."
        ]
    },
    {
        id: 'sport',
        regex: /(sport|crossfit|palestra|allenamento|fisico)/i,
        responses: [
            "La disciplina del **CrossFit** è centrale nella sua routine. Crede fermamente che la resistenza fisica supporti la lucidità mentale necessaria per il coding."
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
        regex: /(studio|scuola|universit|laurea|diploma|formazione|istruzione)/i,
        responses: [
            `Formazione: **${DATA.profile.education}**. Questo mix tra studi umanistici (Sociologia) e tecnici crea un profilo capace di comprendere sia il codice che le persone che lo useranno.`
        ]
    },

    // CONTACT
    {
        id: 'contact',
        regex: /(contatt|email|telefono|chiamare|scrivere|linkedin|assumere)/i,
        responses: [
            "Per collaborazioni professionali, ti invito a connetterti su **LinkedIn**. Alessandro è sempre interessato a discutere di progetti innovativi in ambito SAP e Web Development."
        ]
    },

    // FOLLOW UP & GENERIC
    {
        id: 'thanks',
        regex: /(grazie|grande|bravo|ottimo|top|gentile|complimenti|perfetto)/i,
        responses: [
            "Ti ringrazio. È un piacere presentare questo profilo. Se hai altre domande, sono qui.",
            "Grazie a te. Resto a disposizione per esplorare ulteriormente le competenze di Alessandro."
        ]
    },
    {
        id: 'insults',
        regex: /(stupido|scemo|inutile|bot|cattivo|brutto|non capisci)/i,
        responses: [
            "Mi dispiace se non sono stato all'altezza. Sto imparando continuamente. Prova a riformulare la domanda usando parole chiave come 'Esperienza', 'Skill' o 'Progetti'.",
            "Il mio algoritmo mira alla precisione, ma a volte posso fallire l'interpretazione. Come posso aiutarti meglio riguardo al profilo di Alessandro?"
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
    // Smarter context handling
    if (context.lastIntent) {
        if (context.lastIntent === 'languages_spoken' || context.lastIntent === 'bot_languages') {
            return {
                text: "A proposito di competenze, ti interesserebbe conoscere anche le 'Soft Skills' o il 'Tech Stack' di Alessandro?",
                context: {} // Reset context slightly to allow drift
            };
        }
        if (context.lastIntent.startsWith('work')) {
            return {
                text: "Nell'ambito lavorativo, posso dettagliare anche le tecnologie specifiche usate in questi progetti (es. SAP Build, UI5). Ti interessa?",
                context: { lastIntent: 'skills_sap' } // Suggest sap skills
            };
        }
    }

    // 3. Generic Fallbacks (AI Persona - More helpful)
    const fallbacks = [
        "Capisco la tua richiesta, ma per fornirti la risposta più precisa avrei bisogno di un contesto specifico. Ti riferisci alle competenze **SAP**, allo sviluppo **Web** o alle esperienze lavorative?",
        "Interessante punto. Sebbene il mio database sia vasto, potrei non aver colto la sfumatura. Potresti chiedermi: 'Che lingue parla?', 'Dove ha lavorato?' o 'Quali sono i suoi hobby?'.",
        "Analizzando l'input... Sembra una domanda complessa. Posso reindirizzarti verso le aree di mia competenza: **Esperienze Professionali**, **Formazione** o **Competenze Tecniche**."
    ];

    return {
        text: pick(fallbacks),
        context: context
    };
};
