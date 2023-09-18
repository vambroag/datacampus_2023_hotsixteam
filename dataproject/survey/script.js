let nickname = document.getElementById("nickname");
let birthday = document.getElementById("birthday");
let age = document.getElementById("age");
let pheight = document.getElementById("height");
let pweight = document.getElementById("weight");
let gender = document.getElementById("gender");
let q_sit = document.getElementById("q_sit");
let q_exercise = document.getElementById("q_exercise");
let q_drink = document.getElementById("q_drink");
let q_breakfast = document.getElementById("q_breakfast");
let q_lunch = document.getElementById("q_lunch");
let q_dinner = document.getElementById("q_dinner");
let q_smoke = document.getElementById("q_smoke");
let q_alcohol = document.getElementById("q_alcohol");
let q_alcohol_time = document.getElementById("q_alcohol_time");
let q_alcohol_quant = document.getElementById("q_alcohol_quant");
let q_tired = document.getElementById("q_tired");
let q_sleep = document.getElementById("q_sleep");
let q_stress = document.getElementById("q_stress");
let q_depress =  document.getElementById("q_depress");
let q_healthy = document.getElementById("q_healthy");
let q_antibiotic = document.getElementById("q_antibiotic");
let q_state = document.getElementById("q_state");
let q_disease_none = document.getElementById("q_disease_none");
let q_disease_hypertension = document.getElementById("q_disease_hypertension");
let q_disease_diabetes = document.getElementById("q_disease_diabetes");
let q_disease_hyperlipidemia = document.getElementById("q_disease_hyperlipidemia");
let q_disease_thyroid = document.getElementById("q_disease_thyroid");
let q_disease_anemia = document.getElementById("q_disease_anemia");
let q_disease_cancer = document.getElementById("q_disease_cancer");
let q_medicine = document.getElementById("q_medicine");
let qf_pregnant = document.getElementById("qf_pregnant");
let qf_breastfeed = document.getElementById("qf_breastfeed");
let qf_menopause = document.getElementById("qf_menopause");
let qf_birthpill = document.getElementById("qf_birthpill");

// ------------bottomarea1------------

let bottomarea1 = document.getElementById("bottomarea1");
let backbutton1 = document.getElementById("backbutton1");
let gobutton1 = document.getElementById("gobutton1");

backbutton1.addEventListener("click", () => {
    location.href = "../index.html";
});

gobutton1.addEventListener("click", () => {
    if (nickname.value == '' || nickname.value == nickname.getAttribute('placeholder')) {
        alert('이름을 입력해주세요.');
    } else {
        localStorage.setItem("nickname", nickname.value);
        bottomarea1.style.height = "0px";
        bottomarea1.style.display = "none";
        bottomarea2.style.height = "89.218009478672985781990521327014%";
        bottomarea2.style.display = "flex";
    }
});

function nicknameValidateInput(event) {
    var keyCode = event.which ? event.which : event.keyCode;
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || keyCode === 8 || keyCode === 32) {
        return true;
    } else {
        return false;
    }
}

nickname.addEventListener("focus", () => {
    nickname.placeholder = '';
});
nickname.addEventListener("blur", () => {
    nickname.placeholder = '홍길동';
});

// ------------bottomarea2------------

let bottomarea2 = document.getElementById("bottomarea2");
let backbutton2 = document.getElementById("backbutton2");
let gobutton2 = document.getElementById("gobutton2");
let ageval = 0;

backbutton2.addEventListener("click", () => {
    bottomarea2.style.height = "0px";
    bottomarea2.style.display = "none";
    bottomarea1.style.height = "89.218009478672985781990521327014%";
    bottomarea1.style.display = "flex";
});

gobutton2.addEventListener("click", () => {
    if (birthday.value == '' || birthday.value == birthday.getAttribute('placeholder')) {
        alert('생년월일을 입력해주세요.');
    } else if (birthday.value.length < 8) {
        alert('생년월일 8자를 입력해주세요.');
    } else {
        ageval = birthday.value / 10000;
        age.value = 2023 - Math.floor(ageval);
        bottomarea2.style.height = "0px";
        bottomarea2.style.display = "none";
        bottomarea3.style.height = "89.218009478672985781990521327014%";
        bottomarea3.style.display = "flex";
    }
});

function birthdayValidateInput(event) {
    var keyCode = event.which ? event.which : event.keyCode;
    if ((keyCode >= 48 && keyCode <= 57) && event.target.value.length < 8) {
        return true;
    } else {
        return false;
    }
}

// ------------bottomarea3------------

let bottomarea3 = document.getElementById("bottomarea3");
let backbutton3 = document.getElementById("backbutton3");
let gobutton3 = document.getElementById("gobutton3");

backbutton3.addEventListener("click", () => {
    bottomarea3.style.height = "0px";
    bottomarea3.style.display = "none";
    bottomarea2.style.height = "89.218009478672985781990521327014%";
    bottomarea2.style.display = "flex";
});

gobutton3.addEventListener("click", () => {
    if (height.value == '' || height.value == height.getAttribute('placeholder')) {
        alert('키를 입력해주세요.');
    } else {
        bottomarea3.style.height = "0px";
        bottomarea3.style.display = "none";
        bottomarea4.style.height = "89.218009478672985781990521327014%";
        bottomarea4.style.display = "flex";
    }
});

let height = document.getElementById("height");

function heightValidateInput(event) {
    var keyCode = event.which ? event.which : event.keyCode;
    if ((keyCode >= 48 && keyCode <= 57) && event.target.value.length < 3) {
        return true;
    } else {
        return false;
    }
}

// ------------bottomarea4------------

let bottomarea4 = document.getElementById("bottomarea4");
let backbutton4 = document.getElementById("backbutton4");
let gobutton4 = document.getElementById("gobutton4");

backbutton4.addEventListener("click", () => {
    bottomarea4.style.height = "0px";
    bottomarea4.style.display = "none";
    bottomarea3.style.height = "89.218009478672985781990521327014%";
    bottomarea3.style.display = "flex";
});

gobutton4.addEventListener("click", () => {
    if (weight.value == '' || weight.value == weight.getAttribute('placeholder')) {
        alert('몸무게를 입력해주세요.');
    } else {
        bottomarea4.style.height = "0px";
        bottomarea4.style.display = "none";
        bottomarea5.style.height = "89.218009478672985781990521327014%";
        bottomarea5.style.display = "flex";
    }
});

let weight = document.getElementById("weight");

function weightValidateInput(event) {
    var keyCode = event.which ? event.which : event.keyCode;
    if ((keyCode >= 48 && keyCode <= 57) && event.target.value.length < 3) {
        return true;
    } else {
        return false;
    }
}

// ------------bottomarea5------------

let bottomarea5 = document.getElementById("bottomarea5");
let backbutton5 = document.getElementById("backbutton5");
let gobutton5 = document.getElementById("gobutton5");

backbutton5.addEventListener("click", () => {
    bottomarea5.style.height = "0px";
    bottomarea5.style.display = "none";
    bottomarea4.style.height = "89.218009478672985781990521327014%";
    bottomarea4.style.display = "flex";
});

gobutton5.addEventListener("click", () => {
    if (gender === 0) {
        alert('성별을 선택해주세요.');
    } else {
        bottomarea5.style.height = "0px";
        bottomarea5.style.display = "none";
        bottomarea6.style.height = "89.218009478672985781990521327014%";
        bottomarea6.style.display = "flex";
    }
});

let man = document.getElementById("man");
let woman = document.getElementById("woman");

let man_status = 0;
let woman_status = 0;

function bgbluecwhite(element) {
    element.style.color = "#FFFFFF";
    element.style.backgroundColor = "#5196FF";
}
function bgwhitecblue(element) {
    element.style.color = "#5196FF";
    element.style.backgroundColor = "#FFFFFF";
}

man.addEventListener("click", () => {
    if (man_status == 0) {
        bgbluecwhite(man);
        bgwhitecblue(woman);
        man_status = 1;
        woman_status = 0;
        gender = 1;
    } else if (man_status == 1) {
        bgwhitecblue(man);
        man_status = 0;
        gender = 0;
    }
});

woman.addEventListener("click", () => {
    if (woman_status == 0) {
        bgwhitecblue(man);
        bgbluecwhite(woman);
        woman_status = 1;
        man_status = 0;
        gender = 2;
    } else if (woman_status == 1) {
        bgwhitecblue(woman);
        woman_status = 0;
        gender = 0;
    }
});

// ------------bottomarea6------------

let bottomarea6 = document.getElementById("bottomarea6");
let backbutton6 = document.getElementById("backbutton6");
let gobutton6 = document.getElementById("gobutton6");

backbutton6.addEventListener("click", () => {
    bottomarea6.style.height = "0px";
    bottomarea6.style.display = "none";
    bottomarea5.style.height = "89.218009478672985781990521327014%";
    bottomarea5.style.display = "flex";
});

gobutton6.addEventListener("click", () => {
    if (q_sit.value == 0) {
        alert('선택해주세요.');
    } else {
        bottomarea6.style.height = "0px";
        bottomarea6.style.display = "none";
        bottomarea7.style.height = "89.218009478672985781990521327014%";
        bottomarea7.style.display = "flex";
    }
});

let q_sit1 = document.getElementById("q_sit1");
let q_sit2 = document.getElementById("q_sit2");
let q_sit3 = document.getElementById("q_sit3");
let q_sit4 = document.getElementById("q_sit4");

let q_sit1_status = 0;
let q_sit2_status = 0;
let q_sit3_status = 0;
let q_sit4_status = 0;

q_sit1.addEventListener("click", () => {
    if (q_sit1_status == 0) {
        bgbluecwhite(q_sit1);
        bgwhitecblue(q_sit2);
        bgwhitecblue(q_sit3);
        bgwhitecblue(q_sit4);
        q_sit1_status = 1;
        q_sit2_status = 0;
        q_sit3_status = 0;
        q_sit4_status = 0;
        q_sit.value = 1;
    } else if (q_sit1_status == 1) {
        bgwhitecblue(q_sit1);
        q_sit1_status = 0;
        q_sit.value = 0;
    }
});

q_sit2.addEventListener("click", () => {
    if (q_sit2_status == 0) {
        bgwhitecblue(q_sit1);
        bgbluecwhite(q_sit2);
        bgwhitecblue(q_sit3);
        bgwhitecblue(q_sit4);
        q_sit2_status = 1;
        q_sit1_status = 0;
        q_sit3_status = 0;
        q_sit4_status = 0;
        q_sit.value = 2;
    } else if (q_sit2_status == 1) {
        bgwhitecblue(q_sit2);
        q_sit2_status = 0;
        q_sit.value = 0;
    }
});

q_sit3.addEventListener("click", () => {
    if (q_sit3_status == 0) {
        bgwhitecblue(q_sit1);
        bgwhitecblue(q_sit2);
        bgbluecwhite(q_sit3);
        bgwhitecblue(q_sit4);
        q_sit3_status = 1;
        q_sit1_status = 0;
        q_sit2_status = 0;
        q_sit4_status = 0;
        q_sit.value = 3;
    } else if (q_sit3_status == 1) {
        bgwhitecblue(q_sit3);
        q_sit3_status = 0;
        q_sit.value = 0;
    }
});

q_sit4.addEventListener("click", () => {
    if (q_sit4_status == 0) {
        bgwhitecblue(q_sit1);
        bgwhitecblue(q_sit2);
        bgwhitecblue(q_sit3);
        bgbluecwhite(q_sit4);
        q_sit4_status = 1;
        q_sit1_status = 0;
        q_sit2_status = 0;
        q_sit3_status = 0;
        q_sit.value = 4;
    } else if (q_sit4_status == 1) {
        bgwhitecblue(q_sit4);
        q_sit4_status = 0;
        q_sit.value = 0;
    }
});

// ------------bottomarea7------------

let bottomarea7 = document.getElementById("bottomarea7");
let backbutton7 = document.getElementById("backbutton7");
let gobutton7 = document.getElementById("gobutton7");

backbutton7.addEventListener("click", () => {
    bottomarea7.style.height = "0px";
    bottomarea7.style.display = "none";
    bottomarea6.style.height = "89.218009478672985781990521327014%";
    bottomarea6.style.display = "flex";
});

gobutton7.addEventListener("click", () => {
    if (q_exercise.value == 9) {
        alert('선택해주세요.');
    } else {
        bottomarea7.style.height = "0px";
        bottomarea7.style.display = "none";
        bottomarea8.style.height = "89.218009478672985781990521327014%";
        bottomarea8.style.display = "flex";
    }
});

let q_exercise1 = document.getElementById("q_exercise1");
let q_exercise2 = document.getElementById("q_exercise2");
let q_exercise3 = document.getElementById("q_exercise3");
let q_exercise4 = document.getElementById("q_exercise4");
let q_exercise5 = document.getElementById("q_exercise5");

let q_exercise1_status = 0;
let q_exercise2_status = 0;
let q_exercise3_status = 0;
let q_exercise4_status = 0;
let q_exercise5_status = 0;

q_exercise1.addEventListener("click", () => {
    if (q_exercise1_status == 0) {
        bgbluecwhite(q_exercise1);
        bgwhitecblue(q_exercise2);
        bgwhitecblue(q_exercise3);
        bgwhitecblue(q_exercise4);
        bgwhitecblue(q_exercise5);
        q_exercise1_status = 1;
        q_exercise2_status = 0;
        q_exercise3_status = 0;
        q_exercise4_status = 0;
        q_exercise5_status = 0;
        q_exercise.value = 0;
    } else if (q_exercise1_status == 1) {
        bgwhitecblue(q_exercise1);
        q_exercise1_status = 0;
        q_exercise.value = 0;
    }
});

q_exercise2.addEventListener("click", () => {
    if (q_exercise2_status == 0) {
        bgwhitecblue(q_exercise1);
        bgbluecwhite(q_exercise2);
        bgwhitecblue(q_exercise3);
        bgwhitecblue(q_exercise4);
        bgwhitecblue(q_exercise5);
        q_exercise2_status = 1;
        q_exercise1_status = 0;
        q_exercise3_status = 0;
        q_exercise4_status = 0;
        q_exercise5_status = 0;
        q_exercise.value = 1;
    } else if (q_exercise2_status == 1) {
        bgwhitecblue(q_exercise2);
        q_exercise2_status = 0;
        q_exercise.value = 0;
    }
});

