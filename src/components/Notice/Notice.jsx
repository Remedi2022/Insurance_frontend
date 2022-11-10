import hl7parser from 'hl7parser'
import LeftNav from "../LeftNav/LeftNav"
import './Notice.css'

function Content() {
    var hl7parser = require("hl7parser");

    var message = hl7parser.create("MSH|^~\&|||||20221101151102||EHC^E01^EHC_E01|1|P|2.6||||||||||||||\rIVC|15|||OR|NORM|FN|20221101151102|102000||레메디피부과의원    ^^^^^^^^^1234512345|SJlife||||||||^박^의사||||||AMB||||||\rPSS|1||1|102000&KRW|진료비세부내역|\rPSG|1||1|Y|102000&KRW|진찰료|\rPSL|1||1|||P|AA||재진진찰료|202211011506|||12130&KRW|1|12130&KRW|    3639&KRW|||||Y|||||||1||||||||||||||||||||1|\rPSL|5||2|||P|L209||루트힐 모이스처라이저 MD|202211011506|||30000&    KRW|1|30000&KRW|30000&KRW|||||Y|||||||2||||||||||||||||||||1|\rPSL|4||3|||P|L209||제로이드 인텐시브 로션 MD|202211011506|||36000&    KRW|2|72000&KRW|72000&KRW|||||Y|||||||2||||||||||||||||||||1|\rPID|||6^d2^d3^d4^PI~9901012222222^d6^d7^SS||이^연수|\rIN1|1|NHI|NHIS||||||||||||||||||||||||||||||||||3639|||||||||||||||||||\rIN2|||||||||||||||||||||||||||||8491||||||||||||||||||||||||");
    // console.log(message.get("PID.5.2").toString()); // prints "Bob"
    return (
        <div className='noticeContent'>
            <div className='infoMain'>
                            고객 정보
                            <div className='infoContent'>
                                <div className='infoContentTitle'>고객 성명</div>
                                <div className='infoContentMain'>{message.get("PID.5.1").toString()}{message.get("PID.5.2").toString()}</div>
                            </div>
                        
                            <div className='infoContent'>
                                <div className='infoContentTitle'>연락처</div>
                                <div className='infoContentMain'></div>
                            </div>

                            <div className='infoContent'>
                                <div className='infoContentTitle'>주민등록번호</div>
                                <div className='infoContentMain'>{message.get("PID.3").toString()}</div>
                            </div>

                            <div className='infoContent'>
                                <div className='infoContentTitle'>주소</div>
                                <div className='infoContentMain'></div>
                            </div>
                        
                        <div className='infoContent'>
                                <div className='infoContentTitle'>환자 구분</div>
                                <div className='infoContentMain'></div>
                            </div>
                        </div>

                        <div className='infoMain'>
                            진료 정보
                            <div className='infoContent'>
                                <div className='infoContentTitle'>요양기관 명칭</div>
                                <div className='infoContentMain'>{message.get("IVC.10.1").toString()}</div>
                            </div>

                            
                            <div className='infoContent'>
                                <div className='infoContentTitle'>사업자등록번호</div>
                                <div className='infoContentMain'>{message.get("IVC.10.10").toString()}</div>
                            </div>
                        
                            <div className='infoContent'>
                                <div className='infoContentTitle'>대표자</div>
                                <div className='infoContentMain'></div>
                            </div>

                            <div className='infoContent'>
                                <div className='infoContentTitle'>진료 일자</div>
                                <div className='infoContentMain'>{message.get("IVC.7").toDate().toLocaleDateString("ja-JP")}
                                </div>
                            </div>

                            <div className='infoContent'>
                                <div className='infoContentTitle'>유형</div>
                                <div className='infoContentMain'></div>
                            </div>
                            <div className='infoContent'>
                                <div className='infoContentTitle'>환자등록번호</div>
                                <div className='infoContentMain'></div>
                            </div>

                        </div>

                        <div className='infoMain'>
                            수납 정보
                            
                            <div className='infoContent'>
                                <div className='infoContentTitle'>수납 일시</div>
                                <div className='infoContentMain'>{message.get("IVC.7").toDate().toLocaleDateString("ja-JP")} {message.get("IVC.7").toDate().toLocaleTimeString()}</div>
                            </div>
                            <div className='infoContent'>
                                <div className='infoContentTitle'>총 금액</div>
                                <div className='infoContentMain'></div>
                            </div>
                        
                            <div className='infoContent'>
                                <div className='infoContentTitle'>본인 부담금</div>
                                <div className='infoContentMain'></div>
                            </div>

                            <div className='infoContent'>
                                <div className='infoContentTitle'>공단 부담금</div>
                                <div className='infoContentMain'></div>
                            </div>
                            <div className='infoContent'>
                                <div className='infoContentTitle'>비급여</div>
                                <div className='infoContentMain'></div>
                            </div>

                        </div>
                        </div>
        )
}

export default function Notice() {
    return (
        <div className="Home">
            <div className="container">
                <LeftNav />
                <Content />
                {/* <div className=""> page </div> */}
            </div>
        </div>
    )
}

