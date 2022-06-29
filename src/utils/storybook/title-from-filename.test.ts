import { titleFromFilename } from "./title-from-filename";

it("strips the 'src'-prefix", () =>{
    expect(titleFromFilename("src/test")).toEqual('test');
});

it("strips the stories.tsx extension", () =>{
    expect(titleFromFilename("src/test/file.stories.tsx")).toEqual('test/file');
});

it("strips index.stories.tsx completely", () =>{
    expect(titleFromFilename("src/test/index.stories.tsx")).toEqual('test');
});
