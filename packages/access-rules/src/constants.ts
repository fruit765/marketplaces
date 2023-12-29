import { ERole, IAcceptRoute } from "./types.js"

export const ROUTING_NAMES = {
  "barcodes": "Штрих коды",
  "auto-balancing": "Автобалансировка",
  "stock": "Отчёт по приёмке товара",
} as const

export const ROLE_NAMES = {
  [ERole.Unknown]: "Неопределен",
  [ERole.Developer]: "Разработчик",
  [ERole.CallCenterAdmin]: "Админ колл-центра"
} as const

export const ACCEPT_ROUTINGS_RULES = [
  {
    role: ERole.Developer,
    path: "*"
  },
  {
    role: ERole.CallCenterAdmin,
    path: [
      "auto-balancing", "barcodes", "stock"
    ]
  }
] satisfies IAcceptRoute[]