document.getElementById("keyForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const length = document.getElementById("lengthInput").value;
  const characters = document.getElementById("charactersInput").value;
  const key = generateKey(length, characters);
  document.getElementById("result").innerText = "Згенерований ключ: " + key;
});

function generateKey(length, characters) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
