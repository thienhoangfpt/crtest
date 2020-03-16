function addYearValue() {
    const selectYearForMe = document.querySelector("#year-me");
    const selectYearCrush = document.querySelector("#year-crush");
    for (let i = 1985; i <= 2004; i++) {
        let option = document.createElement("option");
        option.text = `${i}`;
        option.value = `${i}`;
        let option2 = document.createElement("option");
        option2.text = `${i}`;
        option2.value = `${i}`;
        selectYearForMe.append(option2);
        selectYearCrush.append(option);
    }
}
addYearValue();
function addHoro() {
    const horo = [
        'Bạch Dương (21/03 - 20/04',
        'Kim Ngưu (21/04 - 20/05',
        'Song Tử (21/05 - 21/06',
        'Cự Giải (22/06 - 22/07',
        'Sư Tử (23/07 - 22/08',
        'Xử Nữ (23/08 - 22/09',
        'Thiên Bình (23/09 - 23/10',
        'Bọ Cạp (24/10 - 22/11',
        'Nhân Mã (23/11 - 21/12',
        'Ma Kết (22/12 - 19/01',
        'Bảo Bình (20/01 - 18/02',
        'Song Ngư (19/02 - 20/03',
    ];
    const selectHoroForMe = document.querySelector("#horo-me");
    const selectHoroCrush = document.querySelector("#horo-crush");
    for (let i = 0; i < horo.length; i++) {
        let option = document.createElement("option");
        option.text = `${horo[i]}`;
        option.value = `${horo[i]}`;
        let option2 = document.createElement("option");
        option2.text = `${horo[i]}`;
        option2.value = `${horo[i]}`;
        selectHoroForMe.append(option2);
        selectHoroCrush.append(option);
    }
}
addHoro();