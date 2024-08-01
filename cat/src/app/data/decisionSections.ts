export interface DecisionNode {
  id: string;
  content: string;
  type: 'choice' | 'action';
  color: string;
  children?: string[];
}

export interface DecisionTree {
  nodes: { [key: string]: DecisionNode };
  rootId: string;
}

export const decisionSections: { [key: string]: DecisionTree } = {
  "endoscope": {
      rootId: "root",
      nodes: {
          "root": {
              id: "root",
              content: "Retour de maintenance (RM) d'un endoscope",
              type: "choice",
              color: "red",
              children: ["rm_colonisation", "rm_autre_raison"]
          },
          "rm_colonisation": {
              id: "rm_colonisation",
              content: "RM Pour Colonisation\nou canal bouché",
              type: "choice",
              color: "blue",
              children: ["semi_critique", "critique"]
          },
          "rm_autre_raison": {
              id: "rm_autre_raison",
              content: "RM Pour autre raison \n(curative ou préventive)",
              type: "choice",
              color: "blue",
              children: ["semi_critique_canal", "hautement_critique", "sans_canal"]
          },
          "semi_critique": {
              id: "semi_critique",
              content: "Semi-critique\n(niveau intermédiaire) avec canal",
              type: "action",
              color: "blue"
          },
          "critique": {
              id: "critique",
              content: "critique\n(haut-niveau) avec canal",
              type: "choice",
              color: "green",
              children: ["non_sterilisable", "sterilisable_sbt"]
          },
          "semi_critique_canal": {
              id: "semi_critique_canal",
              content: "semi critique\navec canal",
              type: "action",
              color: "blue"
          },
          "hautement_critique": {
              id: "hautement_critique",
              content: "hautement critique\navec canal",
              type: "choice",
              color: "green",
              children: ["non_sterilisable", "sterilisable_sbt"]
          },
          "sans_canal": {
              id: "sans_canal",
              content: "sans canal\n/ ETO",
              type: "action",
              color: "red"
          },
          "non_sterilisable": {
              id: "non_sterilisable",
              content: "Non Stérilisable",
              type: "action",
              color: "green"
          },
          "sterilisable_sbt": {
              id: "sterilisable_sbt",
              content: "Stérilisable SBT",
              type: "action",
              color: "green"
          },
      }
  },

  "biologique": {
    rootId: "root",
    nodes: {
        "root": {
            id: "root",
            content: "Résultats biologiques non conformes pour un endoscope",
            type: "choice",
            color: "red",
            children: ["semi_critique", "hautement_critique"]
        },
        "semi_critique": {
            id: "semi_critique",
            content: "Semi-critique avec canal",
            type: "choice",
            color: "blue",
            children: ["result_prov", "NC_alerte"]
        },
        "hautement_critique": {
            id: "hautement_critique",
            content: "Hautement critique avec canal, non stérilisable",
            type: "choice",
            color: "green",
            children: ["first_prelev_critique", "controle_conforme", "controle_nc"]
        },
        "result_prov": {
            id: "result_prov",
            content: "Résultats provisoires, Culture positive",
            type: "action",
            color: "blue"
        },
        "NC_alerte": {
            id: "NC_alerte",
            content: "NC niveau Alerte ou Action",
            type: "choice",
            color: "blue",
            children: ["first_prelevement", "Controle1_conforme", "Controle1_non_conforme", "Controle2_conforme", "Controle2_non_conforme"]
        },
        "first_prelevement": {
            id: "first_prelevement",
            content: "1er prélèvement",
            type: "choice",
            color: "white",
            children: ["niveau_action", "niveau_alerte", "niveau_inconnu"]
        },
        "Controle1_conforme": {
            id: "Controle1_conforme",
            content: "Contrôle 1 conforme",
            type: "action",
            color: "white"
        },
        "Controle1_non_conforme": {
            id: "Controle1_non_conforme",
            content: "Contrôle 1 NC",
            type: "choice",
            color: "white",
            children: ["germes_indicateurs_pos", "germes_indicateurs_neg"]
        },
        "Controle2_conforme": {
            id: "Controle2_conforme",
            content: "Contrôle 2 conforme",
            type: "action",
            color: "white"
        },
        "Controle2_non_conforme": {
            id: "Controle2_non_conforme",
            content: "Contrôle 2 NC",
            type: "action",
            color: "orange"
        },
        "first_prelev_critique": {
            id: "first_prelev_critique",
            content: "1er prélèvement",
            type: "action",
            color: "green"
        },
        "controle_conforme": {
            id: "controle_conforme",
            content: "Contrôle conforme",
            type: "action",
            color: "green"
        },
        "controle_nc": {
            id: "controle_nc",
            content: "Contrôle NC",
            type: "choice",
            color: "green",
            children: ["germes_indicateurs_pos_critique", "germes_indicateurs_neg_critique"]
        },
        "niveau_action": {
            id: "niveau_action",
            content: "Niveau Action (germes indicateurs ou UFC > 25",
            type: "action",
            color: "red"
        },
        "niveau_alerte": {
            id: "niveau_alerte",
            content: "Niveau Alerte, absence de germes indicateurs et 5 ≤ UFC ≤ 25",
            type: "action",
            color: "orange"
        },
        "niveau_inconnu": {
            id: "niveau_inconnu",
            content: "Je ne connais pas le niveau (alerte ou action)",
            type: "action",
            color: "orange"
        },
        "germes_indicateurs_pos": {
            id: "germes_indicateurs_pos",
            content: "Présence de germes indicateurs",
            type: "action",
            color: "red"
        },
        "germes_indicateurs_neg": {
            id: "germes_indicateurs_neg",
            content: "Absence de germes indicateurs",
            type: "action",
            color: "orange"
        },
        "germes_indicateurs_pos_critique": {
            id: "germes_indicateurs_pos_critique",
            content: "Présence de germes indicateurs",
            type: "action",
            color: "red"
        },
        "germes_indicateurs_neg_critique": {
            id: "germes_indicateurs_neg_critique",
            content: "Absence de germes indicateurs",
            type: "action",
            color: "orange"
        },
    }
}
};
