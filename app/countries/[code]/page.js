function formatLanguage(languages) {
  if (!languages) return "Not available";
  return Object.values(languages).join(", ");
}

function formatCurrencies(currencies) {
  if (!currencies) return "Not available";

  return Object.values(currencies)
    .map((currency) =>
      currency.symbol ? `${currency.name} (${currency.symbol})` : currency.name,
    )
    .join(", ");
}

export async function generateMetadata({ params }) {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${params.code}`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      return { title: "Country Details | World Explorer" };
    }

    const data = await res.json();
    const country = data[0];

    return {
      title: `${country.name.common} | World Explorer`,
      description: `Details about ${country.name.common}`,
    };
  } catch {
    return { title: "Country Details | World Explorer" };
  }
}
