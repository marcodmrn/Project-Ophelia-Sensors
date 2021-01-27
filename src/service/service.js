export function getCarsData() {
  return fetch("https://jsonkeeper.com/b/0K8O").then((res) => res.json());
}
