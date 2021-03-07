import React, { useEffect } from "react";
import RecordItem from "../components/RecordPage/RecordItem";
const RecordPage = () => {
  // import "../scss/all.css";
  function qs(selector, all = false) {
    return all
      ? document.querySelectorAll(selector)
      : document.querySelector(selector);
  }
  useEffect(() => {
    const sections = qs(".section", true); // true 表示選取全部的 .section
    const timeline = qs(".timeline"); // 只有一個參數 表示選取單個的 .timeline
    const line = qs(".line");
    line.style.bottom = `calc(100% - 20px)`;
    let prevScrollY = window.scrollY;
    let up, down;
    let full = false;
    let set = 0;
    const targetY = window.innerHeight * 0.8;
    function scrollHandler(e) {
      const { scrollY } = window;
      up = scrollY < prevScrollY;
      down = !up;
      const timelineRect = timeline.getBoundingClientRect();
      const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

      const dist = targetY - timelineRect.top;
      console.log(dist);

      if (down && !full) {
        set = Math.max(set, dist);
        line.style.bottom = `calc(100% - ${set}px)`;
      }

      if (dist > timeline.offsetHeight + 50 && !full) {
        full = true;
        line.style.bottom = `-50px`;
      }

      sections.forEach((item) => {
        // console.log(item);
        const rect = item.getBoundingClientRect(); //     console.log(rect);

        if (rect.top + item.offsetHeight / 5 < targetY) {
          item.classList.add("show-me");
        }
      });
      console.log(up, down);

      prevScrollY = window.scrollY;
    }

    scrollHandler();
    line.style.display = "block";
    window.addEventListener("scroll", scrollHandler);
  }, []);

  // qs = querySelector

  return (
    <div className="container">
      <div className="top-section">
        <h1>基金會記事</h1>
      </div>
      <div className="timeline">
        <div className="line"></div>
        <RecordItem
          date="108.3"
          desc="推動90乾糧專案。"
          imageUri="http://www.old.org.tw/old_htm/images/pic/5/01.jpg"
        />
        <RecordItem
          date="107.7"
          desc="辦理養老照料中心。"
          imageUri="http://www.old.org.tw/old_htm/images/pic/5/02.jpg"
        />

        <RecordItem
          date="106.1"
          desc="建國百年慶助活動，帶領老人遊園踏青。"
          imageUri="http://www.old.org.tw/old_htm/images/pic/5/06.jpg"
        />
        <RecordItem
          date="105.3"
          desc="『第一屆老人運動會』規劃健走、健跑、游泳、桌球、羽球、網球、籃球、木球、槌球、地面高球、歌唱、象棋、圍棋、麻將、攝影十五項競賽，參與老人二萬余人。"
          imageUri="http://www.old.org.tw/old_htm/images/pic/5/07.jpg"
        />
        <RecordItem
          date="104.3"
          desc="推動90乾糧專案。"
          imageUri="http://www.old.org.tw/old_htm/images/pic/5/01.jpg"
        />
        <RecordItem
          date="103.7"
          desc="邀請大陸各地老齡辦參觀訪問，討論兩岸老人福利服務辦法及建言"
          imageUri="http://www.old.org.tw/old_htm/images/pic/5/04.jpg"
        />
      </div>
    </div>
  );
};

export default RecordPage;
