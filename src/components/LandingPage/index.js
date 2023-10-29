import React from 'react'
import { Routes ,Route  } from 'react-router-dom';
import MainComponent from '../MainComponent/MainComponent';

const LandingPage = () => {
  return (
    <div>
        <Routes>

          <Route path="/" element={<MainComponent />} />

        </Routes>
    </div>
  )
}

export default LandingPage;