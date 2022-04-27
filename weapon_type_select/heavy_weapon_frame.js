function heavy_frame_select(weapon) {
    const Weapon = document.getElementById(weapon);
    const Weapon_Frame = document.getElementById("weapon frame");

    //검
    if (Weapon.options[Weapon.selectedIndex].value === "swords" || Weapon.options[Weapon.selectedIndex].value === "heavy") {

        //모든 자식 요소 제거
        while (Weapon_Frame.firstChild) {
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }

        //무기별로 create
        const Adaptive = document.createElement('option');
        const Lightweight = document.createElement('option');
        const Aggressive = document.createElement('option');
        const Caster = document.createElement('option');
        const Vortex = document.createElement('option');

        //무기별로 value 삽입
        Adaptive.setAttribute("value", "Adaptive");
        Lightweight.setAttribute("value", "Lightweight");
        Aggressive.setAttribute("value", "Aggressive");
        Caster.setAttribute("value", "Caster");
        Vortex.setAttribute("value", "Vortex");

        //무기별로 innerHTML 삽입
        Adaptive.innerHTML = "적응형 프레임";
        Lightweight.innerHTML = "경량 프레임";
        Aggressive.innerHTML = "공격적 프레임";
        Caster.innerHTML = "발사체 프레임";
        Vortex.innerHTML = "소용돌이 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(Adaptive);
        Weapon_Frame.appendChild(Lightweight);
        Weapon_Frame.appendChild(Aggressive);
        Weapon_Frame.appendChild(Caster);
        Weapon_Frame.appendChild(Vortex);
    }


    //유탄 발사기
    if (Weapon.options[Weapon.selectedIndex].value === "heavy_grenade_launchers") {

        //모든 자식 요소 제거
        while (Weapon_Frame.firstChild) {
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }

        //무기별로 create
        const Adaptive = document.createElement('option');
        const Rapid_Fire = document.createElement('option');
        const Precision = document.createElement('option');

        //무기별로 value 삽입
        Adaptive.setAttribute("value", "Adaptive");
        Rapid_Fire.setAttribute("value", "Rapid_Fire");
        Precision.setAttribute("value", "Precision");

        //무기별로 innerHTML 삽입
        Adaptive.innerHTML = "적응형 프레임";
        Rapid_Fire.innerHTML = "속사 프레임";
        Precision.innerHTML = "정밀 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(Adaptive);
        Weapon_Frame.appendChild(Rapid_Fire);
        Weapon_Frame.appendChild(Precision);
    }


    //로켓 발사기
    if (Weapon.options[Weapon.selectedIndex].value === "rocket") {

        //모든 자식 요소 제거
        while (Weapon_Frame.firstChild) {
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }

        //무기별로 create
        const Aggressive = document.createElement('option');
        const Adaptive = document.createElement('option');
        const Precision = document.createElement('option');
        const High_Impact = document.createElement('option');


        //무기별로 value 삽입
        Aggressive.setAttribute("value", "Aggressive");
        Adaptive.setAttribute("value", "Adaptive");
        Precision.setAttribute("value", "Precision");
        High_Impact.setAttribute("value", "High_Impact");

        //무기별로 innerHTML 삽입
        Aggressive.innerHTML = "공격적 프레임";
        Adaptive.innerHTML = "적응형 프레임";
        Precision.innerHTML = "정밀 프레임";
        High_Impact.innerHTML = "고위력 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(Aggressive);
        Weapon_Frame.appendChild(Adaptive);
        Weapon_Frame.appendChild(Precision);
        Weapon_Frame.appendChild(High_Impact);
    }


    //선형 융합 소총
    if (Weapon.options[Weapon.selectedIndex].value === "linear") {

        //모든 자식 요소 제거
        while (Weapon_Frame.firstChild) {
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }

        //무기별로 create
        const Precision = document.createElement('option');

        //무기별로 value 삽입
        Precision.setAttribute("value", "Precision");

        //무기별로 innerHTML 삽입
        Precision.innerHTML = "정밀 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(Precision);
    }


    //기관총
    if (Weapon.options[Weapon.selectedIndex].value === "machine") {

        //모든 자식 요소 제거
        while (Weapon_Frame.firstChild) {
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }

        //무기별로 create
        const Adaptive = document.createElement('option');
        const Rapid_Fire = document.createElement('option');
        const High_Impact = document.createElement('option');


        //무기별로 value 삽입
        Adaptive.setAttribute("value", "Adaptive");
        Rapid_Fire.setAttribute("value", "Rapid_Fire");
        High_Impact.setAttribute("value", "High_Impact");

        //무기별로 innerHTML 삽입
        Adaptive.innerHTML = "정밀 프레임";
        Rapid_Fire.innerHTML = "속사 프레임";
        High_Impact.innerHTML = "고위력 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(Adaptive);
        Weapon_Frame.appendChild(Rapid_Fire);
        Weapon_Frame.appendChild(High_Impact);
    }



}