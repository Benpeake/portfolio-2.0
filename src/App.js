import { Route, Routes } from 'react-router';
import './App.css';
import Nav from './components/nav';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main';

function App() {
  return (
<>
<div className="APP">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={ <Main />} />
				</Routes>
			</BrowserRouter>
		</div>
</>
  );
}

export default App;
