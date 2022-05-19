var selectedVote;
function voteCollect(item) {
  selectedVote = item;
}

teamA.addEventListener("click", () => {
  voteCollect("tileA");
});

teamB.addEventListener("click", () => {
  voteCollect("tileB");
});
function submitVote() {
  alert(selectedVote);
  //here add the functionality to add vote to db
  //add token verification here
  //after verification remove the account
}
