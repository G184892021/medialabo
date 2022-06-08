let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);    

let kaisu=1;
let owari=0;
let yoso;
let seikai = 0;

let a = document.querySelector('#print');
a.addEventListener('click',hantei);

function hantei() {
    let b=document.querySelector('input[name="kaitou" ]')
    let c = b.value;
    yoso=Number(c);
    let e = document.querySelector('span#kaisu');
    e.textContent = kaisu;
    let f = document.querySelector('span#yoso');
    f.textContent = yoso;
    
    if(kaisu<4 && owari<1){
        console.log(kaisu+"回目の予想："+yoso);
        if(kaisu===3 && yoso !== kotae){
            let k =("まちがい、残念でした答えは"+kotae+"です。");
            let d = document.querySelector('p#result');
            d.textContent=k;
        }else if(yoso>kotae){
            let k="まちがい、答えはもっと小さいですよ。";
            let d =  document.querySelector('p#result');
            d.textContent=k;
        }else if(yoso<kotae){
            let k="まちがい、答えはもっと大きいですよ。";
            let d =  document.querySelector('p#result');
            d.textContent=k;
        }else if(yoso===kotae && seikai<1){
            let k="正解です。おめでとう！";
            let d =  document.querySelector('p#result');
            d.textContent=k;
            seikai++;
            owari++;
        }
        
    }else{
        let k = "答えは"+kotae+"でした。すでにゲームは終わっています";
        let d = document.querySelector('p#result');
        d.textContent=k;
    }
    kaisu = kaisu + 1;
}