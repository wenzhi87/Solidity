// main.js

let tutorialStep = 0;
const tutorialSteps = [
  "👋 歡迎使用 Solidity 智能合約模擬器！這是一個用來學習區塊鏈合約的模擬工具。",
  "📄 步驟 1：檢查合約編輯器中預設的範例程式碼。可自由修改或保留原本內容。",
  "🧱 步驟 2：Solidity 合約通常由 pragma、contract、state variable 組成。請確保語法正確。",
  "🔍 步驟 3：點擊『編譯合約』按鈕，檢查語法是否正確。若成功會出現提示。",
  "🚀 步驟 4：點擊『部署合約』，模擬將合約部署至區塊鏈，這不會實際上鏈。",
  "📨 步驟 5：在下方輸入訊息，然後點擊『呼叫 setMessage()』，模擬呼叫寫入函式。",
  "📬 步驟 6：訊息會顯示在執行日誌中，代表已成功模擬交易與狀態更新。",
  "🎓 提示：你可以嘗試修改合約中的變數、函式名稱或新增功能，並重新編譯部署。",
  "✅ 教學結束！歡迎進階操作，或切換其他頁面深入學習。"
];

function startTutorial() {
  tutorialStep = 0;
  updateLog("📘 教學開始！");
  updateLog("➡️ " + tutorialSteps[tutorialStep]);
}

function showNextStep() {
  tutorialStep++;
  if (tutorialStep < tutorialSteps.length) {
    updateLog("➡️ " + tutorialSteps[tutorialStep]);
  } else {
    updateLog("✅ 所有教學步驟已完成！");
  }
}

function updateLog(message) {
  const logBox = document.getElementById("logBox");
  const timestamp = new Date().toLocaleTimeString();
  logBox.innerText += `\n[${timestamp}] ${message}`;
  logBox.scrollTop = logBox.scrollHeight;
}

function compileContract() {
  const code = document.getElementById("contractEditor").value;
  if (code.includes("contract")) {
    updateLog("✅ 合約編譯成功！你可以部署它。\n（模擬成功：實際未與編譯器連線）");
    explainContract(code);
  } else {
    updateLog("❌ 合約中缺少 contract 宣告，請確認語法。");
  }
}

function deployContract() {
  updateLog("🚀 合約已模擬部署成功！\n（實際並未部署上鏈）");
}

function callSetFunction() {
  const input = document.getElementById("inputMessage").value.trim();
  if (input) {
    updateLog(`📝 setMessage() 呼叫成功，訊息更新為：「${input}」`);
  } else {
    updateLog("⚠️ 請輸入訊息後再執行 setMessage()。");
  }
}

function explainValidation() {
  const explanation = [
    "🔒 區塊鏈驗證機制詳解：",
    "1️⃣ 每筆交易在打包進區塊前，需通過節點的共識驗證。",
    "2️⃣ 若呼叫 setMessage()，會產生一筆交易並廣播至節點網路。",
    "3️⃣ 挖礦節點將交易打包成區塊，並進行工作量證明 (PoW)。",
    "4️⃣ 當區塊被鏈上其他節點確認後，訊息就會永久寫入區塊鏈。"
  ];
  explanation.forEach(line => updateLog(line));
}

function explainContract(code) {
  updateLog("📘 合約內容說明：");
  if (code.includes("string public message")) {
    updateLog("🔹 宣告一個公開字串變數 message，用來儲存訊息。");
  }
  if (code.includes("setMessage")) {
    updateLog("🔹 setMessage() 是一個公開函式，用來更新 message 變數內容。");
  }
  if (code.includes("function") && code.includes("view")) {
    updateLog("🔹 函式中包含 view 關鍵字，表示這是只讀函式，不會改變區塊鏈狀態。");
  }
  if (code.includes("constructor")) {
    updateLog("🔹 constructor 是建構子，會在部署合約時執行一次。");
  }
}

function searchKeyword() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const allItems = document.querySelectorAll(".syntax-section li");
  allItems.forEach(item => {
    item.style.display = item.innerText.toLowerCase().includes(input) ? "list-item" : "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".syntax-section li").forEach(item => {
    item.addEventListener("click", () => {
      const code = item.querySelector("code")?.innerText;
      if (code) {
        navigator.clipboard.writeText(code);
        showTooltip(item, "✅ 已複製！");
      }
    });
});
});

function showTooltip(element, message) {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip show";
  tooltip.innerText = message;
  document.body.appendChild(tooltip);
  const rect = element.getBoundingClientRect();
  tooltip.style.top = `${rect.top - 30}px`;
  tooltip.style.left = `${rect.left}px`;
  setTimeout(() => tooltip.remove(), 1500);
}
// main.js（混淆防檢視版本）

