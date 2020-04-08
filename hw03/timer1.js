let count = 0;
let id = setInterval( (msg) => {
    console.log(msg, new Date());
    count++;
    if(count >= 10) {
        clearInterval(id);
    }},
     1000, "현재 시각");
