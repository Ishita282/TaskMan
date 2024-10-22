import React from 'react';
import Home from './pages/Home';
import AllTasks from './pages/allTasks';
import FavouriteTask from './pages/favrouiteTask';
import CompletedTasks from './pages/completedTasks';
import IncompletedTasks from './pages/incompletedTasks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="bg-gray-900 text-white h-screen p-2">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<AllTasks />} />
          <Route path="/favourite-task" element={<FavouriteTask />} />
          <Route path="/completed-tasks" element={<CompletedTasks />} />
          <Route path="/incompleted-tasks" element={<IncompletedTasks />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
