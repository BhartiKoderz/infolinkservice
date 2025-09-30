

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Homepage from './pages/Homepage';
import Footer from './layout/Footer';
import Contactpage from './pages/Contactpage';
import Aboutpage from './pages/Aboutpage';
import Jobfairpage from './pages/Jobfairpage';
import Testimonials from './pages/Testimonial';
import ScrollToTop from './pages/ScrollToTop';
import Trainingpage from './pages/Trainingpage';
import Teampage from './pages/Teampage';

function App() {


  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/contact' element={<Contactpage />} />
          <Route path='/training' element={<Trainingpage />} />
          <Route path='/about' element={<Aboutpage/>}/>
          <Route path='/job-fairs' element={<Jobfairpage/>}/>
          {/* <Route path='/campus-drive' element={<CampusDrives/>}/> */}
          <Route path='/testimonial' element={<Testimonials/>}/>
          <Route path='/team' element={<Teampage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;