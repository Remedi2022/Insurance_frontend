import './LeftNav.css'
// import homeicon from "../icons/home50_555.png";
import { Link } from 'react-router-dom';

export default function LeftNav() {
  return (
    <div className='leftnav'>
      <div className='leftnavWrapper'>
        <div className='leftnavMenu'>
          <h3 className='leftnavTitle'>OO보험</h3>
          <ul className='leftnavList'>
          <Link to = "/">
            <li className='leftnavListItem'>
              <img className='homeIcon' src={ process.env.PUBLIC_URL + '/icons/home50_555.png' } />
              홈
              </li>
            </Link>
            <Link to = "/Administration">
              <li className='leftnavListItem'>
              <img className='homeIcon' src={ process.env.PUBLIC_URL + '/icons/administration50_555.png' } />
              원무
              </li>
            </Link>
            <Link to = "/Examination">
            <li className='leftnavListItem'>
              <img className='homeIcon' src={ process.env.PUBLIC_URL + '/icons/doctor50_555.png' } />
              진료
              </li>
            </Link>
          </ul>
        </div>
        <span className='toggleMenu'>《 메뉴 접기</span>
      </div>
    </div>
  )
}