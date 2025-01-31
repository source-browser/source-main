(function() {
  const dynamicIsland = document.createElement('div');
  dynamicIsland.style.position = 'fixed';
  dynamicIsland.style.top = '10px';
  dynamicIsland.style.left = '10px';
  dynamicIsland.style.zIndex = '9999';
  dynamicIsland.style.backgroundColor = '#6f6df3';
  dynamicIsland.style.borderRadius = '15px';
  dynamicIsland.style.padding = '10px';
  dynamicIsland.style.display = 'flex';
  dynamicIsland.style.alignItems = 'center';
  dynamicIsland.style.gap = '10px';
  dynamicIsland.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  dynamicIsland.style.opacity = '0';  // Even more fade :3
  dynamicIsland.style.transition = 'opacity 1s ease'; //longer fade time >:3

  dynamicIsland.addEventListener('mouseenter', () => {
    dynamicIsland.style.opacity = '1';
  });

  dynamicIsland.addEventListener('mouseleave', () => {
    dynamicIsland.style.opacity = '0'; //removed slight visibility while non hovered
  });

  const backButton = document.createElement('button');
  backButton.textContent = '←';
  backButton.style.fontFamily = 'Segoe UI, sans-serif';
  backButton.style.fontSize = '16px';
  backButton.style.padding = '5px 10px';
  backButton.style.border = 'none';
  backButton.style.backgroundColor = 'white';
  backButton.style.borderRadius = '10px';
  backButton.style.cursor = 'pointer';
  backButton.addEventListener('click', () => window.history.back());

  const forwardButton = document.createElement('button');
  forwardButton.textContent = '→';
  forwardButton.style.fontFamily = 'Segoe UI, sans-serif';
  forwardButton.style.fontSize = '16px';
  forwardButton.style.padding = '5px 10px';
  forwardButton.style.border = 'none';
  forwardButton.style.backgroundColor = 'white';
  forwardButton.style.borderRadius = '10px';
  forwardButton.style.cursor = 'pointer';
  forwardButton.addEventListener('click', () => window.history.forward());

  const refreshButton = document.createElement('button');
  refreshButton.textContent = '↻';
  refreshButton.style.fontFamily = 'Segoe UI, sans-serif';
  refreshButton.style.fontSize = '16px';
  refreshButton.style.padding = '5px 10px';
  refreshButton.style.border = 'none';
  refreshButton.style.backgroundColor = 'white';
  refreshButton.style.borderRadius = '10px';
  refreshButton.style.cursor = 'pointer';
  refreshButton.addEventListener('click', () => window.location.reload());

  dynamicIsland.appendChild(backButton);
  dynamicIsland.appendChild(forwardButton);
  dynamicIsland.appendChild(refreshButton);

  document.body.appendChild(dynamicIsland);
})();
