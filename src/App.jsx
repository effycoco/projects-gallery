import ProjectCard from "./components/ProjectCard";
import Title from "./components/Title";
import data from './data';

const App = () => {
  return (
    <main>
      <Title text="react projects" />
      <div className="section-center">
        {data.map(item => <ProjectCard key={item.id} {...item} />)}
      </div>
    </main>
  )
}

export default App