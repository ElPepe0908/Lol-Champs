// import { useEffect, useState, useRef } from "react";
// import { ChampCardWithHover } from "../screens/HomeScreen";
// import { Datum } from "../interfaces/NewChampsListResponse";

// export const LazyChamps = ({
//   champs,
//   champSplash,
//   isFetching,
// }: {
//   champs: Datum;
//   champSplash: string;
//   isFetching: boolean;
// }) => {
//   const [show, setShow] = useState(false);
//   const elementRef = useRef();

//   useEffect(() => {
//     const onChange = (entries: any) => {
//       const el = entries[0];
//       console.log("el", el);
//     };

//     const observer = new IntersectionObserver(onChange, {
//       rootMargin: "0px",
//     });

//     observer.observe(elementRef.current as unknown as Element);
//   });

//   return show ? (
//     <ChampCardWithHover
//       ref={elementRef}
//       champ={champs}
//       champSplash={champSplash}
//       isFetching={isFetching}
//     />
//   ) : null;
// };
export const pepita = () => {};
