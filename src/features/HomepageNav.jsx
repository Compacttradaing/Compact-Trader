import { Link } from "react-router-dom"

function HomepageNav() {
   return (
      
         <nav className="flex items-center justify-between mt-5">
            <h1 className="text-xl font-bold text-slate-900">Compact</h1>
            <nav>
               <ul className="flex items-center justify-center gap-2">
                  <li className="text-sm text-slate-500 font-medium"><Link to="/login">Sign in</Link></li>
                  <li className="text-sm font-medium text-slate-500"><Link to="/register">Get started</Link></li>
               </ul>
            </nav>
         </nav>
      
   )
}

export default HomepageNav
