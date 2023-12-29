import { Link } from "react-router-dom";

function Button({ children, type, to, onClick }) {
  const base =
    "bg-indigo-900 text-slate-50 transition-all duration-300 drop-shadow-md";

  const styles = {
    primary:
      base + " px-6 py-3 text-lg font-medium rounded-full hover:-translate-y-2",
    secondary: base + " w-full px-2 py-2 rounded-lg hover:-translate-y-1",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
