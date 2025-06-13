function getCallouts() {
  return JSON.parse(localStorage.getItem('callouts') || '[]');
}

function addCallout(name, location, time) {
  const callouts = getCallouts();
  callouts.push({ name, location, time });
  localStorage.setItem('callouts', JSON.stringify(callouts));
  localStorage.setItem('calloutUpdated', Date.now());
}

function removeCallout(index) {
  const callouts = getCallouts();
  callouts.splice(index, 1);
  localStorage.setItem('callouts', JSON.stringify(callouts));
  localStorage.setItem('calloutUpdated', Date.now());
}
