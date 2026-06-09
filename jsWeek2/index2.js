$(function(){
    $('form').on('submit', function(e){
        let id = $('#id-input').val();
        if(id === null) id = '';
        let email = $('#email-input').val();
        if(email === null) email = '';
        let pw = $('#pw-input').val();
        if(pw === null) pw = '';
        let pwCheck = $('#pw-check-input').val();
        if(pwCheck === null) pwCheck = '';

        // 아이디가 비었거나 공백만 있는지 검사
        let 공백인가 = true;
        for(let i = 0; i < id.length; i++){
            if(id.charAt(i) !== ' '){
                onlySpaces = false;
                break;
            }
        }
        if(id === '' || onlySpaces){
            e.preventDefault();
            alert('아이디를 입력해주세요');
            return;
        }

        if(id.length < 5){
            e.preventDefault();
            alert('아이디는 5자 이상 입력해주세요');
            return;
        }

        if(email === ''){
            e.preventDefault();
            alert('이메일을 입력해주세요');
            return;
        }

        if(pw === ''){
            e.preventDefault();
            alert('비밀번호를 입력해주세요');
            return;
        }

        if(pw.length < 8){
            e.preventDefault();
            alert('비밀번호는 8자 이상 입력해주세요');
            return;
        }

        if(pw !== pwCheck){
            e.preventDefault();
            alert('비밀번호가 일치하지 않습니다');
            return;
        }
        // 통과하면 제출
    });
});