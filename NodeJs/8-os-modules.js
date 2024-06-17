const os = require("os");

// Get the current user info
const user = os.userInfo();
console.log(user);

// Get the system uptime
const uptime = os.uptime();
console.log(uptime + " seconds");

// Get the system info

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
