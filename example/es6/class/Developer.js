import { countPoints } from 'lib/countPoints.js';

export class Developer {
    constructor (name, experience, languages) {
        this.name = name;
        this.experience = experience;
        this.languages = languages;
    }
    set name (value = '') {
        if (typeof value === 'string') {
            this._name = value;
        }
    }
    set experience (value = 0) {
        if (typeof value === 'number') {
            this._experience = parseInt(value, 10);
        }
    }
    set languages (value = []) {
        if (typeof value === 'string') {
            this._languages = [value];
        }
        else if (value.constructor.name === 'Array') {
            this._languages = value;
        }
    }
    get name () {
        return this._name.charAt(0).toUpperCase() + this._name.slice(1);
    }
    get experience () {
        return this._experience;
    }
    get languages () {
        return this._languages;
    }
    developersDegree () {
        return ((points = 0) => {
            let degree = 'Senior';
            if (points < 11) {
                degree = 'Junior';
            }
            else if (points < 23) {
                degree = 'Regular';
            }
            return `${this.name} is a ${degree} Developer`;
        })(countPoints(this.languages.length, this.experience));
    }
    static default () {
        return new Developer('Janusz', 1, 'PHP');
    }
}