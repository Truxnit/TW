import { Roles } from "src/models/auth/auth";

export const mapRoleKeyToEnum = (key: string): Roles | undefined => {
  if (Object.values(Roles).includes(key as Roles)) {
    return key as Roles;
  }
};