(function(){
  let e=0;
  const t=[
    "📄 步驟 1：檢查合約編輯器中預設的範例程式碼。可自由修改或保留原本內容。",
    "🧱 步驟 2：Solidity 合約通常由 pragma、contract、state variable 組成。請確保語法正確。",
    "🔍 步驟 3：點擊『編譯合約』按鈕，檢查語法是否正確。若成功會出現提示。",
    "🚀 步驟 4：點擊『部署合約』，模擬將合約部署至區塊鏈，這不會實際上鏈。",
    "📨 步驟 5：在下方輸入訊息，然後點擊『呼叫 setMessage()』，模擬呼叫寫入函式。",
    "📬 步驟 6：訊息會顯示在執行日誌中，代表已成功模擬交易與狀態更新。",
    "🎓 提示：你可以嘗試修改合約中的變數、函式名稱或新增功能，並重新編譯部署。",
    "✅ 教學結束！歡迎進階操作，或切換其他頁面深入學習。"
  ];

  function n(){e=0,r()}function r(){e<t.length?o(t[e++]):o("✅ 所有教學步驟已完成！")}
  function o(e){const t=document.getElementById("logBox"),n=new Date().toLocaleTimeString();t.innerText+=`\n[${n}] ${e}`,t.scrollTop=t.scrollHeight}
  function a(){const e=document.getElementById("contractEditor").value;if(!e.includes("contract"))return o("❌ 合約中缺少 contract 宣告，請加入類似 `contract HelloWorld {}` 的語句。"),void 0;o("✅ 合約編譯成功！你可以部署它。\n（模擬成功：實際未與編譯器連線）"),s(e)}
  function c(){o("🚀 合約已模擬部署成功！\n（實際並未部署上鏈）")}
  function i(){const e=document.getElementById("inputMessage").value.trim();e?o(`📝 setMessage() 呼叫成功，訊息更新為：「${e}」`):o("⚠️ 請輸入訊息後再執行 setMessage()。")}
  function u(){["🔒 區塊鏈驗證機制詳解：","1️⃣ 每筆交易在打包進區塊前，需通過節點的共識驗證。","2️⃣ 若呼叫 setMessage()，會產生一筆交易並廣播至節點網路。","3️⃣ 挖礦節點將交易打包成區塊，並進行工作量證明 (PoW)。","4️⃣ 當區塊被鏈上其他節點確認後，訊息就會永久寫入區塊鏈。"].forEach(e=>o(e))}
  function s(e){o("📘 合約內容說明："),e.includes("pragma solidity")&&o("🔹 `pragma solidity` 用來指定編譯器版本。建議使用 `^0.8.0` 以上。\n"),e.includes("contract")&&o("🔹 `contract` 宣告為合約主體，裡面包含變數與函式。\n"),e.includes("string public message")&&o("🔹 `string public message` 為公開字串變數，可由外部讀取。\n"),e.includes("setMessage")&&o("🔹 `setMessage()` 是函式，可用來更新變數 message 的值。\n"),e.includes("function")&&e.includes("view")&&o("🔹 `view` 函式表示只讀取狀態，不會修改區塊鏈內容。\n"),e.includes("constructor")&&o("🔹 `constructor` 為建構子，部署合約時會執行一次初始化。\n")}
  function l(){const e=document.getElementById("searchInput").value.toLowerCase();document.querySelectorAll(".syntax-section li").forEach(t=>{t.style.display=t.innerText.toLowerCase().includes(e)?"list-item":"none"})}
  document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".syntax-section li").forEach(e=>{e.addEventListener("click",()=>{const t=e.querySelector("code")?.innerText;t&&(navigator.clipboard.writeText(t),d(e,"✅ 已複製！"))})})});
  function d(e,t){const n=document.createElement("div");n.className="tooltip show",n.innerText=t,document.body.appendChild(n);const r=e.getBoundingClientRect();n.style.top=`${r.top-30}px`,n.style.left=`${r.left}px`,setTimeout(()=>n.remove(),1500)}

  // 🔒 鎖定右鍵與 F12 鍵
  document.addEventListener("contextmenu",e=>{e.preventDefault(),alert("⚠️ 禁止右鍵檢查，請尊重原創程式碼！")});
  document.addEventListener("keydown",e=>{
    if("F12"===e.key||(e.ctrlKey&&e.shiftKey&&("I"===e.key||"J"===e.key))||(e.ctrlKey&&"U"===e.key)){
      e.preventDefault();
      alert("⚠️ 開發者工具已鎖定！")
    }
  });

  // 釋出功能給 HTML 按鈕使用
  window.startTutorial=n;
  window.showNextStep=r;
  window.compileContract=a;
  window.deployContract=c;
  window.callSetFunction=i;
  window.explainValidation=u;
  window.switchLanguage=(lang)=>{tutorialStep=0,showNextStep(),logBox&&(document.getElementById("validation-explain-btn").textContent="zh"===lang?"📘 區塊鏈驗證詳解":"📘 Explain Blockchain Validation")};
  window.searchKeyword=l;
})();
function showStep1Guide() {
  const editor = document.getElementById('contractEditor');
  editor.classList.add('tutorial-highlight');

  const tooltip = document.createElement('div');
  tooltip.className = 'tutorial-tooltip';
  tooltip.innerText = '【步驟 1】請先編輯或確認智能合約內容。您可以從範例合約開始修改。';

  document.body.appendChild(tooltip);

  const rect = editor.getBoundingClientRect();
  tooltip.style.top = `${window.scrollY + rect.top - 50}px`;
  tooltip.style.left = `${window.scrollX + rect.left}px`;
}