q_exercise3.addEventListener("click", () => {
    if (q_exercise3_status == 0) {
        bgwhitecblue(q_exercise1);
        bgwhitecblue(q_exercise2);
        bgbluecwhite(q_exercise3);
        bgwhitecblue(q_exercise4);
        bgwhitecblue(q_exercise5);
        q_exercise3_status = 1;
        q_exercise1_status = 0;
        q_exercise2_status = 0;
        q_exercise4_status = 0;
        q_exercise5_status = 0;
        q_exercise.value = 2;
    } else if (q_exercise3_status == 1) {
        bgwhitecblue(q_exercise3);
        q_exercise3_status = 0;
        q_exercise.value = 0;
    }
});

q_exercise4.addEventListener("click", () => {
    if (q_exercise4_status == 0) {
        bgwhitecblue(q_exercise1);
        bgwhitecblue(q_exercise2);
        bgwhitecblue(q_exercise3);
        bgbluecwhite(q_exercise4);
        bgwhitecblue(q_exercise5);
        q_exercise4_status = 1;
        q_exercise1_status = 0;
        q_exercise2_status = 0;
        q_exercise3_status = 0;
        q_exercise5_status = 0;
        q_exercise.value = 3;
    } else if (q_exercise4_status == 1) {
        bgwhitecblue(q_exercise4);
        q_exercise4_status = 0;
        q_exercise.value = 0;
    }
});

q_exercise5.addEventListener("click", () => {
    if (q_exercise5_status == 0) {
        bgwhitecblue(q_exercise1);
        bgwhitecblue(q_exercise2);
        bgwhitecblue(q_exercise3);
        bgwhitecblue(q_exercise4);
        bgbluecwhite(q_exercise5);
        q_exercise5_status = 1;
        q_exercise1_status = 0;
        q_exercise2_status = 0;
        q_exercise3_status = 0;
        q_exercise4_status = 0;
        q_exercise.value = 4;
    } else if (q_exercise5_status == 1) {
        bgwhitecblue(q_exercise5);
        q_exercise5_status = 0;
        q_exercise.value = 0;
    }
});

// ------------bottomarea8------------

let bottomarea8 = document.getElementById("bottomarea8");
let backbutton8 = document.getElementById("backbutton8");
let gobutton8 = document.getElementById("gobutton8");

backbutton8.addEventListener("click", () => {
    bottomarea8.style.height = "0px";
    bottomarea8.style.display = "none";
    bottomarea7.style.height = "89.218009478672985781990521327014%";
    bottomarea7.style.display = "flex";
});

gobutton8.addEventListener("click", () => {
    if (q_drink === 0) {
        alert('선택해주세요.');
    } else {
        bottomarea8.style.height = "0px";
        bottomarea8.style.display = "none";
        bottomarea9.style.height = "89.218009478672985781990521327014%";
        bottomarea9.style.display = "flex";
    }
});

let q_drink1 = document.getElementById("q_drink1");
let q_drink2 = document.getElementById("q_drink2");
let q_drink3 = document.getElementById("q_drink3");
let q_drink4 = document.getElementById("q_drink4");
let q_drink5 = document.getElementById("q_drink5");

let q_drink1_status = 0;
let q_drink2_status = 0;
let q_drink3_status = 0;
let q_drink4_status = 0;
let q_drink5_status = 0;

q_drink1.addEventListener("click", () => {
    if (q_drink1_status == 0) {
        bgbluecwhite(q_drink1);
        bgwhitecblue(q_drink2);
        bgwhitecblue(q_drink3);
        bgwhitecblue(q_drink4);
        bgwhitecblue(q_drink5);
        q_drink1_status = 1;
        q_drink2_status = 0;
        q_drink3_status = 0;
        q_drink4_status = 0;
        q_drink5_status = 0;
        q_drink = 1;
    } else if (q_drink1_status == 1) {
        bgwhitecblue(q_drink1);
        q_drink1_status = 0;
        q_drink = 0;
    }
});

q_drink2.addEventListener("click", () => {
    if (q_drink2_status == 0) {
        bgwhitecblue(q_drink1);
        bgbluecwhite(q_drink2);
        bgwhitecblue(q_drink3);
        bgwhitecblue(q_drink4);
        bgwhitecblue(q_drink5);
        q_drink2_status = 1;
        q_drink1_status = 0;
        q_drink3_status = 0;
        q_drink4_status = 0;
        q_drink5_status = 0;
        q_drink = 2;
    } else if (q_drink2_status == 1) {
        bgwhitecblue(q_drink2);
        q_drink2_status = 0;
        q_drink = 0;
    }
});

q_drink3.addEventListener("click", () => {
    if (q_drink3_status == 0) {
        bgwhitecblue(q_drink1);
        bgwhitecblue(q_drink2);
        bgbluecwhite(q_drink3);
        bgwhitecblue(q_drink4);
        bgwhitecblue(q_drink5);
        q_drink3_status = 1;
        q_drink1_status = 0;
        q_drink2_status = 0;
        q_drink4_status = 0;
        q_drink5_status = 0;
        q_drink = 3;
    } else if (q_drink3_status == 1) {
        bgwhitecblue(q_drink3);
        q_drink3_status = 0;
        q_drink = 0;
    }
});

q_drink4.addEventListener("click", () => {
    if (q_drink4_status == 0) {
        bgwhitecblue(q_drink1);
        bgwhitecblue(q_drink2);
        bgwhitecblue(q_drink3);
        bgbluecwhite(q_drink4);
        bgwhitecblue(q_drink5);
        q_drink4_status = 1;
        q_drink1_status = 0;
        q_drink2_status = 0;
        q_drink3_status = 0;
        q_drink5_status = 0;
        q_drink = 4;
    } else if (q_drink4_status == 1) {
        bgwhitecblue(q_drink4);
        q_drink4_status = 0;
        q_drink = 0;
    }
});

q_drink5.addEventListener("click", () => {
    if (q_drink5_status == 0) {
        bgwhitecblue(q_drink1);
        bgwhitecblue(q_drink2);
        bgwhitecblue(q_drink3);
        bgwhitecblue(q_drink4);
        bgbluecwhite(q_drink5);
        q_drink5_status = 1;
        q_drink1_status = 0;
        q_drink2_status = 0;
        q_drink3_status = 0;
        q_drink4_status = 0;
        q_drink = 5;
    } else if (q_drink5_status == 1) {
        bgwhitecblue(q_drink5);
        q_drink5_status = 0;
        q_drink = 0;
    }
});

// ------------bottomarea9------------

let bottomarea9 = document.getElementById("bottomarea9");
let backbutton9 = document.getElementById("backbutton9");
let gobutton9 = document.getElementById("gobutton9");

backbutton9.addEventListener("click", () => {
    bottomarea9.style.height = "0px";
    bottomarea9.style.display = "none";
    bottomarea8.style.height = "89.218009478672985781990521327014%";
    bottomarea8.style.display = "flex";
});

gobutton9.addEventListener("click", () => {
    if (q_breakfast.value == 9) {
        alert('선택해주세요.');
    } else {
        bottomarea9.style.height = "0px";
        bottomarea9.style.display = "none";
        bottomarea10.style.height = "89.218009478672985781990521327014%";
        bottomarea10.style.display = "flex";
    }
});

let q_breakfast1 = document.getElementById("q_breakfast1");
let q_breakfast2 = document.getElementById("q_breakfast2");
let q_breakfast3 = document.getElementById("q_breakfast3");
let q_breakfast4 = document.getElementById("q_breakfast4");

let q_breakfast1_status = 0;
let q_breakfast2_status = 0;
let q_breakfast3_status = 0;
let q_breakfast4_status = 0;

q_breakfast1.addEventListener("click", () => {
    if (q_breakfast1_status == 0) {
        bgbluecwhite(q_breakfast1);
        bgwhitecblue(q_breakfast2);
        bgwhitecblue(q_breakfast3);
        bgwhitecblue(q_breakfast4);
        q_breakfast1_status = 1;
        q_breakfast2_status = 0;
        q_breakfast3_status = 0;
        q_breakfast4_status = 0;
        q_breakfast.value = 0;
    } else if (q_breakfast1_status == 1) {
        bgwhitecblue(q_breakfast1);
        q_breakfast1_status = 0;
        q_breakfast.value = 0;
    }
});

q_breakfast2.addEventListener("click", () => {
    if (q_breakfast2_status == 0) {
        bgwhitecblue(q_breakfast1);
        bgbluecwhite(q_breakfast2);
        bgwhitecblue(q_breakfast3);
        bgwhitecblue(q_breakfast4);
        q_breakfast2_status = 1;
        q_breakfast1_status = 0;
        q_breakfast3_status = 0;
        q_breakfast4_status = 0;
        q_breakfast.value = 1;
    } else if (q_breakfast2_status == 1) {
        bgwhitecblue(q_breakfast2);
        q_breakfast2_status = 0;
        q_breakfast.value = 0;
    }
});

q_breakfast3.addEventListener("click", () => {
    if (q_breakfast3_status == 0) {
        bgwhitecblue(q_breakfast1);
        bgwhitecblue(q_breakfast2);
        bgbluecwhite(q_breakfast3);
        bgwhitecblue(q_breakfast4);
        q_breakfast3_status = 1;
        q_breakfast1_status = 0;
        q_breakfast2_status = 0;
        q_breakfast4_status = 0;
        q_breakfast.value = 2;
    } else if (q_breakfast3_status == 1) {
        bgwhitecblue(q_breakfast3);
        q_breakfast3_status = 0;
        q_breakfast.value = 0;
    }
});

q_breakfast4.addEventListener("click", () => {
    if (q_breakfast4_status == 0) {
        bgwhitecblue(q_breakfast1);
        bgwhitecblue(q_breakfast2);
        bgwhitecblue(q_breakfast3);
        bgbluecwhite(q_breakfast4);
        q_breakfast4_status = 1;
        q_breakfast1_status = 0;
        q_breakfast2_status = 0;
        q_breakfast3_status = 0;
        q_breakfast.value = 3;
    } else if (q_breakfast4_status == 1) {
        bgwhitecblue(q_breakfast4);
        q_breakfast4_status = 0;
        q_breakfast.value = 0;
    }
});

// ------------bottomarea10------------

let bottomarea10 = document.getElementById("bottomarea10");
let backbutton10 = document.getElementById("backbutton10");
let gobutton10 = document.getElementById("gobutton10");

backbutton10.addEventListener("click", () => {
    bottomarea10.style.height = "0px";
    bottomarea10.style.display = "none";
    bottomarea9.style.height = "89.218009478672985781990521327014%";
    bottomarea9.style.display = "flex";
});

gobutton10.addEventListener("click", () => {
    if (q_lunch.value == 9) {
        alert('선택해주세요.');
    } else {
        bottomarea10.style.height = "0px";
        bottomarea10.style.display = "none";
        bottomarea11.style.height = "89.218009478672985781990521327014%";
        bottomarea11.style.display = "flex";
    }
});

let q_lunch1 = document.getElementById("q_lunch1");
let q_lunch2 = document.getElementById("q_lunch2");
let q_lunch3 = document.getElementById("q_lunch3");
let q_lunch4 = document.getElementById("q_lunch4");

let q_lunch1_status = 0;
let q_lunch2_status = 0;
let q_lunch3_status = 0;
let q_lunch4_status = 0;

q_lunch1.addEventListener("click", () => {
    if (q_lunch1_status == 0) {
        bgbluecwhite(q_lunch1);
        bgwhitecblue(q_lunch2);
        bgwhitecblue(q_lunch3);
        bgwhitecblue(q_lunch4);
        q_lunch1_status = 1;
        q_lunch2_status = 0;
        q_lunch3_status = 0;
        q_lunch4_status = 0;
        q_lunch.value = 0;
    } else if (q_lunch1_status == 1) {
        bgwhitecblue(q_lunch1);
        q_lunch1_status = 0;
        q_lunch.value = 0;
    }
});

q_lunch2.addEventListener("click", () => {
    if (q_lunch2_status == 0) {
        bgwhitecblue(q_lunch1);
        bgbluecwhite(q_lunch2);
        bgwhitecblue(q_lunch3);
        bgwhitecblue(q_lunch4);
        q_lunch2_status = 1;
        q_lunch1_status = 0;
        q_lunch3_status = 0;
        q_lunch4_status = 0;
        q_lunch.value = 1;
    } else if (q_lunch2_status == 1) {
        bgwhitecblue(q_lunch2);
        q_lunch2_status = 0;
        q_lunch.value = 0;
    }
});

q_lunch3.addEventListener("click", () => {
    if (q_lunch3_status == 0) {
        bgwhitecblue(q_lunch1);
        bgwhitecblue(q_lunch2);
        bgbluecwhite(q_lunch3);
        bgwhitecblue(q_lunch4);
        q_lunch3_status = 1;
        q_lunch1_status = 0;
        q_lunch2_status = 0;
        q_lunch4_status = 0;
        q_lunch.value = 2;
    } else if (q_lunch3_status == 1) {
        bgwhitecblue(q_lunch3);
        q_lunch3_status = 0;
        q_lunch.value = 0;
    }
});

q_lunch4.addEventListener("click", () => {
    if (q_lunch4_status == 0) {
        bgwhitecblue(q_lunch1);
        bgwhitecblue(q_lunch2);
        bgwhitecblue(q_lunch3);
        bgbluecwhite(q_lunch4);
        q_lunch4_status = 1;
        q_lunch1_status = 0;
        q_lunch2_status = 0;
        q_lunch3_status = 0;
        q_lunch.value = 3;
    } else if (q_lunch4_status == 1) {
        bgwhitecblue(q_lunch4);
        q_lunch4_status = 0;
        q_lunch.value = 0;
    }
});

// ------------bottomarea11------------

let bottomarea11 = document.getElementById("bottomarea11");
let backbutton11 = document.getElementById("backbutton11");
let gobutton11 = document.getElementById("gobutton11");

backbutton11.addEventListener("click", () => {
    bottomarea11.style.height = "0px";
    bottomarea11.style.display = "none";
    bottomarea10.style.height = "89.218009478672985781990521327014%";
    bottomarea10.style.display = "flex";
});

gobutton11.addEventListener("click", () => {
    if (q_dinner.value == 9) {
        alert('선택해주세요.');
    } else {
        bottomarea11.style.height = "0px";
        bottomarea11.style.display = "none";
        bottomarea12.style.height = "89.218009478672985781990521327014%";
        bottomarea12.style.display = "flex";
    }
});

let q_dinner1 = document.getElementById("q_dinner1");
let q_dinner2 = document.getElementById("q_dinner2");
let q_dinner3 = document.getElementById("q_dinner3");
let q_dinner4 = document.getElementById("q_dinner4");
let q_dinner5 = document.getElementById("q_dinner5");

