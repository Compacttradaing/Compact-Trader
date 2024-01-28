function AuthBacground({ children }) {
  return (
    <div className="bg-[url('./images/backgroundPatern.png')] bg-indigo-900 bg-blend-multiply h-screen w-screen flex justify-center gap-20 items-center px-5 sm:px-40">
      {children}
    </div>
  );
}

export default AuthBacground;
