import { Link } from 'react-router-dom';
import './Header.css';

const HeaderLink = ({ page }) => {
  return <Link to={`/${page}`} className='headerlink-title'>{page}</Link>;
};

const Header = () => {
    return (
      <div className='header'>
        <HeaderLink page='home' />
        <HeaderLink page='about' />
        <HeaderLink page='form' />
      </div>
    );
  };
  
  export default Header;