let q_dinner1_status = 0;
let q_dinner2_status = 0;
let q_dinner3_status = 0;
let q_dinner4_status = 0;

q_dinner1.addEventListener("click", () => {
    if (q_dinner1_status == 0) {
        bgbluecwhite(q_dinner1);
        bgwhitecblue(q_dinner2);
        bgwhitecblue(q_dinner3);
        bgwhitecblue(q_dinner4);
        q_dinner1_status = 1;
        q_dinner2_status = 0;
        q_dinner3_status = 0;
        q_dinner4_status = 0;
        q_dinner.value = 0;
    } else if (q_dinner1_status == 1) {
        bgwhitecblue(q_dinner1);
        q_dinner1_status = 0;
        q_dinner.value = 0;
    }
});

q_dinner2.addEventListener("click", () => {
    if (q_dinner2_status == 0) {
        bgwhitecblue(q_dinner1);
        bgbluecwhite(q_dinner2);
        bgwhitecblue(q_dinner3);
        bgwhitecblue(q_dinner4);
        q_dinner2_status = 1;
        q_dinner1_status = 0;
        q_dinner3_status = 0;
        q_dinner4_status = 0;
        q_dinner.value = 1;
    } else if (q_dinner2_status == 1) {
        bgwhitecblue(q_dinner2);
        q_dinner2_status = 0;
        q_dinner.value = 0;
    }
});

q_dinner3.addEventListener("click", () => {
    if (q_dinner3_status == 0) {
        bgwhitecblue(q_dinner1);
        bgwhitecblue(q_dinner2);
        bgbluecwhite(q_dinner3);
        bgwhitecblue(q_dinner4);
        q_dinner3_status = 1;
        q_dinner1_status = 0;
        q_dinner2_status = 0;
        q_dinner4_status = 0;
        q_dinner.value = 2;
    } else if (q_dinner3_status == 1) {
        bgwhitecblue(q_dinner3);
        q_dinner3_status = 0;
        q_dinner.value = 0;
    }
});

q_dinner4.addEventListener("click", () => {
    if (q_dinner4_status == 0) {
        bgwhitecblue(q_dinner1);
        bgwhitecblue(q_dinner2);
        bgwhitecblue(q_dinner3);
        bgbluecwhite(q_dinner4);
        q_dinner4_status = 1;
        q_dinner1_status = 0;
        q_dinner2_status = 0;
        q_dinner3_status = 0;
        q_dinner.value = 3;
    } else if (q_dinner4_status == 1) {
        bgwhitecblue(q_dinner4);
        q_dinner4_status = 0;
        q_dinner.value = 0;
    }
});

// ------------bottomarea12------------

let bottomarea12 = document.getElementById("bottomarea12");
let backbutton12 = document.getElementById("backbutton12");
let gobutton12 = document.getElementById("gobutton12");

backbutton12.addEventListener("click", () => {
    bottomarea12.style.height = "0px";
    bottomarea12.style.display = "none";
    bottomarea11.style.height = "89.218009478672985781990521327014%";
    bottomarea11.style.display = "flex";
});

gobutton12.addEventListener("click", () => {
    if (q_smoke.value == 9) {
        alert('선택해주세요.');
    } else {
        bottomarea12.style.height = "0px";
        bottomarea12.style.display = "none";
        bottomarea13.style.height = "89.218009478672985781990521327014%";
        bottomarea13.style.display = "flex";
    }
});

let q_smoke1 = document.getElementById("q_smoke1");
let q_smoke2 = document.getElementById("q_smoke2");

let q_smoke1_status = 0;
let q_smoke2_status = 0;

q_smoke1.addEventListener("click", () => {
    if (q_smoke1_status == 0) {
        bgbluecwhite(q_smoke1);
        bgwhitecblue(q_smoke2);
        q_smoke1_status = 1;
        q_smoke2_status = 0;
        q_smoke.value = 1;
    } else if (q_smoke1_status == 1) {
        bgwhitecblue(q_smoke1);
        q_smoke1_status = 0;
    }
});

q_smoke2.addEventListener("click", () => {
    if (q_smoke2_status == 0) {
        bgwhitecblue(q_smoke1);
        bgbluecwhite(q_smoke2);
        q_smoke2_status = 1;
        q_smoke1_status = 0;
        q_smoke.value = 0;
    } else if (q_smoke2_status == 1) {
        bgwhitecblue(q_smoke2);
        q_smoke2_status = 0;
    }
});

// ------------bottomarea13------------

let bottomarea13 = document.getElementById("bottomarea13");
let backbutton13 = document.getElementById("backbutton13");
let gobutton13 = document.getElementById("gobutton13");
let bottomarea13_1 = document.getElementById("bottomarea13_1");
let backbutton13_1 = document.getElementById("backbutton13_1");
let gobutton13_1 = document.getElementById("gobutton13_1");
let bottomarea13_2 = document.getElementById("bottomarea13_2");
let backbutton13_2 = document.getElementById("backbutton13_2");
let gobutton13_2 = document.getElementById("gobutton13_2");

backbutton13.addEventListener("click", () => {
    bottomarea13.style.height = "0px";
    bottomarea13.style.display = "none";
    bottomarea12.style.height = "89.218009478672985781990521327014%";
    bottomarea12.style.display = "flex";
});

gobutton13.addEventListener("click", () => {
    if (q_alcohol.value == 9) {
        alert('선택해주세요.');
    } else {
        if (q_alcohol1_status === 1 && q_alcohol2_status === 0) {
            bottomarea13.style.height = "0px";
            bottomarea13.style.display = "none";
            bottomarea13_1.style.height = "89.218009478672985781990521327014%";
            bottomarea13_1.style.display = "flex";
        } else if (q_alcohol1_status === 0 && q_alcohol2_status === 1) {
            q_alcohol_time1_status = 0;
            q_alcohol_time2_status = 0;
            q_alcohol_time3_status = 0;
            q_alcohol_time4_status = 0;
            q_alcohol_time.value = 0;
            q_alcohol_quant1_status = 0;
            q_alcohol_quant2_status = 0;
            q_alcohol_quant3_status = 0;
            q_alcohol_quant4_status = 0;
            q_alcohol_quant5_status = 0;
            q_alcohol_quant.value = 0;
            bgwhitecblue(q_alcohol_time1);
            bgwhitecblue(q_alcohol_time2);
            bgwhitecblue(q_alcohol_time3);
            bgwhitecblue(q_alcohol_time4);
            bgwhitecblue(q_alcohol_quant1);
            bgwhitecblue(q_alcohol_quant2);
            bgwhitecblue(q_alcohol_quant3);
            bgwhitecblue(q_alcohol_quant4);
            bgwhitecblue(q_alcohol_quant5);
            bottomarea13.style.height = "0px";
            bottomarea13.style.display = "none";
            bottomarea14.style.height = "89.218009478672985781990521327014%";
            bottomarea14.style.display = "flex";
        }
    }
});

backbutton13_1.addEventListener("click", () => {
    bottomarea13_1.style.height = "0px";
    bottomarea13_1.style.display = "none";
    bottomarea13.style.height = "89.218009478672985781990521327014%";
    bottomarea13.style.display = "flex";
});

gobutton13_1.addEventListener("click", () => {
    if (q_alcohol_time.value == 0) {
        alert('선택해주세요.');
    } else {
        bottomarea13_1.style.height = "0px";
        bottomarea13_1.style.display = "none";
        bottomarea13_2.style.height = "89.218009478672985781990521327014%";
        bottomarea13_2.style.display = "flex";
    }
});

backbutton13_2.addEventListener("click", () => {
    bottomarea13_2.style.height = "0px";
    bottomarea13_2.style.display = "none";
    bottomarea13_1.style.height = "89.218009478672985781990521327014%";
    bottomarea13_1.style.display = "flex";
});

gobutton13_2.addEventListener("click", () => {
    if (q_alcohol_quant.value == 0) {
        alert('선택해주세요.');
    } else {
        bottomarea13_2.style.height = "0px";
        bottomarea13_2.style.display = "none";
        bottomarea14.style.height = "89.218009478672985781990521327014%";
        bottomarea14.style.display = "flex";
    }
});

let q_alcohol1 = document.getElementById("q_alcohol1");
let q_alcohol2 = document.getElementById("q_alcohol2");

let q_alcohol1_status = 0;
let q_alcohol2_status = 0;
q_alcohol1.addEventListener("click", () => {
    if (q_alcohol1_status == 0) {
        q_alcohol1.style.color = "#FFFFFF";
        q_alcohol1.style.backgroundColor = "#5196FF";
        q_alcohol2.style.color = "#5196FF";
        q_alcohol2.style.backgroundColor = "#FFFFFF";
        q_alcohol1_status = 1;
        q_alcohol2_status = 0;
        q_alcohol.value = 1;
    } else if (q_alcohol1_status == 1) {
        q_alcohol1.style.color = "#5196FF";
        q_alcohol1.style.backgroundColor = "#FFFFFF";
        q_alcohol1_status = 0;
        q_alcohol.value = 0;
    }
});

q_alcohol2.addEventListener("click", () => {
    if (q_alcohol2_status == 0) {
        q_alcohol2.style.color = "#FFFFFF";
        q_alcohol2.style.backgroundColor = "#5196FF";
        q_alcohol1.style.color = "#5196FF";
        q_alcohol1.style.backgroundColor = "#FFFFFF";
        q_alcohol2_status = 1;
        q_alcohol1_status = 0;
        q_alcohol.value =0;
    } else if (q_alcohol2_status == 1) {
        q_alcohol2.style.color = "#5196FF";
        q_alcohol2.style.backgroundColor = "#FFFFFF";
        q_alcohol2_status = 0;
        q_alcohol.value = 0;
    }
});

let q_alcohol_time1 = document.getElementById("q_alcohol_time1");
let q_alcohol_time2 = document.getElementById("q_alcohol_time2");
let q_alcohol_time3 = document.getElementById("q_alcohol_time3");
let q_alcohol_time4 = document.getElementById("q_alcohol_time4");

let q_alcohol_time1_status = 0;
let q_alcohol_time2_status = 0;
let q_alcohol_time3_status = 0;
let q_alcohol_time4_status = 0;

q_alcohol_time1.addEventListener("click", () => {
    if (q_alcohol_time1_status == 0) {
        q_alcohol_time1.style.color = "#FFFFFF";
        q_alcohol_time1.style.backgroundColor = "#5196FF";
        q_alcohol_time2.style.color = "#5196FF";
        q_alcohol_time2.style.backgroundColor = "#FFFFFF";
        q_alcohol_time3.style.color = "#5196FF";
        q_alcohol_time3.style.backgroundColor = "#FFFFFF";
        q_alcohol_time4.style.color = "#5196FF";
        q_alcohol_time4.style.backgroundColor = "#FFFFFF";
        q_alcohol_time1_status = 1;
        q_alcohol_time2_status = 0;
        q_alcohol_time3_status = 0;
        q_alcohol_time4_status = 0;
        q_alcohol_time.value = 1;
    } else if (q_alcohol_time1_status == 1) {
        q_alcohol_time1.style.color = "#5196FF";
        q_alcohol_time1.style.backgroundColor = "#FFFFFF";
        q_alcohol_time1_status = 0;
        q_alcohol_time.value = 0;
    }
});

q_alcohol_time2.addEventListener("click", () => {
    if (q_alcohol_time2_status == 0) {
        q_alcohol_time2.style.color = "#FFFFFF";
        q_alcohol_time2.style.backgroundColor = "#5196FF";
        q_alcohol_time1.style.color = "#5196FF";
        q_alcohol_time1.style.backgroundColor = "#FFFFFF";
        q_alcohol_time3.style.color = "#5196FF";
        q_alcohol_time3.style.backgroundColor = "#FFFFFF";
        q_alcohol_time4.style.color = "#5196FF";
        q_alcohol_time4.style.backgroundColor = "#FFFFFF";
        q_alcohol_time2_status = 1;
        q_alcohol_time1_status = 0;
        q_alcohol_time3_status = 0;
        q_alcohol_time4_status = 0;
        q_alcohol_time.value = 2;
    } else if (q_alcohol_time2_status == 1) {
        q_alcohol_time2.style.color = "#5196FF";
        q_alcohol_time2.style.backgroundColor = "#FFFFFF";
        q_alcohol_time2_status = 0;
        q_alcohol_time.value = 0;
    }
});

q_alcohol_time3.addEventListener("click", () => {
    if (q_alcohol_time3_status == 0) {
        q_alcohol_time3.style.color = "#FFFFFF";
        q_alcohol_time3.style.backgroundColor = "#5196FF";
        q_alcohol_time1.style.color = "#5196FF";
        q_alcohol_time1.style.backgroundColor = "#FFFFFF";
        q_alcohol_time2.style.color = "#5196FF";
        q_alcohol_time2.style.backgroundColor = "#FFFFFF";
        q_alcohol_time4.style.color = "#5196FF";
        q_alcohol_time4.style.backgroundColor = "#FFFFFF";
        q_alcohol_time3_status = 1;
        q_alcohol_time1_status = 0;
        q_alcohol_time2_status = 0;
        q_alcohol_time4_status = 0;
        q_alcohol_time.value = 3;
    } else if (q_alcohol_time3_status == 1) {
        q_alcohol_time3.style.color = "#5196FF";
        q_alcohol_time3.style.backgroundColor = "#FFFFFF";
        q_alcohol_time3_status = 0;
        q_alcohol_time.value = 0;
    }
});

q_alcohol_time4.addEventListener("click", () => {
    if (q_alcohol_time4_status == 0) {
        q_alcohol_time4.style.color = "#FFFFFF";
        q_alcohol_time4.style.backgroundColor = "#5196FF";
        q_alcohol_time1.style.color = "#5196FF";
        q_alcohol_time1.style.backgroundColor = "#FFFFFF";
        q_alcohol_time2.style.color = "#5196FF";
        q_alcohol_time2.style.backgroundColor = "#FFFFFF";
        q_alcohol_time3.style.color = "#5196FF";
        q_alcohol_time3.style.backgroundColor = "#FFFFFF";
        q_alcohol_time4_status = 1;
        q_alcohol_time1_status = 0;
        q_alcohol_time2_status = 0;
        q_alcohol_time3_status = 0;
        q_alcohol_time.value = 4;
    } else if (q_alcohol_time4_status == 1) {
        q_alcohol_time4.style.color = "#5196FF";
        q_alcohol_time4.style.backgroundColor = "#FFFFFF";
        q_alcohol_time4_status = 0;
        q_alcohol_time.value = 0;
    }
});

