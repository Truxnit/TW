import { mockApiForJest } from "src/utils/tests/mock-api-for-tests";
import { sendRefreshToken } from "src/apiclient/auth/sendRefreshToken";
import {
  mockExpiredRefreshToken,
  mockTestPlayerRefreshToken,
} from "src/utils/development/mock-api/mockAccessToken";
import { sendRefreshTokenMock } from "src/apiclient/auth/sendRefreshToken.mock";

mockApiForJest(sendRefreshTokenMock());
describe("send refresh token", () => {
  it("returns new access token", async () => {
    const accessToken = await sendRefreshToken(mockTestPlayerRefreshToken);
    expect(accessToken).not.toBeNull();
  });

  it("throws an error if no refresh token exist", async () => {
    const responsePromise = sendRefreshToken("");
    await expect(responsePromise).rejects.toThrow(
      "Request failed with status code 401"
    );
  });
  it("returns null if the refresh token is expired", async () => {
    const responsePromise = await sendRefreshToken(mockExpiredRefreshToken);
    expect(responsePromise).toBeNull(); //.rejects.toThrow();
  });
});
