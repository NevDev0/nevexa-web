// B2C PAGE CONTENT — VERSION FRANÇAISE
// Ton : Confiance, clarté, premium. Francophone naturel.

// Section 1 — Hero
export const b2cHeroCopy = {
    title: "Historique Vérifié. Transparence Totale.",
    badge: "Modèles 2021+ uniquement",
    ctaPrimary: "Explorer le catalogue",
    ctaSecondary: "Parler à un conseiller",
    impactText: "Concessionnaires officiels uniquement. Zéro enchères. Zéro doute.",
    disclaimer: "*Cadillac Escalade ESV 2026, V8*",
  };
  
  // Section 2 — Brand Model Gallery
  export const brandModelGallery = {
    title: "INSPIRATIONS & TENDANCES",
    badge: "SOURCING SUR MESURE",
    disclaimer: "Ces véhicules sont présentés à titre d'exemple pour illustrer nos standards de qualité. Nous sourçons n'importe quelle marque ou modèle selon vos critères exacts.",
    customSourcingCta: {
      text: "Vous cherchez un autre modèle ou une autre marque ?",
      buttonLabel: "Lancer une recherche personnalisée",
    },
    brands: [
      { id: "land-rover", name: "Land Rover" },
      { id: "bmw", name: "BMW" },
      { id: "mercedes", name: "Mercedes-Benz" },
      { id: "lexus", name: "Lexus" },
      { id: "toyota", name: "Toyota" },
    ],
    models: {
      "land-rover": [
        {
          id: "autobiography",
          name: "Range Rover Autobiography",
          displayName: "Range Rover",
          subtitle: "Autobiography",
          fullName: "Range Rover Autobiography P530",
          year: "2024",
          price: "À partir de 120 000 $ USD",
          category: "Luxe",
          horsepower: "523 HP",
          engineType: "V8 Biturbo",
          exteriorCount: 4,
          interiorCount: 3,
          description: "Le summum du SUV de luxe",
        },
        {
          id: "defender-110",
          name: "Defender 110",
          displayName: "Defender",
          subtitle: "110",
          fullName: "Land Rover Defender 110",
          year: "2024",
          price: "À partir de 90 000 $ USD",
          category: "Tout-terrain",
          horsepower: "395 HP",
          engineType: "I6 Mild Hybrid",
          exteriorCount: 3,
          interiorCount: 3,
          description: "Capacité légendaire, confort moderne",
        },
        {
          id: "sport-p530",
          name: "Range Rover Sport",
          displayName: "Sport",
          subtitle: "P530",
          fullName: "Range Rover Sport P530",
          year: "2024",
          price: "À partir de 110 000 $ USD",
          category: "Performance",
          horsepower: "523 HP",
          engineType: "V8 Biturbo",
          exteriorCount: 4,
          interiorCount: 4,
          description: "Performance dynamique, élégance raffinée",
        },
      ],
      bmw: [
        {
          id: "i7-m70",
          name: "i7 M70",
          displayName: "i7 M70",
          subtitle: "xDrive",
          fullName: "BMW i7 M70 xDrive",
          year: "2024",
          price: "À partir de 150 000 $ USD",
          category: "Électrique",
          horsepower: "650 HP",
          engineType: "Double moteur électrique",
          exteriorCount: 4,
          interiorCount: 5,
          description: "Luxe électrique, puissance M",
          exceptions: {

          },
        },
        {
          id: "x6-m",
          name: "X6 M",
          displayName: "X6 M",
          subtitle: "Competition",
          fullName: "BMW X6 M Competition",
          year: "2024",
          price: "À partir de 120 000 $ USD",
          category: "Performance",
          horsepower: "617 HP",
          engineType: "V8 Biturbo",
          exteriorCount: 4,
          interiorCount: 4,
          description: "Le coupé Sport Activity à puissance M",
        },
        {
          id: "i5-edrive40",
          name: "i5 xDrive40",
          displayName: "i5",
          subtitle: "xDrive40",
          fullName: "BMW i5 xDrive40",
          year: "2024",
          price: "À partir de 65 000 $ USD",
          category: "Électrique",
          horsepower: "295 HP",
          engineType: "Moteur électrique",
          exteriorCount: 4,
          interiorCount: 3,
          description: "La berline executive électrique réinventée",
        },
      ],
      mercedes: [
        {
          id: "gle-53",
          name: "GLE 53 Coupé AMG",
          displayName: "GLE 53",
          subtitle: "AMG",
          fullName: "Mercedes-AMG GLE 53 Coupé 4MATIC+",
          year: "2024",
          price: "À partir de 90 000 $ USD",
          category: "Performance",
          horsepower: "429 Hp",
          engineType: "I6 Turbo + EQ Boost",
          exteriorCount: 3,
          interiorCount: 3,
          description: "SUV de performance signé AMG",
        },
        {
          id: "glc-300",
          name: "GLC 300",
          displayName: "GLC",
          subtitle: "300",
          fullName: "Mercedes-Benz GLC 300 4MATIC",
          year: "2024",
          price: "À partir de 45 000 $ USD",
          category: "Luxe",
          horsepower: "255 HP",
          engineType: "I4 Turbo",
          exteriorCount: 3,
          interiorCount: 3,
          description: "Luxe compact, polyvalence raffinée",
        },
        {
          id: "gls-580",
          name: "GLS 580",
          displayName: "GLS",
          subtitle: "580",
          fullName: "Mercedes-Benz GLS 580 4MATIC",
          year: "2024",
          price: "À partir de 140 000 $ USD",
          category: "Prestige",
          horsepower: "510 HP",
          engineType: "V8 Biturbo",
          exteriorCount: 4,
          interiorCount: 4,
          description: "La Classe S des SUV",
        },
      ],
      lexus: [
        {
          id: "lx-600",
          name: "LX 600",
          displayName: "LX",
          subtitle: "600",
          fullName: "Lexus LX 600",
          year: "2024",
          price: "À partir de 120 000 $ USD",
          category: "Prestige",
          horsepower: "409 HP",
          engineType: "V6 Biturbo",
          exteriorCount: 4,
          interiorCount: 5,
          description: "Luxe prestige, fiabilité légendaire",
        },
        {
          id: "gx-550",
          name: "GX 550",
          displayName: "GX",
          subtitle: "550",
          fullName: "Lexus GX 550 Overtrail",
          year: "2024",
          price: "À partir de 90 000 $ USD",
          category: "Tout-terrain",
          horsepower: "349 HP",
          engineType: "V6 Biturbo",
          exteriorCount: 4,
          interiorCount: 4,
          description: "Capacité tout-terrain, finition luxe",
        },
        {
          id: "rx-500h",
          name: "RX 500h",
          displayName: "RX",
          subtitle: "500h",
          fullName: "Lexus RX 500h F SPORT Performance",
          year: "2024",
          price: "À partir de 60 000 $ USD",
          category: "Hybride",
          horsepower: "366 HP",
          engineType: "I4 Turbo Hybride",
          exteriorCount: 4,
          interiorCount: 4,
          description: "Performance hybride, élégance sportive",
        },
      ],
      toyota: [
        {
          id: "land-cruiser",
          name: "Land Cruiser",
          displayName: "Land Cruiser",
          subtitle: "250 Series",
          fullName: "Toyota Land Cruiser 250 Series",
          year: "2025",
          price: "À partir de 75 000 $ USD",
          category: "Tout-Terrain",
          horsepower: "326 HP",
          engineType: "V6 Biturbo Hybride",
          exteriorCount: 4,
          interiorCount: 5,
          description: "Durabilité légendaire rencontre le luxe moderne",
        },
        {
          id: "grand-highlander",
          name: "Grand Highlander",
          displayName: "Grand Highlander",
          subtitle: "XLE",
          fullName: "Toyota Grand Highlander XLE AWD",
          year: "2024",
          price: "À partir de 45 000 $ USD",
          category: "SUV Familial",
          horsepower: "245 HP",
          engineType: "I4 Hybride",
          exteriorCount: 4,
          interiorCount: 4,
          description: "SUV familial premium aux performances hybrides",
        },
        {
          id: "camry",
          name: "Camry XSE",
          displayName: "Camry",
          subtitle: "XSE",
          fullName: "Toyota Camry XSE Hybrid AWD",
          year: "2025",
          price: "À partir de 40 000 $ USD",
          category: "Berline",
          horsepower: "225 HP",
          engineType: "I4 Hybride",
          exteriorCount: 3,
          interiorCount: 5,
          description: "Élégance moderne et efficacité hybride",
        },
      ],
    },
  };
  
  // Helper functions — identiques, pas de traduction nécessaire
  export function getModelGallery(
    brandId: string,
    modelId: string,
    exteriorCount: number,
    interiorCount: number,
    defaultExt: string = "webp",
    exceptions: Record<string, string> = {}
  ): string[] {
    const gallery: string[] = [];
    for (let i = 1; i <= exteriorCount; i++) {
      const key = `exte-${i}`;
      const ext = exceptions[key] || defaultExt;
      gallery.push(`/catalog/${brandId}/${modelId}/${key}.${ext}`);
    }
    for (let i = 1; i <= interiorCount; i++) {
      const key = `inte-${i}`;
      const ext = exceptions[key] || defaultExt;
      gallery.push(`/catalog/${brandId}/${modelId}/${key}.${ext}`);
    }
    return gallery;
  }
  
  export function getModelThumbnail(
    brandId: string,
    modelId: string,
    defaultExt: string = "webp",
    exceptions: Record<string, string> = {}
  ): string {
    const ext = exceptions["exte-1"] || defaultExt;
    return `/catalog/${brandId}/${modelId}/exte-1.${ext}`;
  }
  
  export function hasPhotos(exteriorCount: number, interiorCount: number): boolean {
    return exteriorCount > 0 || interiorCount > 0;
  }
  
  // Section 3 — Import Advantage
  export const importAdvantageCopy = {
    title: "NEVEXA EN CHIFFRES",
    stats: [
      {
        id: "model-year",
        number: 2021,
        numberFrom: 2000,
        suffix: "+",
        label: "Millésime minimum",
        sublabel: "Pas de vieux stock.\nChaque véhicule est récent.",
        barWidth: "85%",
      },
      {
        id: "dealerships",
        number: 100,
        numberFrom: 0,
        suffix: "%",
        label: "Concessionnaires officiels",
        sublabel: "Zéro enchères.\nSources vérifiées uniquement.",
        barWidth: "100%",
      },
      {
        id: "delivery",
        number: 6,
        numberFrom: 0,
        suffix: "–8 sem.",
        label: "Délai moyen de livraison",
        sublabel: "Du concessionnaire canadien\njusqu'à votre port.",
        barWidth: "60%",
      },
      {
        id: "fees",
        number: 0,
        numberFrom: 0,
        prefix: "$",
        suffix: "",
        label: "Frais cachés",
        sublabel: "Transparence totale.\nAucune mauvaise surprise à la livraison.",
        barWidth: "0%",
      },
    ],
    badge: "Sourcing à la demande",
    disclaimer: "Les délais de livraison\nvarient selon la destination",
  };
  
  // Section 4 — What Others Won't Tell You
  export const b2cWhatOthersWontTellYou = {
    title: "Ce que les autres ne vous diront pas",
    subtitle: "Votre sécurité n'est pas une option. Votre investissement non plus.",
    dossierItems: [
      {
        num: "01",
        title: "Les Épaves Maquillées — Un Danger Réel",
        problem:
          "Beaucoup d'importateurs achètent des véhicules accidentés ou inondés dans des enchères nord-américaines. Quelques retouches cosmétiques plus tard, ils les revendent comme 'propres'. En cas de collision, un châssis fragilisé ne protège plus vos proches.",
        solution:
          "Nous nous approvisionnons exclusivement chez des concessionnaires officiels canadiens. Zéro enchères. Chaque véhicule a un historique vierge et vérifié. On ne transige jamais avec la sécurité de votre famille.",
      },
      {
        num: "02",
        title: "La Fraude au Kilométrage",
        problem:
          "La manipulation du compteur kilométrique est monnaie courante. Le vendeur remet les compteurs à zéro pour gonfler le prix. Résultat : vous payez pour un véhicule présenté comme récent, et vous vous retrouvez avec des réparations imprévues quelques mois plus tard.",
        solution:
          "Chaque véhicule Nevexa est livré avec un rapport CARFAX certifié dès le départ. Kilométrage vérifié, historique d'entretien complet. Si un seul point rouge apparaît, on ne sourcé pas le véhicule. C'est non négociable.",
      },
      {
        num: "03",
        title: "L'Extorsion au Port (Frais Cachés)",
        problem:
          "La technique classique : un prix bas pour vous appâter, puis le vendeur retient vos documents d'exportation contre des frais de 'dernière minute'. Sans documents, vous ne pouvez pas sortir le véhicule.",
        solution:
          "Notre prix rendu port (CIF) est définitif et écrit noir sur blanc. Aucun frais caché de notre part. Vous recevez vos documents originaux (Bill of Lading) par DHL avant l'arrivée du navire. Votre transitaire a les mains libres.",
      },
      {
        num: "04",
        title: "Le Broker Qui Disparaît",
        problem:
          "Vous virez l'argent pour votre véhicule de rêve, et du jour au lendemain, plus personne ne répond. Des semaines d'angoisse à ne pas savoir si votre argent est perdu et si le véhicule va arriver.",
        solution:
          "Un conseiller dédié, des photos régulières de votre véhicule, et un suivi en temps réel de votre expédition maritime. Votre investissement mérite un respect total — c'est ce qu'on vous garantit.",
      },
    ],
  };
  
  // Section 5 — FAQ
  export const faqCopy = {
    title: "Vos Questions",
    questions: [
      {
        id: 1,
        question: "Puis-je demander un modèle qui n'est pas dans le catalogue ?",
        answer:
          "Oui. Le catalogue présente des configurations indicatives, mais nous pouvons sourcer n'importe quel modèle 2021-2026 auprès de concessionnaires canadiens officiels. Contactez-nous avec vos critères et nous vous fournirons un devis personnalisé sous 48 heures.",
      },
      {
        id: 2,
        question: "Comment savoir si le véhicule est en bon état ?",
        answer:
          "Chaque véhicule est soumis à une inspection pré-expédition complète par des techniciens certifiés. Vous recevez un rapport d'inspection détaillé avec photos. Si le véhicule ne répond pas à nos critères, on ne l'expédie pas.",
      },
      {
        id: 3,
        question: "Livrez-vous dans mon pays ?",
        answer:
          "Nous sommes spécialisés sur l'Afrique de l'Ouest (Nigeria, Côte d'Ivoire, Sénégal, Bénin, Togo, Ghana), mais notre logistique nous permet d'exporter partout dans le monde. Contactez-nous pour une destination hors zone.",
      },
      {
        id: 4,
        question: "Quel est le vrai délai de livraison ?",
        answer:
          "En général, comptez 6 à 8 semaines entre la confirmation de commande et l'arrivée au port. Cela inclut le sourcing, l'inspection, la documentation export et le fret maritime. Pour l'option Clé en Main (là où disponible), ajoutez 1 à 2 semaines pour le dédouanement.",
      },
      {
        id: 5,
        question: "Pourquoi importer plutôt qu'acheter localement ?",
        answer:
          "Importer depuis le Canada vous donne accès à des modèles récents 2021-2026 avec historique vérifié et des tarifs compétitifs. Les marchés locaux proposent souvent un stock limité de véhicules récents, avec des prix majorés — surtout sur les véhicules premium.",
      },
    ],
  };
  
  // Section 6 — Referral
  export const referralCopy = {
    title: "Satisfait de Nevexa ?",
    description:
      "Recommandez-nous à un proche à la recherche d'un véhicule premium. S'il finalise un achat, vous recevez jusqu'à 1 000 USD.",
    submitButton: "Soumettre une recommandation",
    successMessage: "Recommandation reçue. Nous prendrons contact si la personne est intéressée.",
  };