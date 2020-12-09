import React from 'react'

class MainForm extends React.Component{
    render(){
        return(
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {this.props.features}
          </form>
        )
    }
}

export default MainForm