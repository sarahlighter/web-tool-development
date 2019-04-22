const spawn = require("child_process").spawn; 
const platform = require("os").platform(); 
const isWindows = /^win/.test(platform); 
if(!isWindows) {
    spawn('chmod', ['+x', '/bin/mkdirAndCopy.sh']); 
} 
const cmd = isWindows ? 
      `${process.cwd()}\\bin\\mkdirAndCopy.bat` :   
        `${process.cwd()}/bin/mkdirAndCopy.sh`; 

spawn(cmd, [], { stdio: "inherit" }).on("exit", code => process.exit(code));

// cross platform mkdir and copy