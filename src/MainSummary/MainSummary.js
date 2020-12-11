import React from 'react'
import SummaryTotal from './SummaryTotal';
import SummaryOption from './SummaryOption'

class MainSummary extends React.Component{
    render(){
        return(
            <section className="main__summary">
              <h2>Your cart</h2>
              {
                Object.keys(this.props.state.selected).map((feature, idx) => {
                  const featureHash = feature + '-' + idx;
                  const selectedOption = this.props.state.selected[feature];
                  return (
                    <SummaryOption 
                      featureHash={featureHash}
                      feature={feature}
                      selectedOption={selectedOption}
                    />
                  );
                })
              }
              <SummaryTotal 
                  total={this.props.total}
              />
            </section>
        );
    }
}

export default MainSummary