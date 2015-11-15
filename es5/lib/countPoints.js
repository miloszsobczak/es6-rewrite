;(function (countPoints){
    window.countPoints = countPoints;
})(new function () {
    return function countPoints (langLength, exp) {
        var pointPerLanguage = 2,
            pointPerExp = 4;

        return parseInt(langLength * pointPerLanguage, 10) +
               parseInt(exp  * pointPerExp, 10);
    }
});