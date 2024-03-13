import {type Product} from "@/types";

export function Products({products}: {products: Product[]}) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {products.map(({id, thumbnail, title, price, permalink, currency_id: currencyId}) => (
        <li key={id}>
          <a
            href={permalink}
            rel="noopener noreferrer"
            target="blank"
            title="Ir a la pagina de Mercado Libre para el producto {title}"
          >
            <img alt={title} src={thumbnail} />
            <h3>{title}</h3>
            <strong>
              {price.toLocaleString("es-AR", {
                currency: currencyId,
                style: "currency",
              })}
            </strong>
          </a>
        </li>
      ))}
    </ul>
  );
}
