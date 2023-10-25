import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import TopNav from './components/TopNav';
import CatNav from './components/CatNav';
import MainComponent from './components/MainComponent';


// import your icons
function App() {
  library.add(fab, fas, far)
  return (
    <div className="App">
<TopNav />
<CatNav />
<MainComponent />

    </div>
  );
}

export default App;
