import React from 'react';

class Button extends React.Component {
    constructor(props){
      super(props)
    }

    render(){
        const{name,age} = this.props
        return(
            <div
            onClick={onClick}
            style="width:100px;height:100px"
            style={{
                border:'1px solid black',
                width:width,
                height:100,
                color:"red"
            }}
            >
               {text}
            
            </div>
        )
    }

}


export default Button