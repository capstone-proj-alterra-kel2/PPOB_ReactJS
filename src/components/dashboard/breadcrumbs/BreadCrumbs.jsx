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
        to="/dashboard/users"
        className={
          location.pathname === "/dashboard/users"
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
        to="/dashboard/admins"
        className={
          location.pathname === "/dashboard/admins"
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
        to="/dashboard/transactions"
        className={
          location.pathname === "/dashboard/transactions"
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
        to="/dashboard/products"
        className={
          location.pathname === "/dashboard/products"
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
        to="/dashboard/products"
        className={
          location.pathname === "/dashboard/products"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Products
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>

      <Link
        to="/dashboard/products/pulsa"
        className={
          location.pathname === "/dashboard/products/pulsa"
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
        to="/dashboard/products"
        className={
          location.pathname === "/dashboard/products"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Products
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>

      <Link
        to="/dashboard/products/pulsa"
        className={
          location.pathname === "/dashboard/products/pulsa"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Pulsa
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        to="/dashboard/products/pulsa/telkomsel"
        className={
          location.pathname === "/dashboard/products/pulsa/telkomsel"
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
