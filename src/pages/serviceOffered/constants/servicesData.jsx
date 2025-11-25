import {
    FaClipboardList,
    FaFileAlt,
    FaShieldAlt,
    FaUsersCog,
    FaCity,
    FaTools,
} from "react-icons/fa";

export const SERVICES_DATA = [
    {
        icon: FaClipboardList,
        title: "URBANISTICA",
        delay: 0,
        grid: 3,
        items: [
            `Sviluppo di <strong>piani attuativi</strong> in genere.`,
            `Redazione di piani di <strong>recupero</strong>.`,
            `Progettazione di piani di <strong>lottizzazione</strong>.`,
        ],
    },
    {
        icon: FaFileAlt,
        title: "RILIEVO",
        delay: 100,
        grid: 3,
        items: [
            `Rilievo <strong>topografico</strong> e <strong>riconfinamenti</strong>.`,
            `Rilievo con strumentazione <strong>laser scanner</strong>.`,
            `Rilievo <strong>fotografico e panoramico</strong> con uso drone.`,
        ],
    },
    {
        icon: FaShieldAlt,
        title: "PROGETTAZIONE",
        delay: 200,
        grid: 3,
        items: [
            `Richieste di <strong>accesso atti</strong>.`,
            `Progettazione nuove costruzioni e <strong>ristrutturazioni</strong>.`,
            `Progettazione per clientela <strong>privata e pubblica</strong>.`,
        ],
    },
    {
        icon: FaCity,
        title: "DIREZIONE LAVORI",
        delay: 300,
        grid: 2,
        items: [
            `<strong>Direzione lavori</strong> in cantiere.`,
            `<strong>Direzione tecnica</strong> di cantiere.`,
            `Coordinamento della <strong>sicurezza</strong>.`,
        ],
    },
    {
        icon: FaTools,
        title: "CATASTO",
        delay: 400,
        grid: 2,
        items: [
            `<strong>Rilievo topografico</strong> e indagini catastali.`,
            `Sviluppo e redazione tipi <strong>mappali-frazionamento</strong>.`,
            `Sviluppo e redazione <strong>accatastamenti</strong> e variazioni.`,
        ],
    },
    {
        icon: FaUsersCog,
        title: "CONSULENZA TECNICA",
        delay: 500,
        grid: 1, 
        items: [
            `Consulenza <strong>tecnica ed estimativa</strong> (es. stime immobiliari).`,
            `Assistenza per <strong>compravendite</strong> e divisioni ereditarie.`,
            `Redazione di <strong>Perizie di Parte (CTP)</strong>.`,
        ],
    },
];