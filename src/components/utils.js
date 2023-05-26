const MAX = 10000000000;

export const performCPUIntensiveTask = () => {
  console.time("performCPUIntensiveTask: start");
  let result = 0;
  for (let i = 0; i < MAX; i++) {
    result += i;
  }
  console.timeEnd("performCPUIntensiveTask: end");
  return result;
};
