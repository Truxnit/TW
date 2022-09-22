import { TwoWorldsRoutes } from "src/utils/routing/resolveRoute";

export enum Roles {
  PLAYER = "Spieler",
  GAMEMASTER = "GameMaster", // hier irgendwas mit den Kampagnen bedenkenk
  ADMIN = "Admin",
}

export const roleAccessControl: Record<TwoWorldsRoutes, Roles[]> = {
  "/": [],
  "/login": [],
  "/register": [],
  "/nsc": [Roles.PLAYER, Roles.GAMEMASTER, Roles.ADMIN],
  "/nsc/:nation/:gender": [Roles.PLAYER, Roles.GAMEMASTER, Roles.ADMIN],
  "/noAccess": [],
};
