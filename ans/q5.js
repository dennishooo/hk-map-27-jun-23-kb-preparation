const data = {
  routes: [
    {
      overnightRoute: 0,
      routeId: "2",
      routeName_c: "大澳 > 梅窩碼頭",
      routeName_e: "Tai O > Mui Wo Ferry Pier",
      routeName_s: "大澳 > 梅窝码头",
      routeNo: "1",
      specialRoute: 0,
    },
    {
      overnightRoute: 0,
      routeId: "1",
      routeName_c: "梅窩碼頭 > 大澳",
      routeName_e: "Mui Wo Ferry Pier > Tai O",
      routeName_s: "梅窝码头 > 大澳",
      routeNo: "1",
      specialRoute: 0,
    },
    {
      overnightRoute: 0,
      routeId: "3",
      routeName_c: "紅磡 (紅鸞道)  > 昂坪",
      routeName_e: "Hung Hom (Hung Luen Road)  > Ngong Ping",
      routeName_s: "红磡 (红鸾道)  > 昂坪",
      routeNo: "1R",
      specialRoute: 0,
    },
  ],
};
let routes = data.routes;
console.log(routes.length);
let newRoutes = routes.map((route) => {
  return { routeNo: route.routeNo, routeName_c: route.routeName_c };
});

console.log(newRoutes);

// s, e, c
function extractRoutesName(data, language) {
  return data.map((route) => {
    let key = Object.keys(route).find((key) =>
      key.endsWith(`Name_${language}`)
    );
    return { id: route.routeId, terminal: route[key] };
  });
}

console.log(extractRoutesName(routes, "e"));
console.log(extractRoutesName(routes, "c"));
