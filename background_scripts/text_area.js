let textField = document.getElementById("text_2");
textField.addEventListener('keydown', event => {
  // If the user pressed CTRL+SHIFT+ENTER, submit form
  if (
    event.ctrlKey
    && event.shiftKey
    && (event.keyCode == 10 || event.keyCode == 13)) {
    document.forms["form_2"].submit();
  }
});

// listen for changes in text area
textField.addEventListener('input', () => {
  // if change happens
  let submitMsg = document.getElementById("msg_2");
  // if length of text in text area is 0 (text area is empty), do not render submit msg
  if (textField.value.length === 0) {
    submitMsg.style.display = 'none';
  } else {
    // and length of text in text area is more than 0, render submit message
    submitMsg.style.display = 'inline-block';
  }
});

/**
 * @tip - Don't rely on the page having the keyboard focus.
  The address bar always gets the focus first when the user creates a new tab.
 */