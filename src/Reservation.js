import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

class Reservation extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    alert("您的预约已成功，即将返回上一页");
    this.props.history.push("/userwelcome");
  }

  render() {
    return (
        <div>
          <Header fontColor="pinkFont" logoName="userLogo" headerType="registerHeader" navType="registerHeaderNav"/>
          <div className="registerBox">
            <div className="registerMain color2">
              <h2>套餐预定</h2>
              <form onSubmit={e => this.onSubmit(e)}>
                <div>
                  <label htmlFor="time">预约时间:</label>
                  <input className="pinkBorder" id="time" type="date"/>
                </div>
                <div>
                  <label>请选择您要预约的套餐：</label>
                  <input type="checkbox" name="package" value="Talent"/>天赋套餐
                  <input type="checkbox" name="package" value="Allergic"/>过敏套餐
                  <input type="checkbox" name="package" value="Recovery"/>产后恢复套餐
                  <input type="checkbox" name="package" value="Nutrition"/>营养吸收套餐
                  <input type="checkbox" name="package" value="Illness"/>疾病套餐
                  <input type="checkbox" name="package" value="Gene"/>基因套餐
                </div>
                <input type="submit" className="btn submitBtn pink" onClick={e => this.onSubmit(e)}/>
              </form>
            </div>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default Reservation;