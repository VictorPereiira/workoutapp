import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import Default_Page from './pages/Default_Page';
import GetId_Page from './pages/GetId_Page';

import Home from './pages/Home';

type AppProps = {
  isStart?: boolean
}

function App(props: AppProps) {
  return (
    // <>
    //   {/* {props.isStart ? <Wellcome /> : true} */}
    //   <Wellcome />
    // </>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App;


