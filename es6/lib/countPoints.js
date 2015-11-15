export function countPoints (langLength = 0, exp = 0) {
    let pointPerLanguage = 2,
        pointPerExp = 4;

    return parseInt(langLength * pointPerLanguage, 10) +
           parseInt(exp  * pointPerExp, 10);
}