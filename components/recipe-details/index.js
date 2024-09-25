import Link from "next/link";

export default function RecipeDetailsItems({ getRecipeDetails }) {
  return (
    <div>
      <Link
        href={"/recipe-list"}
        className="block w-25 text-center fw-bolder no-underline mt-20 p-2 ml-20  bg-green-300 rounded-lg"
      >
        Go to recipe list
      </Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2 ">
            <img
              src={getRecipeDetails?.image}
              alt={getRecipeDetails.name}
              className="w-4/5 rounded object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-950">
              {getRecipeDetails?.name}
            </h2>
            <div className="gap-4 mt-4">
              <p className="text-2xl text-gray-700">
                {getRecipeDetails?.mealType[0]}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-xl text-gray-800">
                {getRecipeDetails?.cuisine}
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
              <ul className="space-y-3 list-disc mt-3 pl-4 text-sm text-gray-700">
                {getRecipeDetails?.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
