import Nav from './Nav.jsx';
import C from '../assets/C++.png';
import JAVA from '../assets/JAVA.png';
import REACT from '../assets/REACT.png';
import Certificate from '../assets/Certificate.png';

import '../style/Study.css';

export default function Study() {
    const content = [
        {title : 'C++',
        content : '프로그래밍 언어 C++ \n코딩 테스트를 위해 백준 문제 풀이'}
        , {title : 'JAVA',
        content : '프로그래밍 언어 JAVA \n백엔드 공부를 위한 기초 다지기'}
        , {title : 'REACT',
        content : '웹 개발 언어 REACT \n풀스택 개발자가 되기 위한 첫 걸음'}
        , {title : "자격증",
        content : '각종 IT 자격증 따기!'
        }
    ]
    return (<>
        <Nav />
        <div className='study-wrap'>
            <div className='outline'>
                <img src={C} alt="" className="blog" />
                <div className='content'>
                    <h2>{content[0].title}</h2>
                    <p>{content[0].content}</p>
                    <a href ="https://javadocq.tistory.com/category/C%2B%2B" className='study-link'>더 보기</a>
                    <p> 코딩 아이콘 제작자: Freepik - Flaticon</p>
                </div>
            </div>

            <div className='outline'>
                <img src={JAVA} alt="" className="blog" />
                <div className='content'>
                    <h2>{content[1].title}</h2>
                    <p>{content[1].content}</p>
                    <a href='https://javadocq.tistory.com/category/Web%20%EA%B0%9C%EB%B0%9C' className='study-link'>더 보기</a>
                    <p>자바 아이콘 제작자: Freepik - Flaticon</p>
                </div>
            </div>

            <div className='outline'>
                <img src={REACT} alt="" className="blog" />
                <div className='content'>
                    <h2>{content[2].title}</h2>
                    <p>{content[2].content}</p>
                    <a href='https://javadocq.tistory.com/category/%EB%B0%B1%EC%A4%80%ED%92%80%EC%9D%B4?page=1' className='study-link'>더 보기</a>
                    <p>Jsx 아이콘 제작자: UIUX Mall - Flaticon</p>
                </div>
            </div>

            <div className='outline'>
                <img src={Certificate} alt="" className="blog" />
                <div className='content'>
                    <h2>{content[3].title}</h2>
                    <p>{content[3].content}</p>
                    <a href='https://javadocq.tistory.com/category/%EC%9E%90%EA%B2%A9%EC%A6%9D%2C%EA%B3%B5%EB%B6%80' className='study-link'>더 보기</a>
                    <p>증명서 아이콘 제작자: Aranagraphics - Flaticon</p>
                </div>
            </div>
        </div>
    </>)
}