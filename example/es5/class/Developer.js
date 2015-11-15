;(function (Developer){
    window.Developer = Developer;
})(new (function (countPoints) {
    var Developer = function Developer(name, experience, languages) {
        this.name(name || '');
        this.experience(experience || 0);
        this.languages(languages || []);
    }
    Developer.prototype = {
        name: function (value) {
            if (typeof value === 'string') {
                this._name = value;
            }
            return this._name.charAt(0).toUpperCase() + this._name.slice(1);
        },
        experience: function (value) {
            if (typeof value === 'number') {
                this._experience = parseInt(value, 10);
            }
            return this._experience;
        },
        languages: function (value) {
            if (typeof value !== 'undefined') {
                if (value.constructor.name === 'Array') {
                    this._languages = value;
                }
                else if (typeof value === 'string') {
                    this._languages = [value];   
                }
            }
            return this._languages;
        },
        developersDegree: function () {
            var self = this;
            return (function (points) {
                var degree = 'Senior';
                if (points < 11) {
                    degree = 'Junior';
                }
                else if (points < 23) {
                    degree = 'Regular';
                }
                return self.name() + ' is a ' + degree + ' Developer';
            })(countPoints(this.languages().length, this.experience()));
        },
        default: function () {
            return new Developer('Janusz', 1, 'PHP');
        }
    };
    return Developer;
})(window.countPoints));