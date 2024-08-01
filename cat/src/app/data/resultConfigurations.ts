import { info } from "console";

export type ResultData = {
    title: string;
    verification?: string[];
    endoscope: string[];
    tracabilite: string[];
    destinataires: string[];
    info?: string;
  }
  
  export const resultConfigurations: { [key: string]: ResultData } = {
    'semi_critique': {
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
    'non_sterilisable': {
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
        title: "Retour de maintenance pour colonisationn/canal bouché – Endoscope critique stérilisable",
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
        "Réaliser 2 cycles coplet en LDE (phase d'écouvillonnage en paillasse ++)",
        "Remettre l'appareil en circuit patient sous condition du respect des protocoles en vigueur", 
    ],
    tracabilite: [
        "Classeur de vie : archiver le rapport & archiver ce mail",
        "Classeur recensement activité : noter le retour",
        "Classeur de séquestre : archiver ce mail"
    ],
    destinataires: ["UGDRE"]
    },
    'result_prov': {
        title: "Résultats microbiologiques culture positive, en l'attente des résultats définitifs - Endoscope semi-critique",
        verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
        endoscope: [
            "Séquestrer l'endoscope en l'attente des résultats définitifs",
            "Attente de la CAT (résultats définitifs conformes ou non conformes)", 
        ],
        tracabilite: [
            "Classeur de vie : archiver le rapport & archiver ce mail",
            "Classeur de séquestre : archiver ce mail"
        ],
        destinataires: ["UGDRE, Bactériologie"]
        },
    'first_prelevement': {
        title: "Résultats microbiologiques culture positive, en l'attente des résultats définitifs - Endoscope semi-critique",
        verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
        endoscope: [
            "Séquestrer l'endoscope en l'attente des résultats définitifs",
            "Attente de la CAT (résultats définitifs conformes ou non conformes)", 
        ],
        tracabilite: [
            "Classeur de vie : archiver le rapport & archiver ce mail",
            "Classeur de séquestre : archiver ce mail"
        ],
        destinataires: ["UGDRE, Bactériologie"]
        },
    'niveau_action': {
        title: "Résultats microbiologiques NC (1er prélèvement) - Endoscope semi-critique  🚨Niveau Action🚨",
        verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
        endoscope: [
            "Réaliser 2 cycles sporicides en paillasse (écouvillonnage ++)",
            "Programmer un prélèvement de contrôle canal par canal avec le laboratoire",
            "Séquestrer l'endoscope en l'attente des résultats", 
        ],
        tracabilite: [
            "Classeur de vie : archiver le rapport & archiver ce mail",
            "Classeur de séquestre : archiver ce mail"
        ],
        destinataires: ["UGDRE, Bactériologie"],
        info: "IDE / CS / PH UGDRE: si germe hydrique, contrôler eau dernier LDE ou eau  dernière paillasse + Enquête épidémio & info endoscopiste pour le niveau d'action"
        },


    'niveau_alerte': {
        title: "Résultats microbiologiques NC (1er prélèvement) - Endoscope semi-critique  ⚠️Niveau Alerte⚠️",
        verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
        endoscope: [
            "Réaliser 2 cycles sporicides en paillasse (écouvillonnage ++)",
            "Remettre l'appareil en circuit patient sous condition du respect des protocoles en vigueur",
        ],
        tracabilite: [
            "Classeur de vie : archiver le rapport & archiver ce mail",
            "Classeur de séquestre : archiver ce mail"
        ],
        destinataires: ["UGDRE, Bactériologie"],
        info: "IDE / CS / PH UGDRE: si germe hydrique, contrôler eau dernier LDE ou eau  dernière paillasse + Enquête épidémio & info endoscopiste pour le niveau d'action"
        },
    

    'niveau_inconnu': {
        title: "Résultats microbiologiques NC (1er prélèvement) - Endoscope semi-critique  ❓Niveau inconnu❓",
        verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
        endoscope: [
            "Réaliser 2 cycles sporicides en paillasse (écouvillonnage ++)",
            "Séquestrer l'endoscope en l'attente de nouvelles consignes", 
        ],
        tracabilite: [
            "Classeur de vie : archiver le rapport & archiver ce mail",
            "Classeur de séquestre : archiver ce mail"
        ],
        destinataires: ["UGDRE, Bactériologie"],
        info: "IDE / CS / PH UGDRE: si germe hydrique, contrôler eau dernier LDE ou eau  dernière paillasse + Enquête épidémio & info endoscopiste pour le niveau d'action"
        },

    'Controle1_conforme': {
        title: "Résultats microbiologiques: Contôle conforme - Endoscope semi-critique",
        verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
        endoscope: [
            "Réaliser 2 cycles complet en LDE",
            "Remettre l'appareil en circuit patient sous condition du respect des protocoles en vigueur", 
        ],
        tracabilite: [
            "Classeur de vie : archiver le rapport & archiver ce mail",
            "Classeur de recensement activité : noter le retour",
            "Classeur de séquestre : lever le séquestre"
        ],
        destinataires: ["UGDRE, Bactériologie"],
        info: "IDE / CS / PH UGDRE: info endoscopistes"
        },
    'germes_indicateurs_pos': {
        title: "Résultats microbiologiques Contrôle n°1 NC + 🚨Germes indicateurs🚨 - Endoscope semi-critique",
        verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
        endoscope: [
            "Envoyer l'endoscope en maintenance pour persistance de colonisation",
        ],
        tracabilite: [
            "Classeur de vie : archiver ce mail",
        ],
        destinataires: ["UGDRE, Bactériologie, Biomed"],
        },
    'germes_indicateurs_neg': {
        title: "Résultats microbiologiques Contrôle n°1 NC - Endoscope semi-critique",
        verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
        endoscope: [
            "Réaliser 2 cycles sporicides en paillasse (écouvillonnage ++)",
            "Programmer un prélèvement de contrôle avec le laboratoire",
            "Maintenir le séquestre de l'endoscope en l'attente des résultats",
        ],
        tracabilite: [
            "Classeur de vie : archiver le rapport, archiver ce mail",
        ],
        destinataires: ["UGDRE, Bactériologie"],
        },
    'Controle2_conforme': {
        title: "Résultats microbiologiques: Contôle conforme - Endoscope semi-critique",
        verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
        endoscope: [
            "Réaliser 2 cycles complet en LDE",
            "Remettre l'appareil en circuit patient sous condition du respect des protocoles en vigueur", 
        ],
        tracabilite: [
            "Classeur de vie : archiver le rapport & archiver ce mail",
            "Classeur de recensement activité : noter le retour",
            "Classeur de séquestre : lever le séquestre"
        ],
        destinataires: ["UGDRE, Bactériologie"],
        info: "IDE / CS / PH UGDRE: info endoscopistes"
        },
    'Controle2_non_conforme': {
        title: "Résultats microbiologiques Contrôle n°2 NC - Endoscope semi-critique",
        verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
        endoscope: [
            "Envoyer l'endoscope en maintenance pour persistance de colonisation",
        ],
        tracabilite: [
            "Classeur de vie : archiver ce mail",
        ],
        destinataires: ["UGDRE, Bactériologie, Biomed"],
        },
    'first_prelev_critique': {
        title: "Résultats microbiologiques NC 1er prélèvement - Endoscope critique non stérilisable",
        verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
        endoscope: [
            "Réaliser 2 cycles sporicides en paillasse (écouvillonnage ++)",
            "Programmer un prélèvement de contrôle avec le laboratoire",
            "Séquestrer l'endoscope en l'attente des résultats",
            "Attente de nouvelles consignes"
        ],
        tracabilite: [
            "Classeur de vie : archiver le rapport & archiver ce mail",
            "Classeur de séquestre : archiver ce mail"
        ],
        destinataires: ["UGDRE, Bactériologie"],
        info: "IDE / CS / PH UGDRE: si germe hydrique, contrôler eau dernier LDE ou eau  dernière paillasse + Enquête épidémio & info endoscopiste pour le niveau d'action"
        },
    'controle_conforme': {
        title: "Résultats microbiologiques: Contôle conforme - Endoscope critique non stérilisable",
        verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
        endoscope: [
            "Réaliser 2 cycles sporicide en paillasse",
            "Remettre l'appareil en circuit patient sous condition du respect des protocoles en vigueur", 
        ],
        tracabilite: [
            "Classeur de vie : archiver le rapport & archiver ce mail",
            "Classeur de recensement activité : noter le retour",
            "Classeur de séquestre : lever le séquestre"
        ],
        destinataires: ["UGDRE, Bactériologie"]
        },
    'germes_indicateurs_pos_critique': {
        title: "Résultats microbiologiques Contrôle n°1 NC + 🚨Germes indicateurs🚨 - Endoscope critique non stérilisable",
        verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
        endoscope: [
            "Envoyer l'endoscope en maintenance pour persistance de colonisation",
        ],
        tracabilite: [
            "Classeur de vie : archiver ce mail",
        ],
        destinataires: ["UGDRE, Bactériologie, Biomed"],
        },
    'germes_indicateurs_neg_critique': {
        title: "Résultats microbiologiques Contrôle n°1 NC - Endoscope critique non stérilisable",
        verification: ["Vérifier le NS (appareil & rapport d'intervention)"],
        endoscope: [
            "Réaliser 2 cycles sporicides en paillasse (écouvillonnage ++)",
            "Programmer un prélèvement de contrôle avec le laboratoire",
            "Maintenir le séquestre de l'endoscope en l'attente des résultats",
        ],
        tracabilite: [
            "Classeur de vie : archiver le rapport, archiver ce mail",
        ],
        destinataires: ["UGDRE, Bactériologie"],
        },

    

    
    // Ajoutez ici les autres configurations pour les différents cas
  }