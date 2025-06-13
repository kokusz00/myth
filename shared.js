const STORAGE_KEY = "callouts";

function getCallouts() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  return {
    activeCallouts: data.filter(c => c.status === "active"),
    waitingCallouts: data.filter(c => c.status === "waiting"),
  };
}

function saveCallouts(callouts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(callouts));
}

function addCallout(user, channel, time, status) {
  const id = Date.now().toString();
  const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  all.push({ id, user, channel, time, status });
  saveCallouts(all);
}

function removeCallout(id) {
  const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  const updated = all.filter(c => c.id !== id);
  saveCallouts(updated);
}

function moveCallout(id) {
  const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  const updated = all.map(c => {
    if (c.id === id) {
      return { ...c, status: c.status === "active" ? "waiting" : "active" };
    }
    return c;
  });
  saveCallouts(updated);
}
