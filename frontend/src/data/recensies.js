// src/data/recencies.js
const recensies = [
  {
    id: 1,
    naam: 'Maher',
    beoordeling: 5,
    tekst: 'Heerlijk!',
  },
  {
    id: 2,
    naam: 'Mathias',
    beoordeling: 5,
    tekst: 'Altijd rijkelijk belegde pizza’s. Levering op tijd en vriendelijk bezorgd. Top!!',
  },
  {
    id: 3,
    naam: 'peer',
    beoordeling: 4,
    tekst: 'Heerlijk!',
  },
  {
    id: 4,
    naam: 'appel',
    beoordeling: 5,
    tekst: 'Zeer lekkere pizza en vriendelijke baas.',
  },
  {
    id: 5,
    naam: 'jan jansens',
    beoordeling: 2,
    tekst: 'niet voor herhaling vatbaar',
  },
  // Voeg meer recensies toe zoals nodig
];

const ratingCounts = {
  5: recensies.filter((r) => r.beoordeling === 5).length,
  4: recensies.filter((r) => r.beoordeling === 4).length,
  3: recensies.filter((r) => r.beoordeling === 3).length,
  2: recensies.filter((r) => r.beoordeling === 2).length,
  1: recensies.filter((r) => r.beoordeling === 1).length,
};

export { recensies, ratingCounts };
