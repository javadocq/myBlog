import Nav from './Nav.jsx';
import '../style/Travel.css';
import ocean from '../assets/travel-ocean.jpeg';
import busan from '../assets/travel-busan.jpeg';
import cruse from '../assets/travel-cruse.jpeg';

export default function Travel() {
    return(<>
        <Nav />
        <div className='wrap'>
            <div className='travel-outline'>
                <img src={ocean} alt="" className="src" />
                <div className='content'>
                    <h2>을왕리</h2>
                    <p>을왕리에 가서 멋진 불꽃축제도 보고 조개구이도 먹으면서 좋은 하루를 보냈다.<br/>
                    다음에는 날이 좀 따뜻할 때 가서 바다에서 물장구를 쳐봐야겠다.
                    </p>
                    <button>자세히 보기</button>
                </div>
            </div>

            <div className='travel-outline'>
                <img src={busan} alt="" className="src" />
                <div className='content'>
                    <h2>부산</h2>
                    <p>처음으로 간 부산여행이었는데 따뜻해서 정말 좋았다.<br/>
                    맛있는 회도 실컷 먹고 재미있는 경험을 많이 쌓고 온 것 같다.
                    </p>
                    <button>자세히 보기</button>
                </div>
            </div>

            <div className='travel-outline'>
                <img src={cruse} alt="" className="src" />
                <div className='content'>
                    <h2>크루즈</h2>
                    <p>밤에 한강공원을 돌아다니는 크루즈를 타 보았는데 너무 좋았다.<br/>
                    시원한 밤 공기를 쐐며 달리는 일은 정말 좋은 것 같다.
                    </p>
                    <button>자세히 보기</button>
                </div>
            </div>
        </div>
    </>)
}
