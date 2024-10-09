# bookreads

## Description
bookreads is a full-stack bookstore application that allows users to upload, edit, and manage books in a database. It provides a RESTful API for performing CRUD (Create, Read, Update, Delete) operations on books stored in a MongoDB collection.

## Features
- Upload new books to the database.
- Retrieve a list of all books or filter by category.
- Update existing book details.
- Delete books from the database.
- Retrieve details of a single book by its ID.

## Technologies Used
- **Frontend**: React (to be deployed separately)
- **Backend**: Node.js, Express
- **Database**: MongoDB (using MongoDB Atlas)
- **Other**: Cors for cross-origin resource sharing

## API Endpoints

### 1. **Upload a Book**
   - **URL**: `/upload-book`
   - **Method**: `POST`
   - **Description**: Inserts a new book document into the `books` collection.
   - **Body Parameters**:
     - `title`: Title of the book.
     - `author`: Author of the book.
     - `category`: Category of the book.
     - `description`: Short description of the book.
     - Any other book metadata you need.

### 2. **Get All Books**
   - **URL**: `/all-books`
   - **Method**: `GET`
   - **Description**: Fetches all the books or books by category.
   - **Query Parameters**:
     - `category`: Filters books by category (optional).

### 3. **Get a Single Book**
   - **URL**: `/book/:id`
   - **Method**: `GET`
   - **Description**: Fetches the details of a single book by its ID.

### 4. **Update a Book**
   - **URL**: `/book/:id`
   - **Method**: `PATCH`
   - **Description**: Updates the information of a book by its ID.
   - **Body Parameters**: Fields to be updated.

### 5. **Delete a Book**
   - **URL**: `/book/:id`
   - **Method**: `DELETE`
   - **Description**: Deletes a book from the collection by its ID.
