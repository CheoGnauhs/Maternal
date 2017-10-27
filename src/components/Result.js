import React from 'react';

class Result extends React.Component {
  render() {
    if (this.props.value >= 70) {
      return (
          <td>检测结果非常有利</td>
      );
    }
    else if (this.props.value >= 50 && this.props.value < 70) {
      return (
          <td>检测结果有利</td>
      );
    }
    else if (this.props.value >= 30 && this.props.value < 50) {
      return (
          <td>检测结果不利</td>
      );
    }
    else if (this.props.value >= 0 && this.props.value < 30) {
      return (
          <td>检测结果非常不利</td>
      );
    }
    else {
      return (
          <td>查询并计算中...</td>
      );
    }
  }
}

export default Result;