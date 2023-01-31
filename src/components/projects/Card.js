

function Card({ data: { id, image, title, video, subtitle, git, demo, tags:[...tags] } }) {

  const tagging = tags.map(function(tag) {
    return <span className="tag">{tag}</span>
  })

  return (
      <div 
        key={id} 
        className='card'
      >

      <div className='card-inner'>

        <div className="card-face back">
          <div className="card-content">

            <div className="card-header">

              <img 
              src={image} 
              alt={title} 
              className="project-item-image" />

            </div>

            <div className="card-body">

              <div className="description">
                <h3>{title}</h3>
                <small>{subtitle}</small>
              </div>

              <div className="project-item-links">
                <a href={git} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>

            </div>

            <div className="card-footer">
              <div className="tags">
              {tagging}
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </div>      
                
  );
}

export default Card;