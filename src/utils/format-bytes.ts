export function formatBytes(bytes: number) {
  const units = ['b', 'kb', 'mb', 'gb', 'tb']

  let value = bytes
  let unitIndex = 0

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024
    unitIndex++
  }

  return `${value.toFixed(1)}${units[unitIndex]}`
}
