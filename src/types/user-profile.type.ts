interface ISosmed {
  github?: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
}

export interface IUser {
  name: string;
  image: string;
  sosial_media: ISosmed;
}
