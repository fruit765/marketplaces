import { keys } from "lodash"
import { ACCEPT_ROUTINGS_RULES, ROUTING_NAMES } from "./constants.js"
import { ERole, IAcceptRoute, TRoutingName } from "./types.js"

export const getAcceptRoutings = (role: ERole): TRoutingName[] => {
  const acceptRoutings: IAcceptRoute | undefined  = ACCEPT_ROUTINGS_RULES.find(
    (acceptRouting) => acceptRouting.role === role
  )
  if (acceptRoutings?.path === "*") {
    return keys(ROUTING_NAMES) as TRoutingName[]
  } else {
    return acceptRoutings?.path ?? []
  }
}

export const getNameByRoute = (route: TRoutingName): string => {
  return ROUTING_NAMES[route]
}