let q_alcohol_quant1 = document.getElementById("q_alcohol_quant1");
let q_alcohol_quant2 = document.getElementById("q_alcohol_quant2");
let q_alcohol_quant3 = document.getElementById("q_alcohol_quant3");
let q_alcohol_quant4 = document.getElementById("q_alcohol_quant4");
let q_alcohol_quant5 = document.getElementById("q_alcohol_quant5");

let q_alcohol_quant1_status = 0;
let q_alcohol_quant2_status = 0;
let q_alcohol_quant3_status = 0;
let q_alcohol_quant4_status = 0;
let q_alcohol_quant5_status = 0;

q_alcohol_quant1.addEventListener("click", () => {
    if (q_alcohol_quant1_status == 0) {
        q_alcohol_quant1.style.color = "#FFFFFF";
        q_alcohol_quant1.style.backgroundColor = "#5196FF";
        q_alcohol_quant2.style.color = "#5196FF";
        q_alcohol_quant2.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant3.style.color = "#5196FF";
        q_alcohol_quant3.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant4.style.color = "#5196FF";
        q_alcohol_quant4.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant5.style.color = "#5196FF";
        q_alcohol_quant5.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant1_status = 1;
        q_alcohol_quant2_status = 0;
        q_alcohol_quant3_status = 0;
        q_alcohol_quant4_status = 0;
        q_alcohol_quant5_status = 0;
        q_alcohol_quant.value = 1;
    } else if (q_alcohol_quant1_status == 1) {
        q_alcohol_quant1.style.color = "#5196FF";
        q_alcohol_quant1.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant1_status = 0;
        q_alcohol_quant.value = 0;
    }

});

q_alcohol_quant2.addEventListener("click", () => {
    if (q_alcohol_quant2_status == 0) {
        q_alcohol_quant2.style.color = "#FFFFFF";
        q_alcohol_quant2.style.backgroundColor = "#5196FF";
        q_alcohol_quant1.style.color = "#5196FF";
        q_alcohol_quant1.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant3.style.color = "#5196FF";
        q_alcohol_quant3.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant4.style.color = "#5196FF";
        q_alcohol_quant4.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant5.style.color = "#5196FF";
        q_alcohol_quant5.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant2_status = 1;
        q_alcohol_quant1_status = 0;
        q_alcohol_quant3_status = 0;
        q_alcohol_quant4_status = 0;
        q_alcohol_quant5_status = 0;
        q_alcohol_quant.value = 2;
    } else if (q_alcohol_quant2_status == 1) {
        q_alcohol_quant2.style.color = "#5196FF";
        q_alcohol_quant2.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant2_status = 0;
        q_alcohol_quant.value = 0;
    }
});

q_alcohol_quant3.addEventListener("click", () => {
    if (q_alcohol_quant3_status == 0) {
        q_alcohol_quant3.style.color = "#FFFFFF";
        q_alcohol_quant3.style.backgroundColor = "#5196FF";
        q_alcohol_quant1.style.color = "#5196FF";
        q_alcohol_quant1.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant2.style.color = "#5196FF";
        q_alcohol_quant2.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant4.style.color = "#5196FF";
        q_alcohol_quant4.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant5.style.color = "#5196FF";
        q_alcohol_quant5.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant3_status = 1;
        q_alcohol_quant1_status = 0;
        q_alcohol_quant2_status = 0;
        q_alcohol_quant4_status = 0;
        q_alcohol_quant5_status = 0;
        q_alcohol_quant.value = 3;
    } else if (q_alcohol_quant3_status == 1) {
        q_alcohol_quant3.style.color = "#5196FF";
        q_alcohol_quant3.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant3_status = 0;
        q_alcohol_quant.value = 0;
    }
});

q_alcohol_quant4.addEventListener("click", () => {
    if (q_alcohol_quant4_status == 0) {
        q_alcohol_quant4.style.color = "#FFFFFF";
        q_alcohol_quant4.style.backgroundColor = "#5196FF";
        q_alcohol_quant1.style.color = "#5196FF";
        q_alcohol_quant1.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant2.style.color = "#5196FF";
        q_alcohol_quant2.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant3.style.color = "#5196FF";
        q_alcohol_quant3.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant5.style.color = "#5196FF";
        q_alcohol_quant5.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant4_status = 1;
        q_alcohol_quant1_status = 0;
        q_alcohol_quant2_status = 0;
        q_alcohol_quant3_status = 0;
        q_alcohol_quant5_status = 0;
        q_alcohol_quant.value = 4;
    } else if (q_alcohol_quant4_status == 1) {
        q_alcohol_quant4.style.color = "#5196FF";
        q_alcohol_quant4.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant4_status = 0;
        q_alcohol_quant.value = 0;
    }
});

q_alcohol_quant5.addEventListener("click", () => {
    if (q_alcohol_quant5_status == 0) {
        q_alcohol_quant5.style.color = "#FFFFFF";
        q_alcohol_quant5.style.backgroundColor = "#5196FF";
        q_alcohol_quant1.style.color = "#5196FF";
        q_alcohol_quant1.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant2.style.color = "#5196FF";
        q_alcohol_quant2.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant3.style.color = "#5196FF";
        q_alcohol_quant3.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant4.style.color = "#5196FF";
        q_alcohol_quant4.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant5_status = 1;
        q_alcohol_quant1_status = 0;
        q_alcohol_quant2_status = 0;
        q_alcohol_quant3_status = 0;
        q_alcohol_quant4_status = 0;
        q_alcohol_quant.value = 5;
    } else if (q_alcohol_quant5_status == 1) {
        q_alcohol_quant5.style.color = "#5196FF";
        q_alcohol_quant5.style.backgroundColor = "#FFFFFF";
        q_alcohol_quant5_status = 0;
        q_alcohol_quant.value = 0;
    }
});

// ------------bottomarea14------------

let bottomarea14 = document.getElementById("bottomarea14");
let backbutton14 = document.getElementById("backbutton14");
let gobutton14 = document.getElementById("gobutton14");

backbutton14.addEventListener("click", () => {
    bottomarea14.style.height = "0px";
    bottomarea14.style.display = "none";
    if (q_alcohol1_status === 1 && q_alcohol2_status === 0) {
        bottomarea13_2.style.height = "89.218009478672985781990521327014%";
        bottomarea13_2.style.display = "flex";
    } else if (q_alcohol1_status === 0 && q_alcohol2_status === 1) {
        bottomarea13.style.height = "89.218009478672985781990521327014%";
        bottomarea13.style.display = "flex";
    }
});

gobutton14.addEventListener("click", () => {
    if (q_tired.value === 0) {
        alert('선택해주세요.');
    } else {
        bottomarea14.style.height = "0px";
        bottomarea14.style.display = "none";
        bottomarea15.style.height = "89.218009478672985781990521327014%";
        bottomarea15.style.display = "flex";
    }
});

let q_tired1 = document.getElementById("q_tired1");
let q_tired2 = document.getElementById("q_tired2");
let q_tired3 = document.getElementById("q_tired3");
let q_tired4 = document.getElementById("q_tired4");
let q_tired5 = document.getElementById("q_tired5");

let q_tired1_status = 0;
let q_tired2_status = 0;
let q_tired3_status = 0;
let q_tired4_status = 0;
let q_tired5_status = 0;

q_tired1.addEventListener("click", () => {
    if (q_tired1_status == 0) {
        q_tired1.style.color = "#FFFFFF";
        q_tired1.style.backgroundColor = "#5196FF";
        q_tired2.style.color = "#5196FF";
        q_tired2.style.backgroundColor = "#FFFFFF";
        q_tired3.style.color = "#5196FF";
        q_tired3.style.backgroundColor = "#FFFFFF";
        q_tired4.style.color = "#5196FF";
        q_tired4.style.backgroundColor = "#FFFFFF";
        q_tired5.style.color = "#5196FF";
        q_tired5.style.backgroundColor = "#FFFFFF";
        q_tired1_status = 1;
        q_tired2_status = 0;
        q_tired3_status = 0;
        q_tired4_status = 0;
        q_tired5_status = 0;
        q_tired.value = 5;
    } else if (q_tired1_status == 1) {
        q_tired1.style.color = "#5196FF";
        q_tired1.style.backgroundColor = "#FFFFFF";
        q_tired1_status = 0;
        q_tired.value = 0;
    }
});

q_tired2.addEventListener("click", () => {
    if (q_tired2_status == 0) {
        q_tired2.style.color = "#FFFFFF";
        q_tired2.style.backgroundColor = "#5196FF";
        q_tired1.style.color = "#5196FF";
        q_tired1.style.backgroundColor = "#FFFFFF";
        q_tired3.style.color = "#5196FF";
        q_tired3.style.backgroundColor = "#FFFFFF";
        q_tired4.style.color = "#5196FF";
        q_tired4.style.backgroundColor = "#FFFFFF";
        q_tired5.style.color = "#5196FF";
        q_tired5.style.backgroundColor = "#FFFFFF";
        q_tired2_status = 1;
        q_tired1_status = 0;
        q_tired3_status = 0;
        q_tired4_status = 0;
        q_tired5_status = 0;
        q_tired.value = 4;
    } else if (q_tired2_status == 1) {
        q_tired2.style.color = "#5196FF";
        q_tired2.style.backgroundColor = "#FFFFFF";
        q_tired2_status = 0;
        q_tired.value = 0;
    }
});

q_tired3.addEventListener("click", () => {
    if (q_tired3_status == 0) {
        q_tired3.style.color = "#FFFFFF";
        q_tired3.style.backgroundColor = "#5196FF";
        q_tired1.style.color = "#5196FF";
        q_tired1.style.backgroundColor = "#FFFFFF";
        q_tired2.style.color = "#5196FF";
        q_tired2.style.backgroundColor = "#FFFFFF";
        q_tired4.style.color = "#5196FF";
        q_tired4.style.backgroundColor = "#FFFFFF";
        q_tired5.style.color = "#5196FF";
        q_tired5.style.backgroundColor = "#FFFFFF";
        q_tired3_status = 1;
        q_tired1_status = 0;
        q_tired2_status = 0;
        q_tired4_status = 0;
        q_tired5_status = 0;
        q_tired.value = 3;
    } else if (q_tired3_status == 1) {
        q_tired3.style.color = "#5196FF";
        q_tired3.style.backgroundColor = "#FFFFFF";
        q_tired3_status = 0;
        q_tired.value = 0;
    }
});

q_tired4.addEventListener("click", () => {
    if (q_tired4_status == 0) {
        q_tired4.style.color = "#FFFFFF";
        q_tired4.style.backgroundColor = "#5196FF";
        q_tired1.style.color = "#5196FF";
        q_tired1.style.backgroundColor = "#FFFFFF";
        q_tired2.style.color = "#5196FF";
        q_tired2.style.backgroundColor = "#FFFFFF";
        q_tired3.style.color = "#5196FF";
        q_tired3.style.backgroundColor = "#FFFFFF";
        q_tired5.style.color = "#5196FF";
        q_tired5.style.backgroundColor = "#FFFFFF";
        q_tired4_status = 1;
        q_tired1_status = 0;
        q_tired2_status = 0;
        q_tired3_status = 0;
        q_tired5_status = 0;
        q_tired.value = 2;
    } else if (q_tired4_status == 1) {
        q_tired4.style.color = "#5196FF";
        q_tired4.style.backgroundColor = "#FFFFFF";
        q_tired4_status = 0;
        q_tired.value = 0;
    }
});

q_tired5.addEventListener("click", () => {
    if (q_tired5_status == 0) {
        q_tired5.style.color = "#FFFFFF";
        q_tired5.style.backgroundColor = "#5196FF";
        q_tired1.style.color = "#5196FF";
        q_tired1.style.backgroundColor = "#FFFFFF";
        q_tired2.style.color = "#5196FF";
        q_tired2.style.backgroundColor = "#FFFFFF";
        q_tired3.style.color = "#5196FF";
        q_tired3.style.backgroundColor = "#FFFFFF";
        q_tired4.style.color = "#5196FF";
        q_tired4.style.backgroundColor = "#FFFFFF";
        q_tired5_status = 1;
        q_tired1_status = 0;
        q_tired2_status = 0;
        q_tired3_status = 0;
        q_tired4_status = 0;
        q_tired.value = 1;
    } else if (q_tired5_status == 1) {
        q_tired5.style.color = "#5196FF";
        q_tired5.style.backgroundColor = "#FFFFFF";
        q_tired5_status = 0;
        q_tired.value = 0;
    }
});

// ------------bottomarea15------------

let bottomarea15 = document.getElementById("bottomarea15");
let backbutton15 = document.getElementById("backbutton15");
let gobutton15 = document.getElementById("gobutton15");

backbutton15.addEventListener("click", () => {
    bottomarea15.style.height = "0px";
    bottomarea15.style.display = "none";
    bottomarea14.style.height = "89.218009478672985781990521327014%";
    bottomarea14.style.display = "flex";
});

gobutton15.addEventListener("click", () => {
    if (q_sleep.value == 0) {
        alert('선택해주세요.');
    } else {
        bottomarea15.style.height = "0px";
        bottomarea15.style.display = "none";
        bottomarea16.style.height = "89.218009478672985781990521327014%";
        bottomarea16.style.display = "flex";
    }
});

let q_sleep1 = document.getElementById("q_sleep1");
let q_sleep2 = document.getElementById("q_sleep2");
let q_sleep3 = document.getElementById("q_sleep3");
let q_sleep4 = document.getElementById("q_sleep4");

let q_sleep1_status = 0;
let q_sleep2_status = 0;
let q_sleep3_status = 0;
let q_sleep4_status = 0;

q_sleep1.addEventListener("click", () => {
    if (q_sleep1_status == 0) {
        bgbluecwhite(q_sleep1);
        bgwhitecblue(q_sleep2);
        bgwhitecblue(q_sleep3);
        bgwhitecblue(q_sleep4);
        q_sleep1_status = 1;
        q_sleep2_status = 0;
        q_sleep3_status = 0;
        q_sleep4_status = 0;
        q_sleep.value = 4;
    } else if (q_sleep1_status == 1) {
        bgwhitecblue(q_sleep1);
        q_sleep1_status = 0;
        q_sleep.value = 0;
    }
});

