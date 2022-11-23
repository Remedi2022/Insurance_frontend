import './LeftNav.css'
// import homeicon from "../icons/home50_555.png";
import { Link } from 'react-router-dom';

export default function LeftNav() {
  return (
    <div className='leftnav'>
      <div className='leftnavWrapper'>
        <div className='leftnavMenu'>
          <h3 className='leftnavTitle'>메디보험</h3>
          <ul className='leftnavList'>
            <Link to="/">
              <li className='leftnavListItem'>
                홈
              </li>
            </Link>
            <Link to="/Notice">
              <li className='leftnavListItem'>
                공지사항
              </li>
            </Link>

          </ul>
        </div>
      </div>
    </div>
  )
}