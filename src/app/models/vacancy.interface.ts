export interface Vacancy {
    id: number;
    title: string;
    location: string;
    type: string;
    description: string;
    salary: string;
    isActive: boolean;
    companyId: number; //We give also a company Id to a Vacancy so we can easily connect them with the right company.
  }
  

  //Simple company interface, nothing too fancy going on here as well :D!