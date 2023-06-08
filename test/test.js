const galleryname = "Exhibition: Munch Surrealism"

const divide = galleryname.split(": ");
const artist = divide[1].split(" ")[0]
const theme = divide[1].split(" ")[1]
console.log(artist)
console.log(theme)