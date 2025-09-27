

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Training from './sections/TrainingSection/Training';
import Navbar from './layout/Navbar';
import Homepage from './pages/Homepage';
import Footer from './layout/Footer';
import Contactpage from './pages/Contactpage';
import Aboutpage from './pages/Aboutpage';
import Jobfairpage from './pages/Jobfairpage';
import CampusDrives from './pages/Campusdrive';
import Testimonials from './pages/Testimonial';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/contact' element={<Contactpage />} />
          <Route path='/Training' element={<Training />} />
          <Route path='/about' element={<Aboutpage/>}/>
          <Route path='/job-fairs' element={<Jobfairpage/>}/>
          <Route path='/campus-drive' element={<CampusDrives/>}/>
          <Route path='/testimonial' element={<Testimonials/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;