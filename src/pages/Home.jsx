import './Home.css'
import LeftNav from "../components/LeftNav/LeftNav"
import { Link } from 'react-router-dom';

function Content() {
    return (
        <div className="content">
            <div className="homeMenu">
                <div className="homeMenuItem">
                    <span className="homeMenuItemTitle">새로운 접수</span>
                    <span className="homeMenuItemDetail">이름: 이연수</span>
                    {/* <div className="buttonWrapper"> */}
                    <div className="homeMenuButton">
                        <Link to = "/Administration">
                            <button>확인</button>
                        </Link>
                    </div>
                    {/* </div> */}
                </div>

                <div className="homeMenuItem">
                    <span className="homeMenuItemTitle">새로운 접수</span>
                    <span className="homeMenuItemDetail">이름: 이가영</span>
                    {/* <div className="buttonWrapper"> */}
                    <div className="homeMenuButton">
                        <Link to = "/Administration">
                            <button>확인</button>
                        </Link>
                    </div>
                    {/* </div> */}
                </div>
                
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div className="Home">
            <div className="container">
                <LeftNav />
                <Content />
                {/* <div className=""> page </div> */}
            </div>
        </div>

    // <div class="container">
	//     <div class="item">LEFT_NAV</div>
	//     <div class="item">MAIN</div>
	//     <div class="item">helloflex</div>
    // </div>
    )
}