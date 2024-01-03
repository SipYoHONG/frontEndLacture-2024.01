let process = require("process");
let {stdin} = process;

stdin.on("readable", function scanf(){
    let stdinBuffer = stdin.read();
    let stdinNumber = stdinBuffer.toString().split(" ");
    let [H, M] = stdinNumber.map(input => {
        return parseInt(input);
    });

    M = M-45;

    if(M >= 0){
    }
    else if(H == 0){
        H = 23;
        M = 60+M
    }
    else{
        H--;
        M = 60+M
    }
    console.log('${H} ${M}');
    stdin.removeListener("readable", scanf);
});

