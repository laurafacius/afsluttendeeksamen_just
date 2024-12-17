const buketter = [
  {
    slug: "lys-luftig-buket-hoej",
    title: "Lys Luftig Buket (Høj)",
    description: "En elegant og let buket i lyse farver, der skaber et luftigt og indbydende udtryk.",
    longDescription: "En elegant og let buket i smukke lyse farver, der bringer et luftigt og indbydende udtryk til ethvert rum. Blomsterne udvælges nøje af vores dygtige florist og afhænger af udvalget i butikken på dagen, hvilket gør hver buket unik. Perfekt til dig, der ønsker et enkelt og stilrent look, men stadig en frisk og levende buket, der passer til både hjemmet og særlige anledninger.",
    price: "349",
    image: "/lysluftigbuket.webp",
  },
  {
    slug: "stor-farverig-buket-hoej",
    title: "Stor Farverig Buket (Høj)",
    description: "En imponerende høj buket fyldt med farverige blomster, der lyser rummet op.",
    longDescription: "Farverig og fyldig, denne buket skaber et livligt indtryk i ethvert rum.",
    price: "499",
    image: "/storfarverigbuket.webp",
  },
  {
    slug: "stor-farverig-buket-lav",
    title: "Stor Farverig Buket (Lav)",
    description: "En lav og bred buket med masser af farver, perfekt som blikfang på bordet.",
    longDescription: "Denne lavere buket kombinerer bredde og farver på en harmonisk måde.",
    price: "399",
    image: "/lavfarverigbuket.webp",
  },
];

export function getBuketData(slug) {
  return buketter.find((buket) => buket.slug === slug);
}

export function getAllBuketterSlugs() {
  return buketter.map((buket) => buket.slug);
}
