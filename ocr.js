// index
const searchingNumber = document.querySelector(".Searching__Typing");
const searchingNumberInput = document.querySelector(".input-search");

//second-rooms
const numberTitle = document.querySelector(".rooms-header__title");

//  입력한 번호를 받아옴
const savedNumber = localStorage.getItem("username");

searchingNumber.addEventListener("submit", savingNumber);

function savingNumber(savingNum) {
    savingNum.preventDefalt();
    const number = searchingNumberInput.value;
    localStorage.setItem("username", number);
    numberTitle.innerText = `${number} 님의 빈 방`;
}
