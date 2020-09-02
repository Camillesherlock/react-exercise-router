import React from 'react';
const pic = require('../img/goods.jpeg');

const Mobile = (props) => {
  
  const {datas, method } = props;
  console.log(props);
  return (
    <div className="goods">
      <br />
      {ShowGoods(datas,method)}
    </div>
  );}

const ShowGoods = (datas,method) => {
  const result = datas.map((data,index) => {
    return (
      <table className="goodsHeader">
        <tr className="goods">
          <td className="goods">
            <img className="picDemo" src={pic} />
          </td>
        </tr>
        <tr className="goods">
          <td className="goods">{data.name} <br/>{'单价:' + data.price + '元/瓶'}</td>
          <td className="goods">
            <a id="addCart" className="addgoods" onClick={method}>
              +
            </a>
          </td>
        </tr>
      </table>
    );
  });
  return result;
};


export default Mobile;