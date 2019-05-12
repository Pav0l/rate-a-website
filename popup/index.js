/* eslint-disable no-console */
// target submit button and add click event listener
document.getElementById('submit-1').addEventListener('click', () => {
  // prevent page reload
  event.preventDefault();

  // select all checked input field
  const checkedField = document.querySelector('input.radio-btn:checked');

  // get the rating value from the checked input Node
  const result = { rating: checkedField.value };

  const domain = 'http://127.0.0.1:9000/api/rating';

  // select all open tabs and find the active one
  // eslint-disable-next-line no-undef
  chrome.tabs.query({}, tabs => {
    const activeTab = tabs.filter(tab => tab.active === true);

    // get the URI from the active tab
    result.url = activeTab[0].url;

    fetch(domain, {
      method: 'POST',
      body: JSON.stringify(result),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.ok) {
          // reset checked radio button
          checkedField.checked = false;
        }
      })
      .catch(err => console.error(err))
      .finally(() => window.close());
  });
});
