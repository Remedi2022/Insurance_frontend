import './Home.css'
import LeftNav from "../components/LeftNav/LeftNav"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User';
import Modal from '../components/Modal/Modal';


// <button onClick={refetch}>불러오기</button>;


function Content({ Userdata }) {
    // const [users, setUsers] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    // const [userId, setUserId] = useState(null);
    // const [modalOpen, setModalOpen] = useState(false);

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //       try {
    //         // 요청이 시작 할 때에는 error 와 users 를 초기화하고
    //         setError(null);
    //         setUsers(null);
    //         // loading 상태를 true 로 바꿉니다.
    //         setLoading(true);
    //         const response = await axios.get(
    //             'https://jsonplaceholder.typicode.com/users'
    //         );
    //         setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
    //       } catch (e) {

    //         setError(e);
    //       }
    //       setLoading(false);
    //     };

    //     fetchUsers();
    //   }, []);

    // const openModal = () => {
    //     setModalOpen(true);
    // };
    // const closeModal = () => {
    //     setModalOpen(false);
    // };

    // if (loading) return <div>로딩중..</div>;
    // if (error) return <div>에러가 발생했습니다</div>;
    // if (!users) return null;

    // return (
    //     <div className="content">
    //         <div className="fecthMenuAgain">
    //             {/* <button className="fecthMenuButton" onClick={refetch}>목록 새로고침</button> */}
    //         </div>
    //         <div className="homeMenu">
    //             {users.map(user => (
    //                 <div className="homeMenuItem">
    //                     <span className="homeMenuItemTitle">접수 시작하기</span>
    //                     <span className="homeMenuItemDetail">
    //                     <li
    //                         key={user.id}
    //                     >
    //                         {user.username} ({user.name})
    //                     </li>
    //                     </span>
    //                     <div className="homeMenuButton">
    //                         <button
    //                             className="homeMenuItemButton"
    //                             onClick={() => {setUserId(user.id); setModalOpen(true);}}
    //                             style={{ cursor: 'pointer' }}>확인
    //                         </button>
    //                         <Modal open={modalOpen} close={closeModal} header="상세 정보">
    //                         {/* Modal.js <main> {props.children} </main>에 입력되는 내용. 리액트 함수형 모달 */}
    //                             <div className="patientRegistration">
    //                             </div>
    //                             {userId && <User id={userId} />}
    //                         </Modal>
    //                     </div>
    //                 </div>
    //             ))}

    //         </div>
    //     </div>
    // )


    const [userId, setUserId] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="content">
            <div className="homeMenu">
                {Userdata.map(user => (
                    <div className="homeMenuItem">
                        <span className="homeMenuItemTitle">접수 시작하기</span>
                        <span className="homeMenuItemDetail">
                            <li
                                key={user.id}
                            >
                                {user.name}
                                ({user.phone})
                            </li>
                        </span>
                        <div className="homeMenuButton">
                            <button
                                className="homeMenuItemButton"
                                onClick={() => { setUserId(user.id); setModalOpen(true); }}
                                style={{ cursor: 'pointer' }}>확인
                            </button>
                            <Modal open={modalOpen} close={closeModal} header="" data={user}>
                                {/* Modal.js <main> {props.children} </main>에 입력되는 내용. 리액트 함수형 모달 */}
                                <div className="patientRegistration">
                                </div>
                            </Modal>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default function Home({ Userdata }) {
    return (
        <div className="Home">
            <div className="container">
                <LeftNav />
                <Content Userdata={Userdata} />
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