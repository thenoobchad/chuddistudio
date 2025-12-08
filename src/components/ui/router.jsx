import  {Routes, Route} from 'react-router-dom';
import Home from '../../pages/home';
import Landing from '../../pages/landing';

export default function Router() {
  return (
		<Routes>
			<Route path="/home" element={<Home />} />

			<Route path="/" element={<Landing />} />
		</Routes>
	);
}
