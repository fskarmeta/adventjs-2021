const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta", // <- ¡Está aquí!
    },
  },
};



function contains(store, product) {
  for (let key in store) {
    if (typeof store[key] === "object") {
      if (contains(store[key], product)) {
        return true;
      }
    } else if (store[key] === product) {
      return true;
    }
  }
  return false;
}

console.log(contains(almacen, "camiseta")); // true