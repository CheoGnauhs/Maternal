import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {data} from './ChinaAreaData/data2'
import './index.styl'

class AreaSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.defaultValue = (this.props.defaultValue && this.props.defaultValue.length > 0) ? this.props.defaultValue : ["440000", "440100", "440106"]//默认数据

    //原始数据
    this.DATA = data;
    //选中的省数据
    this.province = {};
    //选中的市数据
    this.city = {};
    //选中的区数据
    this.area = {};

    //计时器
    this.outputValueTimer = null;

    this.hammerScrollTimer = null;

  }

  componentDidMount() {
    this.initSelector(this.defaultValue);
  }

  componentWillReceiveProps(nextProps) {
    //默认值动态改变时（hack 父组件的初始化数据为异步数据时)
    if (nextProps.defaultValue && nextProps.defaultValue.length > 0) {
      if (nextProps.defaultValue.length !== this.defaultValue.length) {
        this.initSelector(nextProps.defaultValue);
      } else {
        let isDifferent = false;
        nextProps.defaultValue.forEach((el, i) => {
          if (el !==this.defaultValue[i]) {
            isDifferent = true;
          }
        });
        if (isDifferent) {
          this.defaultValue = nextProps.defaultValue;
          this.initSelector(nextProps.defaultValue);
        }
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.outputValueTimer);
  }

  initSelector = (value) => {
    const pId = value[0];
    const cId = value[1];
    const aId = value[2];
    const pData = this.DATA.filter((el, i) => (el.id === pId))[0];
    const cData = pData.child.filter((el, i) => (el.id === cId))[0];
    let aData = cData.child.filter((el, i) => (el.id === aId))[0];
    if (typeof aData === 'undefined') {
      aData = cData.child[0];
    }
    this.toSetState('province', pData);
    this.toSetState('city', cData);
    this.toSetState('area', aData);
  };

  toSetState = (dataName, _obj) => {
    this[dataName] = _obj;
    this.forceUpdate();//更新视图
    this.outputValue();
  };

  outputValue = () => {
    clearTimeout(this.outputValueTimer);
    this.outputValueTimer = setTimeout(() => {
      const {province, city, area} = this;
      const _outputValue = {
        ids: [province.id, city.id, area && area.id || ''],
        names: [province.name, city.name, area && area.name || '']
      };
      this.props.onChange(_outputValue);
    }, 100);
  };

  handleChangeProvince = (id) => {
    const _value = this.DATA.filter((el, i) => (el.id === id))[0];
    this.toSetState('province', _value);
    this.handleChangeCity(-1);
    this.handleChangeArea(-1)
  };

  handleChangeCity = (id) => {
    const {province} = this
    let _value = province.child.filter((el, i) => (el.id === id))[0]
    if (typeof _value === 'undefined') {
      _value = province.child[0]
    }
    this.toSetState('city', _value)
    this.handleChangeArea(-1)
  }

  handleChangeArea = (id) => {
    const {city} = this
    if (typeof city.child === 'undefined') {
      this.toSetState('area', {})
      return
    }
    let _value = city.child.filter((el, i) => (el.id === id))[0]
    if (typeof _value === 'undefined') {
      _value = city.child[0]
    }
    this.toSetState('area', _value)
  }

  render() {
    let {province, city, area} = this
    if (!province.id) {
      return null
    } else {
      return (
          <div>
            {/* <div>
            {`省id:${province && province.id} 城市id:${city && city.id || ""} 地区id:${area && area.id || ""}`}
          </div>
          <div>
            {`省name:${province && province.name} 城市name:${city && city.name || ""} 地区name:${area && area.name || ""}`}
          </div> */}

            <select onChange={(e) => {
              this.handleChangeProvince(e.target.value)
            }} value={province.id}>
              {this.DATA.map((el, i) => {
                return (
                    <option value={el.id} key={el.id}>{el.name}</option>
                )
              })}
            </select>

            <select onChange={(e) => {
              this.handleChangeCity(e.target.value)
            }} value={city.id}>
              {province.child.map((el, i) => {
                return (
                    <option value={el.id} key={el.id}>{el.name}</option>
                )
              })}
            </select>

            {city.child &&
            <select onChange={(e) => {
              this.handleChangeArea(e.target.value)
            }} value={area.id}>
              {city.child.map((el, i) => {
                return (
                    <option value={el.id} key={el.id}>{el.name}</option>
                )
              })}
            </select>
            }

          </div>
      );
    }

  }
}

AreaSelector.propTypes = {
  defaultValue: PropTypes.array,
  onChange: PropTypes.func,
};

export default AreaSelector;
