import React, {Component} from 'react';

class R006_LifecyeleEx extends Component {
    static getDerivedStateFromProps(props, state)
    {
        console.log('2. getDerivcedStateFromPorps Call :' + props.prop_value);
        return {};
    }
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    render() {
        console.log('3. render call');
        return (
            <h2>[THIS IS CONSTRUCTOP FUNCTION]</h2>
        )
    }
}

export default R006_LifecyeleEx