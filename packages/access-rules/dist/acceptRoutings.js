import { keys } from "lodash";
import { ACCEPT_ROUTINGS_RULES, ROUTING_NAMES } from "./constants.js";
export const getAcceptRoutings = (role) => {
    const acceptRoutings = ACCEPT_ROUTINGS_RULES.find((acceptRouting) => acceptRouting.role === role);
    if (acceptRoutings?.path === "*") {
        return keys(ROUTING_NAMES);
    }
    else {
        return acceptRoutings?.path ?? [];
    }
};
export const getNameByRoute = (route) => {
    return ROUTING_NAMES[route];
};
//# sourceMappingURL=acceptRoutings.js.map