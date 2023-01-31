import Ecommerce from '../assets/projects/1.png'
import Portfolio from '../assets/projects/2.png'
import EcommerceAPI from '../assets/projects/3.png'
import PortfolioPoster from '../assets/projects/11.png'
import EcommerceAPIPoster from '../assets/projects/22.jpg'
import EcommercePoster from '../assets/projects/33.jpg'


const projectsData = [
    {
        id: 1,
        image: Portfolio,
        title: 'Portfolio Website',
        video: PortfolioPoster,
        subtitle: 'Static responsive portfolio website hosted in Gitlab',
        git: 'https://github.com/machris24/webportfolio',
        demo: 'https://machris24.github.io/webportfolio/',
        tags: ["HTML", "CSS", "Bootstrap", "JavaScrpt", "Git"]
    },
    {
        id: 2,
        image: EcommerceAPI,
        title: 'Ecommerce API',
        video: EcommerceAPIPoster,
        subtitle: 'Developed an E-Commerce API using Node and Express.js',
        git: 'https://github.com/machris24/ecommerce-api',
        demo: 'https://documenter.getpostman.com/view/24219045/2s8Z6vYERh',
        tags: ["MongoDB", "Express.js", "REST API", "Node.js", "JSON", "Robo3T", "Postman", "Render", "Git"]
    },
    {
        id: 3,
        image: Ecommerce,
        title: 'Ecommerce Website',
        video: EcommercePoster,
        subtitle: 'Completing an E-commerce Full-Stack Application using the MERN Stack',
        git: 'https://github.com/machris24/ecommerce-website',
        demo: 'https://ecommerce-app-react-six.vercel.app/',
        tags: ["React.js", "JavaScript", "Bootstrap", "CSS", "HTML", "MongoDB", "Vercel"]
    }

]

export default projectsData;