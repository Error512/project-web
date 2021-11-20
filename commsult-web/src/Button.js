import React from 'react';

class Button extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const{name,age} = this.props
        return(
            <div>
                style={{
                    border:'1px solid black',
                    width:100,

                }}
                <button onClick={this.handlerChangeNames}>
                    Press me!
                </button>
            
            </div>
        )
    }

}