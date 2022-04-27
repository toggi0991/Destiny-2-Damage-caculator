function primary_frame_select(weapon){
    const Weapon = document.getElementById(weapon);
    const Weapon_Frame = document.getElementById("weapon frame");
    
    
    //자동 소총
    if(Weapon.options[Weapon.selectedIndex].value === "auto_rifles" || Weapon.options[Weapon.selectedIndex].value === "primary"){
        
        //모든 자식 요소 제거
        while(Weapon_Frame.firstChild){
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }
        
        //무기 프레임별로 create
        const Adaptive = document.createElement('option');
        const High_Impact = document.createElement('option');
        const Precision = document.createElement('option');
        const Rapid_Fire = document.createElement('option');
        const Lightweight = document.createElement('option');

        //무기 프레임별로 value 삽입
        Adaptive.setAttribute("value","Adaptive");
        High_Impact.setAttribute("value","high_impact");
        Precision.setAttribute("value","Precision");
        Rapid_Fire.setAttribute("value","rapid_fire");
        Lightweight.setAttribute("value","Lightweight");

        //무기 프레임별로 innerHTML 삽입
        Adaptive.innerHTML = "적응형 프레임";
        High_Impact.innerHTML = "고위력 프레임";
        Precision.innerHTML = "정밀 프레임";
        Rapid_Fire.innerHTML = "속사 프레임";
        Lightweight.innerHTML = "경량 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(Adaptive);
        Weapon_Frame.appendChild(High_Impact);
        Weapon_Frame.appendChild(Precision);
        Weapon_Frame.appendChild(Rapid_Fire);
        Weapon_Frame.appendChild(Lightweight);



        // <option value="Adaptive" selected>적응형 프레임</option>
        // <option value="high_impact">고위력 프레임</option>
        // <option value="Precision">정밀 프레임</option>
        // <option value="rapid_fire">속사 프레임</option>
        // <option value="Lightweight">경량 프레임</option>
    }

    
    //정찰 소총
    if(Weapon.options[Weapon.selectedIndex].value === "scout_rifles"){
        
        //모든 자식 요소 제거
        while(Weapon_Frame.firstChild){
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }
        
        //무기 프레임별로 create
        const High_Impact = document.createElement('option');
        const Lightweight = document.createElement('option');
        const Precision = document.createElement('option');
        const VEIST_rapid_fire = document.createElement('option');

        //무기 프레임별로 value 삽입
        High_Impact.setAttribute("value","high_impact");
        Lightweight.setAttribute("value","Lightweight");
        Precision.setAttribute("value","Precision");
        VEIST_rapid_fire.setAttribute("value","VEIST_rapid_fire");

        //무기 프레임별로 innerHTML 삽입
        High_Impact.innerHTML = "고위력 프레임";
        Lightweight.innerHTML = "경량 프레임";
        Precision.innerHTML = "정밀 프레임";
        VEIST_rapid_fire.innerHTML = "바이스트 속사 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(High_Impact);
        Weapon_Frame.appendChild(Lightweight);
        Weapon_Frame.appendChild(Precision);
        Weapon_Frame.appendChild(VEIST_rapid_fire);
    }


    //파동 소총
    if(Weapon.options[Weapon.selectedIndex].value === "pulse_rifles"){
        
        //모든 자식 요소 제거
        while(Weapon_Frame.firstChild){
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }
        
        //무기 프레임별로 create
        const Adaptive = document.createElement('option');
        const High_Impact = document.createElement('option');
        const Lightweight = document.createElement('option');
        const Rapid_Fire = document.createElement('option');

        //무기 프레임별로 value 삽입
        Adaptive.setAttribute("value","Adaptive");
        High_Impact.setAttribute("value","High_Impact");
        Lightweight.setAttribute("value","Lightweight");
        Rapid_Fire.setAttribute("value","Rapid_Fire");

        //무기 프레임별로 innerHTML 삽입
        Adaptive.innerHTML = "적응형 프레임";
        High_Impact.innerHTML = "고위력 프레임";
        Lightweight.innerHTML = "경량 프레임";
        Rapid_Fire.innerHTML = "속사 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(Adaptive);
        Weapon_Frame.appendChild(High_Impact);
        Weapon_Frame.appendChild(Lightweight);
        Weapon_Frame.appendChild(Rapid_Fire);
    }


    //핸드 캐논
    if(Weapon.options[Weapon.selectedIndex].value === "hand_cannons"){
        
        //모든 자식 요소 제거
        while(Weapon_Frame.firstChild){
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }
        
        //무기 프레임별로 create
        const Adaptive = document.createElement('option');
        const Aggressive = document.createElement('option');
        const Lightweight = document.createElement('option');
        const Precision = document.createElement('option');

        //무기 프레임별로 value 삽입
        Adaptive.setAttribute("value","Adaptive");
        Aggressive.setAttribute("value","Aggressive");
        Lightweight.setAttribute("value","Lightweight");
        Precision.setAttribute("value","Precision");

        //무기 프레임별로 innerHTML 삽입
        Adaptive.innerHTML = "적응형 프레임";
        Aggressive.innerHTML = "공격적 프레임";
        Lightweight.innerHTML = "경량 프레임";
        Precision.innerHTML = "정밀 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(Adaptive);
        Weapon_Frame.appendChild(Aggressive);
        Weapon_Frame.appendChild(Lightweight);
        Weapon_Frame.appendChild(Precision);
    }


    //기관단총
    if(Weapon.options[Weapon.selectedIndex].value === "submachine_guns"){
        
        //모든 자식 요소 제거
        while(Weapon_Frame.firstChild){
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }
        
        //무기 프레임별로 create
        const Adaptive = document.createElement('option');
        const Aggressive = document.createElement('option');
        const Lightweight = document.createElement('option');
        const Precision = document.createElement('option');

        //무기 프레임별로 value 삽입
        Adaptive.setAttribute("value","Adaptive");
        Aggressive.setAttribute("value","Aggressive");
        Lightweight.setAttribute("value","Lightweight");
        Precision.setAttribute("value","Precision");

        //무기 프레임별로 innerHTML 삽입
        Adaptive.innerHTML = "적응형 프레임";
        Aggressive.innerHTML = "공격적 프레임";
        Lightweight.innerHTML = "경량 프레임";
        Precision.innerHTML = "정밀 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(Adaptive);
        Weapon_Frame.appendChild(Aggressive);
        Weapon_Frame.appendChild(Lightweight);
        Weapon_Frame.appendChild(Precision);
    }
}