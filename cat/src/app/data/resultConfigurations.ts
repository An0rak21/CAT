export type ResultData = {
    title: string;
    verification: string[];
    endoscope: string[];
    tracabilite: string[];
    destinataires: string[];
  }
  
  export const resultConfigurations: { [key: string]: ResultData } = {
    'semi_critique_rm': {
      title: "Retour de maintenance pour colonisation/canal bouché – Endoscope Semi-critique",
      verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
      endoscope: [
        "Réaliser 2 cycles sporicides en paillasse (écouvillonnage ++)",
        "Programmer un prélèvement de contrôle avec le laboratoire",
        "Séquestrer l'endoscope en l'attente des résultats"
      ],
      tracabilite: [
        "Classeur de vie : archiver le rapport & archiver ce mail",
        "Classeur recensement activité : noter le retour",
        "Classeur de séquestre : archiver ce mail"
      ],
      destinataires: ["UGDRE, Bactériologie"]
    },
    'non_sterilisable_rm': {
      title: "Retour de maintenance pour colonisationn/canal bouché – Endoscope critique non stérilisable",
      verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
      endoscope: [
        "Réaliser 2 cycles sporicides en paillasse (écouvillonnage ++)",
        "Programmer un prélèvement de contrôle avec le laboratoire",
        "Séquestrer l'endoscope en l'attente des résultats"
      ],
      tracabilite: [
        "Classeur de vie : archiver le rapport, archiver ce mail",
        "Classeur recensement activité : noter le retour",
        "Classeur de séquestre : archiver ce mail"
      ],
      destinataires: ["UGDRE, Bactériologie"]
    },
    'sterilisable_sbt': {
        title: "Retour de maintenance pour colonisationn/canal bouché ou non – Endoscope critique stérilisable",
        verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
        endoscope: [
          "Réaliser 2 cycles SBT (double nettoyage) en paillasse (écouvillonnage ++)",
          "Envoyer l'endoscope à l'USCPP pour stérilisation",
          "remettre l'appareil en circuit patient sous condition du respect des protocoles en vigueur"
        ],
        tracabilite: [
          "Classeur de vie : archiver ce mail",
          "Classeur recensement activité : noter le retour",
          "Classeur de séquestre : archiver ce mail"
        ],
        destinataires: ["UGDRE, USCPP"]
      },
    'semi_critique_canal': {
    title: "Retour de maintenance (hors colonisation/canal bouché) – Endoscope Semi-critique",
    verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
    endoscope: [
        "Réaliser 2 cycles complet en LDE (phase d'écouvillonnage en paillasse ++)",
        "Remettre l'appareil en circuit patient sous condition du respect des protocoles en vigueur", 
    ],
    tracabilite: [
        "Classeur de vie : archiver le rapport & archiver ce mail",
        "Classeur recensement activité : noter le retour",
        "Classeur de séquestre : archiver ce mail"
    ],
    destinataires: ["UGDRE"]
    },
    'non_sterilisable': {
      title: "Retour de maintenance (hors colonisationn/canal bouché) – Endoscope critique non stérilisable",
      verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
      endoscope: [
        "Réaliser 2 cycles complets sporicides en paillasse (écouvillonnage ++)",
        "Remettre l'appareil en circuit patient sous condition du respect des protocoles en vigueur",
      ],
      tracabilite: [
        "Classeur de vie : archiver ce mail",
        "Classeur recensement activité : noter le retour",
        "Classeur de séquestre : archiver ce mail"
      ],
      destinataires: ["UGDRE"]
    },
    'sans_canal': {
        title: "Retour de maintenance  – Endoscope sans canal / ETO",
        verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
        endoscope: [
          "Réaliser 2 cycles complets en laveur",
          "Remettre l'appareil en circuit patient sous condition du respect des protocoles en vigueur",
        ],
        tracabilite: [
          "Classeur de vie : archiver le rapport, archiver ce mail",
          "Classeur recensement activité : noter le retour",
          "Classeur de séquestre : archiver ce mail"
        ],
        destinataires: ["UGDRE"]
      },
    // Ajoutez ici les autres configurations pour les différents cas
  }