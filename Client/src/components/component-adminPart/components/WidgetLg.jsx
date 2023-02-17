import '../css/component/widgetLg.css'


function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Recent Website Visited</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Name</th>
          <th className="widgetLgTh">Visit Count</th>
          {/* <th className="widgetLgTh">Amount</th> */}
          <th className="widgetLgTh">Carbon Footprint</th>
          <th className="widgetLgTh">Status </th>

        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">LeetCode</span>
          </td>
          <td className="widgetLgDate">5</td>
          <td className="widgetLgDate">8.17</td>
          {/* <td className="widgetLgAmount">$2100.00</td> */}
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Youtube</span>
          </td>
          <td className="widgetLgDate">6</td>
          <td className="widgetLgDate">6.18</td>
          {/* <td className="widgetLgAmount">$1202.00</td> */}
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">Instagram</span>
          </td>
          <td className="widgetLgDate">2</td>
          <td className="widgetLgDate">1.05</td>
          {/* <td className="widgetLgAmount">$700.00</td> */}
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
           
            <span className="widgetLgName">FaceBook</span>
          </td>
          <td className="widgetLgDate">4</td>
          <td className="widgetLgDate">5.47</td>
          {/* <td className="widgetLgAmount">$300.00</td> */}
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;