import { performCPUIntensiveTask } from "./utils";

onmessage = (e) => {
  const { data } = e;
  console.log("Message received from main script", data);
  console.time("inworker");
  const result = performCPUIntensiveTask();
  console.log("Posting message back to main script", result);
  console.timeEnd("inworker");
  postMessage(result);
};
