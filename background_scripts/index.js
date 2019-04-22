
// target submit button and add click event listener
let submitBtn = document.getElementById("submit-1").addEventListener("click", () => {
  let results = [];
  // select all input fields
  let inputNodes = document.querySelectorAll('input');
  // from each input field, take checked and value status and push it to an array
  inputNodes.forEach(node => results.push({ checked: node.checked, value: node.value }));

  const url = "http://127.0.0.1:9000";
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(results),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => console.log({ ok: res.ok }))
    .catch(err => console.error(err));

  // reset radio buttons
  inputNodes.forEach(node => node.checked = false);
  // prevent page reload
  event.preventDefault();
})

