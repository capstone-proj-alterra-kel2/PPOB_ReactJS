import { Link, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import "./breadcrumbs.css";

// export function Breadcrumbs() {
//   const breadcrumbs = useBreadcrumbs(routes);
//   const location = useLocation();

//   return (
//     <nav>
//       {breadcrumbs.map(({ match, breadcrumb }) => (
//         <Link
//           key={match.url}
//           to={match.url}
//           className={
//             match.pathname === location.pathname
//               ? "breadcrumb-active"
//               : "breadcrumb-not-active"
//           }
//         >
//           {breadcrumb} /
//         </Link>
//       ))}
//     </nav>
//   );
// }

// Sub Menu Sidebar
export function BreadcrumbUser() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/users"
        className={
          location.pathname === "/users"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Pengguna
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
    </nav>
  );
}

export function BreadcrumbAdmin() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/admins"
        className={
          location.pathname === "/admins"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Admin
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
    </nav>
  );
}

export function BreadcrumbTransaction() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/transactions"
        className={
          location.pathname === "/transactions"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Riwayat
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
    </nav>
  );
}

export function BreadcrumbProduts() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/products"
        className={
          location.pathname === "/products"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Produk
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
    </nav>
  );
}

// Product Menu
export function BreadcrumbPulsa() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/products"
        className={
          location.pathname === "/products"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Products
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>

      <Link
        to="/products/pulsa"
        className={
          location.pathname === "/products/pulsa"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Pulsa
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
    </nav>
  );
}

export function BreadcrumbTelkomsel() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/products"
        className={
          location.pathname === "/products"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Products
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>

      <Link
        to="/products/pulsa"
        className={
          location.pathname === "/products/pulsa"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Pulsa
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        to="/products/pulsa/telkomsel"
        className={
          location.pathname === "/products/pulsa/telkomsel"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Telkomsel
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
    </nav>
  );
}

// end product menu
