// This tells typescript to treat all `.mp4' files  as modules that have the default export of a string. 
declare module '*.mp4' {
  const src1: string;
  export default src1;
}

// This tells typescript to treat all `.png' files  as modules that have the default export of a string. 
declare module '*.png' {
    const src2: string,
    export default src2;
}