import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Fashion from './Fashion'
import Homepage from './Homepage'
import Introduction from './Introduction'
import Study from './Study'
import Travel from './Travel'

const Router = () => {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/study" element={<Study />} />
            <Route path="/introduction" element={<Introduction />} />
          </Routes>
      </BrowserRouter>
    );
  };

  export default Router;