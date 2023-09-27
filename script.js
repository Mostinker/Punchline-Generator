const createJoke = () => {
  axios
    .get("https://official-joke-api.appspot.com/jokes/programming/random")
    .then((res) => {
      if (document.getElementById("punch-line")) {
        document.querySelector(".punch").remove();
      }

      //console.log(res.data)
      const jokeDiv = document.createElement("div");
      const theJoke = document.createElement("p");
      const jokeText = document.createTextNode(res.data[0].setup);
      const punchBtn = document.createElement("button");
      const punchBtnText = document.createTextNode("Punchline");

      theJoke.classList.add("text-white", "fs-2", "text-decoration-bold");

      punchBtn.classList.add("btn", "btn-success");
      jokeDiv.classList.add(
        "d-flex",
        "justify-content-center",
        "align-itmes,center",
        "flex-column"
      );

      punchBtn.addEventListener("click", () => tellJoke(res.data[0]));
      punchBtn.id = "punch-btn";
      theJoke.id = "the-joke";
      jokeDiv.id = "the-text";
      theJoke.appendChild(jokeText);
      jokeDiv.appendChild(theJoke);
      punchBtn.appendChild(punchBtnText);
      jokeDiv.appendChild(punchBtn);
      document.getElementById("joke").appendChild(jokeDiv);
      document.getElementById("create").classList.add("d-none");
    })
    .catch((err) => {
      //console.error(err);
    });
};

const tellJoke = (res) => {
  const jokeDiv = document.createElement("div");
  const theJoke = document.createElement("p");
  const jokeText = document.createTextNode(res.punchline);
  theJoke.classList.add("text-white", "fs-2", "punch", "text-decoration-bold");
  theJoke.id = "punch-line";
  document
    .getElementById("joke")
    .removeChild(document.getElementById("the-text"));
  document.getElementById("create").classList.remove("d-none");
  theJoke.appendChild(jokeText);
  jokeDiv.appendChild(theJoke);
  document.getElementById("joke").appendChild(jokeDiv);
};
