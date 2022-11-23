import hl7parser from 'hl7parser'
import LeftNav from "../LeftNav/LeftNav"
import './Notice.css'

function Content() {
    var hl7parser = require("hl7parser");

    var message = hl7parser.create("MSH|^~.&|||||20221113034406||EHC^E01^EHC_E01|123|P|2.6||||||||||||||\rIVC|1|||OR|NORM|FN|20221113034406|202970&KRW||레메디피부과의원^^^^^^^^^2221166666|SJlife||||||||^박^의사||||||AMB||||||\rPSS|1||1|202970&KRW|보험사제출서류|\rPSG|1||1|Y|16970&KRW|진찰료|\rPID|||27^^^^PI~1805314025145^^^^SS||류^수지|\rIN1|1|NHI|NHIS||||||||||||||||||||||||||||||||||5091&KRW|||||||||||||||||||\rIN2|||||||||||||||||||||||||||||MMD^^^AT&11879&KRW||||||||||||||||||||||||\rPSL|1||1|||P|AA||초진진찰료|20221113034204|||16970&KRW|1|16970&KRW|5091&KRW|||||Y|||||||1||||||||||||||||||||1|\rPSG|2||2|Y|186000&KRW|투약료|\rPSL|1||1|||P|L281||아토베리어 잇칭 크림 MD|20221113034204|||62000&KRW|1|62000&KRW|62000&KRW|||||Y|||||||2||||||||||||||||||||1|\rPSL|2||2|||P|L209||더마베이비 프로 크림 MD|20221112034204|||62000&KRW|2|124000&KRW|124000&KRW|||||Y|||||||2||||||||||||||||||||1|");
    // console.log(message.get("PID.5.2").toString()); // prints "Bob"
    var name = message.get("PID.5.1").toString() + message.get("PID.5.2").toString();
    var rrn = message.get("PID.3").get(1).get(0).toString().substring(0, 6) + "-" + message.get("PID.3").get(1).get(0).toString().substring(6);
    var ptype = message.get("IN1.2").toString() == "NHI" ? "건강보험" : "기타보험";

    var hname = message.get("IVC.10.1").toString();
    var hnumber = message.get("IVC.10.10").toString();
    var hceo = message.get("IVC.19.2").toString() + message.get("IVC.19.3").toString()
    var examdate = message.get("IVC.7").toDate().toLocaleDateString("ja-JP");
    var htype = message.get("IVC.25").toString() == "AMB" ? "외래" : "입원";
    var patientnum = message.get("PID.3.1").toString().padStart(6, '0');

    var paydate = message.get("IVC.7").toDate().toLocaleDateString("ja-JP") + " " + message.get("IVC.7").toDate().toLocaleTimeString();
    var totalpay = message.get("PSS.4.1.1").toInteger();
    var selfpay = message.get("IN1.37.1.1").toInteger();
    var inspay = message.get("IN2.29.4.2").toInteger();
    var nopay = totalpay - selfpay - inspay;
    return (
        <div className='noticeContent'>
            <div className='infoMain'>
                고객 정보
                <div className='infoContent'>
                    <div className='infoContentTitle'>고객 성명</div>
                    <div className='infoContentMain'>{name}</div>
                </div>

                <div className='infoContent'>
                    <div className='infoContentTitle'>연락처</div>
                    <div className='infoContentMain'></div>
                </div>

                <div className='infoContent'>
                    <div className='infoContentTitle'>주민등록번호</div>
                    <div className='infoContentMain'>{rrn}</div>
                </div>

                <div className='infoContent'>
                    <div className='infoContentTitle'>주소</div>
                    <div className='infoContentMain'></div>
                </div>

                <div className='infoContent'>
                    <div className='infoContentTitle'>환자 구분</div>
                    <div className='infoContentMain'>{ptype}</div>
                </div>
            </div>

            <div className='infoMain'>
                진료 정보
                <div className='infoContent'>
                    <div className='infoContentTitle'>요양기관 명칭</div>
                    <div className='infoContentMain'>{hname}</div>
                </div>


                <div className='infoContent'>
                    <div className='infoContentTitle'>사업자등록번호</div>
                    <div className='infoContentMain'>{hnumber}</div>
                </div>

                <div className='infoContent'>
                    <div className='infoContentTitle'>대표자</div>
                    <div className='infoContentMain'>{hceo}</div>
                </div>

                <div className='infoContent'>
                    <div className='infoContentTitle'>진료 일자</div>
                    <div className='infoContentMain'>{examdate}
                    </div>
                </div>

                <div className='infoContent'>
                    <div className='infoContentTitle'>유형</div>
                    <div className='infoContentMain'>{htype}</div>
                </div>
                <div className='infoContent'>
                    <div className='infoContentTitle'>환자등록번호</div>
                    <div className='infoContentMain'>{patientnum}</div>
                </div>

            </div>

            <div className='infoMain'>
                수납 정보

                <div className='infoContent'>
                    <div className='infoContentTitle'>수납 일시</div>
                    <div className='infoContentMain'>{paydate}</div>
                </div>
                <div className='infoContent'>
                    <div className='infoContentTitle'>총 금액</div>
                    <div className='infoContentMain'>{totalpay.toLocaleString()}원</div>
                </div>

                <div className='infoContent'>
                    <div className='infoContentTitle'>본인 부담금</div>
                    <div className='infoContentMain'>{selfpay.toLocaleString()}원</div>
                </div>

                <div className='infoContent'>
                    <div className='infoContentTitle'>공단 부담금</div>
                    <div className='infoContentMain'>{inspay.toLocaleString()}원</div>
                </div>
                <div className='infoContent'>
                    <div className='infoContentTitle'>비급여</div>
                    <div className='infoContentMain'>{nopay.toLocaleString()}원</div>
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

