export function sum(...argues) {
    return argues.reduce((p, c) => p + c,0)
}