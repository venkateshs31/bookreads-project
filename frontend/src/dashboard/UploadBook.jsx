import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";

const UploadBook = () => {
  const bookCategories = [
    "Fantasy",
    "Comics",
    "Horror",
    "Biography",
    "Art",
    "Business",
    "Romance",
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Mystery",
    "Self-Help",
    "Health",
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }
  // handle book submission 
  
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const Category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    
    const bookObj = {
      bookTitle, authorName, imageURL, Category, bookDescription, bookPDFURL 
    }
    console.log(bookObj)
  
  // send to database
  fetch("http://localhost:7000/upload-book", {
    method: "POST",
    headers:{
      "Content-type": "application/json",
    },
    body: JSON.stringify(bookObj)
  }).then(res => res.json()).then(data => {
  //   // console.log(data)
    alert("Book Uploaded Successfully")
    form.reset();
  })
}

  return (
    <div className='px-4 my-12'>
     <h2 className='mb-8 text-3xl font-bold'>Upload Book</h2> 

     <form onSubmit={handleBookSubmit} className="flex lg:w-[1024px] flex-col flex-wrap gap-4">
      <div className="flex gap-8">
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name="bookTitle" placeholder="Book Name" required type="text" />
      </div>

      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>

        <TextInput id="authorName" name="authorName" placeholder="Author Name" type="text" required />
      </div>
      </div>

      {/* second row */}
      <div className="flex gap-8">
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>

        <TextInput id="imageURL" type="imageURL" placeholder="Book Image URL" required />
      </div>

      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book category" />
        </div>

        <Select id="inputState" name="category" className="w-full rounded" value={selectedBookCategory} onChange={handleChangeSelectedValue}>
        {
          bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
        }
        </Select>
      </div>
      </div>
      
      {/* third row */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description">
          </Label>
        </div>
        <Textarea id="bookDescription" name="bookDescription" rows={6} placeholder="Write Your Book Description" className="w-full" required></Textarea>
      </div>

      {/* pdf url */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>

        <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="Book pdf URL" required />
      </div> 

        <Button className="mt-5" type="submit"> 
          Upload Book
        </Button>
      

    </form>
    </div>
  )
}

export default UploadBook