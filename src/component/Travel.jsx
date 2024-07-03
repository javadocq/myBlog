import Nav from './Nav.jsx';
import Modal from './Modal.jsx';
import '../style/Travel.css';
import ocean from '../assets/travel-ocean.jpeg';
import busan from '../assets/travel-busan.jpeg';
import cruse from '../assets/travel-cruse.jpeg';
import { useState } from 'react';

export default function Travel() {
    const [modal, setModal] = useState(false);
    const [modalIndex, setModalIndex] = useState(null);

    const content = [
        {title : '을왕리',
        content : '을왕리에 가서 멋진 불꽃축제도 보고 조개구이도 먹으면서 좋은 하루를 보냈다. 다음에는 날이 좀 따뜻할 때 가서 바다에서 물장구를 쳐봐야겠다.'}
        , {title : '부산',
        content : '처음으로 간 부산여행이었는데 따뜻해서 정말 좋았다. 맛있는 회도 실컷 먹고 재미있는 경험을 많이 쌓고 온 것 같다.'}
        , {title : '크루즈',
        content : '밤에 한강공원을 돌아다니는 크루즈를 타 보았는데 너무 좋았다. 시원한 밤 공기를 쐐며 달리는 일은 정말 좋은 것 같다.'}
    ]
    function changeModal(event) {
        setModalIndex(parseInt(event.target.value));
        setModal(!modal);
    }
    return(<>
        <Nav />
        <div className='wrap'>
            <div className='travel-outline'>
                <img src={ocean} alt="" className="src" />
                <div className='content'>
                    <h2>{content[0].title}</h2>
                    <p>{content[0].content}</p>
                    <button onClick={changeModal} value='0' >자세히 보기</button>
                    <Modal modal={modal} img={content[modalIndex]?.title === '을왕리' ? ocean : content[modalIndex]?.title === '부산' ? busan : cruse} content={content[modalIndex]} />
                </div>
            </div>

            <div className='travel-outline'>
                <img src={busan} alt="" className="src" />
                <div className='content'>
                    <h2>{content[1].title}</h2>
                    <p>{content[1].content}</p>
                    <button onClick={changeModal} value='1'>자세히 보기</button>
                </div>
            </div>

            <div className='travel-outline'>
                <img src={cruse} alt="" className="src-cruse" />
                <div className='content'>
                    <h2>{content[2].title}</h2>
                    <p>{content[2].content}</p>
                    <button onClick={changeModal} value='2'>자세히 보기</button>
                </div>
            </div>
        </div>
    </>)
}
