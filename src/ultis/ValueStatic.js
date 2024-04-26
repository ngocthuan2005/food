export const checkIsEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const arrayPhone = [
  { id: "+93", value: "Afghanistan" },
  { id: "+355", value: "Albania" },
  { id: "+213", value: "Algeria" },
  { id: "+684", value: "American Samoa" },
  { id: "+376", value: "Andorra" },
  { id: "+244", value: "Angola" },
  { id: "+1264", value: "Anguilla" },
  { id: "+1268", value: "Antigua & Barbuda" },
  { id: "+54", value: "Argentina" },
  { id: "+374", value: "Armenia" },
  { id: "+297", value: "Aruba" },
  { id: "+61", value: "Australia" },
  { id: "+43", value: "Austria (Áo)" },
  { id: "+994", value: "Azerbaijan" },
  { id: "+243", value: "Bahamas" },
  { id: "+973", value: "Bahrain" },
  { id: "+880", value: "Bangladesh" },
  { id: "+247", value: "Barbados" },
  { id: "+375", value: "Belarus" },
  { id: "+32", value: "Belgium (Bỉ)" },
  { id: "+501", value: "Belize" },
  { id: "+229", value: "Benin" },
  { id: "+442", value: "Bermuda" },
  { id: "+975", value: "Bhutan" },
  { id: "+591", value: "Bolivia" },
  { id: "+387", value: "Bosnia & Herzegovina" },
  { id: "+267", value: "Botswana" },
  { id: "+55", value: "Brazil" },
  { id: "+673", value: "Brunei Darussalam" },
  { id: "+359", value: "Bulgaria" },
  { id: "+226", value: "Burkina Faso" },
  { id: "+257", value: "Burundi" },
  { id: "+855", value: "Cambodia (Campuchia)" },
  { id: "+237", value: "Cameroon" },
  { id: "+1", value: "Canada" },
  { id: "+238", value: "Cape Verde" },
  { id: "+1345", value: "Cayman Islands" },
  { id: "+236", value: "Central African Republic" },
  { id: "+235", value: "Chad" },
  { id: "+246", value: "Chagos Archipelago" },
  { id: "+56", value: "Chile" },
  { id: "+86", value: "China (Trung Quốc)" },
  { id: "+57", value: "Colombia" },
  { id: "+269", value: "Comoros" },
  { id: "+242", value: "Congo" },
  { id: "+243", value: "Congo, Dem. Rep. of" },
  { id: "+682", value: "Cook Islands" },
  { id: "+506", value: "Costa Rica" },
  { id: "+385", value: "Croatia" },
  { id: "+53", value: "Cuba" },
  { id: "+357", value: "Cyprus" },
  { id: "+420", value: "Czech Republic (Cộng hòa Séc)" },
  { id: "+225", value: "Côte d’lvoire" },
  { id: "+45", value: "Denmark (Đan Mạch)" },
  { id: "+253", value: "Djibouti" },
  { id: "+1767", value: "Dominica" },
  { id: "+593", value: "Ecuador" },
  { id: "+20", value: "Egypt (Ai Cập)" },
  { id: "+503", value: "El Salvador" },
  { id: "+240", value: "Equatorial Guinea" },
  { id: "+372", value: "Estonia" },
  { id: "+251", value: "Ethiopia" },
  { id: "+298", value: "Faeroe Islands" },
  { id: "+500", value: "Falkland Islands" },
  { id: "+679", value: "Fiji" },
  { id: "+358", value: "Finland (Phần Lan)" },
  { id: "+33", value: "France (Pháp)" },
  { id: "+596", value: "French Antilles" },
  { id: "+594", value: "French Guiana" },
  { id: "+689", value: "French Polynesia" },
  { id: "+241", value: "Gabon" },
  { id: "+220", value: "Gambia" },
  { id: "+995", value: "Georgia" },
  { id: "+49", value: "Germany (Đức)" },
  { id: "+233", value: "Ghana" },
  { id: "+350", value: "Gibraltar" },
  { id: "+30", value: "Greece (Hy Lạp)" },
  { id: "+299", value: "Greenland" },
  { id: "+1473", value: "Grenada" },
  { id: "+590", value: "Guadeloupe" },
  { id: "+1671", value: "Guam" },
  { id: "+502", value: "Guatemala" },
  { id: "+224", value: "Guinea" },
  { id: "+245", value: "Guinea-Bissau" },
  { id: "+592", value: "Guyana" },
  { id: "+509", value: "Haiti" },
  { id: "+504", value: "Honduras" },
  { id: "+852", value: "Hong Kong" },
  { id: "+36", value: "Hungary" },
  { id: "+82", value: "Hàn Quốc" },
  { id: "+354", value: "Iceland" },
  { id: "+91", value: "India (Ấn Độ)" },
  { id: "+62", value: "Indonesia" },
  { id: "+98", value: "Iran" },
  { id: "+964", value: "Iraq" },
  { id: "+353", value: "Ireland" },
  { id: "+972", value: "Israel" },
  { id: "+39", value: "Italy" },
  { id: "+225", value: "Ivory Coast" },
  { id: "+1876", value: "Jamaica" },
  { id: "+81", value: "Japan (Nhật Bản)" },
  { id: "+962", value: "Jordan" },
  { id: "+254", value: "Kenya" },
  { id: "+965", value: "Kuwait" },
  { id: "+996", value: "Kyrgyzstan" },
  { id: "+856", value: "Laos (Lào)" },
  { id: "+371", value: "Latvia" },
  { id: "+961", value: "Lebanon" },
  { id: "+266", value: "Lesotho" },
  { id: "+231", value: "Liberia" },
  { id: "+218", value: "Libya" },
  { id: "+423", value: "Liechtenstein" },
  { id: "+370", value: "Lithuania" },
  { id: "+352", value: "Luxembourg" },
  { id: "+853", value: "Macau" },
  { id: "+389", value: "Macedonia" },
  { id: "+261", value: "Madagascar" },
  { id: "+265", value: "Malawi" },
  { id: "+60", value: "Malaysia" },
  { id: "+960", value: "Maldives" },
  { id: "+223", value: "Mali" },
  { id: "+356", value: "Malta" },
  { id: "+692", value: "Marshall Islands" },
  { id: "+596", value: "Martinique" },
  { id: "+222", value: "Mauritania" },
  { id: "+230", value: "Mauritius" },
  { id: "+52", value: "Mexico" },
  { id: "+808", value: "Midway Islands" },
  { id: "+373", value: "Moldova" },
  { id: "+377", value: "Monaco" },
  { id: "+976", value: "Mongolia" },
  { id: "+381", value: "Montenegro & Serbia" },
  { id: "+1664", value: "Montserrat" },
  { id: "+212", value: "Morocco" },
  { id: "+258", value: "Mozambique" },
  { id: "+95", value: "Myanmar (Burma)" },
  { id: "+264", value: "Namibia" },
  { id: "+977", value: "Nepal" },
  { id: "+31", value: "Netherlands (Hà Lan)" },
  { id: "+599", value: "Netherlands Antilles" },
  { id: "+687", value: "New Caledonia" },
  { id: "+64", value: "New Zealand" },
  { id: "+505", value: "Nicaragua" },
  { id: "+227", value: "Niger Republic" },
  { id: "+234", value: "Nigeria" },
  { id: "+1670", value: "Northern Mariana Isl." },
  { id: "+47", value: "Norway (Na Uy)" },
  { id: "+968", value: "Oman" },
  { id: "+92", value: "Pakistan" },
  { id: "+680", value: "Palau" },
  { id: "+507", value: "Panama" },
  { id: "+675", value: "Papua New Guinea" },
  { id: "+595", value: "Paraguay" },
  { id: "+51", value: "Peru" },
  { id: "+63", value: "Philippines" },
  { id: "+48", value: "Poland (Ba Lan)" },
  { id: "+351", value: "Portugal (Bồ Đào Nha)" },
  { id: "+974", value: "Qatar" },
  { id: "+262", value: "Reunion Island" },
  { id: "+40", value: "Romania" },
  { id: "+7", value: "Russia (Nga)" },
  { id: "+250", value: "Rwanda" },
  { id: "+378", value: "San Marino" },
  { id: "+966", value: "Saudi Arabia" },
  { id: "+221", value: "Senegal" },
  { id: "+248", value: "Seychelles" },
  { id: "+232", value: "Sierra Leone" },
  { id: "+65", value: "Singapore" },
  { id: "+421", value: "Slovak Republic" },
  { id: "+386", value: "Slovenia" },
  { id: "+677", value: "Solomon Islands" },
  { id: "+252", value: "Somalia" },
  { id: "+27", value: "South Africa (Nam Phi)" },
  { id: "+34", value: "Spain (Tây Ban Nha)" },
  { id: "+94", value: "Sri Lanka" },
  { id: "+1869", value: "St. Kitts & Nevis" },
  { id: "+1758", value: "St. Lucia" },
  { id: "+1784", value: "St. Vincents & Grenadines" },
  { id: "+249", value: "Sudan" },
  { id: "+597", value: "Suriname" },
  { id: "+268", value: "Swaziland" },
  { id: "+46", value: "Sweden (Thụy Điển)" },
  { id: "+41", value: "Switzerland (Thụy Sĩ)" },
  { id: "+963", value: "Syria" },
  { id: "+239", value: "Sใo Tom้ & Principe" },
  { id: "+886", value: "Taiwan (Đài Loan)" },
  { id: "+992", value: "Tajikistan" },
  { id: "+255", value: "Tanzania" },
  { id: "+66", value: "Thái Lan" },
  { id: "+228", value: "Togo" },
  { id: "+676", value: "Tonga" },
  { id: "+1868", value: "Trinidad & Tobago" },
  { id: "+850", value: "Triều Tiên" },
  { id: "+216", value: "Tunisia" },
  { id: "+90", value: "Turkey (Thổ Nhĩ Kì)" },
  { id: "+993", value: "Turkmenistan" },
  { id: "+1649", value: "Turks & Caicos Islands" },
  { id: "688", value: "Tuvalu" },
  { id: "+256", value: "Uganda" },
  { id: "+380", value: "Ukraine" },
  { id: "+971", value: "United Arab Emirates" },
  { id: "+44", value: "United Kingdom (Vương Quốc Anh)" },
  { id: "+1", value: "United States (Mỹ)" },
  { id: "+598", value: "Uruguay" },
  { id: "+998", value: "Uzbekistan" },
  { id: "+678", value: "Vanuatu" },
  { id: "+58", value: "Venezuela" },
  { id: "+84", value: "Vietnam" },
  { id: "+1284", value: "Virgin Islands British" },
  { id: "+1340", value: "Virgin Islands U.S." },
  { id: "+685", value: "Western Samoa" },
  { id: "+967", value: "Yemen" },
  { id: "+381", value: "Yugoslavia" },
  { id: "+243", value: "Zaire" },
  { id: "+260", value: "Zambia" },
  { id: "+263", value: "Zimbabwe" },
];

