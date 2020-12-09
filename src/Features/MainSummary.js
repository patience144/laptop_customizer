import React from 'react'
import SummaryTotal from './SummaryTotal';



class MainSummary extends React.Component{
    render(){
        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                {this.props.summary}
                <SummaryTotal 
                    total={this.props.total}
                />
            </section>
        )
    }
}

export default MainSummary