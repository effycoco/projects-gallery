const ProjectCard = ({name,link, img}) => {
  return (
    <a href={link} className="card-link">
      <div className="img-container">
        <img src={img} alt={name+ ' preview'} className="preview-img" />
      </div>
      <footer>
        <h5>{name}</h5>
      </footer>
    </a>
  )
}

export default ProjectCard