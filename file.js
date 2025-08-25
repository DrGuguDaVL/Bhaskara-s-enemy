function solveQuadratic(a, b, c) {
  // Calculate the discriminant
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    // Two distinct real roots
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return { type: "real_distinct", roots: [root1, root2] };
  } else if (discriminant === 0) {
    // One repeated real root
    const root = -b / (2 * a);
    return { type: "real_equal", roots: [root] };
  } else {
    // Complex roots
    const realPart = -b / (2 * a);
    const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
    return {
      type: "complex",
      roots: [`${realPart} + ${imaginaryPart}i`, `${realPart} - ${imaginaryPart}i`],
    };
  }
}