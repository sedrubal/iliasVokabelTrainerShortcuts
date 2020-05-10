// probe, if this is a Vokabeltrainer Page
const setCardKnownBtns = document.querySelectorAll("[name='cmd[setCardKnown]'");

function showMessage(text, color) {
  const msgBox = document.createElement('div');
  msgBox.style=`
position: fixed;
width: 40rem;
background: ${color} none repeat scroll 0% 0%;
top: 5rem;
z-index: 5000000;
left: calc(50vw - 20rem);
box-shadow: 0px 0px 20px rgba(0, 0, 0, .2);
text-align: center;
padding: 1rem;
color: black;
`;
  msgBox.innerText = text;
  document.body.appendChild(msgBox);
}

if (setCardKnownBtns.length >= 1) {
  // find interesting buttons
  const setCardDifficultBtns = document.querySelectorAll("[name='cmd[setCardDifficult]'");
  const setCardNotKnownBtns = document.querySelectorAll("[name='cmd[setCardNotKnown]'");
  const cancelBtns = document.querySelectorAll("[name='cmd[cancelTraining]'");
  const toggleDefAccordion = document.getElementById('accordion__2').getElementsByClassName('il_VAccordionToggleDef')[0].firstChild;

  // install keypress listener
  document.onkeypress = (evt) => {
    switch (evt.key) {
      case 'e': {
        console.log("Erinnert!");
        setCardKnownBtns[0].click();
        showMessage("Super! Weiter so!", "#00dd6688")
        break;
      }
      case 's': {
        console.log("Schwierig!");
        setCardDifficultBtns[0].click();
        showMessage("Übung macht den Meister!", "#dddd0080")
        break;
      }
      case 'n': {
        console.log("Nicht erinnert!");
        setCardNotKnownBtns[0].click();
        showMessage("Schade! Beim nächsten mal klappts bestimmt!", "#ff000080")
        break;
      }
      case 'x': {
        console.log("Training abbrechen!");
        cancelBtns[0].click();
        showMessage("Bis bald!", "#00408080")
        break;
      }
      case 'Enter':
      case 'Space': {
        console.log("Definition einblenden!");
        toggleDefAccordion.click();
        break;
      }
      default: {
        return;
      }
    }
  };

  // add key hints
  setCardKnownBtns.forEach((btn) => {
    btn.value += " (E)";
  });
  setCardDifficultBtns.forEach((btn) => {
    btn.value += " (S)";
  });
  setCardNotKnownBtns.forEach((btn) => {
    btn.value += " (N)";
  });
  cancelBtns.forEach((btn) => {
    btn.value += " (X)";
  });
  toggleDefAccordion.innerText += " (Enter)";
}
