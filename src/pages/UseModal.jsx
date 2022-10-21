import './UseModal.css'
import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal/Modal';

function UseModal() {
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
            <button className="modalOpenButton" onClick={openModal}>접수 시작하기</button>
            {/* header 부분에 텍스트를 입력한다. */}
            <Modal open={modalOpen} close={closeModal} header="신규 접수">
                {/* Modal.js <main> {props.children} </main>에 입력되는 내용. 리액트 함수형 모달 */}
                <div className="patientRegistration">
                    {/* <div className="title">
                        신환 등록
                    </div> */}
                    <div className="inputWrapper">
                        <div className="inputBoxName">
                            <div>이름</div>
                            <input id="hospitalContent"
                                type="text"
                                name="hospitalContent"
                                // placeholder="이름"
                                maxLength="8"
                                // pattern="[0-9]+"
                            />
                        </div>
                        <div className="inputBoxRRN">
                            <div>주민등록번호</div>
                            <input id="RRN1Content"
                                type="text"
                                name="RRN1Content"
                                // placeholder="주민등록번호"
                                maxLength="6"
                            />
                            <span>&nbsp;-&nbsp;</span>
                            <input id="RRN2Content"
                                type="text"
                                name="RRN2Content"
                                // placeholder="주민등록번호"
                                maxLength="7"
                            />
                        </div>
                        <div className="inputBoxContact">
                            <div>대표 연락처</div>
                            <input id="contact1Content"
                                type="text"
                                name="contact1Content"
                                // placeholder="대표 연락처"
                                maxLength="3"
                            />
                            <span>&nbsp;-&nbsp;</span>
                            <input id="contact2Content"
                                type="text"
                                name="contact2Content"
                                // placeholder="대표 연락처"
                                maxLength="4"
                            />
                            <span>&nbsp;-&nbsp;</span>
                            <input id="contact3Content"
                                type="text"
                                name="contact3Content"
                                // placeholder="대표 연락처"
                                maxLength="4"
                            />
                        </div>
                        <div className="inputBoxEmergencyContact">
                            <div>비상 연락처</div>
                            <input id="emergencyContact1Content"
                                type="text"
                                name="emergencyContact1Content"
                                // placeholder="비상 연락처"
                                maxLength="3"
                            />
                            <span>&nbsp;-&nbsp;</span>
                            <input id="emergencyContact2Content"
                                type="text"
                                name="emergencyContact2Content"
                                // placeholder="비상 연락처"
                                maxLength="4"
                            />
                            <span>&nbsp;-&nbsp;</span>
                            <input id="emergencyContact2Content"
                                type="text"
                                name="emergencyContact2Content"
                                // placeholder="비상 연락처"
                                maxLength="4"
                            />
                        </div>
                    </div>
                    <div className="termsWrapper">
                        <div>약관</div>
                        <div>
                            terms of use
                            terms and conditions
                            terms of use
                            terms and conditions
                            terms of use
                            terms and conditions
                        </div>
                    </div>
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