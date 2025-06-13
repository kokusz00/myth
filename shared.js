function getCallouts() {
  return JSON.parse(localStorage.getItem('callouts') || '[]');
}

function saveCallouts(callouts) {
  localStorage.setItem('callouts', JSON.stringify(callouts));
  localStorage.setItem('calloutUpdated', Date.now());
}

function addCallout(name, location, time, status) {
  const callouts = getCallouts();
  callouts.push({ name, location, time, status });
  saveCallouts(callouts);
}

function updateCalloutStatus(index, newStatus) {
  const callouts = getCallouts();
  if (callouts[index]) {
    callouts[index].status = newStatus;
    saveCallouts(callouts);
  }
}

function removeCallout(index) {
  const callouts = getCallouts();
  callouts.splice(index, 1);
  saveCallouts(callouts);
}
