// import { Link } from 'react-router-dom'
import './NavBar.css'
import Scrollspy from 'react-scrollspy'
const NavBar = () => {
    const navItems = [
        {
            // path: '/',
            title: 'Home',
            id: 'home'
        },
        {
            // path: '/about',
            title: 'About us',
            id: 'about'
        }
    ]
    return (
        <div className="px-16 bg-transparent bg-fixed top-0 py-6 flex justify-between items-center ">
            <h2 className="text-2xl font-bold greadient ">Portfolio</h2>

        </div>
    );
};
{/* <Scrollspy items={navItems.map(item => item.id)} className='flex gap-3' currentClassName='active' compnentTag='ul'>
    {
        navItems.map(item => <li className='text-lg relative after:bg-black after:h-[2px] after:w-full after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200 after:transform after:scale-x-0 hover:after:scale-x-100' key={item.title}><a to={item.id}>{item.title}</a></li>)
    }
</Scrollspy> */}
export default NavBar;