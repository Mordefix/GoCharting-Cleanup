// Function to remove the ad and upgrade div
function removeAdAndUpgrade() {
  // Remove the upgrade container
  const upgradeDiv = document.querySelector("div.css-1euatyy-ShinyUpgradeContainer");
  if (upgradeDiv) {
    upgradeDiv.remove();
    console.log("Upgrade div removed.");
  }

  // Remove the ad div
  const adDiv = document.querySelector("div#ads-table");
  if (adDiv) {
    adDiv.remove();
    console.log("Ad div removed.");
  }
}

// Create a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver(() => {
  removeAdAndUpgrade();
});

// Observe changes to the body of the document
observer.observe(document.body, { childList: true, subtree: true });

// Run the function on initial load in case the elements are already present
removeAdAndUpgrade();
