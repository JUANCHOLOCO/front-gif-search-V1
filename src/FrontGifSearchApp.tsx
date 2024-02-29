import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

interface Props{
  id:string,
  title:string,
  url:string

}

export const FrontGifSearchApp = (props:Props) => {

    const [categories, setCategories] = useState<string[]>([props.title]);

    const onAddCategory = (newCategory:string) => {
        if (categories.includes(newCategory)) return;
        setCategories([ newCategory,...categories ]);
    };

  return (
    <>
      <h1>FrontGifSearchApp</h1>

      <AddCategory
        onNewCategory={onAddCategory}
      />
        {
            categories.map( (category) => (
                <GifGrid
                    key={category}
                    category={category}
                />
                )
            )
        }



    </>
  )
}
