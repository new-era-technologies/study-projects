'use strict';


class EventEmitter {
    constructor() {
        this.listeners = {};
    }
    subscribe(eventName, callback) {
        if(!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback);
        return () => {
            this.listeners[eventName] = this.listeners[eventName].filter(eventCallback => callback !== eventCallback);
        }
    }
    emit(eventName, ...args) {
        let listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach((listener) => {
                listener(...args);
            });
            return true;
        }
        return false;
    }
}
class Observer {
    constructor(id, subject) {
        this.id = id;
        this.subject = subject;
        this.subject.subscribe('change', (data) => this.onChange(data));
    }
    onChange(data) {
        console.log(`${this.id} notified of change:`, data);
    }
}
let observable = new EventEmitter();
let [observer1, observer2] = [
    new Observer(1, observable),
    new Observer(2, observable)
];
let unsubscribe = observable.subscribe('change', () => console.log('unsubscribed'));
observable.emit('change', {a:'bulbasaur',b:true});
unsubscribe();