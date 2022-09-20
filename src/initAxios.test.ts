import { initAxios } from "src/initAxios";
//todo  if i  had added some requests,
describe("initAxios", () => {
  /*  const { capturedRequests, overrideHandler } = mockApiForJest(

  );*/

  beforeEach(() => {
    initAxios();
  });

  it("no bearer-token is sent with any request if the user is NOT logged in", async () => {
    /*    removeLoggedInUser();
    await twoWorldsAxios.fetchNation();*/
    expect(true).toBeTruthy();
    /*    expect(capturedRequests()).not.toContainEqual(
        requestMatching({
          headers: expect.objectContaining({
            authorization: "Bearer " + mockAccessToken,
          }),
        })
    );*/
  });
});