export const quantityRender = (quantity) => {
  const arrayQuantityRender = [];
  for (let index = 1; index < quantity + 1; index++) {
    arrayQuantityRender.push(<option className="text-center" value={index}>{index}</option>);
  }

  return arrayQuantityRender;
}

export const removeClass = (idPrev) => {
  for (let i = 0; i < idPrev.length; i++) {
    const elementPrev = document.getElementById(`${idPrev[i]}`);
    const elementPrevParent = elementPrev.parentNode;
    const elementTempPrev = elementPrevParent.childNodes;
    if (
      elementTempPrev[elementTempPrev.length - 1].nodeName.toLowerCase() ===
      "span"
    ) {
      elementTempPrev[1].removeAttribute("style");
      elementPrevParent.removeChild(
        elementTempPrev[elementTempPrev.length - 1]
      );
    }
  }
};

export const renderError = (idPrev, idInput, errorMessage) => {

  if(!idInput && !errorMessage){
    removeClass(idPrev);
    return;
  }

  if (idPrev === undefined) {
    const element = document.getElementById(`${idInput}`);
    element.style.border = "1px solid red";
    element.scrollIntoView({ behavior: "smooth" });
    const parent = element.parentNode;
    const span = document.createElement("span");
    span.className = "text-lg text-red-500 mt-2 absolute top-16";
    span.innerHTML = errorMessage;

    const elementTemp = parent.childNodes;
    if (
      elementTemp[elementTemp.length - 1].nodeName.toLowerCase() === "span"
    ) {
      element.parentNode.removeChild(elementTemp[elementTemp.length - 1]);
    }
    parent.appendChild(span);
    return;
  }

  if (idPrev.length === 0) {
    const arr = ["name", "phoneNumber", "when", "note"];
    removeClass(arr);
    return;
  }

  const element = document.getElementById(`${idInput}`);
  element.style.border = "1px solid red";
  element.scrollIntoView({behavior: "smooth", block: "end"});
  const parent = element.parentNode;
  const span = document.createElement("span");
  span.className = "text-lg text-red-500 mt-2 absolute top-16";
  span.innerHTML = errorMessage;

  const elementTemp = parent.childNodes;
  if (elementTemp[elementTemp.length - 1].nodeName.toLowerCase() === "span") {
    element.parentNode.removeChild(elementTemp[elementTemp.length - 1]);
  }
  if (idPrev) {
    removeClass(idPrev);
  }
  
  parent.appendChild(span);
};


