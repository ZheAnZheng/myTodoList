# myTodoList

## 主要學習的是使用VUE 與 Boostrap以及json server以及Git的搭配開發。

```
進行這一個todolist開發的原因是，剛學習Vue的使用方式，以及之前有學習boostrap的經驗，
剛好也可以利用json server當資料庫 ，git做版本控制，來實際操作看看。
```
![主畫面](https://user-images.githubusercontent.com/90257304/137928485-63637388-3363-4e92-a7d3-a539a1ccdbcf.png)

# 主要功能
> 1. 顯示任務列表
> 2. 新增任務
> 3. 顯示個任務詳細資訊
> 3. 刪除任務
> 4. 至頂任務(優先)
> 5. 顯示至頂任務
> 5. 查看完成的任務
> 6. 復原完成任務

## JSON Server:
創建json並分成兩個資料庫 完成的任務 以及 未完成的任務，再用json-server就能夠建立能夠即時互動資料庫。

# 切換完成與未完成的todo :
利用Vue-router做出不同router的SPA網頁
![狀態列表](https://user-images.githubusercontent.com/90257304/137930111-0a1b8fe3-9dd8-4ab8-98b6-d1276b8c2d2d.png)

# 新增任務:
建立任務後會串接Json Server將資料放到未完成的資料庫就可以保存起來了。
![建立任務](https://user-images.githubusercontent.com/90257304/137931561-f9da76d5-a95a-4b19-8a49-963a4e0ace46.png)

# 將鼠標移動到任務上出現 優先 完成 刪除功能:
- 優先:利用任務的至頂屬性判斷是否至頂，至頂後優先按鈕會轉成取消至頂的功能。
- 完成:串接Json Server將資料傳到完成任務的資料庫。
- 刪除功能:串接Json Server將資料刪除。
![任務功能](https://user-images.githubusercontent.com/90257304/137933156-bf3c0e1e-16da-4bc9-bbf0-fb9af31a0221.png)

# 完成任務列表
![完成任務頁](https://user-images.githubusercontent.com/90257304/137936065-99d9fd08-f7b2-4d7f-9002-a616c28b0d86.png)

# RWD效果
![RWD](https://user-images.githubusercontent.com/90257304/137937354-4eaa67ec-91b0-4081-a124-16414d9ee7d1.png)







