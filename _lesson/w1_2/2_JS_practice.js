function find_msr(list){
    let cnt = 0;
    for(let i=0; i<list.length; i++){
        if(list[i].IDEX_MVL < 40){
            console.log(list[i].MSRSTE_NM);
            cnt++;
        }
    }
    console.log(cnt);
}

function find_msr_n(n){
    let cnt = 0;
    let list = mise_list;

    for(let i=0; i<list.length; i++){
        if(list[i].IDEX_MVL < n){
            console.log(list[i].MSRSTE_NM);
            cnt++;
        }
    }
    console.log(cnt);
}


//자전거(parkingBikeTotCnt)가 5개 이하인 정류장의 이름을 출력하기

function find_stn(){
    let cnt = 0;
    let list = bikes;

    for(let i=0; i<list.length; i++){
        if(list[i].parkingBikeTotCnt <= 5){
            console.log(list[i].stationName);
            cnt++;
        }
    }
    console.log(cnt);
}

// 아래가 선생님 코드. 탐색을 좀 덜하나..?
function find_stn(){
    let cnt = 0;
    
    for(let i=0; i<list.length; i++){
        let list = bikes[i];
        if(list.parkingBikeTotCnt <= 5){
            console.log(list[i].stationName);
            cnt++;
        }
    }
    console.log(cnt);
}

//파라미터를 받았을 때
function find_stn(n){
    let cnt = 0;
    
    for(let i=0; i<list.length; i++){
        let list = bikes[i];
        if(list.parkingBikeTotCnt <= n){
            console.log(list[i].stationName);
            cnt++;
        }
    }
    console.log(cnt);
}