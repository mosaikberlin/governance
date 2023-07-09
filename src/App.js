import './App.css';
// import OrgChart from './charts/OrgChart';
import BarChart from "./charts/BarChart";

const App = () => (
  <div>
    <div>Hallo Welt</div>
    <div id="org-chart-d3">
      <BarChart
        wrapperId={"#org-chart-d3"}
        data={[12, 5, 6, 6, 9, 10]}
      />
    </div>
  </div>
)

export default App;
