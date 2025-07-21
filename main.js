// main.js

// 教學步驟資料
const tutorialSteps = [
  {
    selector: "#contractEditor",
    message: "【步驟 1】請在這裡撰寫或貼上你的 Solidity 合約程式碼。"
  },
  {
    selector: "button[onclick='compileContract()']",
    message: "【步驟 2】點擊這裡開始編譯你的合約，檢查語法是否正確。"
  },
  {
    selector: "button[onclick='deployContract()']",
    message: "【步驟 3】點擊這裡部署合約（模擬部署，實際不會上鏈）。"
  },
  {
    selector: "#inputMessage",
    message: "【步驟 4】輸入訊息，作為 setMessage() 的參數。"
  },
  {
    selector: "button[onclick='callSetFunction()']",
    message: "【步驟 5】呼叫合約函式，模擬更新 message 狀態。"
  },
  {
    selector: "#logBox",
    message: "【步驟 6】觀察執行日誌，查看模擬結果。"
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

  el.classList.add("tutorial-highlight");

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

function compileContract() {
  const code = document.getElementById("contractEditor").value;
  logMessage("🔍 編譯完成（模擬），無錯誤。\n---\n" + code.slice(0, 100) + "...");
}

function deployContract() {
  logMessage("🚀 合約已成功模擬部署。");
}

function callSetFunction() {
  const input = document.getElementById("inputMessage").value;
  if (input.trim()) {
    logMessage(`📝 setMessage('${input}') 被呼叫（模擬）`);
  } else {
    logMessage("⚠️ 請先輸入訊息再執行 setMessage()。");
  }
}

function explainValidation() {
  logMessage("📘 區塊鏈驗證模擬說明：交易需經節點共識與 GAS 費用計算，本模擬器僅呈現邏輯流程，不連接真實區塊鏈。");
}
