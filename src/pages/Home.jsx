import './Home.css'
import LeftNav from "../components/LeftNav/LeftNav"
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import useAsync from './useAsync';
import User from './User';
import UseModal from './UseModal';


// <button onClick={refetch}>불러오기</button>;

async function getUsers() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
  }
  
function Content() {
    const [userId, setUserId] = useState(null);
    const [state, refetch] = useAsync(getUsers, [], true);
    const { loading, data: users, error } = state;

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return (
        <div className="content">
            <div className="fecthMenu">
                <button className="fecthMenuButton" onClick={refetch}>목록 불러오기</button>       
            </div>
        </div>
    )

    return (
        <div className="content">
            <div className="fecthMenuAgain">
                <button className="fecthMenuButton" onClick={refetch}>목록 새로고침</button>
            </div>
            <div className="homeMenu">
                {users.map(user => (
                    <div className="homeMenuItem">
                        <span className="homeMenuItemTitle">새로운 접수</span>
                        <span className="homeMenuItemDetail">
                        <li
                            key={user.id}
                        >
                            {user.username} ({user.name})
                        </li>
                        </span>
                        <div className="homeMenuButton">
                            {/*
                                <button
                            className="homeMenuItemButton"
                            onClick={() => setUserId(user.id)}
                            style={{ cursor: 'pointer' }}>확인</button>
                */}
                            <UseModal></UseModal>
                        </div>
                    </div>
                ))}
                
            </div>
            {userId && <User id={userId} />}
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