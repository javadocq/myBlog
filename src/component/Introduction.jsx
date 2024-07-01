import Nav from './Nav.jsx';
import '../style/Introduction.css'

import rightArrow from '../assets/rightArrow.png';
import leftArrow from '../assets/leftArrow.png';
import bottomArrow from '../assets/bottomArrow.png';

export default function Introduction() {
    return (<>
        <Nav />
        <div className='Outskirts'>
            <div className='layout'>
                    <div>
                        <p className='Title'>My Merit</p>
                        <div className='line'></div>
                        <div className='subTitle'>1. Passion <span className='content'>무엇이든 열심히 하려는 장점</span></div>
                        <div className='line'></div>
                        <div className='subTitle'>2. Basis<span className='content'>기초부터 탄탄히 쌓아가는 장점</span></div>
                        <div className='line'></div>
                        <div className='subTitle'>3. Responsibility<span className='content'>내가 맡은 일은 끝까지 책임지는 장점</span></div>
                        <div className='line'></div>
                    </div>
                    <div>
                        <p className='Title'>License</p>
                        <div className='line'></div>
                        <div className='subTitle'>1. 정보처리산업기사<span className='content'>2020.02.06</span></div>
                        <div className='line'></div>
                        <div className='subTitle'>2. 리눅스마스터<span className='content'>2018.09.21</span></div>
                        <div className='line'></div>
                        <div className='subTitle'>3. 컴퓨터활용능력<span className='content'>2020.10.09</span></div>
                        <div className='line'></div>
                    </div>    
                    <div>
                        <p className='Title'>Activity & Education</p>
                        <div className='first-line'>
                            <div className='box'>
                                <div className='box-top'>서울공업고등학교 졸업</div>
                                <p className='box-middle'>- 2020.02</p>
                            </div>
                            <img src={rightArrow} alt="화살표" className="arrow" />
                            <div className='box'>
                                <div className='box-top'>KGITBANK <br/>보안엔지니어 과정 수료</div>
                                <p className='box-middle'>- 2020.09</p>
                            </div>
                        </div>
                        <img src={bottomArrow} alt="화살표" className="middlearrow" />
                        <div className='second-line'>
                            <div className='box'>
                                <div className='box-top'>한양대 에리카 재학</div>
                                <p className='box-middle'>- 2023.03 ~ ing</p>
                            </div>
                            <img src={leftArrow} alt="화살표" className="arrow" />
                            <div className='box'>
                                <div className='box-top'>멋쟁이사자 동아리 12기</div>
                                <p className='box-middle'>- 2024. 04 ~ ing</p>
                            </div>
                        </div>
                    </div> 
            </div>
        </div>
    </>)
}