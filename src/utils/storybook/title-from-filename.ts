export function titleFromFilename(storyFilename: string): string {
    
    return storyFilename
    .replace(/^src\//, "")
    .replace(/\.stories\..*$/, "")
    .replace(/\/index$/, "");
}