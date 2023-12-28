import { Link } from "react-router-dom";

function Button({children, type, to}) {
   const base = "bg-indigo-900 text-slate-50 transition-all duration-3000 hover:-translate-y-2 drop-shadow-md";

   const styles = {
      primary: base + " px-6 py-3 text-lg font-medium rounded-full"
   }

   if(to) return <Link to={to} className={styles[type]}>{children}</Link>

   return (
      
      <button className={styles[type]}>{children}</button>
      
   )
}

export default Button
