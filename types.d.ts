declare namespace jest {
  interface Matchers<R, T> {
    toMatchImageSnapshot(options?: import('jest-image-snapshot').MatchImageSnapshotOptions): R;
  }
}