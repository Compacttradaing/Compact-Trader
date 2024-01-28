function AuthHeader({children}) {
   return (
      <div className="mb-8">
          <h1 className="text-[32px] font-semibold text-indigo-900">Compact</h1>
          <p className="text-sm text-slate-500">{children}</p>
        </div>
   )
}

export default AuthHeader
