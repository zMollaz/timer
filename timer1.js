const alarms = process.argv.slice(2);
for (let duration of alarms) {
  if (!Number(duration) || Number(duration) <= 0) {
    continue;
  } else {
    setTimeout(() => {
      process.stdout.write('Beep\n');
    }, duration * 1000);
  }
}