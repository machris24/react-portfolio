import RESUME from '../../assets/cv.pdf'

const ResumeDL = () => {
  return (
    <div className='resume'>
      <a href={RESUME} download className='btn'>Download my resume</a>
      <a href='#contact' className='btn btn-primary-color-light'>Let's Talk</a>

    </div>
  )
}

export default ResumeDL