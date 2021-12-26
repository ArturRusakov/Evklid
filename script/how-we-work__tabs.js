const tabNavItems = document.querySelectorAll('.how-we-work__tab-nav-item');
const tabContentItems = document.querySelectorAll('.how-we-work__tab-content-item');

tabNavItems.forEach(function (item) {
  item.addEventListener('click', function () {
    let currentTabNavButton = item;
    let tabContentId = currentTabNavButton.getAttribute('data-tab');
    let currentTabContentItem = document.getElementById(tabContentId);

    console.log(tabContentId);

    tabNavItems.forEach(function (item) {
      item.classList.remove('activeTabNavItem');
    });

    tabContentItems.forEach(function (item) {
      item.classList.remove('activeTabContent');
    });

    currentTabNavButton.classList.add('activeTabNavItem');
    currentTabContentItem.classList.add('activeTabContent');
  });
});
