import { uid } from "radash";

export function uniqueId(prefix: string) {
    const id = uid(10)
    return `${prefix}${id}`
}
