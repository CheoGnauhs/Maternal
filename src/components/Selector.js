import React, {Component} from 'react';
import AreaSelector from './AreaSelector';

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChinaAreaSelectorDefaultValue: ["440000", "440100", "440105"],
      ChinaAreaSelectorValue: undefined,
    }
  }

  componentDidMount() {
  }

  toSetValue = () => {
    this.setState({
      ChinaAreaSelectorDefaultValue: ["110000", "110101", ""]
    });
  };

  ChinaAreaSelectorChange = (value) => {
    console.info('demo', value);
    this.setState({
      ChinaAreaSelectorValue: value
    });
    this.props.transferMsg(value.names.toString());
  };

  render() {
    return (
        <AreaSelector
            defaultValue={this.state.ChinaAreaSelectorDefaultValue}
            onChange={(value) => {
              this.ChinaAreaSelectorChange(value)
            }}
        />
    );
  }
}

export default Selector;
