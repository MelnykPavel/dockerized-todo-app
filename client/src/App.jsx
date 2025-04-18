import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@components/Layout';
import TaskList from '@components/TaskList';
import TaskCard from '@components/TaskCard';
import Error404 from '@pages/404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/tasks/all" />} />
        <Route path="tasks/:filter" element={<TaskList />} />
        <Route path="task/:id" element={<TaskCard mode="view" />} />
        <Route path="edit/:id" element={<TaskCard mode="edit" />} />
        <Route path="add" element={<TaskCard mode="create" />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
