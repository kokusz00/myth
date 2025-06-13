function getCallouts() {
  const callouts = JSON.parse(localStorage.getItem("callouts") || "{}");
  return {
    activeCallouts: callouts.active || [],
    waitingCallouts: callouts.waiting || [],
  };
}
