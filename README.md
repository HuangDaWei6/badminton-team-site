# 羽翼網站

羽翼是經營羽球與匹克球課程的教學團隊。這個網站是團隊的官方介紹頁，用來整理課程方向、教練資訊、近期開團、教學影片、過往活動紀錄與報名入口。

網站連結：https://huangdawei6.github.io/badminton-team-site/

## 網站內容

- 首頁封面：以羽球與匹克球為主題，呈現羽翼的品牌識別與標語。
- 羽球 / 匹克球分流：說明兩種課程的訓練方向，讓學員依照需求選擇。
- 教練資訊：展示羽翼教練團照片、職稱與教學資歷。
- 課程與費用：整理個人課、團體課、匹克球體驗等方案。
- 近期開團：列出目前可報名或可諮詢的課程。
- 教球影片：放置 Instagram 上的教學與訓練片段。
- 過往影片：整理活動紀錄、練打精華與教練精華。
- 聯絡方式：提供 LINE、Google 表單、Instagram 與 Facebook 入口。

## 社群連結

- Instagram：https://www.instagram.com/wings_badminton_hub/
- Facebook：https://www.facebook.com/p/%E7%BE%BD%E7%BF%BC%E7%BE%BD%E7%90%83-61584314604572/

## 技術說明

這是一個可直接部署到 GitHub Pages 的靜態網站，不需要 Node.js、npm 或 build 指令。

- `index.html`：網站主頁與區塊結構。
- `styles.css`：網站樣式、響應式排版與封面視覺。
- `data.js`：網站主要內容，包含連結、課程、教練、影片、開團資訊與聯絡資訊。
- `main.js`：將 `data.js` 的資料渲染到頁面。
- `assets/`：Logo、封面圖、教練照片與影片封面。

## 更新方式

大多數網站文字、連結與列表內容都集中在 `data.js`。更新課程、教練、影片或社群連結時，通常只需要修改這個檔案；如果要調整版面或視覺樣式，再修改 `styles.css`。

本機預覽時可以直接用瀏覽器開啟 `index.html`。

## 部署

網站透過 GitHub Pages 從 `main` branch 部署。修改完成後，將必要檔案 commit 並 push 到 GitHub，Pages 通常會在數分鐘內更新。
