import './App.css';
import { LiveDiv } from './components/liveDiv';
import { divHeight } from './setDivHeight';
import withHeight from './hoc/withHeight';

const LiveDivWithHeight = withHeight(LiveDiv);

function App() {
	console.log({ divHeight });
	return (
		<div className="App">
			<LiveDivWithHeight height={divHeight} />
		</div>
	);
}

export default App;
