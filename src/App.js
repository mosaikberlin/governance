import './App.css';
import { OrgChart } from './components/Charts/OrgChart';

const App = () => (
  <div>
    <div>Hallo Welt</div>
    <OrgChart
      width={600}
      height={400}
    />
  </div>
)

export default App;
