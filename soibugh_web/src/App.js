import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/navbar';
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Navbar />
    </div>
  );
}

export default App;
