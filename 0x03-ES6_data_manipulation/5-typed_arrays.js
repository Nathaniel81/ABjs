export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);

  if (position >= 0 && position < length) {
    // int8Array[position] = value;
    int8Array.setInt8(position, value);
  } else {
    throw new Error('Position outside range');
  }

  return new DataView(int8Array);
}