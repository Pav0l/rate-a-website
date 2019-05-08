// target submit button and add click event listener
document.getElementById('submit-1').addEventListener('click', () => {
  // select all checked input field
  const checkedField = document.querySelector('input.radio-btn:checked');

  // get the URI and value from the checked input Node
  const result = { rating: checkedField.value };
  const url = 'http://127.0.0.1:9000/api/rating';

  // eslint-disable-next-line no-undef
  chrome.tabs.query({}, tabs => {
    console.log('tabs', tabs);
    const activeTab = tabs.filter(tab => tab.active === true);

    result.url = activeTab[0].url;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(result),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => console.log({ ok: res.ok }))
      .catch(err => console.error(err))
      .finally(() => window.close());

    // reset checked radio button
    checkedField.checked = false;
    // prevent page reload
    event.preventDefault();
  });
});
