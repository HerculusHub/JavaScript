// Jukebox Class
class Jukebox {

    constructor() {
        this.albums = [];
    }

    addAlbum(album) {
        this.albums.push(album);
    }

    favoriteAlbum() {

        let max = -1;
        let fav;

        for (let i = 0; i < this.albums.length; i++) {

            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }

        }

        return fav.display();
    }
}

// Album Class
class Album {

    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }

    play() {
        this.played++;
    }

    display() {
        return `${this.artist} : ${this.title}. Played ${this.played} times.`;
    }
}

// Create jukebox
const jbox = new Jukebox();

// Album array
const albumData = [
    {
        artist: "Operation Ivy",
        title: "Energy"
    },
    {
        artist: "Blink 182",
        title: "Dude Ranch"
    },
    {
        artist: "New Found Glory",
        title: "Sticks and Stones"
    }
];

// Get dropdown
const albumList = document.getElementById("albums");

// Create albums dynamically
albumData.forEach((item, index) => {

    const album = new Album(item.artist, item.title);

    jbox.addAlbum(album);

    const option = document.createElement("option");

    option.value = index;
    option.textContent = `${item.artist} - ${item.title}`;

    albumList.appendChild(option);

});

// Play button
document.getElementById("play").addEventListener("click", function() {

    const selectedIndex = albumList.value;

    jbox.albums[selectedIndex].play();

    document.getElementById("favoriteAlbum").textContent =
        jbox.albums[selectedIndex].display();

});

// Favorite album button
document.getElementById("favorite").addEventListener("click", function() {

    document.getElementById("favoriteAlbum").textContent = jbox.favoriteAlbum();

});