q_sleep2.addEventListener("click", () => {
    if (q_sleep2_status == 0) {
        bgwhitecblue(q_sleep1);
        bgbluecwhite(q_sleep2);
        bgwhitecblue(q_sleep3);
        bgwhitecblue(q_sleep4);
        q_sleep2_status = 1;
        q_sleep1_status = 0;
        q_sleep3_status = 0;
        q_sleep4_status = 0;
        q_sleep.value = 3;
    } else if (q_sleep2_status == 1) {
        bgwhitecblue(q_sleep2);
        q_sleep2_status = 0;
        q_sleep.value = 0;
    }
});

q_sleep3.addEventListener("click", () => {
    if (q_sleep3_status == 0) {
        bgwhitecblue(q_sleep1);
        bgwhitecblue(q_sleep2);
        bgbluecwhite(q_sleep3);
        bgwhitecblue(q_sleep4);
        q_sleep3_status = 1;
        q_sleep1_status = 0;
        q_sleep2_status = 0;
        q_sleep4_status = 0;
        q_sleep.value = 2;
    } else if (q_sleep3_status == 1) {
        bgwhitecblue(q_sleep3);
        q_sleep3_status = 0;
        q_sleep.value = 0;
    }
});

q_sleep4.addEventListener("click", () => {
    if (q_sleep4_status == 0) {
        bgwhitecblue(q_sleep1);
        bgwhitecblue(q_sleep2);
        bgwhitecblue(q_sleep3);
        bgbluecwhite(q_sleep4);
        q_sleep4_status = 1;
        q_sleep1_status = 0;
        q_sleep2_status = 0;
        q_sleep3_status = 0;
        q_sleep.value = 1;
    } else if (q_sleep4_status == 1) {
        bgwhitecblue(q_sleep4);
        q_sleep4_status = 0;
        q_sleep.value = 0;
    }
});

// ------------bottomarea16------------

let bottomarea16 = document.getElementById("bottomarea16");
let backbutton16 = document.getElementById("backbutton16");
let gobutton16 = document.getElementById("gobutton16");

backbutton16.addEventListener("click", () => {
    bottomarea16.style.height = "0px";
    bottomarea16.style.display = "none";
    bottomarea15.style.height = "89.218009478672985781990521327014%";
    bottomarea15.style.display = "flex";
});

gobutton16.addEventListener("click", () => {
    if (q_stress.value == 0) {
        alert('선택해주세요.');
    } else {
        bottomarea16.style.height = "0px";
        bottomarea16.style.display = "none";
        bottomarea17.style.height = "89.218009478672985781990521327014%";
        bottomarea17.style.display = "flex";
    }
});

let q_stress1 = document.getElementById("q_stress1");
let q_stress2 = document.getElementById("q_stress2");
let q_stress3 = document.getElementById("q_stress3");
let q_stress4 = document.getElementById("q_stress4");
let q_stress5 = document.getElementById("q_stress5");

let q_stress1_status = 0;
let q_stress2_status = 0;
let q_stress3_status = 0;
let q_stress4_status = 0;
let q_stress5_status = 0;

q_stress1.addEventListener("click", () => {
    if (q_stress1_status == 0) {
        q_stress1.style.color = "#FFFFFF";
        q_stress1.style.backgroundColor = "#5196FF";
        q_stress2.style.color = "#5196FF";
        q_stress2.style.backgroundColor = "#FFFFFF";
        q_stress3.style.color = "#5196FF";
        q_stress3.style.backgroundColor = "#FFFFFF";
        q_stress4.style.color = "#5196FF";
        q_stress4.style.backgroundColor = "#FFFFFF";
        q_stress5.style.color = "#5196FF";
        q_stress5.style.backgroundColor = "#FFFFFF";
        q_stress1_status = 1;
        q_stress2_status = 0;
        q_stress3_status = 0;
        q_stress4_status = 0;
        q_stress5_status = 0;
        q_stress.value = 1;
    } else if (q_stress1_status == 1) {
        q_stress1.style.color = "#5196FF";
        q_stress1.style.backgroundColor = "#FFFFFF";
        q_stress1_status = 0;
        q_stress.value = 0;
    }
});

q_stress2.addEventListener("click", () => {
    if (q_stress2_status == 0) {
        q_stress2.style.color = "#FFFFFF";
        q_stress2.style.backgroundColor = "#5196FF";
        q_stress1.style.color = "#5196FF";
        q_stress1.style.backgroundColor = "#FFFFFF";
        q_stress3.style.color = "#5196FF";
        q_stress3.style.backgroundColor = "#FFFFFF";
        q_stress4.style.color = "#5196FF";
        q_stress4.style.backgroundColor = "#FFFFFF";
        q_stress5.style.color = "#5196FF";
        q_stress5.style.backgroundColor = "#FFFFFF";
        q_stress2_status = 1;
        q_stress1_status = 0;
        q_stress3_status = 0;
        q_stress4_status = 0;
        q_stress5_status = 0;
        q_stress.value = 2;
    } else if (q_stress2_status == 1) {
        q_stress2.style.color = "#5196FF";
        q_stress2.style.backgroundColor = "#FFFFFF";
        q_stress2_status = 0;
        q_stress.value = 0;
    }
});

q_stress3.addEventListener("click", () => {
    if (q_stress3_status == 0) {
        q_stress3.style.color = "#FFFFFF";
        q_stress3.style.backgroundColor = "#5196FF";
        q_stress1.style.color = "#5196FF";
        q_stress1.style.backgroundColor = "#FFFFFF";
        q_stress2.style.color = "#5196FF";
        q_stress2.style.backgroundColor = "#FFFFFF";
        q_stress4.style.color = "#5196FF";
        q_stress4.style.backgroundColor = "#FFFFFF";
        q_stress5.style.color = "#5196FF";
        q_stress5.style.backgroundColor = "#FFFFFF";
        q_stress3_status = 1;
        q_stress1_status = 0;
        q_stress2_status = 0;
        q_stress4_status = 0;
        q_stress5_status = 0;
        q_stress.value = 0;
    } else if (q_stress3_status == 1) {
        q_stress3.style.color = "#5196FF";
        q_stress3.style.backgroundColor = "#FFFFFF";
        q_stress3_status = 0;
        q_stress.value = 0;
    }
});

q_stress4.addEventListener("click", () => {
    if (q_stress4_status == 0) {
        q_stress4.style.color = "#FFFFFF";
        q_stress4.style.backgroundColor = "#5196FF";
        q_stress1.style.color = "#5196FF";
        q_stress1.style.backgroundColor = "#FFFFFF";
        q_stress2.style.color = "#5196FF";
        q_stress2.style.backgroundColor = "#FFFFFF";
        q_stress3.style.color = "#5196FF";
        q_stress3.style.backgroundColor = "#FFFFFF";
        q_stress5.style.color = "#5196FF";
        q_stress5.style.backgroundColor = "#FFFFFF";
        q_stress4_status = 1;
        q_stress1_status = 0;
        q_stress2_status = 0;
        q_stress3_status = 0;
        q_stress5_status = 0;
        q_stress.value = 3;
    } else if (q_stress4_status == 1) {
        q_stress4.style.color = "#5196FF";
        q_stress4.style.backgroundColor = "#FFFFFF";
        q_stress4_status = 0;
        q_stress.value = 0;
    }
});

q_stress5.addEventListener("click", () => {
    if (q_stress5_status == 0) {
        q_stress5.style.color = "#FFFFFF";
        q_stress5.style.backgroundColor = "#5196FF";
        q_stress1.style.color = "#5196FF";
        q_stress1.style.backgroundColor = "#FFFFFF";
        q_stress2.style.color = "#5196FF";
        q_stress2.style.backgroundColor = "#FFFFFF";
        q_stress3.style.color = "#5196FF";
        q_stress3.style.backgroundColor = "#FFFFFF";
        q_stress4.style.color = "#5196FF";
        q_stress4.style.backgroundColor = "#FFFFFF";
        q_stress5_status = 1;
        q_stress1_status = 0;
        q_stress2_status = 0;
        q_stress3_status = 0;
        q_stress4_status = 0;
        q_stress.value = 4;
    } else if (q_stress5_status == 1) {
        q_stress5.style.color = "#5196FF";
        q_stress5.style.backgroundColor = "#FFFFFF";
        q_stress5_status = 0;
        q_stress.value = 0;
    }
});

// ------------bottomarea17------------

let bottomarea17 = document.getElementById("bottomarea17");
let backbutton17 = document.getElementById("backbutton17");
let gobutton17 = document.getElementById("gobutton17");

backbutton17.addEventListener("click", () => {
    bottomarea17.style.height = "0px";
    bottomarea17.style.display = "none";
    bottomarea16.style.height = "89.218009478672985781990521327014%";
    bottomarea16.style.display = "flex";
});

gobutton17.addEventListener("click", () => {
    if (q_depress.value == 9) {
        alert('선택해주세요.');
    } else {
        bottomarea17.style.height = "0px";
        bottomarea17.style.display = "none";
        bottomarea18.style.height = "89.218009478672985781990521327014%";
        bottomarea18.style.display = "flex";
    }
});

let q_depress1 = document.getElementById("q_depress1");
let q_depress2 = document.getElementById("q_depress2");

let q_depress1_status = 0;
let q_depress2_status = 0;

q_depress1.addEventListener("click", () => {
    if (q_depress1_status == 0) {
        q_depress1.style.color = "#FFFFFF";
        q_depress1.style.backgroundColor = "#5196FF";
        q_depress2.style.color = "#5196FF";
        q_depress2.style.backgroundColor = "#FFFFFF";
        q_depress1_status = 1;
        q_depress2_status = 0;
        q_depress.value = 1;
    } else if (q_depress1_status == 1) {
        q_depress1.style.color = "#5196FF";
        q_depress1.style.backgroundColor = "#FFFFFF";
        q_depress1_status = 0;
        q_depress.value = 0;
    }
});

q_depress2.addEventListener("click", () => {
    if (q_depress2_status == 0) {
        q_depress2.style.color = "#FFFFFF";
        q_depress2.style.backgroundColor = "#5196FF";
        q_depress1.style.color = "#5196FF";
        q_depress1.style.backgroundColor = "#FFFFFF";
        q_depress2_status = 1;
        q_depress1_status = 0;
        q_depress.value = 0;
    } else if (q_depress2_status == 1) {
        q_depress2.style.color = "#5196FF";
        q_depress2.style.backgroundColor = "#FFFFFF";
        q_depress2_status = 0;
        q_depress.value = 0;
    }
});

// ------------bottomarea18------------

let bottomarea18 = document.getElementById("bottomarea18");
let backbutton18 = document.getElementById("backbutton18");
let gobutton18 = document.getElementById("gobutton18");

backbutton18.addEventListener("click", () => {
    bottomarea18.style.height = "0px";
    bottomarea18.style.display = "none";
    bottomarea17.style.height = "89.218009478672985781990521327014%";
    bottomarea17.style.display = "flex";
});

gobutton18.addEventListener("click", () => {
    if (q_healthy.value == 0) {
        alert('선택해주세요.');
    } else {
        bottomarea18.style.height = "0px";
        bottomarea18.style.display = "none";
        bottomarea19.style.height = "89.218009478672985781990521327014%";
        bottomarea19.style.display = "flex";
    }
});

let q_healthy1 = document.getElementById("q_healthy1");
let q_healthy2 = document.getElementById("q_healthy2");
let q_healthy3 = document.getElementById("q_healthy3");
let q_healthy4 = document.getElementById("q_healthy4");
let q_healthy5 = document.getElementById("q_healthy5");

let q_healthy1_status = 0;
let q_healthy2_status = 0;
let q_healthy3_status = 0;
let q_healthy4_status = 0;
let q_healthy5_status = 0;

q_healthy1.addEventListener("click", () => {
    if (q_healthy1_status == 0) {
        q_healthy1.style.color = "#FFFFFF";
        q_healthy1.style.backgroundColor = "#5196FF";
        q_healthy2.style.color = "#5196FF";
        q_healthy2.style.backgroundColor = "#FFFFFF";
        q_healthy3.style.color = "#5196FF";
        q_healthy3.style.backgroundColor = "#FFFFFF";
        q_healthy4.style.color = "#5196FF";
        q_healthy4.style.backgroundColor = "#FFFFFF";
        q_healthy5.style.color = "#5196FF";
        q_healthy5.style.backgroundColor = "#FFFFFF";
        q_healthy1_status = 1;
        q_healthy2_status = 0;
        q_healthy3_status = 0;
        q_healthy4_status = 0;
        q_healthy5_status = 0;
        q_healthy.value = 1;
    } else if (q_healthy1_status == 1) {
        q_healthy1.style.color = "#5196FF";
        q_healthy1.style.backgroundColor = "#FFFFFF";
        q_healthy1_status = 0;
        q_healthy.value = 0;
    }
});

q_healthy2.addEventListener("click", () => {
    if (q_healthy2_status == 0) {
        q_healthy2.style.color = "#FFFFFF";
        q_healthy2.style.backgroundColor = "#5196FF";
        q_healthy1.style.color = "#5196FF";
        q_healthy1.style.backgroundColor = "#FFFFFF";
        q_healthy3.style.color = "#5196FF";
        q_healthy3.style.backgroundColor = "#FFFFFF";
        q_healthy4.style.color = "#5196FF";
        q_healthy4.style.backgroundColor = "#FFFFFF";
        q_healthy5.style.color = "#5196FF";
        q_healthy5.style.backgroundColor = "#FFFFFF";
        q_healthy2_status = 1;
        q_healthy1_status = 0;
        q_healthy3_status = 0;
        q_healthy4_status = 0;
        q_healthy5_status = 0;
        q_healthy.value = 2;
    } else if (q_healthy2_status == 1) {
        q_healthy2.style.color = "#5196FF";
        q_healthy2.style.backgroundColor = "#FFFFFF";
        q_healthy2_status = 0;
        q_healthy.value = 0;
    }
});

q_healthy3.addEventListener("click", () => {
    if (q_healthy3_status == 0) {
        q_healthy3.style.color = "#FFFFFF";
        q_healthy3.style.backgroundColor = "#5196FF";
        q_healthy1.style.color = "#5196FF";
        q_healthy1.style.backgroundColor = "#FFFFFF";
        q_healthy2.style.color = "#5196FF";
        q_healthy2.style.backgroundColor = "#FFFFFF";
        q_healthy4.style.color = "#5196FF";
        q_healthy4.style.backgroundColor = "#FFFFFF";
        q_healthy5.style.color = "#5196FF";
        q_healthy5.style.backgroundColor = "#FFFFFF";
        q_healthy3_status = 1;
        q_healthy1_status = 0;
        q_healthy2_status = 0;
        q_healthy4_status = 0;
        q_healthy5_status = 0;
        q_healthy.value = 3;
    } else if (q_healthy3_status == 1) {
        q_healthy3.style.color = "#5196FF";
        q_healthy3.style.backgroundColor = "#FFFFFF";
        q_healthy3_status = 0;
        q_healthy.value = 0;
    }
});

