const score = document.querySelector('.score');
const btns = document.querySelectorAll(".btn-circle");
const btnContainer = document.querySelector(".btn-container")
const btnRulesOpen = document.querySelector(".btn-rules-open");
const btnRulesClose = document.querySelector(".btn-rules-close");
const overlay = document.querySelector(".overlay");
const gameContainer = document.querySelector(".game-container");

const userChoice = document.querySelector(".user-choice");
const userChoiceImage = document.querySelector(".user-choice-image");
const userChoiceWrapper = document.querySelector(".user-choice-wrapper");

const houseChoice = document.querySelector(".house-choice");
const houseChoiceImage = document.querySelector(".house-choice-image");
const houseChoiceWrapper = document.querySelector(".house-choice-wrapper");
const result = document.querySelector(".result");
const resultMessage = document.querySelector(".result-message");
const playAgain = document.querySelector(".play-again");


const options = ["paper", "scissors", "rock"];
let userChoiceStr;
let houseChoiceStr;
let userScore = 0;

const getHouseChoice = () => {
	const randomNum = Math.floor(Math.random() * options.length);
	houseChoiceStr = options[randomNum];
	houseChoice.classList.remove("house-choice-shadow");
	houseChoiceWrapper.classList.remove("wrapper-shadow");
	houseChoice.classList.add(houseChoiceStr);
	houseChoiceImage.src = `images/icon-${houseChoiceStr}.svg`;
}

const checkResult = () => {
	switch(userChoiceStr + houseChoiceStr) {
		case "scissorspaper":
		case "rockscissors":
		case "paperrock":
			resultMessage.textContent = "YOU WIN";
			userScore++;
			score.textContent = userScore;
			userChoice.classList.add("winner");
			break
		case "scissorsscissors":
		case "rockrock":
		case "paperpaper":
			resultMessage.textContent = "DRAW";
			break
		case "paperscissors":
		case "scissorsrock":
		case "rockpaper":
			resultMessage.textContent = "YOU LOSE";
			houseChoice.classList.add("winner");
			break
	}
}

btns.forEach(btn => btn.addEventListener("click", (event) => {
	userChoiceStr = event.currentTarget.classList[1];
	btnContainer.style.display = "none";
	gameContainer.style.display = "flex";
	userChoice.classList.add(userChoiceStr);
	userChoiceImage.src = `images/icon-${userChoiceStr}.svg`;

	getHouseChoice();
	checkResult();
	result.style.display = "block";
	gameContainer.classList.add("game-container-result");
	userChoice.classList.add("user-result-size");
	houseChoice.classList.add("house-result-size");
	if(window.innerWidth < 1200) {
		userChoice.classList.add("user-result-size");
		houseChoice.classList.add("house-result-size");
		houseChoiceWrapper.classList.add("wrapper-winner");
		userChoiceWrapper.classList.add("wrapper-winner");
	}
}))
console.log(window.innerWidth)
playAgain.addEventListener("click", () => {
	btnContainer.style.display = "flex";
	gameContainer.style.display = "none";
	result.style.display = "none";
	userChoice.classList.remove(userChoiceStr);
	userChoiceImage.src = "";
	houseChoice.classList.remove(houseChoiceStr);
	houseChoiceImage.src = "";
	houseChoice.classList.remove("winner");
	userChoice.classList.remove("winner");
})

btnRulesOpen.addEventListener("click", () => {
	overlay.style.display = "block";
})

btnRulesClose.addEventListener("click", () => {
	overlay.style.display = "none";
})