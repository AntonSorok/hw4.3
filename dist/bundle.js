(()=>{const e=document.createElement("div");e.classList.add("main");const t=document.createElement("div");t.classList.add("main_panel");const s=document.createElement("h1");s.classList.add("main_label"),s.textContent="Выберите сложность";const l=document.createElement("div");l.classList.add("main_choose_dif");const n=document.createElement("button");n.classList.add("level","level_one"),n.textContent="1";const d=document.createElement("button");d.classList.add("level","level_two"),d.textContent="2";const a=document.createElement("button");a.classList.add("level","level_three"),a.textContent="3";const c=document.createElement("button");c.classList.add("button"),c.textContent="Старт";const o=document.querySelector("body");o.appendChild(e),e.appendChild(t),t.appendChild(s),t.appendChild(l),l.appendChild(n),l.appendChild(d),l.appendChild(a),t.appendChild(c);let i="";n.addEventListener("click",(e=>{e.preventDefault(),console.log("hello"),i=1,n.classList.add("level_pressed"),d.classList.remove("level_pressed"),a.classList.remove("level_pressed")})),d.addEventListener("click",(e=>{e.preventDefault(),console.log("hellox2"),i=2,d.classList.add("level_pressed"),a.classList.remove("level_pressed"),n.classList.remove("level_pressed")})),a.addEventListener("click",(e=>{e.preventDefault(),console.log("hellox3"),i=3,a.classList.add("level_pressed"),d.classList.remove("level_pressed"),n.classList.remove("level_pressed")})),c.addEventListener("click",(e=>{e.preventDefault(),console.log(e),console.log(c.value),console.log(i),1===i?(console.log("Easy level starts..."),function(){o.textContent="";const e=document.createElement("div");e.classList.add("main_game");const t=document.createElement("div");t.classList.add("header_part");const s=document.createElement("div");s.classList.add("timer");const l=document.createElement("p");l.classList.add("timer_minute"),l.textContent="min";const n=document.createElement("span");n.classList.add("timer_seconds"),n.textContent="sec";const d=document.createElement("h1");d.classList.add("timer_info"),d.textContent="00,00";const a=document.createElement("button");a.classList.add("button");const c=document.createElement("section");c.classList.add("game_panel");const i=document.createElement("div");i.classList.add("card");const m=document.createElement("img");m.classList.add("front-face");const r=document.createElement("img");r.classList.add("back_face"),document.body.appendChild(e),e.appendChild(t),t.appendChild(s),s.appendChild(l),l.appendChild(n),s.appendChild(d),t.appendChild(a),e.appendChild(c),c.appendChild(i),i.appendChild(m),i.appendChild(r),console.log("hellossa")}()):2===i?(console.log("Medium level starts..."),renderMediumLevel()):(console.log("Hard level starts..."),renderHardlevel())}))})();