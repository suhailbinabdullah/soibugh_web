import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Navbar from './components/navbar';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZivUOtIFxVIB-yERdveleJWP-gI-4Wiw",
  authDomain: "soibugh-web.firebaseapp.com",
  projectId: "soibugh-web",
  storageBucket: "soibugh-web.appspot.com",
  messagingSenderId: "521886985628",
  appId: "1:521886985628:web:e876cd30b84b7299b0ac59",
  measurementId: "G-NGZ0BKMD5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
