import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Navbar from './components/navbar';

/* I am adding this comment just for git testing that from which user this is getting pushed, just changed the global emal and now testing again */

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        // hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />

      {/* <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="/generic-component"
          element={
            <GenericComponent />
          }
        />
      </Routes> */}
      <Navbar />
    </>
  );
}

export default App;
