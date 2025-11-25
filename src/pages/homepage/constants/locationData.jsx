import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import { useMap } from "react-leaflet";

export const REGION_DATA = [
  // ... (Il tuo array di regioni rimane qui)
  { name: "Lombardia", lat: 45.4642, lng: 9.19 },
  { name: "Piemonte", lat: 45.0703, lng: 7.6869 },
  { name: "Veneto", lat: 45.4408, lng: 12.3155 },
  { name: "Trentino", lat: 46.0689, lng: 11.1218 },
  { name: "Friuli", lat: 45.6495, lng: 13.7768 },
  { name: "Emilia Romagna", lat: 44.4949, lng: 11.3426 },
  { name: "Toscana", lat: 43.7696, lng: 11.2558 },
  { name: "Liguria", lat: 44.4056, lng: 8.9463 },
];

export const CENTER_COORDS = [44.5, 11.0];
export const INITIAL_ZOOM = 6.5;

export const standardIcon = L.icon({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
  iconSize: [25, 41], 
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// 3. Icona Evidenziata (GIALLA) - Cambiamo solo l'URL dell'icona
export const highlightIcon = L.icon({
  // SVG con colore Giallo/Arancione #F39C12
  // Ho semplificato leggermente l'SVG per evitare potenziali bug di parsing al click.
  iconUrl:
    'data:image/svg+xml;utf8,<svg width="25" height="41" viewBox="0 0 25 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 0C5.6 0 0 5.6 0 12.5C0 23.75 12.5 41 12.5 41C12.5 41 25 23.75 25 12.5C25 5.6 19.4 0 12.5 0Z" fill="#F39C12"/><circle cx="12.5" cy="12.5" r="5.5" fill="white"/></svg>',
  shadowUrl: shadowUrl, 
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export const MapMover = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};