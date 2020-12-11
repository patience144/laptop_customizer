import React from 'react'
import FeatureItem from './FeatureItem'
import slugify from 'slugify'

class Feature extends React.Component {
    render() {
        const options = this.props.options.map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <FeatureItem 
                itemHash={itemHash}
                slugify={slugify}
                feature={this.props.feature}
                item={item}
                updateFeature={this.props.updateFeature}
                selected={this.props.selected}
              />
            );
          });
        return(
            <fieldset className="feature" key={this.props.featureHash}>
                <legend className="feature__name">
                <h3>{this.props.feature}</h3>
                </legend>
                {options}
          </fieldset>
        );
    }

};

export default Feature;