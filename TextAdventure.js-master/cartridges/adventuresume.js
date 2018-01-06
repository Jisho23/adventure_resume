// === Game Data ===
var gameData = {
  commandCounter: 0,
  gameOver: false,
  introText:
    "Welcome to Joshua Denenberg's interactive resume! If you are here, it means you are considering higher a new web developer, and I hope you will find I am enthusiastic and knowledgable.",
  outroText: "Thanks For playing!",
  closetOpen: false,
  player: {
    currentLocation: "Entrance",
    inventory: {},
    lightSource: false
  },
  map: {
    Entrance: {
      firstVisit: true,
      displayName: "Entrance",
      description:
        "...Which is why I have locked you in my office! And you cannot leave untill you learn a bit more about me... (help: try using simple the simple commands such as 'go door' or 'look ')",
      items: {},
      exits: {
        desk: {
          displayName: "desk",
          destination: "Desk"
        },
        bookshelf: {
          displayName: "bookshelf",
          destination: "Bookshelf"
        },
        closet: {
          displayName: "closet",
          destination: "Closet"
        },
        door: {
          displayName: "door out",
          destination: "Door"
        }
      }
    },

    Desk: {
      firstVisit: true,
      displayName: "Josh's Desk",
      description:
        "You sit at Josh's desk. It has a Windows laptop running several pieces of audio software and a MacBook running several terminals of predominately javascript and react.js applications. There are several closed desk drawers.",
      interactables: {
        desk: {
          look: "It's a sturdy wooden desk!",
          take: "I don't think your pockets are big enough..."
        },
        drawer: {
          take: "Just because you can doesn't mean you should...",
          look:
            "You open the desk drawer to find a kindle! On it has a couple of coding textbooks (Python the Hard Way, FullStack React, and Data Science from Scratch). Alongside it is a Nintendo Switch with 'Splatoon 2' running."
        },
        macbook: {
          take: "Hey! Don't take my MacBook!",
          look:
            "You see several open terminals running multiple projects! They include applications using react, rails, and express. You also see Josh is hard at work learning computer science algorithms, focusing on the Udemy tutorials by Stephen Grider and the Harvard CS50 course!"
        },
        laptop: {
          take: "Hey! Don't take my laptop!",
          look:
            "There's a window of Sibelius notation software running in addition to Ableton Live, Cubase, and Audacity. On the desktop is a dizzying amount of games of too many genres to name but many are small studio, independent games."
        }
      },
      items: {
        kindle: {
          displayName: "Kindle",
          description: "Josh's kindle, which has several coding textbooks.",
          use: function() {
            return useKindle();
          },
          quantity: 1,
          hidden: true
        }
      },
      exits: {
        bookshelf: {
          displayName: "bookshelf",
          destination: "Bookshelf"
        },
        closet: {
          displayName: "closet",
          destination: "Closet"
        },
        door: {
          displayName: "door out",
          destination: "Door"
        }
      }
    },
    Bookshelf: {
      firstVisit: true,
      displayName: "Bookshelf",
      description:
        "There is a sturdy bookshelf that is absolutely overflowing. On it is hundreds of scores of music, literature, writing and research guides, some seemingly ancient Dungeons and Dragons books, and a lot of Kung-Fu dvds. There are also some impressive looking folders sitting on the top of the shelf.",
      interactables: {
        folders: {
          look:
            "When you open the folders, you see they are cases for diplomas! One is for the University of Connecticut (BA), the University of Hartford (Masters of Music), and the Univeristy of Toronto (Doctorate of Musical Arts)."
        },
        scores: {
          look: "It is literally too many scores of music to look at!"
        },
        literature: {
          look:
            "You see books ranging from modern poetry to a compliation of the Sherlock Holmes stories. You even see a couple of graphic novels!"
        },
        books: {
          look:
            "You look at the Dungeons and Dragons books and see they are really old! There is a set of the 2nd edition guides and a lot of 3rd edition as well!"
        },
        guides: {
          look:
            "You see the MLA, Chicago, and Turabian research and writing style guides. Clearly Josh knows a lot about research and writing!"
        }
      },
      items: {
        diplomas: {
          displayName: "Diplomas",
          description:
            "Josh's diplomas show his BA from Uconn, Masters from the University of Hartford, and his Doctorate from the University of Toronto.",
          use: function() {
            return readDiploma();
          },
          quantity: 1,
          hidden: true
        }
      },
      exits: {
        desk: {
          displayName: "desk",
          destination: "Desk"
        },
        closet: {
          displayName: "closet",
          destination: "Closet"
        },
        door: {
          displayName: "door out",
          destination: "Door"
        }
      }
    },

    Closet: {
      firstVisit: true,
      description:
        "You stand in front of an open closet. There is a full shelf on the top, some boxes on the bottom, and naturally a fair bit clothing.",
      interactables: {
        door: {
          look: function() {
            return handleDoor();
          }
        }
      },
      items: {},
      exits: {
        desk: {
          displayName: "desk",
          destination: "Desk"
        },
        bookshelf: {
          displayName: "bookshelf",
          destination: "Bookshelf"
        },
        door: {
          displayName: "door out",
          destination: "Door"
        }
      }
    },
    Door: {}
  }
};

// === Game Actions ===
var gameActions = {};

// === Necessary Exports ===
module.exports.gameData = gameData;
module.exports.gameActions = gameActions;

// === Helper Functions ===
function end() {
  if (gameData.player.lightSource) {
    gameData.map["End"].description = "You found more gold than you can carry.";
  } else {
    gameData.map["End"].description =
      "It is so dark, you can't see anything! You fall down an unseen crevice. Your body is never recovered.";
  }
  gameData.gameOver = true;
}

function useKindle() {
  return "Searching more on the kindle, you find a couple books related to philosophy!";
}

function readDiploma() {
  return "Reading closer, you see Josh's graduation years of 2010(BA), 2013(Masters), and 2017(Doctorate). Josh is fairly young for having a PhD equivalent education!";
}

function handleDoor() {
  return "hellooooo";
}

function checkInventory() {
  if (gameData.inventory.length === 3) {
  } else {
  }
}
