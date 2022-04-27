function special_frame_select(weapon) {
    const Weapon = document.getElementById(weapon);
    const Weapon_Frame = document.getElementById("weapon frame");


    //산탄총
    if (Weapon.options[Weapon.selectedIndex].value === "shot_guns" || Weapon.options[Weapon.selectedIndex].value === "special") {

        //모든 자식 요소 제거
        while (Weapon_Frame.firstChild) {
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }

        //무기별로 create
        const Lightweight = document.createElement('option');
        const Aggressive = document.createElement('option');
        const PINPOINT_Slug = document.createElement('option');
        const Rapid_Fire = document.createElement('option');
        const Precision = document.createElement('option');

        //무기별로 value 삽입
        Lightweight.setAttribute("value", "Lightweight");
        Aggressive.setAttribute("value", "Aggressive");
        PINPOINT_Slug.setAttribute("value", "PINPOINT_Slug");
        Rapid_Fire.setAttribute("value", "Rapid_Fire");
        Precision.setAttribute("value", "Precision");

        //무기별로 innerHTML 삽입
        Lightweight.innerHTML = "경량 프레임";
        Aggressive.innerHTML = "공격적 프레임";
        PINPOINT_Slug.innerHTML = "납탄 정밀 프레임";
        Rapid_Fire.innerHTML = "속사 프레임";
        Precision.innerHTML = "정밀 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(Lightweight);
        Weapon_Frame.appendChild(Aggressive);
        Weapon_Frame.appendChild(PINPOINT_Slug);
        Weapon_Frame.appendChild(Rapid_Fire);
        Weapon_Frame.appendChild(Precision);
    }


    //유탄 발사기
    if (Weapon.options[Weapon.selectedIndex].value === "special_grenade_launchers") {

        //모든 자식 요소 제거
        while (Weapon_Frame.firstChild) {
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }

        //무기별로 create
        const Lightweight = document.createElement('option');
        const Wave = document.createElement('option');

        //무기별로 value 삽입
        Lightweight.setAttribute("value", "Lightweight");
        Wave.setAttribute("value", "Wave");

        //무기별로 innerHTML 삽입
        Lightweight.innerHTML = "경량 프레임";
        Wave.innerHTML = "피동 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(Lightweight);
        Weapon_Frame.appendChild(Wave);
    }


    //융합 소총
    if (Weapon.options[Weapon.selectedIndex].value === "fusion_rifles") {

        //모든 자식 요소 제거
        while (Weapon_Frame.firstChild) {
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }

        //무기별로 create
        const Precision = document.createElement('option');
        const Rapid_Fire = document.createElement('option');
        const High_Impact = document.createElement('option');
        const Adaptive = document.createElement('option');
        const Aggressive = document.createElement('option');

        //무기별로 value 삽입
        Precision.setAttribute("value", "Precision");
        Rapid_Fire.setAttribute("value", "Rapid_Fire");
        High_Impact.setAttribute("value", "High_Impact");
        Adaptive.setAttribute("value", "Adaptive");
        Aggressive.setAttribute("value", "Aggressive");

        //무기별로 innerHTML 삽입
        Precision.innerHTML = "정밀 프레임";
        Rapid_Fire.innerHTML = "속사 프레임";
        High_Impact.innerHTML = "고위력 프레임";
        Adaptive.innerHTML = "적응형 프레임";
        Aggressive.innerHTML = "공격적 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(Precision);
        Weapon_Frame.appendChild(Rapid_Fire);
        Weapon_Frame.appendChild(High_Impact);
        Weapon_Frame.appendChild(Adaptive);
        Weapon_Frame.appendChild(Aggressive);
    }


    //저격총
    if (Weapon.options[Weapon.selectedIndex].value === "sniper_rifles") {

        //모든 자식 요소 제거
        while (Weapon_Frame.firstChild) {
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }

        //무기별로 create
        const Adaptive = document.createElement('option');
        const Rapid_Fire = document.createElement('option');
        const Aggressive = document.createElement('option');

        //무기별로 value 삽입
        Adaptive.setAttribute("value", "Adaptive");
        Rapid_Fire.setAttribute("value", "Rapid_Fire");
        Aggressive.setAttribute("value", "Aggressive");

        //무기별로 innerHTML 삽입
        Adaptive.innerHTML = "적응형 프레임";
        Rapid_Fire.innerHTML = "속사 프레임";
        Aggressive.innerHTML = "고위력 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(Adaptive);
        Weapon_Frame.appendChild(Rapid_Fire);
        Weapon_Frame.appendChild(Aggressive);
    }


    //추적 소총
    if (Weapon.options[Weapon.selectedIndex].value === "trace_rifles") {

        //모든 자식 요소 제거
        while (Weapon_Frame.firstChild) {
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }

        //무기별로 create
        const Adaptive = document.createElement('option');

        //무기별로 value 삽입
        Adaptive.setAttribute("value", "Adaptive");

        //무기별로 innerHTML 삽입
        Adaptive.innerHTML = "적응형 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(Adaptive);
    }


    //월도
    if (Weapon.options[Weapon.selectedIndex].value === "glaive") {

        //모든 자식 요소 제거
        while (Weapon_Frame.firstChild) {
            Weapon_Frame.removeChild(Weapon_Frame.firstChild);
        }

        //무기별로 create
        const Adaptive = document.createElement('option');

        //무기별로 value 삽입
        Adaptive.setAttribute("value", "Adaptive");

        //무기별로 innerHTML 삽입
        Adaptive.innerHTML = "적응형 프레임";

        //무기 option id="weapon select" 자녀로 삽입
        Weapon_Frame.appendChild(Adaptive);
    }



}