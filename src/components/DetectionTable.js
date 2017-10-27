import React from 'react';
import {Table} from 'react-bootstrap';

class DetectionTable1 extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  static render() {
    return (
        <div>
          <h3>天赋套餐</h3>
          <Table striped bordered condensed hover>
            <thead>
            <tr>
              <th>检测项目</th>
              <th>检测数值</th>
              <th>检测结果</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>表达能力</td>
              <td>待测</td>
              <td>待测</td>
            </tr>
            <tr>
              <td>汉字听写能力</td>
              <td>待测</td>
              <td>待测</td>
            </tr>
            <tr>
              <td>阅读能力</td>
              <td>待测</td>
              <td>待测</td>
            </tr>
            </tbody>
          </Table>
          <hr/>
        </div>
    );
  }
}

export default DetectionTable1;