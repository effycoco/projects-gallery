import {FaGithub} from 'react-icons/fa'
const ProjectCard = ({ name, link, img,github }) => {
  return (
    <article className="card">
      <a href={link} target="_blank" >
        <div className="img-container">
          <img src={img} alt={name+ ' preview'} className="preview-img" />
        </div>
      </a>
      <footer>
        <h2>{name}</h2>
        <a href={github}>
          <FaGithub className="icon" />
        </a>
      </footer>
    </article>
  )
}

export default ProjectCard