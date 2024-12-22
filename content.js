function removeAdAndUpgrade() {

  const upgradeDiv = document.querySelector("div.css-1euatyy-ShinyUpgradeContainer");
  if (upgradeDiv) {
    upgradeDiv.remove();
    console.log("Upgrade div removed.");
  }

  const adDiv = document.querySelector("div#ads-table");
  if (adDiv) {
    adDiv.remove();
    console.log("Ad div removed.");
  }
}

const observer = new MutationObserver(() => {
  removeAdAndUpgrade();
});

observer.observe(document.body, { childList: true, subtree: true });

removeAdAndUpgrade();
