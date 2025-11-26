import imgPlaceholder from "../../../immagini/logo.jpg";

import img1Unifamiliare from "../../../immagini/DJI_0974.jpeg";
import img2Unifamiliare from "../../../immagini/DJI_0975.jpeg";
import img3Unifamiliare from "../../../immagini/DJI_0976.jpeg";
import img4Unifamiliare from "../../../immagini/DJI_0977.jpeg";
import img5Unifamiliare from "../../../immagini/DJI_0978.jpeg";
import img6Unifamiliare from "../../../immagini/DJI_0979.jpeg";
import img7Unifamiliare from "../../../immagini/DJI_0980.jpeg";
import img8Unifamiliare from "../../../immagini/DJI_0981.jpeg";

// Trasformazione di un fienile in abitazione moderna
import img1Fienile from "../../../immagini/20210329_161257.jpg";
import img2Fienile from "../../../immagini/20220225_151903.jpg";
import img3Fienile from "../../../immagini/DJI_0454.JPG";
import img4Fienile from "../../../immagini/DJI_0457.JPG";

// Trasformazione di un ex mulino in residenza
import img1Mulino from "../../../immagini/DJI_0141Crop.JPG";
import img2Mulino from "../../../immagini/DJI_0230.JPG";
import img3Mulino from "../../../immagini/DJI_0483.JPG";
import img4Mulino from "../../../immagini/DJI_0610.JPG";

// Abitazione unifamiliare di nuova realizzazione
import img1Abitazione from "../../../immagini/IMG_6482.JPG";
import img2Abitazione from "../../../immagini/IMG_6486.JPG";
import img3Abitazione from "../../../immagini/IMG_6635.JPG";

// Stazione di ricarica (La prima in Italia) per camion elettrici “Milence”
import img1ParcoRicarica from "../../../immagini/DJI_0612.jpeg";
import img2ParcoRicarica from "../../../immagini/DJI_0613.jpeg";
import img3ParcoRicarica from "../../../immagini/DJI_0614.jpeg";
import img4ParcoRicarica from "../../../immagini/DJI_0615.jpeg";
import img5ParcoRicarica from "../../../immagini/DJI_0616.jpeg";
import img6ParcoRicarica from "../../../immagini/DJI_0617.jpeg";
import img7ParcoRicarica from "../../../immagini/DJI_0618.jpeg";
import img8ParcoRicarica from "../../../immagini/DJI_0619.jpeg";
import img9ParcoRicarica from "../../../immagini/DJI_0620.jpeg";
import img10ParcoRicarica from "../../../immagini/DJI_0621.jpeg";
import img11ParcoRicarica from "../../../immagini/DJI_0622.jpeg";
import img12ParcoRicarica from "../../../immagini/DJI_0623.jpeg";
import img13ParcoRicarica from "../../../immagini/DJI_0624.jpeg";
import img14ParcoRicarica from "../../../immagini/DJI_0625.jpeg";
import img15ParcoRicarica from "../../../immagini/DJI_0626.jpeg";
import img16ParcoRicarica from "../../../immagini/DJI_0627.jpeg";

// Parco di ricarica auto elettriche Smatrics EnBW
import img1Smatrics from "../../../immagini/DJI_0010.JPG";
import img2Smatrics from "../../../immagini/DJI_0993.JPG";
import img3Smatrics from "../../../immagini/DJI_0003.JPG";

// Sala diagnostica TAC – Centro di Cura Cardinal Ferrari Fontanellato
import img1Diagnostica from "../../../immagini/IMG-20251009-WA0064.jpg";
import img2Diagnostica from "../../../immagini/IMG-20251009-WA0065.jpg";
import img3Diagnostica from "../../../immagini/IMG-20251009-WA0066.jpg";
import img4Diagnostica from "../../../immagini/IMG-20251009-WA0067.jpg";

/* import videoAvis from "../../../video/DJI_0753.MP4"; */
export const CATEGORIE_PROGETTI = [
  "Tutti",
  "Residenziale",
  "Ristrutturazione",
  "Industriale/Servizi",
  "Sanitario",
];

