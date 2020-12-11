import React from 'react'
import Feature from './Feature';

class MainForm extends React.Component{
    render(){
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;

            return (
             <Feature 
              featureHash={featureHash}
              feature={feature}
              options={this.props.features[feature]}
              selected={this.props.selected}
              updateFeature={this.props.updateFeature}
             />
            );
          });
        return(
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
        )
    }
}

export default MainForm