function ammo_select(ammo_types){
    const AmmoTypes = document.getElementById(ammo_types);
    const Weapon_Select = document.getElementById("weapon select");
    if(AmmoTypes.options[AmmoTypes.selectedIndex].value === "primary"){
        
        //모든 자식 요소 제거
        while(Weapon_Select.firstChild){
            Weapon_Select.removeChild(Weapon_Select.firstChild);
        }
        
        //무기별로 create
        const auto = document.createElement('option');
        const scout = document.createElement('option');
        const pulse = document.createElement('option');
        const handcannon = document.createElement('option');
        const smg = document.createElement('option');
        const sidearm = document.createElement('option');
        const bow = document.createElement('option');

        //무기별로 value 삽입
        auto.setAttribute("value","auto-rifles");
        scout.setAttribute("value","scout-rifles");
        pulse.setAttribute("value","pulse-rifles");
        handcannon.setAttribute("value","hand-cannons");
        smg.setAttribute("value","submachine-guns");
        sidearm.setAttribute("value","sidearms");
        bow.setAttribute("value","bows");

        //무기별로 innerHTML 삽입
        auto.innerHTML = "자동 소총";
        scout.innerHTML = "정찰 소총";
        pulse.innerHTML = "파동 소총";
        handcannon.innerHTML = "핸드 캐논";
        smg.innerHTML = "기관단총";
        sidearm.innerHTML = "보조 무기";
        bow.innerHTML = "활";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Select.appendChild(auto);
        Weapon_Select.appendChild(scout);
        Weapon_Select.appendChild(pulse);
        Weapon_Select.appendChild(handcannon);
        Weapon_Select.appendChild(smg);
        Weapon_Select.appendChild(sidearm);
        Weapon_Select.appendChild(bow);



        // <option value="auto-rifles">자동 소총</option>
        // <option value="scout-rifles">정찰 소총</option>
        // <option value="pulse-rifles">파동 소총</option>
        // <option value="hand-cannons">핸드 캐논</option>
        // <option value="submachine-gun">기관단총</option>
        // <option value="sidearms">보조 무기</option>
        // <option value="bow">활</option>
    }


    
    if(AmmoTypes.options[AmmoTypes.selectedIndex].value === "special"){
        
        //모든 자식 요소 제거
        while(Weapon_Select.firstChild){
            Weapon_Select.removeChild(Weapon_Select.firstChild);
        }
        
        //무기별로 create
        const shotgun = document.createElement('option');
        const grenade = document.createElement('option');
        const fusion = document.createElement('option');
        const sniper = document.createElement('option');
        const trace = document.createElement('option');

        //무기별로 value 삽입
        shotgun.setAttribute("value","shot-guns");
        grenade.setAttribute("value","grenade-launchers");
        fusion.setAttribute("value","fusion-rifles");
        sniper.setAttribute("value","sniper-rifles");
        trace.setAttribute("value","trace-rifles");

        //무기별로 innerHTML 삽입
        shotgun.innerHTML = "산탄총";
        grenade.innerHTML = "유탄 발사기";
        fusion.innerHTML = "융합 소총";
        sniper.innerHTML = "저격총";
        trace.innerHTML = "추적 소총";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Select.appendChild(shotgun);
        Weapon_Select.appendChild(grenade);
        Weapon_Select.appendChild(fusion);
        Weapon_Select.appendChild(sniper);
        Weapon_Select.appendChild(trace);


        // <option selected value="shot-guns">산탄총</option>
        // <option value="grenade-launchers">유탄 발사기</option>
        // <option value="fusion-rifles">융합 소총</option>
        // <option value="sniper-rifles">저격총</option>
        // <option value="trace-rifles">추적 소총</option>
    }


    if(AmmoTypes.options[AmmoTypes.selectedIndex].value === "heavy"){
        
        //모든 자식 요소 제거
        while(Weapon_Select.firstChild){
            Weapon_Select.removeChild(Weapon_Select.firstChild);
        }
        
        //무기별로 create
        const sword = document.createElement('option');
        const grenade = document.createElement('option');
        const rocket = document.createElement('option');
        const linear = document.createElement('option');
        const machine = document.createElement('option');

        //무기별로 value 삽입
        sword.setAttribute("value","swords");
        grenade.setAttribute("value","grenade-launchers");
        rocket.setAttribute("value","rochet-launchers");
        linear.setAttribute("value","linear-fusion-rifles");
        machine.setAttribute("value","machine-guns");

        //무기별로 innerHTML 삽입
        sword.innerHTML = "검";
        grenade.innerHTML = "유탄 발사기";
        rocket.innerHTML = "로켓 발사기";
        linear.innerHTML = "선형 융합 소총";
        machine.innerHTML = "기관총";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Select.appendChild(sword);
        Weapon_Select.appendChild(grenade);
        Weapon_Select.appendChild(rocket);
        Weapon_Select.appendChild(linear);
        Weapon_Select.appendChild(machine);



        // <option value="swords">검</option>
        // <option value="grenade-launchers">유탄 발사기</option>
        // <option value="rochet-launchers">로켓 발사기</option>
        // <option value="linear-fusion-rifles">선형 융합 소총</option>
        // <option value="machine-guns">기관총</option>
    }



}




