import userEvent from '@testing-library/user-event';
import React from 'react';
import './Modal.css';

const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header, data } = props;
    return (
        // 모달이 열릴 때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>
                        <div className='infoMain'>
                            고객 정보
                            <div className='infoContent'>
                                <div className='infoContentTitle'>고객 성명</div>
                                <div className='infoContentMain'>이연수</div>
                            </div>

                            <div className='infoContent'>
                                <div className='infoContentTitle'>연락처</div>
                                <div className='infoContentMain'>010-1122-3344</div>
                            </div>

                            <div className='infoContent'>
                                <div className='infoContentTitle'>주민등록번호</div>
                                <div className='infoContentMain'>990101-2222222</div>
                            </div>

                            <div className='infoContent'>
                                <div className='infoContentTitle'>주소</div>
                                <div className='infoContentMain'>서울 마포구 와우산로 94</div>
                            </div>

                            <div className='infoContent'>
                                <div className='infoContentTitle'>환자 구분</div>
                                <div className='infoContentMain'>건강보험</div>
                            </div>
                        </div>

                        <div className='infoMain'>
                            진료 정보
                            <div className='infoContent'>
                                <div className='infoContentTitle'>요양기관 명칭</div>
                                <div className='infoContentMain'>레메디 피부과 의원</div>
                            </div>


                            <div className='infoContent'>
                                <div className='infoContentTitle'>사업자등록번호</div>
                                <div className='infoContentMain'>1234512345</div>
                            </div>

                            <div className='infoContent'>
                                <div className='infoContentTitle'>대표자</div>
                                <div className='infoContentMain'>박의사</div>
                            </div>

                            <div className='infoContent'>
                                <div className='infoContentTitle'>진료 일자</div>
                                <div className='infoContentMain'>2022-11-01</div>
                            </div>

                            <div className='infoContent'>
                                <div className='infoContentTitle'>유형</div>
                                <div className='infoContentMain'>외래</div>
                            </div>
                            <div className='infoContent'>
                                <div className='infoContentTitle'>환자등록번호</div>
                                <div className='infoContentMain'>000003</div>
                            </div>

                        </div>

                        <div className='infoMain'>
                            수납 정보

                            <div className='infoContent'>
                                <div className='infoContentTitle'>수납 일시</div>
                                <div className='infoContentMain'>2022-11-01 15:11:02</div>
                            </div>
                            <div className='infoContent'>
                                <div className='infoContentTitle'>총 금액</div>
                                <div className='infoContentMain'>114,130원</div>
                            </div>

                            <div className='infoContent'>
                                <div className='infoContentTitle'>본인 부담금</div>
                                <div className='infoContentMain'>3,639원</div>
                            </div>

                            <div className='infoContent'>
                                <div className='infoContentTitle'>공단 부담금</div>
                                <div className='infoContentMain'>8,491원</div>
                            </div>
                            <div className='infoContent'>
                                <div className='infoContentTitle'>비급여</div>
                                <div className='infoContentMain'>102,000원</div>
                            </div>

                        </div>
                    </main>
                    <footer>
                        {/* <button className="close" onClick={close}>
                            close
                        </button> */}
                        {/* <div className="buttonWrapperRegister"> */}
                        <div>
                            <button className="Button" id="withdraw" onClick={close}>취소</button>
                        </div>
                        <div>
                            <button className="Button">세부내역 확인</button>
                            <button className="Button">접수</button>
                        </div>
                        {/* </div> */}
                    </footer>
                </section>
            ) : null}
        </div>
    );
};

export default Modal;