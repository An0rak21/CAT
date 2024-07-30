export interface DecisionNode {
    id: string;
    text: string;
    options?: DecisionOption[];
  }
  
  export interface DecisionOption {
    text: string;
    nextId: string | null;
  }
  
  export interface FinalDecision {
    id: string;
    text: string;
    action: string;
  }