import { Developer } from 'class/Developer.js';

class PixersDeveloper extends Developer {
    constructor (name, experience, languages, awesomeness) {
        super(name, experience, languages);
        this.awesomeness = awesomeness;

        this.Worklog = new WeakMap();
    }
    set awesomeness (value = 0) {
        if (typeof value === 'number') {
            this._awesomeness = parseInt(value, 10);
        }
    }
    get awesomeness () {
        return this._awesomeness;
    }
    setWork (taskId, timeInMins) {
        if (this.Worklog.has(taskId) === false) {
            return this.Worklog.set(taskId, timeInMins);
        }
        this.Worklog.set(taskId, (() => {
            let minutes = this.Worklog.get(taskId);
            return minutes + timeInMins;
        })());
    }
    getWorkById (taskId) {
        this.Worklog.get(taskId);
    }
    static default () {
        return new PixersDeveloper('Mieszkos', 2, ['Whitespace'], -1000);
    }
}