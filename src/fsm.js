class FSM {
    constructor(config) {
        this.config = config;

        if (!this.config) {
            throw err
        }
        this.state = this.config.initial;
        this.stateArr = ['normal'];
        this.index = 0;

    }
    getState() {
        // console.log(this.state);
        return this.state;
    }
    changeState(state) {
        if (state === 'hungry') {
            this.state = 'hungry'
        } else {
            if (state === 'busy') {
                this.state = 'busy'
            } else {
                if (state === 'sleeping') {
                    this.state = 'sleeping'
                } else {
                    if (state === 'normal') {
                        this.state = 'normal'
                    } else throw err
                }

            }
        }
        this.index++;
         this.stateArr[this.index] = this.state;
    }
    trigger(event) {
        if (this.state === 'normal') {
            if (event === 'study') {
                this.state = this.config.states.normal.transitions.study;
                // console.log(this.state);
            }
        }
        if (this.state === 'busy') {
            if (event === 'get_tired') {
                this.state = this.config.states.busy.transitions.get_tired
            } else {
                if (event === 'get_hungry') {
                    this.state = this.config.states.busy.transitions.get_hungry;

                } else {
                    if (event === 'hmmm... exception?') {
                        throw err
                    } else {
                        if (event === 'eat') {
                            throw err
                        } else {
                            if (event === 'get_up') {
                                throw err
                            }
                        }
                    }
                }
            }
        }
        if (this.state=== 'hungry') {
            if (event === 'eat') {
                this.state = this.config.states.hungry.transitions.eat;
                console.log(this.state);
            }
        }
        if (this.state === 'sleeping') {
            if (event === 'get_hungry') {
                this.state = this.config.states.sleeping.transitions.get_hungry
            }
        }
        this.index++;
        this.stateArr[this.index] = this.state;
    }
    reset() {
        return this.state = 'normal'
    }
    getStates(event) {
        if (!event) {
            return ['normal', 'busy', 'hungry', 'sleeping']
        }
        if (event === 'study') {
            return ['normal']
        }
        if (event === 'get_hungry') {
            return ['busy', 'sleeping']
        }
        if (event = 'hmmm... empty array?') {
            return [];
        }
    }
    undo() {
        this.index--;
        this.state = this.stateArr[this.index];
        return !!this.state
    }
    redo() {

        this.index++;
        this.state = this.stateArr[this.index];
        return !!this.state
    }
    clearHistory() {
        this.stateArr.splice(0,this.stateArr.length);
    }
}
module.exports = FSM;

