# dogcatstar-job

建立一個電影數據庫的前端應用。可以使用TMDB（The Movie Database）的API，或是其他任何的電影API。

**專案基礎要求**

1. **搜尋電影**：應用程式需要一個搜尋欄位，讓用戶輸入並搜尋電影。搜尋結果應該以視覺友好的方式顯示
    1. Note：搜尋的API不能直接排序，因此搜尋結果頁面可以額外處理，另外也可以將單次API的回應內容做排序(Nice to have)
2. **電影詳情**：當用戶點擊某部電影時，他們應該能看到該電影的詳細資訊，包括演員陣容、劇情簡介、導演和評論等。
3. **電影進入待看清單**：用戶應該能夠收藏他們喜歡的電影。這可能需要使用到前端的狀態管理（如React的useState或Redux）來實現。
4. **響應式設計**：你的應用程式需要在不同大小的螢幕上看起來和運作良好。
5. **錯誤處理**：如果在任何時候向API發送請求時出現錯誤，你需要在UI中以友好的方式通知用戶。
6. **列出待看清單**：將使用者加入待看清單的電影列出，有排序功能即可
7. **Watch Lottery**: 基於這個待看清單，給使用者一個Lottery的UI (轉盤/ 滾軸 / 拉霸) 不限制型式，幫使用者亂數選出要從哪一步開始看。

設計準則:

1. 假設後端的資料狀態並不穩定(API有錯誤的機會) 選擇Design Pattern 能讓你對於處理系統在後端部分資料毀損的時候，仍能保持可用性。
2. 嘗試建立reusable 的Component ，並說明您的設計理由。
3. 請使用您知道的技術嘗試優化效能，衡量的治標可以是 FCP, LCP …etc, 也可以您另外常用的指標。
4. 打造一個良好DX 的開發環境，並且於會議中進行介紹。
5. 請將您認為重要的程式碼，加上測試的程式並且於會議中進行介紹。

Features 加分題:

1. 用Firebase 搭建基礎的Google 登入，
2. **分頁和排序**：如果API返回的結果太多，你需要實現分頁功能。此外，用戶也應該能夠按照上映日期、評分等標準對API返回的結果進行排序。
3. 記錄的To Watch List 可以記錄在Firebase上
    1. Note: To Watch List 不需要分頁

## How to develop?

`pnpm install && pnpm dev`

## How to deploy?

Push updated code to branch `main` and vercel CI/CD will be automatically triggered. Please visit [https://dogcatstar-job.vercel.app/](https://dogcatstar-job.vercel.app/) for the latest production code.
