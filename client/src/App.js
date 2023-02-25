import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import CreateRecipe from './pages/CreateRecipe';
import Landing from './pages/Landing';
import Recipe from './pages/Recipe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/createrecipe' element={<CreateRecipe/>}></Route>
          <Route path='/landing' element={<Landing/>}></Route>
          <Route path='/recipe' element={<Recipe/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
