import './App.css';
import Header from './components/Header';
import ContentSection from './components/ContentSection';
import TaskContainer from './components/TaskContainer';
function App() {
  return (
    <div className="App">
      <Header />
      <ContentSection />
      <TaskContainer/>
    </div>
  );
}

export default App;
