import RecipeDetailsItems from "@/components/recipe-details";

async function fetchRecipeDetails(RecipeId) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${RecipeId}`
    );
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function RecipeDetails({ params }) {
  const id = params?.details;

  const getRecipeDetails = await fetchRecipeDetails(id);

  return (
    <div>
      <RecipeDetailsItems getRecipeDetails={getRecipeDetails} />
    </div>
  );
}
