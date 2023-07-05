import { User, Session } from 'next-auth'

export type   FormState = {
    Titre : string;
    Description : string;
    Image : string;
    liveSiteUrl :string;
    githubUrl: string;
    Catégorie : string;
};

 export interface ProjectInterface {
    Titre : String;
    Description : string;
    Image : string;
    liveSiteUrl : string;
    githubUrl: string;
    Catégorie : string;
    ID: string;
    createdBy: {
      Nom : string;
      Courriel : string;
      avatarUrl : string;
      ID: string;
    };
}

export  interface UserProfile {
    ID: string;
    Nom : string;
    Courriel : string;
    Description : string | null;
    avatarUrl : string;
    githubUrl: string |  null;
    linkedinUrl: string |  null;
    Projets : {
      edges: { node: ProjectInterface }[];
      pageInfo: {
        hasPreviousPage: boolean;
        hasNextPage: boolean;
        startCursor: boolean;
        endCursor: string;
      };
    };
}

export interface SessionInterface extends Session {
  utilisateur : User & {
    ID: string;
    Nom : string;
    Courriel : string;
    avatarUrl : string;
  };
}

export interface  ProjectForm {
  Titre : String;
  Description : string;
  Image : string;
  liveSiteUrl : string;
  githubUrl: string;
  Catégorie : string;
}