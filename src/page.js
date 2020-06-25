import React, { Component } from 'react';

class page extends Component {
    render (){
        const styles={
            backgroundColor: "black",
            height: "120vh",
            width: "100vw"
        };
        return <div style={styles}>
                {this.props.children}
            </div>
    }
}

export default page;