import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginPage from './components/LoginPage';
import TablePage from './components/TablePage';
function App() {
  // const [token, setToken] = useState(localStorage.getItem('token'));
  const token = localStorage.getItem('token');
  // localStorage.removeItem('token');
  return (
    <div className="">
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route
          path="table"
          element={
            <PrivateRoute token={token}>
              <TablePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
