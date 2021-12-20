function contarOvejas(ovejas) {
  return ovejas.filter(
    (o) => o.color === "rojo" && /(?=.*a)(?=.*n)/i.test(o.name)
  );
}
