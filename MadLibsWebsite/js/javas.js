function generateMadLib() {
  let userName = document.getElementById("userName").value;
  let city = document.getElementById("city").value;
  let adjective1 = document.getElementById("adjective1").value;
  let noun1 = document.getElementById("noun1").value;
  let verb1 = document.getElementById("verb1").value;
  let noun2 = document.getElementById("noun2").value;
  let verb2 = document.getElementById("verb2").value;
  let adverb1 = document.getElementById("adverb1").value;
  let noun3 = document.getElementById("noun3").value;
  let verb3 = document.getElementById("verb3").value;
  let noun4 = document.getElementById("noun4").value;
  let verb4 = document.getElementById("verb4").value;
  let adjective2 = document.getElementById("adjective2").value;
  let noun5 = document.getElementById("noun5").value;
  let verb6 = document.getElementById("verb6").value;
  let adverb2 = document.getElementById("adverb2").value;
  let noun6 = document.getElementById("noun6").value;

  let occupation = document.querySelector(
    "input[name='occupation']:checked"
  ).value;

  let storyHTML = `
    In the city of ${city}, ${userName}, a ${occupation}, encountered
    a significant challenge the entering the company's “DoomVault Database” that had
    locked itself.

    To get access back, ${userName} needed two listed entry keys.
    ${userName} struggled to figure out the key, needing to look deep into the DoomVault archives.
    But, after some time ${userName} found key One:
    "${adjective1} ${noun1} ${verb1} ${noun2} ${verb2} ${adverb1}."

    After entering the first key, the system requested a second security key, which was found after puzzling together files from the paper shredder .
    Key Two: "${verb3} ${noun3} ${noun4} ${verb4} ${adjective2} ${noun5} ${verb6} ${adverb2} ${noun6}."

    Once both keys were entered, the DoomVault unlocked.
    ${userName} became known for solving complex challenges and mysteries connected to the entry of the DoomVault.
  `;

  typeStory(storyHTML, "storyOutput", 15);
}

// HEADER IMAGE CHANGER

document.querySelectorAll("input[name='occupation']").forEach((radio) => {
  radio.addEventListener("change", function () {
    updateHeaderImage(this.value);
  });
});

function updateHeaderImage(choice) {
  let header = document.querySelector("header");

  if (choice === "tech intern") {
    header.style.backgroundImage = "url('img/techguy.jpg')";
  } else if (choice === "spy") {
    header.style.backgroundImage = "url('img/Spy.jpg')";
  } else if (choice === "detective") {
    header.style.backgroundImage = "url('img/hacker-dark.jpg')";
  } else {
    header.style.backgroundImage = "url('../img/CodingBG.jpg')";
  }
}

// TYPING EFFECT

function typeStory(text, elementId, speed = 15) {
  let element = document.getElementById(elementId);
  element.innerHTML = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}
