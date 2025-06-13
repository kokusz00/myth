function getCallouts() {
  return JSON.parse(localStorage.getItem('callouts') || '[]');
}

function addCallout(name, location) {
  const callouts = getCallouts();
  callouts.push({ name, location });
  localStorage.setItem('callouts', JSON.stringify(callouts));
  localStorage.setItem('calloutUpdated', Date.now()); // signal update
}

function removeCallout(index) {
  const callouts = getCallouts();
  callouts.splice(index, 1);
  localStorage.setItem('callouts', JSON.stringify(callouts));
  localStorage.setItem('calloutUpdated', Date.now()); // signal update
}

