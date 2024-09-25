import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recipeList }) {
  // console.log(recipeList);

  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl  md:max-w-4xl sm:max-w-full">
        <Link href={"/"} className="no-underline bg-white ">
          <h2 className=" w-full sticky top-0 p-4 bg-gray-100 tracking-widest text-gray-500 text-center text-4xl font-bold mb-12 hover:text-red-500 hover:scale-105">
            Recipes
          </h2>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {recipeList && recipeList.length > 0
            ? recipeList.map((recipe) => (
                <Link
                  key={recipe.id}
                  href={`/recipe-list/${recipe.id}`}
                  className="no-underline"
                >
                  <Card className="h-full">
                    <CardContent className="bg-gray-200 h-full rounded-lg overflow-hidden shadow-lg cursor-pointer hover:bg-gray-300">
                      <div className="w-full aspect-w-16 aspect-h-8 ">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="h-full w-full"
                        />
                      </div>
                      <div className="p-6 flex-grow">
                        <h3 className=" text-lg font-bold text-gray-900">
                          {recipe.name}
                        </h3>
                        <div className="mt-4 flex items-center flex-wrap gap-2">
                          <p className="text-lg text-600">
                            Ratings:{recipe.rating}
                          </p>
                          <div className="ml-auto">
                            <p className="text-lg text-gray-600 font-bold ">
                              {recipe.cuisine}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
