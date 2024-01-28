import { Link } from "react-router-dom"

function AuthHeader({children}) {
   return (
      <div className="mb-8">
          <Link to="/" className="text-[32px] font-semibold text-indigo-900">Compact</Link>
          <p className="text-sm text-slate-500">{children}</p>
        </div>
   )
}

export default AuthHeader
