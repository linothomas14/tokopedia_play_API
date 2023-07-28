# Mid Term Gigih Backend Project

Hello everyone👋,

I created an Tokopedia Play API (Backend) for my **GoTo Impact Foundation** mid term assignment. In this project i use **Express JS** and **MongoDB** for the Database. I created readme file for flow API process, Database Schema, and how to run this project. 

## Database Schema
Database: `tokopedia_play_db`

Colletions:
1. `videos` : This collection will store information about each video data.

    document structure
    
    ### Videos Object
    ```
    {
        _id: <ObjectID>,
        title: string,
        thumbnail_url: string
        video_url: string,
        createdAt: Date,
        updatedAt: Date
    }
    ```

2. `products` : This collection will store information about each product data.

    document structure
    
    ### Products Object
    ```
    {
        _id: <ObjectID>,
        title: string,
        product_url: string,
        price: Number,
        video_id: <ObjectID>,
        createdAt: Date,
        updatedAt: Date        
    }
    ```

3. `comments` : This collection will store information about each comment data.

    document structure
    
    **#Comments Object**
    ```
    {
        _id: <ObjectID>,
        username: string,
        comment: string,
        video_id: string,
        createdAt: Date,
        updatedAt: Date
    }
    ```

## API Structure
Flow from request to get response.
### Videos
---
**POST /videos**
```
request -> routes -> controller [create()] -> services [create()] -> repository [create()] -> response
```
**GET /videos**
```
request -> routes -> controller [findAll()] -> services [findAll()] -> repository [findAll()] -> response
```
**GET /videos/:id**
```
request -> routes -> controller [findById()] -> services [findById()] -> repository [findById()] -> response
```

### Products
---
**POST /products**
```
request -> routes -> controller [create()] -> services [create()] -> repository [create()] -> response
```
**GET /products/:id**
```
request -> routes -> controller [findById()] -> services [findById()] -> repository [findById()] -> response
```
**GET /videos/:video_id/products**
```
request -> routes -> controller [findByVideoId()] -> services [findByVideoId()] -> repository [findByVideoId()] -> response
```

### Comments
---
**POST /comments**
```
request -> routes -> controller [create()] -> services [create()] -> repository [create()] -> response
```
**POST /comments/:id**
```
request -> routes -> controller [findById()] -> services [findById()] -> repository [findById()] -> response
```
**GET /videos/:video_id/comments**
```
request -> routes -> controller [findByVideoId()] -> services [findByVideoId()] -> repository [findByVideoId()] -> response
```

## List API Request Response
### Videos
#### **POST /videos**
---
Create a new video and return the new object
* **URL Params**
    
    None
* **Headers**
  
    Content-Type: application/json
* **Body**
```json
{
    "title" : "string",
    "video_url" : "string",
    "thumbnail_url" : "string"
}
```
* **Success Response**
    - Code: 201 (CREATED)
    - Content:
```json
{
    "title": "string",
    "video_url": "string",
    "thumbnail_url": "string",
    "_id": <ObjectID>,
    "createdAt": "Date",
    "updatedAt": "Date",
}
```

#### **GET /videos**
---
Returns all videos in the system.

* **URL Params**
    
    None
* **Headers**
  
    Content-Type: application/json
* **Body**

    None
* **Success Response**
    - Code: 200 (OK)
    - Content:
```json
[
    {...},
    {...},
    {
        "title": "string",
        "video_url": "string",
        "thumbnail_url": "string",
        "_id": <ObjectID>,
        "createdAt": "Date",
        "updatedAt": "Date",
    },
]
```
#### **GET /videos/:id**
---
Returns the specified videos.

* **URL Params**
    
    *Required:* `id=[integer]`
* **Headers**
  
    Content-Type: application/json
* **Body**

    None
* **Success Response**
    - Code: 200 (OK)
    - Content:
```json
{
    "title": "string",
    "video_url": "string",
    "thumbnail_url": "string",
    "_id": <ObjectID>,
    "createdAt": "Date",
    "updatedAt": "Date",
}
```
* **Error Response**
    - Code: 404 (NOT FOUND)
    - Content: 
    ```json
    { "error": "video with id : <id> not found" }
    ```

### Products
#### **POST /products**
--- 
Create a new product and return the new object
* **URL Params**
    
    None
* **Headers**
  
    Content-Type: application/json
* **Body**
```json
{
  "title": "string",
  "product_url": "string",
  "price": Number,
  "video_id": <ObjectID>
}
```
* **Success Response**
    - Code: 201 (CREATED)
    - Content:
```json
{
    "_id": <ObjectID>,
    "title": "string",
    "product_url": "string",
    "price": Number,
    "video_id": <ObjectID>,
    "createdAt": "Date",
    "updatedAt": "Date",
}
```
#### **GET /videos/:id/products**
---
Returns the specified product by video id params.

* **URL Params**
    
    *Required:* `video_id=[integer]`
* **Headers**
  
    Content-Type: application/json
* **Body**

    None
* **Success Response**
    - Code: 200 (OK)
    - Content:
```json
    {
        "_id": <ObjectID>,
        "title": "string",
        "product_url": "string",
        "price": Number,
        "video_id": <ObjectID>,
        "createdAt": Date,
        "updatedAt": Date,
        "__v": 0
    },
```
* **Error Response**
    - Code: 404 (NOT FOUND)
    - Content: `{ error: "can't find the video id" }`


### Comments
#### **POST /comments**
---
Create a new comments and return the new object
* **URL Params**
    
    None
* **Headers**
  
    Content-Type: application/json
* **Body**
```json
{
    "username": "string",
    "comment": "string"
}
```
* **Success Response**
    - Code: 201 (CREATED)
    - Content:
```json
{
    "status": "success"
}
```
* **Error Response**
    - Code: 400 (NOT FOUND)
    - Content: 
    ```json
    { "status": "error"}
    ```



**GET /videos/:id/comments**
---
Returns the specified comment by video id params.

* **URL Params**
    
    *Required:* `video_id=[integer]`
* **Headers**
  
    Content-Type: application/json
* **Body**

    None
* **Success Response**
    - Code: 200 (OK)
    - Content:
```json
[
    {...},
    {...},
    {
        "_id": <ObjectID>,
        "username": "string",
        "comment": "string",
        "video_id": <ObjectID>,
        "createdAt": Date,
        "updatedAt": Date,
    },
]
```
* **Error Response**
    - Code: 404 (NOT FOUND)
    - Content: `{ error: "can't find the video id" }`

## How to Run the Server
To run this server API, you have to follow instruction below:

1. **Clone this github**, run this command line: `git clone https://github.com/linothomas14/tokopedia_play_API.git`
2. **Open your code editor** and accessing the project folder.
3. **Install dependencies** on project by running this command line: `npm install`. Make sure you are running in exact same folder project.
4. Check your **mongodb compass or mongodb shell**, you can check is it your database doing well or not.
5. If you're using **mongodb shell just run** `mongosh` in the terminal to check. If you're using **mongodb compass**, you can **run the app** and connect into the database.
6. Back to the **project folder** and **rename .env-examples** file into **.env** and do the instruction inside the file for configuration MongoDB connection Host.
7. Now you can **run the server** by following this command line: `npm run dev`.
8. After make sure the server not getting any error, **open Postman or other app** to test the API.
9. **If you are using Postman**, you can import the *tokopedia-play-api.postman_collection.json* file on postman.
10. Configure the request to test if you are **not using Postman**, if you are **using postman**, you can jump into next step.
11. Finally, you can **test the API** by hit the request as much as you want.