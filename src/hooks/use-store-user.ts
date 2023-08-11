import { userProfileData } from "@/data/user-profile";
import { IUser } from "@/types/user-profile.type";
import { create } from "zustand";

export const useStoreUser = create<IUser>((set) => ({
  name: userProfileData.name,
  image: userProfileData.image,
  sosial_media: {
    github: userProfileData.sosial_media.github ?? "",
    instagram: userProfileData.sosial_media.instagram ?? "",
    facebook: userProfileData.sosial_media.facebook ?? "",
    linkedin: userProfileData.sosial_media.linkedin ?? "",
  },
}));
