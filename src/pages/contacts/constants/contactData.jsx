import { FaPhone, FaEnvelope, FaClock, FaCalendarCheck } from "react-icons/fa";

export const ALL_CONTACT_DATA = [
    {
      id: 1,
      icon: FaPhone,
      title: "Contatti Telefonici",
      content: [
        { text: "Landini:", link: "tel:3392045651", number: "339 2045651" },
        { text: "Maduzzi:", link: "tel:3316816164", number: "331 6816164" },
      ],
    },

    {
      id: 2,
      icon: FaEnvelope,
      title: "Email Ufficiali",
      content: [
        {
          text: "cristian.aurora@email.it",
          link: "mailto:cristian.aurora@email.it",
        },
        {
          text: "alessandro.aurora@email.it",
          link: "mailto:alessandro.aurora@email.it",
        },
      ],
    },

    {
      id: 3,
      icon: FaClock,
      title: "Orari di Apertura",
  
      content: [
        "Lun-Ven: <strong>8:30 - 12:30</strong>",
        "Lun-Ven: <strong>14:00 - 18:30</strong>",
      ],
    },

    {
      id: 4, 
      icon: FaCalendarCheck,
      title: "Modalità Appuntamento",
      content: [
        "Richiesta di appuntamento tramite <strong>contatto diretto telefonico</strong> o <strong>via mail</strong>.",
      ],
    },
];

export const CONTACT_CARDS = ALL_CONTACT_DATA.slice(0, 2); 
export const SCHEDULE_DATA = ALL_CONTACT_DATA.slice(2);

export const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.350495818987!2d10.79693157640924!3d45.03478816824908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fb6574f26040d%3A0xc33e5c9a1744b744!2sVia%20Giuseppe%20Di%20Vittorio%2C%2027%2C%2046031%20Bagnolo%20San%20Vito%20MN!5e0!3m2!1sit!2sit!4v1704386278858!5m2!1sit!2sit";