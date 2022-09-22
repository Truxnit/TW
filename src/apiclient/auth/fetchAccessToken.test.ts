import { mockApiForJest } from "src/utils/tests/mock-api-for-tests";
import { fetchAccessTokenMock } from "src/apiclient/auth/fetchAccessToken.mock";
import { mockTestPlayerAccessToken } from "src/utils/development/mock-api/mockAccessToken";
import { fetchAccessToken } from "src/apiclient/auth/fetchAccessToken";

mockApiForJest(fetchAccessTokenMock());
describe("fetch access token", () => {
  it("returns the access_token on successful login", async () => {
    const token = await fetchAccessToken("testPlayer", "testpass10");
    expect(token.accessToken).toEqual(mockTestPlayerAccessToken);
  });

  it("throws an error if the backend returns a non-200 response code", async () => {
    const responsePromise = fetchAccessToken("testPlayer", "wrong password");
    await expect(responsePromise).rejects.toThrow(
      "Request failed with status code 401"
    );
  });
});
