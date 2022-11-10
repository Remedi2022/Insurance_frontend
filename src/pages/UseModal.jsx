import './UseModal.css'
import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal/Modal';
import getUsers from './Home';
import User from './User';
import useAsync from './useAsync';

function UseModal({myID}) {
    // useState를 사용하여 open상태를 변경한다. (open일 때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);
    const [popup, setPopup] = useState(false);
    const [address, setAddress] = useState(''); // 주소

    const handleInput = (e) => {
        setAddress(e.target.value);
        // 아래 코드는 object Object 나와서 위 코드로 변경.
        // setAddress({
        // ...address,
        // [e.target.name]: e.target.value
        // })
    }


    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <button className="modalOpenButton" onClick={() => 
            {
                setModalOpen(true);
                setUserId(myID);
            }}>접수 시작하기</button>
            {userId && <User id={userId} />}
            {/* header 부분에 텍스트를 입력한다. */}
            <Modal open={modalOpen} close={closeModal} header="신규 접수">
                {/* Modal.js <main> {props.children} </main>에 입력되는 내용. 리액트 함수형 모달 */}
                <div className="patientRegistration">
                    {/* <div className="title">
                        신환 등록
                    </div> */}
                    
                    {/* <div className="buttonWrapperRegister">
                        <button className="Button">취소</button>
                        <button className="Button">완료</button>
                        <button className="Button">접수</button>
                    </div> */}
                </div>
            </Modal>
        </div>
    );
}

export default UseModal;