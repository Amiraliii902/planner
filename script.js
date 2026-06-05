let lang = "en";

function addTask() {
  const input = document.getElementById("taskInput");
  if (!input.value) return;

  const li = document.createElement("li");
  li.innerText = input.value;

  li.onclick = () => li.remove();

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function toggleLang() {
  lang = lang === "en" ? "fa" : "en";

  document.getElementById("title").innerText =
    lang === "en" ? "Smart Planner" : "برنامه‌ریز هوشمند";

  document.getElementById("taskTitle").innerText =
    lang === "en" ? "Today Tasks" : "کارهای امروز";
}
