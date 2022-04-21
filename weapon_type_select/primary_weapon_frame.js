function frame_select(weapon){
    const Weapon = document.getElementById(weapon);
    const Weapon_Frame = document.getElementById("weapon frame");
    
    
    //자동 소총
    if(Weapon.options[Weapon.selectedIndex].value === "auto-rifles"){
        
        //모든 자식 요소 제거
        while(Weapon_Frame.firstChild){
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }
        
        //무기 프레임별로 create
        const adaptive = document.createElement('option');
        const high_impact = document.createElement('option');
        const precision = document.createElement('option');
        const rapid_fire = document.createElement('option');
        const lightweight = document.createElement('option');

        //무기 프레임별로 value 삽입
        adaptive.setAttribute("value","adaptive");
        high_impact.setAttribute("value","high-impact");
        precision.setAttribute("value","precision");
        rapid_fire.setAttribute("value","rapid-fire");
        lightweight.setAttribute("value","lightweight");

        //무기 프레임별로 innerHTML 삽입
        adaptive.innerHTML = "적응형 프레임";
        high_impact.innerHTML = "고위력 프레임";
        precision.innerHTML = "정밀 프레임";
        rapid_fire.innerHTML = "속사 프레임";
        lightweight.innerHTML = "경량 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(adaptive);
        Weapon_Frame.appendChild(high_impact);
        Weapon_Frame.appendChild(precision);
        Weapon_Frame.appendChild(rapid_fire);
        Weapon_Frame.appendChild(lightweight);



        // <option value="adaptive" selected>적응형 프레임</option>
        // <option value="high-impact">고위력 프레임</option>
        // <option value="precision">정밀 프레임</option>
        // <option value="rapid-fire">속사 프레임</option>
        // <option value="lightweight">경량 프레임</option>
    }

    
    //정찰 소총
    if(Weapon.options[Weapon.selectedIndex].value === "scout-rifles"){
        
        //모든 자식 요소 제거
        while(Weapon_Frame.firstChild){
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }
        
        //무기 프레임별로 create
        const high_impact = document.createElement('option');
        const lightweight = document.createElement('option');
        const precision = document.createElement('option');
        const VEIST_rapid_fire = document.createElement('option');

        //무기 프레임별로 value 삽입
        high_impact.setAttribute("value","high-impact");
        lightweight.setAttribute("value","lightweight");
        precision.setAttribute("value","precision");
        VEIST_rapid_fire.setAttribute("value","VEIST-rapid-fire");

        //무기 프레임별로 innerHTML 삽입
        high_impact.innerHTML = "고위력 프레임";
        lightweight.innerHTML = "경량 프레임";
        precision.innerHTML = "정밀 프레임";
        VEIST_rapid_fire.innerHTML = "바이스트 속사 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(high_impact);
        Weapon_Frame.appendChild(lightweight);
        Weapon_Frame.appendChild(precision);
        Weapon_Frame.appendChild(VEIST_rapid_fire);
    }


    //파동 소총
    if(Weapon.options[Weapon.selectedIndex].value === "pulse-rifles"){
        
        //모든 자식 요소 제거
        while(Weapon_Frame.firstChild){
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }
        
        //무기 프레임별로 create
        const adaptive = document.createElement('option');
        const High_Impact = document.createElement('option');
        const Lightweight = document.createElement('option');
        const Rapid_Fire = document.createElement('option');

        //무기 프레임별로 value 삽입
        adaptive.setAttribute("value","adaptive");
        High_Impact.setAttribute("value","High-Impact");
        Lightweight.setAttribute("value","Lightweight");
        Rapid_Fire.setAttribute("value","Rapid-Fire");

        //무기 프레임별로 innerHTML 삽입
        adaptive.innerHTML = "적응형 프레임";
        High_Impact.innerHTML = "고위력 프레임";
        Lightweight.innerHTML = "경량 프레임";
        Rapid_Fire.innerHTML = "속사 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(adaptive);
        Weapon_Frame.appendChild(High_Impact);
        Weapon_Frame.appendChild(Lightweight);
        Weapon_Frame.appendChild(Rapid_Fire);
    }


    //핸드 캐논
    if(Weapon.options[Weapon.selectedIndex].value === "hand-cannons"){
        
        //모든 자식 요소 제거
        while(Weapon_Frame.firstChild){
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }
        
        //무기 프레임별로 create
        const adaptive = document.createElement('option');
        const Aggressive = document.createElement('option');
        const Lightweight = document.createElement('option');
        const Precision = document.createElement('option');

        //무기 프레임별로 value 삽입
        adaptive.setAttribute("value","adaptive");
        Aggressive.setAttribute("value","Aggressive");
        Lightweight.setAttribute("value","Lightweight");
        Precision.setAttribute("value","Precision");

        //무기 프레임별로 innerHTML 삽입
        adaptive.innerHTML = "적응형 프레임";
        Aggressive.innerHTML = "공격적 프레임";
        Lightweight.innerHTML = "경량 프레임";
        Precision.innerHTML = "정밀 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(adaptive);
        Weapon_Frame.appendChild(Aggressive);
        Weapon_Frame.appendChild(Lightweight);
        Weapon_Frame.appendChild(Precision);
    }


    //기관단총
    if(Weapon.options[Weapon.selectedIndex].value === "submachine-guns"){
        
        //모든 자식 요소 제거
        while(Weapon_Frame.firstChild){
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }
        
        //무기 프레임별로 create
        const adaptive = document.createElement('option');
        const Aggressive = document.createElement('option');
        const Lightweight = document.createElement('option');
        const Precision = document.createElement('option');

        //무기 프레임별로 value 삽입
        adaptive.setAttribute("value","adaptive");
        Aggressive.setAttribute("value","Aggressive");
        Lightweight.setAttribute("value","Lightweight");
        Precision.setAttribute("value","Precision");

        //무기 프레임별로 innerHTML 삽입
        adaptive.innerHTML = "적응형 프레임";
        Aggressive.innerHTML = "공격적 프레임";
        Lightweight.innerHTML = "경량 프레임";
        Precision.innerHTML = "정밀 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(adaptive);
        Weapon_Frame.appendChild(Aggressive);
        Weapon_Frame.appendChild(Lightweight);
        Weapon_Frame.appendChild(Precision);
    }
}