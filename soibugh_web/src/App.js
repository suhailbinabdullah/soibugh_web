import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
