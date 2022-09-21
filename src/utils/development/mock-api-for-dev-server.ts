/* istanbul ignore file reason: No production code, difficult to test with jest */
import { setupWorker } from "msw";
import { mockApiHandlers } from "src/utils/development/mock-api";

export async function setupMockApiForDevServer(): Promise<void> {
  const worker = setupWorker(...mockApiHandlers());
  await worker.start();
}
