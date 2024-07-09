import { Link } from 'react-router-dom';
import '../style/Nav.css';

export default function Nav() {
    return(
    <div className='item-area'>
            <div className="tag-line"></div>
            <div className="item">
                <Link to="/">Homepage</Link>
                <Link to="/travel">Travel</Link>
                <Link to="/study">Study</Link>
                <Link to="/introduction">Introduction</Link>
            </div>
            <div className="tag-line"></div>
        </div>
    )
}