export const PROJECTS_DATA = [
  {
    id: 1,
    titolo: "Trasformazione di un fienile in abitazione moderna",
    categoria: "Ristrutturazione",
    sottocategoria: "Residenziale",
    descrizione:
      "Un antico fienile è stato trasformato in una residenza moderna, mantenendo il fascino originario della struttura. L’intervento unisce autenticità e comfort contemporaneo, creando spazi luminosi e accoglienti immersi nel paesaggio.",
    anno: 2022,
    localita: "Comune di Curtatone (MN)",
    immagini: [img4Fienile, img3Fienile, img1Fienile, img2Fienile],
    hasImages: true,
  },
  {
    id: 2,
    titolo: "Trasformazione di un ex mulino in residenza",
    categoria: "Ristrutturazione",
    sottocategoria: "Residenziale",
    descrizione:
      "Un vecchio mulino è stato riconvertito in una residenza composta da tre appartamenti, preservando il carattere storico dell’edificio e integrando soluzioni architettoniche moderne. L’intervento valorizza la memoria del luogo, unendo tradizione, comfort e sostenibilità abitativa.",
    anno: 2024,
    localita: "Comune di Bagnolo San Vito (MN)",
    immagini: [img1Mulino, img2Mulino, img3Mulino, img4Mulino],
    hasImages: true,
  },
  {
    id: 3,
    titolo: "Abitazione unifamiliare di nuova realizzazione",
    categoria: "Residenziale",
    sottocategoria: "Nuova Costruzione",
    descrizione:
      "Progetto di una casa unifamiliare dal design contemporaneo, caratterizzata da volumi essenziali e finiture materiche che valorizzano l’equilibrio tra eleganza e funzionalità. L’uso di tonalità neutre e rivestimenti in pietra naturale dona armonia e raffinatezza, mentre gli spazi interni sono progettati per garantire comfort, luminosità e benessere abitativo.",
    anno: 2025,
    localita: "Comune di Bagnolo San Vito (MN)",
    immagini: [img3Abitazione, img1Abitazione, img2Abitazione],
    hasImages: true,
  },
  {
    id: 4,
    titolo:
      "Stazione di ricarica (La prima in Italia) per camion elettrici “Milence”",
    categoria: "Industriale/Servizi",
    sottocategoria: "Trasporti/Produttivo",
    descrizione:
      "Il progetto prevede 16 postazioni di sosta e ricarica, coperte da strutture in legno lamellare e dotate di impianti tecnologici avanzati per garantire efficienza, sicurezza e sostenibilità. L’intervento include inoltre aree di servizio, spazi tecnici e locali di controllo per una gestione completa e funzionale dell’infrastruttura.",
    anno: 2024,
    localita: "Comune di Bagnolo San Vito (MN)",
    immagini: [
      img1ParcoRicarica,
      img2ParcoRicarica,
      img3ParcoRicarica,
      img4ParcoRicarica,
      img5ParcoRicarica,
      img6ParcoRicarica,
      img7ParcoRicarica,
      img8ParcoRicarica,
      img9ParcoRicarica,
      img10ParcoRicarica,
      img11ParcoRicarica,
      img12ParcoRicarica,
      img13ParcoRicarica,
      img14ParcoRicarica,
      img15ParcoRicarica,
      img16ParcoRicarica,
    ],
    hasImages: true,
  },
  {
    id: 5,
    titolo:
      "Ampliamento e riqualificazione sede associativa AVIS provinciale Mantova ONLUS (Avispark)",
    categoria: "Sanitario",
    sottocategoria: "Associazioni",
    descrizione:
      "Il nuovo ampliamento di Avispark ospita le macchine per la donazione del plasma, offrendo spazi moderni e funzionali pensati per innovazione, ricerca e sviluppo tecnologico. Un ambiente rinnovato che unisce tecnologia all’avanguardia e comfort per supportare al meglio le attività della donazione del sangue.",
    anno: 2020,
    localita: "Comune di Borgo Virgilio (MN)",
    immagini: [],
    hasImages: false,
    /* videoUrl: videoAvis, */
  },
  {
    id: 6,
    titolo: "Parco di ricarica auto elettriche Smatrics EnBW",
    categoria: "Industriale/Servizi",
    sottocategoria: "Trasporti/Produttivo",
    descrizione:
      "Il progetto prevede 16 postazioni di sosta e ricarica, coperte da strutture in legno lamellare e dotate di impianti tecnologici avanzati per garantire efficienza, sicurezza e sostenibilità. L’intervento include inoltre aree di servizio, spazi tecnici e locali di controllo per una gestione completa e funzionale dell’infrastruttura.",
    anno: 2025,
    localita: "Comune di Gruaro (VE)",
    immagini: [img1Smatrics, img2Smatrics, img3Smatrics],
    hasImages: true,
  },
  {
    id: 7,
    titolo:
      "Sala diagnostica TAC – Centro di Cura Cardinal Ferrari Fontanellato",
    categoria: "Sanitario",
    sottocategoria: "Diagnostica",
    descrizione:
      "Il progetto prevede la realizzazione di una nuova sala diagnostica TAC al piano seminterrato, completa di sala di controllo, refertazione e spogliatoi per i pazienti. Sono inoltre stati creati un ambulatorio medico e nuovi spazi suddivisi internamente, tutti dotati di schermature anti-RX e conformi alle normative antincendio.",
    anno: 2025,
    localita: "Comune di Fontanellato (PR)",
    immagini: [
      img1Diagnostica,
      img2Diagnostica,
      img3Diagnostica,
      img4Diagnostica,
    ],
    hasImages: true,
  },
];
export const IMG_PLACEHOLDER = imgPlaceholder;
