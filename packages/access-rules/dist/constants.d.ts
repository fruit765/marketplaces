import { ERole } from "./types.js";
export declare const ROUTING_NAMES: {
    readonly barcodes: "Штрих коды";
    readonly "auto-balancing": "Автобалансировка";
    readonly stock: "Отчёт по приёмке товара";
};
export declare const ROLE_NAMES: {
    readonly [-1]: "Неопределен";
    readonly 19: "Разработчик";
    readonly 18: "Админ колл-центра";
};
export declare const ACCEPT_ROUTINGS_RULES: ({
    role: ERole.Developer;
    path: "stock"[];
} | {
    role: ERole.CallCenterAdmin;
    path: ("barcodes" | "auto-balancing" | "stock")[];
})[];
