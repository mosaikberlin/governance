import './App.css';
// import OrgChart from './charts/OrgChart';
import BarChart from "./charts/BarChart";

const App = () => (
  <div id="org-chart-d3">
    <BarChart
      data={[12, 5, 6, 6, 9, 10]}
      width={700}
      height={300}/>
  </div>
)

export default App;
