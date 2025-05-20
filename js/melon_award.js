async function renderMelonAwardBox() {
  const res = await fetch("../js/data/melon_award.json");
  const json = await res.json();
  const latest = json.history[json.history.length - 1];

  const rank = latest.rank;
  const title = latest.title;
  const percent = latest.percent;
  const vote = latest.vote;
  const desc = latest.desc;
  const artist = json.artist;
  const week = latest.week;
  const remain = latest.remain;

  const box = document.querySelector(".week_vote .vote_box");
  const none = document.querySelector(".week_vote .vote_none");

  if (!box || !none) return;

  if (rank === null) {
    box.classList.add("hide");
    none.classList.remove("hide");
  } else {
    box.classList.remove("hide");
    none.classList.add("hide");

    const weekEl = box.querySelector(".week");
    const remainEl = box.querySelector(".remain span");
    const rankEl = box.querySelector(".rank");
    const singerEl = box.querySelector(".singer");
    const titleEl = box.querySelector(".title");
    const percentEl = box.querySelector(".percent");
    const voteEl = box.querySelector(".vote");
    const descEl = box.querySelector(".desc");

    if (weekEl) weekEl.textContent = week ?? "";
    if (remainEl) remainEl.textContent = remain ?? "";
    if (rankEl) rankEl.textContent = rank;
    if (singerEl) singerEl.textContent = artist;
    if (titleEl) titleEl.textContent = title;
    if (percentEl) percentEl.textContent = percent;
    if (voteEl) voteEl.textContent = vote;
    if (descEl) descEl.textContent = desc;
  }

  // 기준 시간 갱신 (정각 표시)
    const timeEl = document.querySelector(".week_vote .box_tit .time");
    if (timeEl && latest.timestamp) {
    const ts = new Date(latest.timestamp);
    const month = String(ts.getMonth() + 1).padStart(2, '0'); // 월 (0~11 → +1)
    const date = String(ts.getDate()).padStart(2, '0');        // 일
    const hour = String(ts.getHours()).padStart(2, '0');       // 시
    timeEl.textContent = `${month}/${date} ${hour}:00 기준`;
  }
}

renderMelonAwardBox();
