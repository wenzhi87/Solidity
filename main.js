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
