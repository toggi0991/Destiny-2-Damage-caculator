let Add_Buff_top_Distance_length = 0;
let Add_Buff_height_length = 20;

function add_buff(){
    
    Add_Buff_top_Distance_length = Add_Buff_top_Distance_length + 20;
    Add_Buff_height_length = Add_Buff_height_length + 20;

    // 버프창 칸 높이 [Add_Buff_height_length] px; 만큼 추가
    document.getElementById("buff").style.height=Add_Buff_height_length + "px";
    // select 만듦
    const select = document.createElement('select');
    // select class="effect-select"; style="position: absolute; top: [Add_Buff_top_Distance_length] px;" 추가
    select.setAttribute("class", "effect-select");
    select.setAttribute("style", "position: absolute; top: " + Add_Buff_top_Distance_length + "px;");


    // 각종 버프 이름 적힌 option 추가 
    const option_1 = document.createElement('option');
    option_1.innerHTML = "빛의 샘";

    const option_2 = document.createElement('option');
    option_2.innerHTML = "빛의 무기";


    // select 에 모든 option 추가 
    select.appendChild(option_1);
    select.appendChild(option_2);

    // select의 부모로 설정할 컨테이너 아이디를 가져오고 붙임
    buff_select_container = document.getElementById("buff-select-container");

    buff_select_container.appendChild(select);


    // 두번쨰 줄에 추가되는 코드
    // <select class="effect-select" style="position: absolute; top: 20px;">
    //     <option>빛의 무기</option>
    // </select>

}




let Add_deBuff_top_Distance_length = 0;
let Add_deBuff_height_length = 20;

function add_debuff(){
    
    Add_deBuff_top_Distance_length = Add_deBuff_top_Distance_length + 20;
    Add_deBuff_height_length = Add_deBuff_height_length + 20;

    // 버프창 칸 높이 [Add_deBuff_height_length] px; 만큼 추가
    document.getElementById("debuff").style.height = Add_deBuff_height_length + "px";
    // select 만듦
    const select = document.createElement('select');
    // select class="effect-select"; style="position: absolute; top: [Add_deBuff_top_Distance_length] px;" 추가
    select.setAttribute("class", "effect-select");
    select.setAttribute("style", "position: absolute; top: " + Add_deBuff_top_Distance_length + "px;");


    // 각종 버프 이름 적힌 option 추가 
    const option_1 = document.createElement('option');
    option_1.innerHTML = "트랙터 대포";

    const option_2 = document.createElement('option');
    option_2.innerHTML = "신성";


    // select 에 모든 option 추가 
    select.appendChild(option_1);
    select.appendChild(option_2);

    // select의 부모로 설정할 컨테이너 아이디를 가져오고 붙임
    debuff_select_container = document.getElementById("debuff-select-container");

    debuff_select_container.appendChild(select);


    // 두번쨰 줄에 추가되는 코드
    // <select class="effect-select" style="position: absolute; top: 20px;">
    //     <option>트랙터 대포</option>
    //     <option>신성</option>
    // </select>

}