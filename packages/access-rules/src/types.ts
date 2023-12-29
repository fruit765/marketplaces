import { ROUTING_NAMES } from "./constants.js"

export enum ERole {
  Unknown = -1,
  Developer = 19,
  CallCenterAdmin = 18
}

export interface IProfile {
  role: ERole
  name: string
  id: number
}

export type TRoutingName = keyof typeof ROUTING_NAMES

export interface IAcceptRoute {
  role: ERole
  path: TRoutingName[] | "*"
}