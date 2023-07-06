import './App.css';
import Navigation from './routes/Routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>
function App() {
  return (
    <div>
      <Navigation />
      <ToastContainer />
      <script src="https://unpkg.com/formik/dist/formik.umd.production.min.js"></script>
    </div>
  );
}

export default App;
