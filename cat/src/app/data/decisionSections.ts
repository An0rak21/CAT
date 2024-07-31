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
              children: ["semi_critique_rm", "critique_rm"]
          },
          "rm_autre_raison": {
              id: "rm_autre_raison",
              content: "RM Pour autre raison \n(curative ou préventive)",
              type: "choice",
              color: "blue",
              children: ["semi_critique_canal", "hautement_critique", "sans_canal"]
          },
          "semi_critique_rm": {
              id: "semi_critique_rm",
              content: "Semi-critique (niveau intermédiaire) avec canal",
              type: "action",
              color: "blue"
          },
          "critique_rm": {
              id: "critique_rm",
              content: "critique\n(haut-niveau) avec canal",
              type: "choice",
              color: "green",
              children: ["non_sterilisable_rm", "sterilisable_sbt"]
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
          "non_sterilisable_rm": {
              id: "non_sterilisable_rm",
              content: "Non Stérilisable",
              type: "action",
              color: "green"
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
  }
};