q_healthy4.addEventListener("click", () => {
    if (q_healthy4_status == 0) {
        q_healthy4.style.color = "#FFFFFF";
        q_healthy4.style.backgroundColor = "#5196FF";
        q_healthy1.style.color = "#5196FF";
        q_healthy1.style.backgroundColor = "#FFFFFF";
        q_healthy2.style.color = "#5196FF";
        q_healthy2.style.backgroundColor = "#FFFFFF";
        q_healthy3.style.color = "#5196FF";
        q_healthy3.style.backgroundColor = "#FFFFFF";
        q_healthy5.style.color = "#5196FF";
        q_healthy5.style.backgroundColor = "#FFFFFF";
        q_healthy4_status = 1;
        q_healthy1_status = 0;
        q_healthy2_status = 0;
        q_healthy3_status = 0;
        q_healthy5_status = 0;
        q_healthy.value = 4;
    } else if (q_healthy4_status == 1) {
        q_healthy4.style.color = "#5196FF";
        q_healthy4.style.backgroundColor = "#FFFFFF";
        q_healthy4_status = 0;
        q_healthy.value = 0;
    }
});

q_healthy5.addEventListener("click", () => {
    if (q_healthy5_status == 0) {
        q_healthy5.style.color = "#FFFFFF";
        q_healthy5.style.backgroundColor = "#5196FF";
        q_healthy1.style.color = "#5196FF";
        q_healthy1.style.backgroundColor = "#FFFFFF";
        q_healthy2.style.color = "#5196FF";
        q_healthy2.style.backgroundColor = "#FFFFFF";
        q_healthy3.style.color = "#5196FF";
        q_healthy3.style.backgroundColor = "#FFFFFF";
        q_healthy4.style.color = "#5196FF";
        q_healthy4.style.backgroundColor = "#FFFFFF";
        q_healthy5_status = 1;
        q_healthy1_status = 0;
        q_healthy2_status = 0;
        q_healthy3_status = 0;
        q_healthy4_status = 0;
        q_healthy.value = 5;
    } else if (q_healthy5_status == 1) {
        q_healthy5.style.color = "#5196FF";
        q_healthy5.style.backgroundColor = "#FFFFFF";
        q_healthy5_status = 0;
        q_healthy.value = 0;
    }
});

// ------------bottomarea19------------

let bottomarea19 = document.getElementById("bottomarea19");
let backbutton19 = document.getElementById("backbutton19");
let gobutton19 = document.getElementById("gobutton19");

backbutton19.addEventListener("click", () => {
    bottomarea19.style.height = "0px";
    bottomarea19.style.display = "none";
    bottomarea18.style.height = "89.218009478672985781990521327014%";
    bottomarea18.style.display = "flex";
});

gobutton19.addEventListener("click", () => {
    if (q_antibiotic.value == 0) {
        alert('선택해주세요.');
    } else {
        bottomarea19.style.height = "0px";
        bottomarea19.style.display = "none";
        toparea_v1.style.display = "none";
        window_v3.style.display = "flex";
        document.body.style.height = "1189px";
    }
});

let toparea_v1 = document.getElementById("toparea_v1");

let q_cancer1 = document.getElementById("q_cancer1");
let q_cancer2 = document.getElementById("q_cancer2");

let q_cancer1_status = 0;
let q_cancer2_status = 0;

q_cancer1.addEventListener("click", () => {
    if (q_cancer1_status == 0) {
        bgbluecwhite(q_cancer1);
        bgwhitecblue(q_cancer2);
        q_cancer1_status = 1;
        q_cancer2_status = 0;
        q_antibiotic.value = 1;
    } else if (q_cancer1_status == 1) {
        bgwhitecblue(q_cancer1);
        q_cancer1_status = 0;
        q_antibiotic.value = 0;
    }
});

q_cancer2.addEventListener("click", () => {
    if (q_cancer2_status == 0) {
        bgwhitecblue(q_cancer1);
        bgbluecwhite(q_cancer2);
        q_cancer2_status = 1;
        q_cancer1_status = 0;
        q_antibiotic.value = 2;
    } else if (q_cancer2_status == 1) {
        bgwhitecblue(q_cancer2);
        q_cancer2_status = 0;
        q_antibiotic.value = 0;
    }
});

// ------------bottomarea20------------

let window_v3 = document.getElementById("window_v3");
let backbutton20 = document.getElementById("backbutton20");
let gobutton20 = document.getElementById("gobutton20");

backbutton20.addEventListener("click", () => {
    window_v3.style.display = "none";
    toparea_v1.style.display = "flex";
    bottomarea19.style.height = "89.218009478672985781990521327014%";
    bottomarea19.style.display = "flex";
    document.body.style.height = "844px";
});

gobutton20.addEventListener("click", () => {
    if (q_state === 0) {
        alert('선택해주세요.');
    } else {
        q_state.value = 1000000000;
        window_v3.style.display = "none";
        window_v4.style.display = "flex";
        document.body.style.height = "982px";
    }
});

let q_state1 = document.getElementById("q_state1");
let q_state2 = document.getElementById("q_state2");
let q_state3 = document.getElementById("q_state3");
let q_state4 = document.getElementById("q_state4");
let q_state5 = document.getElementById("q_state5");
let q_state6 = document.getElementById("q_state6");
let q_state7 = document.getElementById("q_state7");
let q_state8 = document.getElementById("q_state8");
let q_state9 = document.getElementById("q_state9");
let q_state10 = document.getElementById("q_state10");

let q_state1_status = 0;
let q_state2_status = 0;
let q_state3_status = 0;
let q_state4_status = 0;
let q_state5_status = 0;
let q_state6_status = 0;
let q_state7_status = 0;
let q_state8_status = 0;
let q_state9_status = 0;
let q_state10_status = 0;

q_state1.addEventListener("click", () => {
    if (q_state1_status == 0) {
        q_state1.style.color = "#FFFFFF";
        q_state1.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_state2);
        bgwhitecblue(q_state3);
        bgwhitecblue(q_state4);
        bgwhitecblue(q_state5);
        bgwhitecblue(q_state6);
        bgwhitecblue(q_state7);
        bgwhitecblue(q_state8);
        bgwhitecblue(q_state9);
        bgwhitecblue(q_state10);
        q_state1_status = 1;
        q_state2_status = 0;
        q_state3_status = 0;
        q_state4_status = 0;
        q_state5_status = 0;
        q_state6_status = 0;
        q_state7_status = 0;
        q_state8_status = 0;
        q_state9_status = 0;
        q_state10_status = 0;
        q_state.value = 1000000000;
    } else if (q_state1_status == 1) {
        q_state1.style.color = "#5196FF";
        q_state1.style.backgroundColor = "#FFFFFF";
        q_state1_status = 0;
        q_state.value = 1000000000;
    }
});

q_state2.addEventListener("click", () => {
    if (q_state2_status == 0) {
        q_state2.style.color = "#FFFFFF";
        q_state2.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_state1);
        q_state1_status = 0;
        q_state2_status = 1;
        q_state.value = 1000000000;
    } else if (q_state2_status == 1) {
        q_state2.style.color = "#5196FF";
        q_state2.style.backgroundColor = "#FFFFFF";
        q_state2_status = 0;
        q_state.value = 1000000000;
    }
});

q_state3.addEventListener("click", () => {
    if (q_state3_status == 0) {
        q_state3.style.color = "#FFFFFF";
        q_state3.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_state1);
        q_state1_status = 0;
        q_state3_status = 1;
        q_state.value = 1000000000;
    } else if (q_state3_status == 1) {
        q_state3.style.color = "#5196FF";
        q_state3.style.backgroundColor = "#FFFFFF";
        q_state3_status = 0;
        q_state.value = 1000000000;
    }
});

q_state4.addEventListener("click", () => {
    if (q_state4_status == 0) {
        q_state4.style.color = "#FFFFFF";
        q_state4.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_state1);
        q_state1_status = 0;
        q_state4_status = 1;
        q_state.value = 1000000000;
    } else if (q_state4_status == 1) {
        q_state4.style.color = "#5196FF";
        q_state4.style.backgroundColor = "#FFFFFF";
        q_state4_status = 0;
        q_state.value = 1000000000;
    }
});

q_state5.addEventListener("click", () => {
    if (q_state5_status == 0) {
        q_state5.style.color = "#FFFFFF";
        q_state5.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_state1);
        q_state1_status = 0;
        q_state5_status = 1;
        q_state.value = 1000000000;
    } else if (q_state5_status == 1) {
        q_state5.style.color = "#5196FF";
        q_state5.style.backgroundColor = "#FFFFFF";
        q_state5_status = 0;
        q_state.value = 1000000000;
    }
});

q_state6.addEventListener("click", () => {
    if (q_state6_status == 0) {
        q_state6.style.color = "#FFFFFF";
        q_state6.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_state1);
        q_state1_status = 0;
        q_state6_status = 1;
        q_state.value = 1000000000;
    } else if (q_state6_status == 1) {
        q_state6.style.color = "#5196FF";
        q_state6.style.backgroundColor = "#FFFFFF";
        q_state6_status = 0;
        q_state.value = 1000000000;
    }
});

q_state7.addEventListener("click", () => {
    if (q_state7_status == 0) {
        q_state7.style.color = "#FFFFFF";
        q_state7.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_state1);
        q_state1_status = 0;
        q_state7_status = 1;
        q_state.value = 1000000000;
    } else if (q_state7_status == 1) {
        q_state7.style.color = "#5196FF";
        q_state7.style.backgroundColor = "#FFFFFF";
        q_state7_status = 0;
        q_state.value = 1000000000;
    }
});

q_state8.addEventListener("click", () => {
    if (q_state8_status == 0) {
        q_state8.style.color = "#FFFFFF";
        q_state8.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_state1);
        q_state1_status = 0;
        q_state8_status = 1;
        q_state.value = 1000000000;
    } else if (q_state8_status == 1) {
        q_state8.style.color = "#5196FF";
        q_state8.style.backgroundColor = "#FFFFFF";
        q_state8_status = 0;
        q_state.value = 1000000000;
    }
});

q_state9.addEventListener("click", () => {
    if (q_state9_status == 0) {
        q_state9.style.color = "#FFFFFF";
        q_state9.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_state1);
        q_state1_status = 0;
        q_state9_status = 1;
        q_state.value = 1000000000;
    } else if (q_state9_status == 1) {
        q_state9.style.color = "#5196FF";
        q_state9.style.backgroundColor = "#FFFFFF";
        q_state9_status = 0;
        q_state.value = 1000000000;
    }
});

q_state10.addEventListener("click", () => {
    if (q_state10_status == 0) {
        q_state10.style.color = "#FFFFFF";
        q_state10.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_state1);
        q_state1_status = 0;
        q_state10_status = 1;
        q_state.value = 1000000000;
    } else if (q_state10_status == 1) {
        q_state10.style.color = "#5196FF";
        q_state10.style.backgroundColor = "#FFFFFF";
        q_state10_status = 0;
        q_state.value = 1000000000;
    }
});

// ------------bottomarea21------------

let window_v4 = document.getElementById("window_v4");
let backbutton21 = document.getElementById("backbutton21");
let gobutton21 = document.getElementById("gobutton21");

backbutton21.addEventListener("click", () => {
    window_v4.style.display = "none";
    window_v3.style.display = "flex";
    document.body.style.height = "1189px";
});

gobutton21.addEventListener("click", () => {
    if(q_disease1_status == 0 && q_disease2_status == 0 && q_disease3_status == 0 && q_disease4_status == 0 && q_disease5_status == 0 && q_disease6_status == 0 && q_disease7_status == 0){
        alert('선택해주세요.');
    } else {
        if (woman_status == 1) {
            gobutton22.type = "button";
            window_v4.style.display = "none";
            window_v5.style.display = "flex";
            document.body.style.height = "1741px";
        } else if (woman_status == 0) {
            gobutton22.type = "submit";
            window_v4.style.display = "none";
            window_v5.style.display = "flex";
            document.body.style.height = "1741px";
        }
    }
});

let q_disease1 = document.getElementById("q_disease1");
let q_disease2 = document.getElementById("q_disease2");
let q_disease3 = document.getElementById("q_disease3");
let q_disease4 = document.getElementById("q_disease4");
let q_disease5 = document.getElementById("q_disease5");
let q_disease6 = document.getElementById("q_disease6");
let q_disease7 = document.getElementById("q_disease7");

let q_disease1_status = 0;
let q_disease2_status = 0;
let q_disease3_status = 0;
let q_disease4_status = 0;
let q_disease5_status = 0;
let q_disease6_status = 0;
let q_disease7_status = 0;



q_disease1.addEventListener("click", () => {
    if (q_disease1_status == 0) {
        q_disease1.style.color = "#FFFFFF";
        q_disease1.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_disease2);
        bgwhitecblue(q_disease3);
        bgwhitecblue(q_disease4);
        bgwhitecblue(q_disease5);
        bgwhitecblue(q_disease6);
        bgwhitecblue(q_disease7);
        q_disease1_status = 1;
        q_disease2_status = 0;
        q_disease3_status = 0;
        q_disease4_status = 0;
        q_disease5_status = 0;
        q_disease6_status = 0;
        q_disease7_status = 0;
        q_disease_none.value = 1;
        q_disease_hypertension.value = 0;
        q_disease_diabetes.value = 0;
        q_disease_hyperlipidemia.value = 0;
        q_disease_thyroid.value = 0;
        q_disease_anemia.value = 0;
        q_disease_cancer.value = 0;
    } else if (q_disease1_status == 1) {
        q_disease1.style.color = "#5196FF";
        q_disease1.style.backgroundColor = "#FFFFFF";
        q_disease1_status = 0;
        q_disease_none.value = 0;
    }
});

q_disease2.addEventListener("click", () => {
    if (q_disease2_status == 0) {
        q_disease2.style.color = "#FFFFFF";
        q_disease2.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_disease1);
        q_disease1_status = 0;
        q_disease2_status = 1;
        q_disease_hypertension.value = 1;
        q_disease_none.value = 0;
    } else if (q_disease2_status == 1) {
        q_disease2.style.color = "#5196FF";
        q_disease2.style.backgroundColor = "#FFFFFF";
        q_disease2_status = 0;
        q_disease_hypertension.value = 0;
    }
});

