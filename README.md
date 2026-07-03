# 飛躍羽球團隊網站

這是一個可直接部署到 GitHub Pages 的靜態網站，不需要 Node.js、npm 或 build 指令。

## 檔案說明

- `index.html`：網站主頁與區塊結構。
- `styles.css`：網站樣式與響應式排版。
- `data.js`：所有可替換內容，包含 LINE、Google 表單、教練、價格、地點、優惠、影片與開團資訊。
- `main.js`：把 `data.js` 的資料渲染到頁面。

## 修改內容

大多數文字與連結都在 `data.js`。

請優先替換這些欄位：

```js
links: {
  line: "https://line.me/R/ti/p/@your-line-id",
  googleForm: "https://forms.gle/your-google-form-id",
  instagram: "https://www.instagram.com/your_account"
}
```

也建議替換：

- `coaches`：教練姓名、職稱、資歷、照片。
- `pricing`：課程名稱、價格、內容。
- `locations`：場館名稱、地址、可約時段。
- `promotions`：優惠活動。
- `sessions`：近期開團資訊。
- `trainingVideos`、`archiveVideos`：教學影片與過往影片連結。
- `contact`：LINE ID、Email、Instagram。

`partners` 欄位已保留給未來合作團隊使用，目前頁面不會顯示。

## 本機預覽

直接用瀏覽器開啟 `index.html` 即可。

## GitHub Pages 部署

建議 repo 名稱：`badminton-team-site`

### 方法一：使用 GitHub 網頁上傳

1. 到 GitHub 建立新的 public repository，名稱可用 `badminton-team-site`。
2. 上傳這些檔案到 repo 根目錄：
   - `index.html`
   - `styles.css`
   - `data.js`
   - `main.js`
   - `README.md`
3. 進入 repo 的 `Settings`。
4. 點選 `Pages`。
5. Source 選 `Deploy from a branch`。
6. Branch 選 `main`，資料夾選 `/root`。
7. 儲存後等待 GitHub Pages 產生網址。

### 方法二：使用 Git

目前此環境偵測不到 `git` 指令。安裝 Git 並登入 GitHub 後，可在此資料夾執行：

```bash
git init
git add .
git commit -m "Create badminton team website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/badminton-team-site.git
git push -u origin main
```

推上 GitHub 後，再依照方法一的 Pages 設定啟用網站。
