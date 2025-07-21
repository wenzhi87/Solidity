/* style.css（包含語法高亮、動畫與導覽樣式） */

/* 全域設定 */
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f4f7fc;
  color: #333;
  margin: 0;
  padding: 0;
}

/* 導覽列樣式 */
nav {
  background-color: #1f2937;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-weight: bold;
}

nav a.active {
  text-decoration: underline;
}

/* 響應式導覽列切換 */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* 合約編輯區樣式 */
textarea#contractEditor {
  width: 100%;
  height: 240px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
  background-color: #fdfdfd;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
}

/* 執行按鈕樣式 */
button {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px 16px;
  margin: 6px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #2563eb;
}

/* 日誌輸出區域 */
#logBox {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  height: 200px;
  overflow-y: scroll;
  white-space: pre-line;
  border-radius: 5px;
  margin-top: 10px;
}

/* 教學紅框提示 */
.tutorial-highlight {
  border: 3px solid red !important;
  box-shadow: 0 0 10px red;
  animation: pulse 1.5s infinite;
  z-index: 10;
  position: relative;
}

/* 教學提示文字框 */
.tutorial-tooltip {
  position: absolute;
  background: #fff5f5;
  border: 1px solid #e00;
  color: #d00;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 14px;
  max-width: 280px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 5px red;
  }
  50% {
    box-shadow: 0 0 15px red;
  }
  100% {
    box-shadow: 0 0 5px red;
  }
}

/* 合約翻譯視窗 */
.translation-box {
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 12px;
  max-height: 200px;
  overflow-y: auto;
  font-size: 14px;
  line-height: 1.6;
  white-space: pre-wrap;
  border-radius: 6px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  margin-top: 10px;
}

/* 教學流程提示組件步驟定位支援 */
.step-indicator {
  display: inline-block;
  margin: 4px 8px;
  background-color: #eee;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 13px;
  color: #555;
  cursor: default;
}

.step-indicator.active {
  background-color: #ff9800;
  color: white;
  font-weight: bold;
}
let tutorialSteps = [
  {
    selector: "#contractEditor",
    message: "【步驟 1】請在這裡撰寫或貼上你的 Solidity 合約程式碼。",
  },
  {
    selector: "button[onclick='compileContract()']",
    message: "【步驟 2】點擊這裡開始編譯你的合約，檢查語法是否正確。",
  },
  {
    selector: "button[onclick='deployContract()']",
    message: "【步驟 3】點擊這裡部署合約（模擬部署，實際不會上鏈）。",
  },
  {
    selector: "#inputMessage",
    message: "【步驟 4】輸入訊息，作為 setMessage() 的參數。",
  },
  {
    selector: "button[onclick='callSetFunction()']",
    message: "【步驟 5】呼叫合約函式，模擬更新 message 狀態。",
  },
  {
    selector: "#logBox",
    message: "【步驟 6】觀察執行日誌，查看模擬結果。",
  }
];

let currentStepIndex = 0;

function startTutorial() {
  currentStepIndex = 0;
  showTutorialStep(currentStepIndex);
}

function showNextStep() {
  removeTutorialHints();
  currentStepIndex++;
  if (currentStepIndex < tutorialSteps.length) {
    showTutorialStep(currentStepIndex);
  } else {
    logMessage("✅ 教學結束，歡迎自由操作！");
  }
}

function showTutorialStep(stepIndex) {
  const step = tutorialSteps[stepIndex];
  const el = document.querySelector(step.selector);
  if (!el) return;

  // 高亮提示
  el.classList.add("tutorial-highlight");

  // 建立提示框
  const tip = document.createElement("div");
  tip.className = "tutorial-tooltip";
  tip.innerText = step.message;
  document.body.appendChild(tip);

  const rect = el.getBoundingClientRect();
  tip.style.top = `${window.scrollY + rect.top - 50}px`;
  tip.style.left = `${window.scrollX + rect.left}px`;

  logMessage(`📘 ${step.message}`);
}

function removeTutorialHints() {
  document.querySelectorAll(".tutorial-highlight").forEach(el => el.classList.remove("tutorial-highlight"));
  document.querySelectorAll(".tutorial-tooltip").forEach(el => el.remove());
}

function logMessage(msg) {
  const log = document.getElementById("logBox");
  const time = new Date().toLocaleTimeString();
  log.innerText += `\n[${time}] ${msg}`;
  log.scrollTop = log.scrollHeight;
}
