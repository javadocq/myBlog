import '../style/Homepage.css';
import Nav from './Nav.jsx';

export default function Homepage() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date();
    return (<>
        <Nav />
        <div className='date-name'>
            <div className='date'>{`${monthNames[date.getMonth()]}, ${date.getDate()}`}</div>
            <div className='name'>JAVADOCQ BLOG</div>
        </div>

        <div className='addr'>
            <p>Instagram : jongwon006</p><br/>
            <a href="https://github.com/javadocq?tab=repositories">Github : https://github.com/javadocq?tab=repositories</a><br/>
            <p>E-mail : han18264@naver.com</p><br/>
            <a href="https://javadocq.tistory.com">Tistory : https://javadocq.tistory.com</a>
        </div>
    </>);
}