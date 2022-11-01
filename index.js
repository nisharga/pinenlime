let form = document.getElementById("form");
form.addEventListener("submit", changeName);

function changeName(e) {
  e.preventDefault();

  document.getElementById("imagediv").style.display = "none";
  let date = document.getElementById("date").value;
  let location = document.getElementById("location").value;
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  let template = document.getElementById("template").innerHTML;
  let render = Mustache.render(template, {
    date: date,
    location: location,
    title: title,
    description: description,
  });

  document.getElementById("result").innerHTML = render;
}
