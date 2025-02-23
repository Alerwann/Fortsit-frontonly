
// si besoin de logique
// export class Quest  {
    
//     constructor(
//         public linkytb: string,
//         public type: string,
//         public lieux: string,
//         public description: string,
//         public date:string
//     , ) {     
      
//     }

// }


export interface Quest{
    date : string;
    type: string;
    linkytb: string;
    lieux: string;
    description: string[];
    tips?:[]
}