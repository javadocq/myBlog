import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Fashion from './component/Fashion'
import Homepage from './component/Homepage'
import Introduction from './component/Introduction'
import Study from './component/Study'
import Travel from './component/Travel'

function App() {
  return (
    <div className='main-bg'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/study" element={<Study />} />
            <Route path="/introduction" element={<Introduction />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
