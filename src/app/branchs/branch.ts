export interface branchCreateDTO {
  descriptionBranch: string;
  adressBranch: string;
  identificationBranch: string;
}

export interface branchDTO {
  codeBranch: number;
  descriptionBranch: string;
  adressBranch: string;
  identificationBranch: string;
  dateBranch:Date;
  fkMoneyBranch:number;
}
