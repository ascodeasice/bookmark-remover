chrome.action.onClicked.addListener(async function (tab) {
  const { url } = tab;
  try {
    const bookmarks = await chrome.bookmarks.search({ url });
    for (const bm of bookmarks) {
      await chrome.bookmarks.remove(bm.id);
    }
  } catch (error) {
    console.error(error);
  }
});