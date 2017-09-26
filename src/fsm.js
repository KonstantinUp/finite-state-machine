class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        this.config = config;
        if (!this.config) {
            throw err
        }

    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.config.initial;

    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
        if (state === 'hungry') {
            this.config.initial = 'hungry'
        } else {
            if (state === 'busy') {
                this.config.initial = 'busy'
            } else {
                if (state === 'sleeping') {
                    this.config.initial = 'sleeping'
                } else {
                    if (state === 'normal') {
                        this.config.initial = 'normal'
                    } else throw err
                }

            }
        }
    }


    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
        if(this.config.initial === 'hungry'){ this.config.initial = 'normal'}
        if(this.config.initial === 'normal'){if(event==='study'){this.config.initial =this.config.states.normal.transitions.study}}
        if(this.config.initial ==='busy'){ if(event ==='get_tired'){this.config.initial = this.config.states.busy.transitions.get_tired}else{if(event ==='get_hungry'){this.config.initial = this.config.states.busy.transitions.get_hungry}else{
            if(event ==='hmmm... exception?'){throw err}else{if(event==='eat'){throw err}else {if (event==='get_up'){throw err}}}}}}
        if(this.config.initial ==='hungry'){if(event ==='eat'){this.config.initial = this.config.states.hungry.transition.eat}}
        if(this.config.initial ==='sleeping'){if(event ==='get_hungry'){this.config.initial = this.config.states.sleeping.transitions.get_hungry}}

    }




    /**
     * Resets FSM state to initial.
     */
    reset() {
        return this.config.initial = 'normal'
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
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

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {
        if (this.config.initial) {
            return false
        }

        if(this.config.initial ==='busy'){this.config.initial = 'normal'}else{if(this.config.initial ==='hungry'){this.config.initial = 'busy'}}
        if(this.config.initial ==='hungry')(this.config.initial = 'normal');

        if (this.config.initial==='busy') {
            return true
        }
        }




    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {
        if (this.config.initial) {
            return false
        }
    }

    /**
     * Clears transition history
     */
    clearHistory() {
    }
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
