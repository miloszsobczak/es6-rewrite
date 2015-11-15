;(function (PixersDeveloper){
    window.PixersDeveloper = PixersDeveloper;
})(new (function (Developer) {
    var PixersDeveloper = function PixersDeveloper (name, experience, languages, awesomeness) {
        Developer.call(this, name, experience, languages);
        this.awesomeness(awesomeness);

        this.worklog = {};
    };
    PixersDeveloper.prototype = Object.create(Developer.prototype);
    PixersDeveloper.prototype.constructor = PixersDeveloper;
    PixersDeveloper.prototype.default = function () {
        return new PixersDeveloper('Mieszkos', 2, ['Whitespace'], -1000)
    }
    PixersDeveloper.prototype.awesomeness = function (value) {
        if (typeof value === 'undefined') {
            value = 0;
        }
        this._awesomeness = parseInt(value, 10);
        return this._awesomeness;
    }
    PixersDeveloper.prototype.getWorkById = function (taskId) {
        return this.worklog[taskId];
    }
    PixersDeveloper.prototype.setWork = function (taskId, timeInMins) {
        if (this.worklog.hasOwnProperty(taskId) === false) {
            return this.worklog[taskId] = timeInMins;
        }
        this.worklog[taskId] = this.getWorkById(taskId) + timeInMins;
    }
    PixersDeveloper.prototype.developersDegree = function () {
        return Developer.prototype.developersDegree.call(this);
    }
    return PixersDeveloper;
})(window.Developer));