q_disease3.addEventListener("click", () => {
    if (q_disease3_status == 0) {
        q_disease3.style.color = "#FFFFFF";
        q_disease3.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_disease1);
        q_disease1_status = 0;
        q_disease3_status = 1;
        q_disease_diabetes.value = 1;
        q_disease_none.value = 0;
    } else if (q_disease3_status == 1) {
        q_disease3.style.color = "#5196FF";
        q_disease3.style.backgroundColor = "#FFFFFF";
        q_disease3_status = 0;
        q_disease_diabetes.value = 0;
    }
});

q_disease4.addEventListener("click", () => {
    if (q_disease4_status == 0) {
        q_disease4.style.color = "#FFFFFF";
        q_disease4.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_disease1);
        q_disease1_status = 0;
        q_disease4_status = 1;
        q_disease_hyperlipidemia.value = 1;
        q_disease_none.value = 0;
    } else if (q_disease4_status == 1) {
        q_disease4.style.color = "#5196FF";
        q_disease4.style.backgroundColor = "#FFFFFF";
        q_disease4_status = 0;
        q_disease_hyperlipidemia.value = 0;
    }
});

q_disease5.addEventListener("click", () => {
    if (q_disease5_status == 0) {
        q_disease5.style.color = "#FFFFFF";
        q_disease5.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_disease1);
        q_disease1_status = 0;
        q_disease5_status = 1;
        q_disease_thyroid.value = 1;
        q_disease_none.value = 0;
    } else if (q_disease5_status == 1) {
        q_disease5.style.color = "#5196FF";
        q_disease5.style.backgroundColor = "#FFFFFF";
        q_disease5_status = 0;
        q_disease_thyroid.value = 0;
    }
});

q_disease6.addEventListener("click", () => {
    if (q_disease6_status == 0) {
        q_disease6.style.color = "#FFFFFF";
        q_disease6.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_disease1);
        q_disease1_status = 0;
        q_disease6_status = 1;
        q_disease_anemia.value = 1;
        q_disease_none.value = 0;
    } else if (q_disease6_status == 1) {
        q_disease6.style.color = "#5196FF";
        q_disease6.style.backgroundColor = "#FFFFFF";
        q_disease6_status = 0;
        q_disease_anemia.value = 0;
    }
});

q_disease7.addEventListener("click", () => {
    if (q_disease7_status == 0) {
        q_disease7.style.color = "#FFFFFF";
        q_disease7.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_disease1);
        q_disease1_status = 0;
        q_disease7_status = 1;
        q_disease_cancer.value = 1;
        q_disease_none.value = 0;
    } else if (q_disease7_status == 1) {
        q_disease7.style.color = "#5196FF";
        q_disease7.style.backgroundColor = "#FFFFFF";
        q_disease7_status = 0;
        q_disease_cancer.value = 0;
    }
});

// ------------bottomarea22------------

let window_v5 = document.getElementById("window_v5");
let backbutton22 = document.getElementById("backbutton22");
let gobutton22 = document.getElementById("gobutton22");

backbutton22.addEventListener("click", () => {
    window_v5.style.display = "none";
    window_v4.style.display = "flex";
    document.body.style.height = "982px";
});

gobutton22.addEventListener("click", () => {
    if (q_medicine === 0) {
        alert('선택해주세요.');
    } else {
        if (woman_status == 1) {
            window_v5.style.display = "none";
            document.body.style.height = "844px";
            bottomarea23.style.height = "89.218009478672985781990521327014%";
            bottomarea23.style.display = "flex";
            toparea_v1.style.display = "flex";
        } else if (woman_status == 0) {
        }
    }
});

let q_medicine1 = document.getElementById("q_medicine1");
let q_medicine2 = document.getElementById("q_medicine2");
let q_medicine3 = document.getElementById("q_medicine3");
let q_medicine4 = document.getElementById("q_medicine4");
let q_medicine5 = document.getElementById("q_medicine5");
let q_medicine6 = document.getElementById("q_medicine6");
let q_medicine7 = document.getElementById("q_medicine7");
let q_medicine8 = document.getElementById("q_medicine8");
let q_medicine9 = document.getElementById("q_medicine9");
let q_medicine10 = document.getElementById("q_medicine10");
let q_medicine11 = document.getElementById("q_medicine11");
let q_medicine12 = document.getElementById("q_medicine12");
let q_medicine13 = document.getElementById("q_medicine13");
let q_medicine14 = document.getElementById("q_medicine14");
let q_medicine15 = document.getElementById("q_medicine15");
let q_medicine16 = document.getElementById("q_medicine16");
let q_medicine17 = document.getElementById("q_medicine17");
let q_medicine18 = document.getElementById("q_medicine18");

let q_medicine1_status = 0;
let q_medicine2_status = 0;
let q_medicine3_status = 0;
let q_medicine4_status = 0;
let q_medicine5_status = 0;
let q_medicine6_status = 0;
let q_medicine7_status = 0;
let q_medicine8_status = 0;
let q_medicine9_status = 0;
let q_medicine10_status = 0;
let q_medicine11_status = 0;
let q_medicine12_status = 0;
let q_medicine13_status = 0;
let q_medicine14_status = 0;
let q_medicine15_status = 0;
let q_medicine16_status = 0;
let q_medicine17_status = 0;
let q_medicine18_status = 0;

q_medicine1.addEventListener("click", () => {
    if (q_medicine1_status == 0) {
        q_medicine1.style.color = "#FFFFFF";
        q_medicine1.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_medicine2);
        bgwhitecblue(q_medicine3);
        bgwhitecblue(q_medicine4);
        bgwhitecblue(q_medicine5);
        bgwhitecblue(q_medicine6);
        bgwhitecblue(q_medicine7);
        bgwhitecblue(q_medicine8);
        bgwhitecblue(q_medicine9);
        bgwhitecblue(q_medicine10);
        bgwhitecblue(q_medicine11);
        bgwhitecblue(q_medicine12);
        bgwhitecblue(q_medicine13);
        bgwhitecblue(q_medicine14);
        bgwhitecblue(q_medicine15);
        bgwhitecblue(q_medicine16);
        bgwhitecblue(q_medicine17);
        bgwhitecblue(q_medicine18);
        q_medicine1_status = 1;
        q_medicine2_status = 0;
        q_medicine3_status = 0;
        q_medicine4_status = 0;
        q_medicine5_status = 0;
        q_medicine6_status = 0;
        q_medicine7_status = 0;
        q_medicine8_status = 0;
        q_medicine9_status = 0;
        q_medicine10_status = 0;
        q_medicine11_status = 0;
        q_medicine12_status = 0;
        q_medicine13_status = 0;
        q_medicine14_status = 0;
        q_medicine15_status = 0;
        q_medicine16_status = 0;
        q_medicine17_status = 0;
        q_medicine18_status = 0;
        q_medicine.value = 100000000000000000;
    } else if (q_medicine1_status == 1) {
        q_medicine1.style.color = "#5196FF";
        q_medicine1.style.backgroundColor = "#FFFFFF";
        q_medicine1_status = 0;
        q_medicine.value = 100000000000000000;
    }
});

q_medicine2.addEventListener("click", () => {
    if (q_medicine2_status == 0) {
        q_medicine2.style.color = "#FFFFFF";
        q_medicine2.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_medicine1);
        q_medicine1_status = 0;
        q_medicine2_status = 1;
        q_medicine.value = 100000000000000000;
    } else if (q_medicine2_status == 1) {
        q_medicine2.style.color = "#5196FF";
        q_medicine2.style.backgroundColor = "#FFFFFF";
        q_medicine2_status = 0;
        q_medicine.value = 100000000000000000;
    }
});

q_medicine3.addEventListener("click", () => {
    if (q_medicine3_status == 0) {
        q_medicine3.style.color = "#FFFFFF";
        q_medicine3.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_medicine1);
        q_medicine1_status = 0;
        q_medicine3_status = 1;
        q_medicine.value = 100000000000000000;
    } else if (q_medicine3_status == 1) {
        q_medicine3.style.color = "#5196FF";
        q_medicine3.style.backgroundColor = "#FFFFFF";
        q_medicine3_status = 0;
        q_medicine.value = 100000000000000000;
    }
});

q_medicine4.addEventListener("click", () => {
    if (q_medicine4_status == 0) {
        q_medicine4.style.color = "#FFFFFF";
        q_medicine4.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_medicine1);
        q_medicine1_status = 0;
        q_medicine4_status = 1;
        q_medicine.value = 100000000000000000;
    } else if (q_medicine4_status == 1) {
        q_medicine4.style.color = "#5196FF";
        q_medicine4.style.backgroundColor = "#FFFFFF";
        q_medicine4_status = 0;
        q_medicine.value = 100000000000000000;
    }
});

q_medicine5.addEventListener("click", () => {
    if (q_medicine5_status == 0) {
        q_medicine5.style.color = "#FFFFFF";
        q_medicine5.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_medicine1);
        q_medicine1_status = 0;
        q_medicine5_status = 1;
        q_medicine.value = 100000000000000000;
    } else if (q_medicine5_status == 1) {
        q_medicine5.style.color = "#5196FF";
        q_medicine5.style.backgroundColor = "#FFFFFF";
        q_medicine5_status = 0;
        q_medicine.value = 100000000000000000;
    }
});

q_medicine6.addEventListener("click", () => {
    if (q_medicine6_status == 0) {
        q_medicine6.style.color = "#FFFFFF";
        q_medicine6.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_medicine1);
        q_medicine1_status = 0;
        q_medicine6_status = 1;
        q_medicine.value = 100000000000000000;
    } else if (q_medicine6_status == 1) {
        q_medicine6.style.color = "#5196FF";
        q_medicine6.style.backgroundColor = "#FFFFFF";
        q_medicine6_status = 0;
        q_medicine.value = 100000000000000000;
    }
});

q_medicine7.addEventListener("click", () => {
    if (q_medicine7_status == 0) {
        q_medicine7.style.color = "#FFFFFF";
        q_medicine7.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_medicine1);
        q_medicine1_status = 0;
        q_medicine7_status = 1;
        q_medicine.value = 100000000000000000;
    } else if (q_medicine7_status == 1) {
        q_medicine7.style.color = "#5196FF";
        q_medicine7.style.backgroundColor = "#FFFFFF";
        q_medicine7_status = 0;
        q_medicine.value = 100000000000000000;
    }
});

q_medicine8.addEventListener("click", () => {
    if (q_medicine8_status == 0) {
        q_medicine8.style.color = "#FFFFFF";
        q_medicine8.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_medicine1);
        q_medicine1_status = 0;
        q_medicine8_status = 1;
        q_medicine.value = 100000000000000000;
    } else if (q_medicine8_status == 1) {
        q_medicine8.style.color = "#5196FF";
        q_medicine8.style.backgroundColor = "#FFFFFF";
        q_medicine8_status = 0;
        q_medicine.value = 100000000000000000;
    }
});

q_medicine9.addEventListener("click", () => {
    if (q_medicine9_status == 0) {
        q_medicine9.style.color = "#FFFFFF";
        q_medicine9.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_medicine1);
        q_medicine1_status = 0;
        q_medicine9_status = 1;
        q_medicine.value = 100000000000000000;
    } else if (q_medicine9_status == 1) {
        q_medicine9.style.color = "#5196FF";
        q_medicine9.style.backgroundColor = "#FFFFFF";
        q_medicine9_status = 0;
        q_medicine.value = 100000000000000000;
    }
});

q_medicine10.addEventListener("click", () => {
    if (q_medicine10_status == 0) {
        q_medicine10.style.color = "#FFFFFF";
        q_medicine10.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_medicine1);
        q_medicine1_status = 0;
        q_medicine10_status = 1;
        q_medicine.value = 100000000000000000;
    } else if (q_medicine10_status == 1) {
        q_medicine10.style.color = "#5196FF";
        q_medicine10.style.backgroundColor = "#FFFFFF";
        q_medicine10_status = 0;
        q_medicine.value = 100000000000000000;
    }
});

q_medicine11.addEventListener("click", () => {
    if (q_medicine11_status == 0) {
        q_medicine11.style.color = "#FFFFFF";
        q_medicine11.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_medicine1);
        q_medicine1_status = 0;
        q_medicine11_status = 1;
        q_medicine.value = 100000000000000000;
    } else if (q_medicine11_status == 1) {
        q_medicine11.style.color = "#5196FF";
        q_medicine11.style.backgroundColor = "#FFFFFF";
        q_medicine11_status = 0;
        q_medicine.value = 100000000000000000;
    }
});

q_medicine12.addEventListener("click", () => {
    if (q_medicine12_status == 0) {
        q_medicine12.style.color = "#FFFFFF";
        q_medicine12.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_medicine1);
        q_medicine1_status = 0;
        q_medicine12_status = 1;
        q_medicine.value = 100000000000000000;
    } else if (q_medicine12_status == 1) {
        q_medicine12.style.color = "#5196FF";
        q_medicine12.style.backgroundColor = "#FFFFFF";
        q_medicine12_status = 0;
        q_medicine.value = 100000000000000000;
    }
});

q_medicine13.addEventListener("click", () => {
    if (q_medicine13_status == 0) {
        q_medicine13.style.color = "#FFFFFF";
        q_medicine13.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_medicine1);
        q_medicine1_status = 0;
        q_medicine13_status = 1;
        q_medicine.value = 100000000000000000;
    } else if (q_medicine13_status == 1) {
        q_medicine13.style.color = "#5196FF";
        q_medicine13.style.backgroundColor = "#FFFFFF";
        q_medicine13_status = 0;
        q_medicine.value = 100000000000000000;
    }
});

q_medicine14.addEventListener("click", () => {
    if (q_medicine14_status == 0) {
        q_medicine14.style.color = "#FFFFFF";
        q_medicine14.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_medicine1);
        q_medicine1_status = 0;
        q_medicine14_status = 1;
        q_medicine.value = 100000000000000000;
    } else if (q_medicine14_status == 1) {
        q_medicine14.style.color = "#5196FF";
        q_medicine14.style.backgroundColor = "#FFFFFF";
        q_medicine14_status = 0;
        q_medicine.value = 100000000000000000;
    }
});

