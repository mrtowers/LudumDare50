import { OBJECTS } from "../../main.js";

export function getObjectByTag (tag: string) {
    for (let i in OBJECTS) {
        if (OBJECTS[i].tag == tag) {
            return OBJECTS[i];
        }
    }
    return null;
}