import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="mt-[148px] h-[80vh] flex flex-col justify-center">
      <h1 className="text-2xl">
        <span className="text-brand-baseGreen">Oops!</span>, You're Lost.
      </h1>
      <p className="text-sm text-brand-gray mb-8">
        The page you are looking for doesn't exist. Please go back home.
      </p>
      <Link to="/">
        <button className="btn">Return to Home</button>
      </Link>
    </div>
  );
}

export default ErrorPage;