q_medicine15.addEventListener("click", () => {
    if (q_medicine15_status == 0) {
        q_medicine15.style.color = "#FFFFFF";
        q_medicine15.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_medicine1);
        q_medicine1_status = 0;
        q_medicine15_status = 1;
        q_medicine.value = 100000000000000000;
    } else if (q_medicine15_status == 1) {
        q_medicine15.style.color = "#5196FF";
        q_medicine15.style.backgroundColor = "#FFFFFF";
        q_medicine15_status = 0;
        q_medicine.value = 100000000000000000;
    }
});

q_medicine16.addEventListener("click", () => {
    if (q_medicine16_status == 0) {
        q_medicine16.style.color = "#FFFFFF";
        q_medicine16.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_medicine1);
        q_medicine1_status = 0;
        q_medicine16_status = 1;
        q_medicine.value = 100000000000000000;
    } else if (q_medicine16_status == 1) {
        q_medicine16.style.color = "#5196FF";
        q_medicine16.style.backgroundColor = "#FFFFFF";
        q_medicine16_status = 0;
        q_medicine.value = 100000000000000000;
    }
});

q_medicine17.addEventListener("click", () => {
    if (q_medicine17_status == 0) {
        q_medicine17.style.color = "#FFFFFF";
        q_medicine17.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_medicine1);
        q_medicine1_status = 0;
        q_medicine17_status = 1;
        q_medicine.value = 100000000000000000;
    } else if (q_medicine17_status == 1) {
        q_medicine17.style.color = "#5196FF";
        q_medicine17.style.backgroundColor = "#FFFFFF";
        q_medicine17_status = 0;
        q_medicine.value = 100000000000000000;
    }
});

q_medicine18.addEventListener("click", () => {
    if (q_medicine18_status == 0) {
        q_medicine18.style.color = "#FFFFFF";
        q_medicine18.style.backgroundColor = "#5196FF";
        bgwhitecblue(q_medicine1);
        q_medicine1_status = 0;
        q_medicine18_status = 1;
        q_medicine.value = 100000000000000000;
    } else if (q_medicine18_status == 1) {
        q_medicine18.style.color = "#5196FF";
        q_medicine18.style.backgroundColor = "#FFFFFF";
        q_medicine18_status = 0;
        q_medicine.value = 100000000000000000;
    }
});

// ------------bottomarea23------------

let bottomarea23 = document.getElementById("bottomarea23");
let backbutton23 = document.getElementById("backbutton23");
let gobutton23 = document.getElementById("gobutton23");

backbutton23.addEventListener("click", () => {
    bottomarea23.style.height = "0px";
    bottomarea23.style.display = "none";
    toparea_v1.style.display = "none";
    document.body.style.height = "1741px";
    window_v5.style.display = "flex";
});

gobutton23.addEventListener("click", () => {
    if (qf_pregnant1_status == 0 && qf_pregnant2_status == 0 && qf_pregnant3_status == 0 && qf_pregnant4_status == 0) {
        alert('선택해주세요.');
    } else {
        bottomarea23.style.height = "0px";
        bottomarea23.style.display = "none";
        bottomarea24.style.height = "89.218009478672985781990521327014%";
        bottomarea24.style.display = "flex";
    }
});

let qf_pregnant1 = document.getElementById("qf_pregnant1");
let qf_pregnant2 = document.getElementById("qf_pregnant2");
let qf_pregnant3 = document.getElementById("qf_pregnant3");
let qf_pregnant4 = document.getElementById("qf_pregnant4");

let qf_pregnant1_status = 0;
let qf_pregnant2_status = 0;
let qf_pregnant3_status = 0;
let qf_pregnant4_status = 0;

qf_pregnant1.addEventListener("click", () => {
    if (qf_pregnant1_status == 0) {
        qf_pregnant1.style.color = "#FFFFFF";
        qf_pregnant1.style.backgroundColor = "#5196FF";
        qf_pregnant2.style.color = "#5196FF";
        qf_pregnant2.style.backgroundColor = "#FFFFFF";
        qf_pregnant3.style.color = "#5196FF";
        qf_pregnant3.style.backgroundColor = "#FFFFFF";
        qf_pregnant4.style.color = "#5196FF";
        qf_pregnant4.style.backgroundColor = "#FFFFFF";
        qf_pregnant1_status = 1;
        qf_pregnant2_status = 0;
        qf_pregnant3_status = 0;
        qf_pregnant4_status = 0;
        qf_pregnant.value = 1;
    } else if (qf_pregnant1_status == 1) {
        qf_pregnant1.style.color = "#5196FF";
        qf_pregnant1.style.backgroundColor = "#FFFFFF";
        qf_pregnant1_status = 0;
        qf_pregnant.value = 0;
    }
});

qf_pregnant2.addEventListener("click", () => {
    if (qf_pregnant2_status == 0) {
        qf_pregnant2.style.color = "#FFFFFF";
        qf_pregnant2.style.backgroundColor = "#5196FF";
        qf_pregnant1.style.color = "#5196FF";
        qf_pregnant1.style.backgroundColor = "#FFFFFF";
        qf_pregnant3.style.color = "#5196FF";
        qf_pregnant3.style.backgroundColor = "#FFFFFF";
        qf_pregnant4.style.color = "#5196FF";
        qf_pregnant4.style.backgroundColor = "#FFFFFF";
        qf_pregnant2_status = 1;
        qf_pregnant1_status = 0;
        qf_pregnant3_status = 0;
        qf_pregnant4_status = 0;
        qf_breastfeed.value = 1;
    } else if (qf_pregnant2_status == 1) {
        qf_pregnant2.style.color = "#5196FF";
        qf_pregnant2.style.backgroundColor = "#FFFFFF";
        qf_pregnant2_status = 0;
        qf_breastfeed.value = 0;
    }
});

qf_pregnant3.addEventListener("click", () => {
    if (qf_pregnant3_status == 0) {
        qf_pregnant3.style.color = "#FFFFFF";
        qf_pregnant3.style.backgroundColor = "#5196FF";
        qf_pregnant1.style.color = "#5196FF";
        qf_pregnant1.style.backgroundColor = "#FFFFFF";
        qf_pregnant2.style.color = "#5196FF";
        qf_pregnant2.style.backgroundColor = "#FFFFFF";
        qf_pregnant4.style.color = "#5196FF";
        qf_pregnant4.style.backgroundColor = "#FFFFFF";
        qf_pregnant3_status = 1;
        qf_pregnant1_status = 0;
        qf_pregnant2_status = 0;
        qf_pregnant4_status = 0;
        qf_pregnant.value = 1;
        qf_breastfeed.value = 1;
    } else if (qf_pregnant3_status == 1) {
        qf_pregnant3.style.color = "#5196FF";
        qf_pregnant3.style.backgroundColor = "#FFFFFF";
        qf_pregnant3_status = 0;
        qf_pregnant.value = 0;
        qf_breastfeed.value = 0;
    }
});

qf_pregnant4.addEventListener("click", () => {
    if (qf_pregnant4_status == 0) {
        qf_pregnant4.style.color = "#FFFFFF";
        qf_pregnant4.style.backgroundColor = "#5196FF";
        qf_pregnant1.style.color = "#5196FF";
        qf_pregnant1.style.backgroundColor = "#FFFFFF";
        qf_pregnant2.style.color = "#5196FF";
        qf_pregnant2.style.backgroundColor = "#FFFFFF";
        qf_pregnant3.style.color = "#5196FF";
        qf_pregnant3.style.backgroundColor = "#FFFFFF";
        qf_pregnant4_status = 1;
        qf_pregnant1_status = 0;
        qf_pregnant2_status = 0;
        qf_pregnant3_status = 0;
        qf_pregnant.value = 0;
        qf_breastfeed.value = 0;
    } else if (qf_pregnant4_status == 1) {
        qf_pregnant4.style.color = "#5196FF";
        qf_pregnant4.style.backgroundColor = "#FFFFFF";
        qf_pregnant4_status = 0;
        qf_pregnant.value = 0;
        qf_breastfeed.value = 0;
    }
});


// ------------bottomarea24------------

let bottomarea24 = document.getElementById("bottomarea24");
let backbutton24 = document.getElementById("backbutton24");
let gobutton24 = document.getElementById("gobutton24");

backbutton24.addEventListener("click", () => {
    bottomarea24.style.height = "0px";
    bottomarea24.style.display = "none";
    bottomarea23.style.height = "89.218009478672985781990521327014%";
    bottomarea23.style.display = "flex";
});

gobutton24.addEventListener("click", () => {
    if (qf_menopause.value == 9) {
        alert('선택해주세요.');
    } else {
        bottomarea24.style.height = "0px";
        bottomarea24.style.display = "none";
        bottomarea25.style.height = "89.218009478672985781990521327014%";
        bottomarea25.style.display = "flex";
    }
});

let qf_menopause1 = document.getElementById("qf_menopause1");
let qf_menopause2 = document.getElementById("qf_menopause2");

let qf_menopause1_status = 0;
let qf_menopause2_status = 0;

qf_menopause1.addEventListener("click", () => {
    if (qf_menopause1_status == 0) {
        qf_menopause1.style.color = "#FFFFFF";
        qf_menopause1.style.backgroundColor = "#5196FF";
        qf_menopause2.style.color = "#5196FF";
        qf_menopause2.style.backgroundColor = "#FFFFFF";
        qf_menopause1_status = 1;
        qf_menopause2_status = 0;
        qf_menopause.value = 1;
    } else if (qf_menopause1_status == 1) {
        qf_menopause1.style.color = "#5196FF";
        qf_menopause1.style.backgroundColor = "#FFFFFF";
        qf_menopause1_status = 0;
        qf_menopause.value = 0;
    }
});

qf_menopause2.addEventListener("click", () => {
    if (qf_menopause2_status == 0) {
        qf_menopause2.style.color = "#FFFFFF";
        qf_menopause2.style.backgroundColor = "#5196FF";
        qf_menopause1.style.color = "#5196FF";
        qf_menopause1.style.backgroundColor = "#FFFFFF";
        qf_menopause2_status = 1;
        qf_menopause1_status = 0;
        qf_menopause.value = 0;
    } else if (qf_menopause2_status == 1) {
        qf_menopause2.style.color = "#5196FF";
        qf_menopause2.style.backgroundColor = "#FFFFFF";
        qf_menopause2_status = 0;
        qf_menopause.value = 0;
    }
});

// ------------bottomarea25------------

let bottomarea25 = document.getElementById("bottomarea25");
let backbutton25 = document.getElementById("backbutton25");
let gobutton25 = document.getElementById("gobutton25");

backbutton25.addEventListener("click", () => {
    bottomarea25.style.height = "0px";
    bottomarea25.style.display = "none";
    bottomarea24.style.height = "89.218009478672985781990521327014%";
    bottomarea24.style.display = "flex";
});

let qf_birthpill1 = document.getElementById("qf_birthpill1");
let qf_birthpill2 = document.getElementById("qf_birthpill2");

let qf_birthpill1_status = 0;
let qf_birthpill2_status = 0;

qf_birthpill1.addEventListener("click", () => {
    if (qf_birthpill1_status == 0) {
        qf_birthpill1.style.color = "#FFFFFF";
        qf_birthpill1.style.backgroundColor = "#5196FF";
        qf_birthpill2.style.color = "#5196FF";
        qf_birthpill2.style.backgroundColor = "#FFFFFF";
        qf_birthpill1_status = 1;
        qf_birthpill2_status = 0;
        qf_birthpill.value = 1;
    } else if (qf_birthpill1_status == 1) {
        qf_birthpill1.style.color = "#5196FF";
        qf_birthpill1.style.backgroundColor = "#FFFFFF";
        qf_birthpill1_status = 0;
        qf_birthpill.value = 0;
    }
});

qf_birthpill2.addEventListener("click", () => {
    if (qf_birthpill2_status == 0) {
        qf_birthpill2.style.color = "#FFFFFF";
        qf_birthpill2.style.backgroundColor = "#5196FF";
        qf_birthpill1.style.color = "#5196FF";
        qf_birthpill1.style.backgroundColor = "#FFFFFF";
        qf_birthpill2_status = 1;
        qf_birthpill1_status = 0;
        qf_birthpill.value = 0;
    } else if (qf_birthpill2_status == 1) {
        qf_birthpill2.style.color = "#5196FF";
        qf_birthpill2.style.backgroundColor = "#FFFFFF";
        qf_birthpill2_status = 0;
        qf_birthpill.value = 0;
    }
});

// ------------bottomarea2------------


// ------------bottomarea2------------


// ------------bottomarea2------------


// ------------bottomarea2------------


// ------------bottomarea2------------


// let fromData = document.getElementById("form_win").serialize(); // your form's data
// // $.ajax({
// //     type: "POST",
// //     url: "newpage.php",
// //     data: fromData //sends the data to the new page.
// // })
// //     .done(function (msg) {
// //         window.location.href = 'index.php' // redirects the page when finished.
// //     });

// var httpRequest;
// /* button이 클릭되었을때 이벤트 */
// document.getElementById("gobutton22").addEventListener('click', () => {
//     /* textBox에 작성된 name 데이터를 가져옴 */
//     var inputName = q_medicine;
//     /* 입력된 데이터 Json 형식으로 변경 */
//     var reqJson = new Object();
//     reqJson.name = inputName;
//     /* 통신에 사용 될 XMLHttpRequest 객체 정의 */
//     httpRequest = new XMLHttpRequest();
//     /* httpRequest의 readyState가 변화했을때 함수 실행 */
//     httpRequest.onreadystatechange = () => {
//         /* readyState가 Done이고 응답 값이 200일 때, 받아온 response로 name과 age를 그려줌 */
//         if (httpRequest.readyState === XMLHttpRequest.DONE) {
//             if (httpRequest.status === 200) {
//                 // var result = httpRequest.response;
//                 // document.getElementById("name").innerText = result.name;
//                 // document.getElementById("age").innerText = result.age;
//             } else {
//                 alert('request에 뭔가 문제가 있어요.');
//             }
//         }
//     };
//     /* Post 방식으로 요청 */
//     httpRequest.open('POST', '/postAgeByName', true);
//     /* Response Type을 Json으로 사전 정의 */
//     httpRequest.responseType = "json";
//     /* 요청 Header에 컨텐츠 타입은 Json으로 사전 정의 */
//     httpRequest.setRequestHeader('Content-Type', 'application/json');
//     /* 정의된 서버에 Json 형식의 요청 Data를 포함하여 요청을 전송 */
//     httpRequest.send(JSON.stringify(reqJson));

//     return movepage();

// });

// function movepage() {
//     location.href = "../result/kalium.html"
// }

// ------------bottomarea2------------


// ------------bottomarea2------------
