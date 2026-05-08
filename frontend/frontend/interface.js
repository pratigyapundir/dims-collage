
  function showAboutTab(tabId) {
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

    document.querySelector(`[onclick="showAboutTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
  }


  function scrollToNext(event) {
    event.preventDefault();

    document.getElementById("contactForm").reset();
    document.getElementById("home").scrollIntoView({
      behavior: "smooth"
    });
  }

  function setActiveTab(selectedTab) {
    document.querySelectorAll('.nav.pill .tab').forEach(tab => {
      tab.classList.remove('active');
    });
    selectedTab.classList.add('active');
  }
