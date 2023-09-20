import SigninForm from "./SigninForm";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white max-w-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 px-6 py-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Sign Up
        </h1>
        <SigninForm />
      </div>
    </div>
  );
}
