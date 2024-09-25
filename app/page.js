import Link from "next/link";

export default function Home() {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1>Welcome to Recipe App</h1>
      <Link href={"/recipe-list"} className="btn btn-primary">
        Explore Recipes
      </Link>
    </div>
  );
}
