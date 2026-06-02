        const alertId = '#'+'alert1'
        const alertId2 = '#'+'alert2'
        function btn(){
            document.querySelector(alertId).style.display='block';
        }
        function btn2(){
            document.querySelector(alertId2).style.display='block';
        }
        function btnClose(){
            document.querySelector(alertId).style.display='none'
        }
        function btnClose2(){
            document.querySelector(alertId2).style.display='none'
        }
        document.querySelector('#'+'b1').addEventListener('click',btn)
        document.querySelector('#'+'b2').addEventListener('click',btn2)
        document.querySelector('#'+'closeBtn1').addEventListener('click',btnClose)
        document.querySelector('#'+'closeBtn2').addEventListener('click',btnClose2)