import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" min-vh-100 d-flex flex-column text-center justify-content-center align-items-center">
      <h1>This Page does not exist</h1>
      <Link href="/" className="btn btn-primary  mt-5">
        Go back to home-page
      </Link>
    </div>
  );
}
