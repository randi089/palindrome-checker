const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  if (!input.value) {
    return alert("Please input a value");
  }
  if (palindrome(input.value)) {
    result.innerHTML = `<strong>${input.value}</strong> is a palindrome.`;
  } else {
    result.innerHTML = `<strong>${input.value}</strong> is not a palindrome.`;
  }
});

function palindrome(str) {
  const result = str.replace(/[\W_]/g, "").toLowerCase();
  return result.split("").reverse().join("") === result;
}
