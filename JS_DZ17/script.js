class Header {
    constructor(img, h1, h3) {
        this.src = img;
        this.h1 = h1;
        this.h3 = h3;
    }
    render(id) {
        let out = `<img src="${this.src}">
        <h1>${this.h1}</h1>
        <h3>${this.h3}</h3>
        `;
    document.querySelector(`#${id}`).innerHTML = out;
    }
}

 let imgs = ["https://images.icon-icons.com/5549/PNG/96/309063_healthcare-support-icon.png",
    "https://images.icon-icons.com/5549/PNG/96/309064_hospital-icon.png",
    "https://images.icon-icons.com/5549/PNG/96/309065_heart-care-icon.png",
     "https://images.icon-icons.com/5549/PNG/96/309066_doctor-avatar-icon.png", 
     "https://images.icon-icons.com/5549/PNG/96/309067_nurse-icon.png",
     "https://images.icon-icons.com/5549/PNG/96/309070_medical-appointment-icon.png",
    "https://images.icon-icons.com/5549/PNG/96/309075_syringe-icon.png",
    "https://images.icon-icons.com/5549/PNG/96/309077_first-aid-kit-icon.png",
    "https://images.icon-icons.com/5549/PNG/96/309078_ambulance-icon.png"
    
 ];

 let descr = [ "Услуги здравоохранения", 
    "Посещение больницы",
    "Страхование здоровья",
    "Услуги врача",
    "Услуги сиделки",
    "Расписание приемов",
    "Услуги вакцинации",
    "Продажа лекарств",
    "Вызов экстренной помощи"
 ];
 
 for (let i=0; i<imgs.length; i++){
let header = new Header(imgs[i], descr[i], "Описание");
header.render("header" + i);
 }
/*
let img1 = "https://images.icon-icons.com/5549/PNG/96/309063_healthcare-support-icon.png";
let img2 = "https://images.icon-icons.com/5549/PNG/96/309064_hospital-icon.png";
let img3 = "https://images.icon-icons.com/5549/PNG/96/309065_heart-care-icon.png";
let img4 = "https://images.icon-icons.com/5549/PNG/96/309066_doctor-avatar-icon.png";
let img5 = "https://images.icon-icons.com/5549/PNG/96/309067_nurse-icon.png";
let img6 = "https://images.icon-icons.com/5549/PNG/96/309070_medical-appointment-icon.png";
let img7 = "https://images.icon-icons.com/5549/PNG/96/309075_syringe-icon.png";
let img8 = "https://images.icon-icons.com/5549/PNG/96/309077_first-aid-kit-icon.png";
let img9 = "https://images.icon-icons.com/5549/PNG/96/309078_ambulance-icon.png";

let header = new Header(img1, "Услуги здравоохранения", "Описание");
header.render("header");
let header2 = new Header(img2, "Посещение больницы", "Описание");
header2.render("header2");
let header3 = new Header(img3, "Страхование здоровья", "Описание");
header3.render("header3");
let header4 = new Header(img4, "Услуги врача", "Описание");
header4.render("header4");
let header5 = new Header(img5, "Услуги сиделки", "Описание");
header5.render("header5");
let header6 = new Header(img6, "Расписание приемов", "Описание");
header6.render("header6");
let header7 = new Header(img7, "Услуги вакцинации", "Описание");
header7.render("header7");
let header8 = new Header(img8, "Продажа лекарств", "Описание");
header8.render("header8");
let header9 = new Header(img9, "Вызов экстренной помощи", "Описание");
header9.render("header9");
*/