// export const renderError = (idPrev, arr, idInput, errorMessage) => {
//   if (idPrev.length === 0 && arr !== undefined) {
//     removeClass(arr);
//     return;
//   }
//   if (idPrev === undefined) {
//     const element = document.getElementById(`${idInput}`);
//     element.style.border = "1px solid red";
//     element.scrollIntoView({ behavior: "smooth" });
//     const parent = element.parentNode;
//     const span = document.createElement("span");
//     span.className = "text-3xl text-red-500 mt-2";
//     span.innerHTML = errorMessage;

//     const elementTemp = parent.childNodes;
//     if (
//       elementTemp[elementTemp.length - 1].nodeName.toLowerCase() === "span"
//     ) {
//       element.parentNode.removeChild(elementTemp[elementTemp.length - 1]);
//     }
//     parent.appendChild(span);
//     return;
//   }

//   const element = document.getElementById(`${idInput}`);
//   element.style.border = "1px solid red";
//   element.scrollIntoView({ behavior: "smooth" });
//   const parent = element.parentNode;
//   const span = document.createElement("span");
//   span.className = "text-3xl text-red-500 mt-2";
//   span.innerHTML = errorMessage;

//   const elementTemp = parent.childNodes;
//   if (elementTemp[elementTemp.length - 1].nodeName.toLowerCase() === "span") {
//     element.parentNode.removeChild(elementTemp[elementTemp.length - 1]);
//   }
//   if (idPrev) {
//     removeClass(idPrev);
//   }
//   parent.appendChild(span);
// };

export const deliveryCharges = 15000;

export const phoneContact1 = "Tuấn: +84941502499";
export const phoneContact2 = "Hoàng: +84979318763";
export const pays = [
  {id: "cash", textDecript: "Tiền mặt"},
  {id: "card", textDecript: "Thẻ (ViSa)"} 
]