const image = document.querySelector("#myImage");
const text = document.querySelector("h2");

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");

buttonOne.addEventListener("click", summerPackage);
buttonTwo.addEventListener("click", winterPackage);

function summerPackage() {
    image.setAttribute("src", "beach.jpg");
    text.textContent = "DO YOU WANT TO GO IN THE SUMMER DURING THE WINTER?";
    buttonOne.textContent = "YES, I LOVE TO BE ON THE BEACH";
    buttonTwo.textContent = "NO, YOU COULD BE EASILY BURNED";
    buttonOne.addEventListener("click", beach)
    buttonTwo.addEventListener("click", burn);
}

function beach() {
    image.setAttribute("src", "polynesia.jpg")
    text.textContent = "RELAX & WARM";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function burn() {
    image.setAttribute("src", "https://media.istockphoto.com/id/1326845873/photo/the-red-back-of-a-girl-with-a-sunburn-and-white-lines-from-a-swimsuit-with-a-hotel-pool-on.jpg?b=1&s=170667a&w=0&k=20&c=HoAYZQBAOAt7fFEkNST0J6Azyiqvy7DH2Xi02sYd538=")
    text.textContent = "SUNBURNS ARE HEARTS";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function winterPackage() {
    image.setAttribute("src", "https://cdn.pixabay.com/photo/2020/01/13/23/15/snowboarding-4763731__340.jpg")
    text.innerHTML = "DO YOU ENJOY COLD WEATHER?";
    buttonOne.textContent = "YES";
    buttonTwo.textContent = "NO";

    buttonOne.addEventListener("click", activities);
    buttonTwo.addEventListener("click", cold);
}

function activities() {
    image.setAttribute("src", "https://cdn.pixabay.com/photo/2017/04/09/09/56/finland-2215318__340.jpg")
    text.textContent = "YES, IT'S SO BEAUTIFUL";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function cold() {
    image.setAttribute("src", "https://cdn.pixabay.com/photo/2017/11/07/00/07/fantasy-2925250__340.jpg")
    text.textContent = "NO, IT'S TOO COLD FOR ME";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}


