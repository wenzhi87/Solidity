// main.js

// 教學步驟資料
window.startTutorial = startTutorial;
window.showNextStep = showNextStep;
window.compileContract = compileContract;
window.deployContract = deployContract;
window.callSetFunction = callSetFunction;
window.explainValidation = explainValidation;
const tutorialSteps = [
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

// 以下為合約模擬相關函式
function compileContract() {
  const code = document.getElementById("contractEditor").value;
  if (code.includes("contract") && code.includes("setMessage")) {
    logMessage("✅ 合約語法檢查通過。");
  } else {
    logMessage("❌ 合約格式錯誤，請檢查語法與函式。範例需含 setMessage。");
  }
}

function deployContract() {
  logMessage("🚀 合約已部署成功（模擬）。");
}

function callSetFunction() {
  const msg = document.getElementById("inputMessage").value.trim();
  if (msg) {
    logMessage(`📝 呼叫 setMessage("${msg}") 成功（模擬）。`);
  } else {
    logMessage("⚠️ 請先輸入訊息再呼叫 setMessage()。");
  }
}

function explainValidation() {
  logMessage("📘 區塊鏈驗證：每筆交易需經礦工驗證與共識機制確認後才可上鏈。");
}
