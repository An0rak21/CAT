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
          content: "RM Pour Colonisation ou canal bouché",
          type: "choice",
          color: "blue",
          children: ["semi_critique", "critique"]
        },
        "rm_autre_raison": {
          id: "rm_autre_raison",
          content: "RM Pour autre raison (curative ou préventive)",
          type: "choice",
          color: "blue",
          children: ["semi_critique_canal", "hautement_critique", "sans_canal"]
        },
        "semi_critique": {
          id: "semi_critique",
          content: "Semi-critique (niveau intermédiaire) avec canal",
          type: "choice",
          color: "blue",
          children: ["action1"]
        },
        "critique": {
          id: "critique",
          content: "critique (haut-niveau) avec canal",
          type: "choice",
          color: "green",
          children: ["non_sterilisable", "sterilisable_sbt"]
        },
        "semi_critique_canal": {
          id: "semi_critique_canal",
          content: "semi critique avec canal",
          type: "choice",
          color: "blue",
          children: ["action2"]
        },
        "hautement_critique": {
          id: "hautement_critique",
          content: "hautement critique avec canal",
          type: "choice",
          color: "green",
          children: ["non_sterilisable", "sterilisable_sbt"]
        },
        "sans_canal": {
          id: "sans_canal",
          content: "sans canal / ETO",
          type: "choice",
          color: "red",
          children: ["action3"]
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
        "action1": {
          id: "action1",
          content: "Action pour Semi-critique",
          type: "action",
          color: "blue"
        },
        "action2": {
          id: "action2",
          content: "Action pour semi critique avec canal",
          type: "action",
          color: "blue"
        },
        "action3": {
          id: "action3",
          content: "Action pour sans canal / ETO",
          type: "action",
          color: "red"
        }
      }
    }
  };