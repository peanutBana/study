const userid = document.querySelector('#userid');
const pwd1 = document.querySelector('#pwd1');
const pwd2 = document.querySelector('#pwd2');
const level = document.querySelector('#level');
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const submtitButton = document.querySelector('#submit_button');
const sex = document.querySelector('#sex');
let chkFlag = true;

submtitButton.addEventListener('click',function(){
    // 비밀번호 : 공백여 / 특수문자, 문자, 숫자 포함 형태의 8~15자리입력
    // 비밀번호 확인 : 공백여부 / 비밀번호와 일치 여부
    // 이름 : 공백여부 / 
    // 메일 주소 :  공백여부 / 메일형식에 맞는지 
    // 연락처 : 필수값x => 공백여부x / 연락처 형식에 맞는지 
    //span.textContent = 'alert_msg'
    //아이디 공백여부 / 중복여부
    let chkArray = [idConfirm(), pwd1Confirm(), pwd2Confirm(), fullnameConfirm(), emailConfirm(), telConfirm(),sexConfirm()];

    let chkFlag = true;
    for( const chk of chkArray){
        if(!chk){  //false를 리턴할 때
            chkFlag = false;
        }
    }
    if(chkFlag){    //chkFlag true
        document.signup.submit()
    }

    

    /* 방법 1
    const idConf = idConfirm()
    const pwd1Conf = pwd1Confirm()
    const pwd2Conf = pwd2Confirm()
    const fullNameConf = fullnameConfirm()
    const emailConf = emailConfirm()
    const telConf = telConfirm()

    if(idConf && pwd1Conf && pwd2Conf && fullNameConf && emailConf && telConf){
        document.signup.submit();
    }
    */
})

function idConfirm(){
    const mustId = document.querySelector('.must_id');
    const overlap = document.querySelector('.overlap');

    //텍스트가 남아있는 것을 방지하기 위해
    mustId.style.display = 'none';
    overlap.style.display = 'none';

    //userid가 공백일 때
    if(!userid.value){      
        mustId.style.display = 'block'
        return false
    } else {
        if(!idCheck(userid.value)){         //id 중복시 실행됨
            overlap.style.display = 'block';
            return false;
        }
    }
    return true;
}


function pwd1Confirm(){
    const mustPwd1 = document.querySelector('.must_pwd1');
    const regPwd = document.querySelector('.reg_pwd');

    mustPwd1.style,display = 'none';
    regPwd.style,display = 'none';

    //pwd1이 공백일 때
    if(!pwd1.value){
        mustPwd1.style.display = 'block';
        return false
    } else {
        if(!pwdCheck(pwd1.value)){      //정규 표현식에 맞지 않을 때
            regPwd.style.display = 'block';
            mustPwd1.style.display = 'none';
            return false;
        }
    }
    return true;
}


function pwd2Confirm(){
    const mustPwd2 = document.querySelector('.must_pwd2');
    const same = document.querySelector('.same');

    mustPwd2.style,display = 'none';
    same.style,display = 'none';

    if(!pwd2.value){
        mustPwd2.style.display = 'block';
        return false;
    } else {
        if(pwd1.value && pwd2.value){       //두개의 값이 있는지 확인
            if(pwd1.value !== pwd2.value){      //두개의 값이 같지 않다면
                same.style.display = 'block';
                return false;
            }       
        }
    }
    return true;
}

function fullnameConfirm(){
    const mustFullname = document.querySelector('.must_fullname')
    
    mustFullname.style.display = 'none';

    if(!fullname.value){
        mustFullname.style.display = 'block';
        return false;
    }
    return true;
}


function emailConfirm(){
    const mustEmail = document.querySelector('.must_email');
    const regEmail = document.querySelector('.reg_email');

    mustEmail.style.display = 'none';
    regEmail.style.display = 'none';

    if(!email.value){
        mustEmail.style.display = 'block';
        return false;
    } else {
        if(!emailCheck(email.value)){
            regEmail.display = 'block';
            return false;
        }
    }

    return true;
}


function telConfirm(){
    const regTel = document.querySelector('.reg_tel')
    regTel.style.display = 'none'

    //전화번호가 있고 정규식 체크(유효성)에 통화사지 못했을 때
    if(!telCheck(tel.value) && tel.value){
        regTel.style.display = 'block'
        return false
    }

    return true
}

function sexConfirm(){
    const mustSex = document.querySelector('.must_sex');
    mustSex.style.display = 'none';
  
    if (!sex.value) {
      mustSex.style.display = "block";
      return false;
    }
    return true;
  }

//  중복된 아이디 체크
function idCheck(id){
    return true;
}

//비밀번호 정규식 체크,
function pwdCheck(pwd) {
    //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
    const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return reg.test(pwd);
}

function telCheck(tel) {
    const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return reg.test(tel);
}

function emailCheck(email) {
    const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return reg.test(email);
}